'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshWobbleMaterial, Sphere } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

function AvatarCharacter() {
    const groupRef = useRef<THREE.Group>(null)
    const headRef = useRef<THREE.Group>(null)
    const leftEyeRef = useRef<THREE.Mesh>(null)
    const rightEyeRef = useRef<THREE.Mesh>(null)

    // Smooth mouse tracking interpolation
    useFrame((state, delta) => {
        if (!groupRef.current || !headRef.current) return

        const { x, y } = state.pointer
        const targetHeadX = THREE.MathUtils.clamp(-y * 0.4, -0.4, 0.4)
        const targetHeadY = THREE.MathUtils.clamp(x * 0.5, -0.5, 0.5)

        // Head look-at rotation
        headRef.current.rotation.x = THREE.MathUtils.damp(headRef.current.rotation.x, targetHeadX, 4, delta)
        headRef.current.rotation.y = THREE.MathUtils.damp(headRef.current.rotation.y, targetHeadY, 4, delta)

        // Subtle body tilt
        groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, x * 0.15, 3, delta)
        groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, -y * 0.1, 3, delta)
    })

    return (
        <group ref={groupRef} position={[0, -0.2, 0]}>
            {/* HEAD GROUP */}
            <group ref={headRef} position={[0, 1.15, 0]}>
                {/* Main Head Base */}
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[0.78, 64, 64]} />
                    <meshPhysicalMaterial
                        color="#FAFAFD"
                        roughness={0.25}
                        metalness={0.05}
                        clearcoat={0.3}
                        clearcoatRoughness={0.1}
                    />
                </mesh>

                {/* Stylized Short Dark/Purple Hair */}
                <group position={[0, 0.28, -0.05]}>
                    {/* Top Hair Cap */}
                    <mesh position={[0, 0.4, 0]} rotation={[-0.2, 0, 0]}>
                        <sphereGeometry args={[0.77, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.55]} />
                        <meshStandardMaterial color="#1E1035" roughness={0.4} metalness={0.2} />
                    </mesh>

                    {/* Front Bang Locks */}
                    <mesh position={[-0.25, 0.42, 0.52]} rotation={[0.4, -0.3, -0.2]}>
                        <coneGeometry args={[0.18, 0.5, 16]} />
                        <meshStandardMaterial color="#2B154D" roughness={0.3} />
                    </mesh>
                    <mesh position={[0.05, 0.46, 0.56]} rotation={[0.3, 0, 0]}>
                        <coneGeometry args={[0.2, 0.55, 16]} />
                        <meshStandardMaterial color="#3A1B68" roughness={0.3} />
                    </mesh>
                    <mesh position={[0.32, 0.4, 0.48]} rotation={[0.35, 0.2, 0.3]}>
                        <coneGeometry args={[0.16, 0.45, 16]} />
                        <meshStandardMaterial color="#2B154D" roughness={0.3} />
                    </mesh>
                </group>

                {/* EYES (Sleepy / Confident Almond Eyes) */}
                <group position={[0, 0.05, 0.68]}>
                    {/* Left Eye */}
                    <group position={[-0.24, 0, 0]}>
                        <mesh ref={leftEyeRef} rotation={[0, 0, -0.08]}>
                            <capsuleGeometry args={[0.05, 0.12, 16, 16]} />
                            <meshStandardMaterial color="#120A21" roughness={0.1} />
                        </mesh>
                        {/* Purple eye reflection highlight */}
                        <mesh position={[0.02, 0.02, 0.04]}>
                            <sphereGeometry args={[0.022, 16, 16]} />
                            <meshBasicMaterial color="#D66BFF" />
                        </mesh>
                    </group>

                    {/* Right Eye */}
                    <group position={[0.24, 0, 0]}>
                        <mesh ref={rightEyeRef} rotation={[0, 0, 0.08]}>
                            <capsuleGeometry args={[0.05, 0.12, 16, 16]} />
                            <meshStandardMaterial color="#120A21" roughness={0.1} />
                        </mesh>
                        {/* Purple eye reflection highlight */}
                        <mesh position={[-0.02, 0.02, 0.04]}>
                            <sphereGeometry args={[0.022, 16, 16]} />
                            <meshBasicMaterial color="#D66BFF" />
                        </mesh>
                    </group>

                    {/* Subtle Smile Line */}
                    <mesh position={[0, -0.22, -0.04]} rotation={[0, 0, 0]}>
                        <torusGeometry args={[0.09, 0.012, 16, 32, Math.PI * 0.8]} />
                        <meshStandardMaterial color="#8C7A9E" roughness={0.3} />
                    </mesh>
                </group>

                {/* HEADPHONES */}
                <group position={[0, 0.05, 0]}>
                    {/* Headphone Band */}
                    <mesh rotation={[0, 0, 0]} position={[0, 0.55, 0]}>
                        <torusGeometry args={[0.82, 0.06, 16, 64, Math.PI]} />
                        <meshPhysicalMaterial color="#0F0D15" roughness={0.2} metalness={0.8} />
                    </mesh>

                    {/* Left Ear Cup */}
                    <group position={[-0.82, 0, 0]} rotation={[0, 0, 1.57]}>
                        <mesh>
                            <cylinderGeometry args={[0.26, 0.28, 0.18, 32]} />
                            <meshPhysicalMaterial color="#1A1526" roughness={0.2} metalness={0.6} />
                        </mesh>
                        {/* Glowing LED Ring */}
                        <mesh position={[0, 0.1, 0]}>
                            <torusGeometry args={[0.2, 0.025, 16, 32]} />
                            <meshBasicMaterial color="#B84CFF" />
                        </mesh>
                    </group>

                    {/* Right Ear Cup */}
                    <group position={[0.82, 0, 0]} rotation={[0, 0, -1.57]}>
                        <mesh>
                            <cylinderGeometry args={[0.26, 0.28, 0.18, 32]} />
                            <meshPhysicalMaterial color="#1A1526" roughness={0.2} metalness={0.6} />
                        </mesh>
                        {/* Glowing LED Ring */}
                        <mesh position={[0, 0.1, 0]}>
                            <torusGeometry args={[0.2, 0.025, 16, 32]} />
                            <meshBasicMaterial color="#B84CFF" />
                        </mesh>
                    </group>
                </group>
            </group>

            {/* TORSO / FUTURISTIC BODY */}
            <group position={[0, -0.35, 0]}>
                {/* Neck */}
                <mesh position={[0, 0.95, 0]}>
                    <cylinderGeometry args={[0.22, 0.26, 0.35, 32]} />
                    <meshPhysicalMaterial color="#F5F5FA" roughness={0.3} />
                </mesh>

                {/* Main Shirt / Upper Torso */}
                <mesh position={[0, 0.35, 0]}>
                    <cylinderGeometry args={[0.65, 0.55, 0.95, 32]} />
                    <meshPhysicalMaterial color="#FFFFFF" roughness={0.2} metalness={0.05} />
                </mesh>

                {/* Futuristic Jacket Collar */}
                <mesh position={[0, 0.78, 0.02]} rotation={[0.4, 0, 0]}>
                    <torusGeometry args={[0.38, 0.08, 16, 32, Math.PI * 1.2]} />
                    <meshStandardMaterial color="#1E172E" roughness={0.3} />
                </mesh>

                {/* Shoulders */}
                <mesh position={[-0.65, 0.6, 0]} rotation={[0, 0, -0.3]}>
                    <sphereGeometry args={[0.28, 32, 32]} />
                    <meshPhysicalMaterial color="#FFFFFF" roughness={0.2} />
                </mesh>
                <mesh position={[0.65, 0.6, 0]} rotation={[0, 0, 0.3]}>
                    <sphereGeometry args={[0.28, 32, 32]} />
                    <meshPhysicalMaterial color="#FFFFFF" roughness={0.2} />
                </mesh>
            </group>
        </group>
    )
}

