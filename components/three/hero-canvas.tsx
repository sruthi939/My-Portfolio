'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Float, Icosahedron, Torus } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function CoreObject() {
    const group = useRef<THREE.Group>(null)
    const wire = useRef<THREE.LineSegments>(null)
    const { pointer } = useThree()

    useFrame((state, delta) => {
        if (!group.current) return
        // Slow idle rotation
        group.current.rotation.y += delta * 0.18
        // Subtle mouse reactivity
        const targetX = pointer.y * 0.25
        const targetY = pointer.x * 0.4
        group.current.rotation.x = THREE.MathUtils.lerp(
            group.current.rotation.x,
            targetX,
            0.05,
        )
        group.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.08
        if (wire.current) wire.current.rotation.z -= delta * 0.1
    })

    const wireGeo = useMemo(
        () => new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.55, 1)),
        [],
    )

    return (
        <group ref={group}>
            {/* Inner glassy core */}
            <Icosahedron args={[1.15, 1]}>
                <meshPhysicalMaterial
                    color="#6f7dff"
                    roughness={0.08}
                    metalness={0.2}
                    transmission={0.85}
                    thickness={1.4}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    ior={1.35}
                    emissive="#3346ff"
                    emissiveIntensity={0.18}
                />
            </Icosahedron>

            {/* Outer wireframe shell */}
            <lineSegments ref={wire} geometry={wireGeo}>
                <lineBasicMaterial color="#b7a6ff" transparent opacity={0.5} />
            </lineSegments>

            {/* Orbiting ring */}
            <Torus args={[2.1, 0.02, 16, 120]} rotation={[Math.PI / 2.4, 0.4, 0]}>
                <meshStandardMaterial
                    color="#7aa2ff"
                    emissive="#4c6bff"
                    emissiveIntensity={0.6}
                    roughness={0.3}
                />
            </Torus>
        </group>
    )
}

function Particles({ count = 140 }: { count?: number }) {
    const ref = useRef<THREE.Points>(null)
    const positions = useMemo(() => {
        const arr = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            const r = 3 + Math.random() * 3
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos(2 * Math.random() - 1)
            arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
            arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
            arr[i * 3 + 2] = r * Math.cos(phi)
        }
        return arr
    }, [count])

    useFrame((_, delta) => {
        if (ref.current) ref.current.rotation.y += delta * 0.03
    })

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.035}
                color="#c9b8ff"
                transparent
                opacity={0.7}
                sizeAttenuation
            />
        </points>
    )
}

function Rig() {
    const { camera, pointer } = useThree()
    useFrame(() => {
        camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.6, 0.04)
        camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.4, 0.04)
        camera.lookAt(0, 0, 0)
    })
    return null
}

export default function HeroCanvas() {
    return (
        <Canvas
            camera={{ position: [0, 0, 6], fov: 42 }}
            dpr={[1, 1.75]}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[4, 5, 3]} intensity={1.6} color="#dfe6ff" />
            <pointLight position={[-4, -2, -3]} intensity={2} color="#8b6bff" />
            <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.7}>
                <CoreObject />
            </Float>
            <Particles />
            <Environment preset="night" />
            <Rig />
        </Canvas>
    )
}