function GlowingPurpleOrb() {
    const orbRef = useRef<THREE.Mesh>(null)
    const lightRef = useRef<THREE.PointLight>(null)

    useFrame((state) => {
        if (orbRef.current) {
            orbRef.current.position.y = -1.6 + Math.sin(state.clock.elapsedTime * 0.8) * 0.12
        }
        if (lightRef.current) {
            lightRef.current.intensity = 4 + Math.sin(state.clock.elapsedTime * 1.5) * 1
        }
    })

    return (
        <group position={[0, 0, -1.2]}>
            {/* Glowing Mesh Orb */}
            <mesh ref={orbRef} position={[0, -1.6, 0]}>
                <sphereGeometry args={[2.2, 64, 64]} />
                <meshStandardMaterial
                    color="#5A189A"
                    emissive="#B84CFF"
                    emissiveIntensity={1.8}
                    roughness={0.2}
                />
            </mesh>

            {/* Main Volumetric Purple PointLight */}
            <pointLight ref={lightRef} position={[0, -1, 1]} color="#B84CFF" intensity={4} distance={10} />
            <pointLight position={[0, 2, -1]} color="#D66BFF" intensity={2} distance={8} />
        </group>
    )
}

function FloatingParticles() {
    const count = 35
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 12
        positions[i + 1] = (Math.random() - 0.5) * 10
        positions[i + 2] = (Math.random() - 0.5) * 6
    }

    const pointsRef = useRef<THREE.Points>(null)

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03
            pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.05
        }
    })

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.06}
                color="#D66BFF"
                transparent
                opacity={0.6}
                blending={THREE.AdditiveBlending}
            />
        </points>
    )
}

export function HeroAvatarScene() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="flex h-full w-full items-center justify-center">
                <div className="h-32 w-32 rounded-full bg-accent/20 blur-2xl animate-pulse" />
            </div>
        )
    }

    return (
        <div className="h-full w-full relative">
            <Canvas
                camera={{ position: [0, 0.4, 5.2], fov: 42 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
                className="w-full h-full"
            >
                {/* Lighting Rig */}
                <ambientLight intensity={0.4} />
                <directionalLight position={[3, 5, 4]} intensity={1.8} color="#FFFFFF" />
                <directionalLight position={[-4, 2, -2]} intensity={2.5} color="#B84CFF" />
                <directionalLight position={[0, -3, 2]} intensity={1.2} color="#5A189A" />

                {/* Floating Avatar & Purple Orb */}
                <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.4}>
                    <AvatarCharacter />
                </Float>

                <GlowingPurpleOrb />
                <FloatingParticles />
            </Canvas>
        </div>
    )
}
