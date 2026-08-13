'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

function AvatarCharacter() {
    const groupRef = useRef<THREE.Group>(null)
    const headRef = useRef<THREE.Group>(null)

    // Smooth mouse tracking interpolation
    useFrame((state, delta) => {
        if (!groupRef.current || !headRef.current) return

        const { x, y } = state.pointer
        const targetHeadX = THREE.MathUtils.clamp(-y * 0.3, -0.3, 0.3)
        const targetHeadY = THREE.MathUtils.clamp(x * 0.4, -0.4, 0.4)

        // Head look-at rotation
        headRef.current.rotation.x = THREE.MathUtils.damp(headRef.current.rotation.x, targetHeadX, 4, delta)
        headRef.current.rotation.y = THREE.MathUtils.damp(headRef.current.rotation.y, targetHeadY, 4, delta)

        // Subtle body tilt
        groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, x * 0.1, 3, delta)
        groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, -y * 0.06, 3, delta)
    })

    return (
        <group ref={groupRef} position={[-0.4, -0.4, 0]} scale={0.95}>
            {/* HEAD GROUP */}
            <group ref={headRef} position={[0, 0.55, 0]}>
                {/* Main Head Base */}
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[0.65, 64, 64]} />
                    <meshPhysicalMaterial
                        color="#EFEFEF"
                        roughness={0.25}
                        metalness={0.05}
                        clearcoat={0.3}
                        clearcoatRoughness={0.1}
                    />
                </mesh>

                {/* Short Dark Hair */}
                <group position={[0, 0.22, -0.05]}>
                    {/* Hair Cap */}
                    <mesh position={[0, 0.35, 0]} rotation={[-0.2, 0, 0]}>
                        <sphereGeometry args={[0.64, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.55]} />
                        <meshStandardMaterial color="#111115" roughness={0.4} metalness={0.1} />
                    </mesh>
                    {/* Side locks */}
                    <mesh position={[-0.2, 0.36, 0.44]} rotation={[0.4, -0.3, -0.2]}>
                        <coneGeometry args={[0.15, 0.42, 16]} />
                        <meshStandardMaterial color="#111115" roughness={0.4} />
                    </mesh>
                    <mesh position={[0.04, 0.4, 0.47]} rotation={[0.3, 0, 0]}>
                        <coneGeometry args={[0.16, 0.46, 16]} />
                        <meshStandardMaterial color="#1B1A24" roughness={0.4} />
                    </mesh>
                    <mesh position={[0.26, 0.34, 0.4]} rotation={[0.35, 0.2, 0.3]}>
                        <coneGeometry args={[0.13, 0.38, 16]} />
                        <meshStandardMaterial color="#111115" roughness={0.4} />
                    </mesh>
                </group>

                {/* EYES (Sleepy / Confident Almond Eyes) */}
                <group position={[0, 0.04, 0.57]}>
                    {/* Left Eye */}
                    <group position={[-0.2, 0, 0]}>
                        <mesh rotation={[0, 0, -0.08]}>
                            <capsuleGeometry args={[0.04, 0.1, 16, 16]} />
                            <meshStandardMaterial color="#0A0812" roughness={0.1} />
                        </mesh>
                        <mesh position={[0.015, 0.015, 0.035]}>
                            <sphereGeometry args={[0.018, 16, 16]} />
                            <meshBasicMaterial color="#B84CFF" />
                        </mesh>
                    </group>

                    {/* Right Eye */}
                    <group position={[0.2, 0, 0]}>
                        <mesh rotation={[0, 0, 0.08]}>
                            <capsuleGeometry args={[0.04, 0.1, 16, 16]} />
                            <meshStandardMaterial color="#0A0812" roughness={0.1} />
                        </mesh>
                        <mesh position={[-0.015, 0.015, 0.035]}>
                            <sphereGeometry args={[0.018, 16, 16]} />
                            <meshBasicMaterial color="#B84CFF" />
                        </mesh>
                    </group>

                    {/* Subtle Smile Line */}
                    <mesh position={[0, -0.18, -0.03]} rotation={[0, 0, 0]}>
                        <torusGeometry args={[0.075, 0.01, 16, 32, Math.PI * 0.8]} />
                        <meshStandardMaterial color="#6E6280" roughness={0.3} />
                    </mesh>
                </group>

                {/* Ears */}
                <mesh position={[-0.68, 0, 0]} rotation={[0, 0, 0.3]}>
                    <sphereGeometry args={[0.16, 16, 16]} />
                    <meshPhysicalMaterial color="#EFEFEF" roughness={0.3} />
                </mesh>
                <mesh position={[0.68, 0, 0]} rotation={[0, 0, -0.3]}>
                    <sphereGeometry args={[0.16, 16, 16]} />
                    <meshPhysicalMaterial color="#EFEFEF" roughness={0.3} />
                </mesh>
            </group>

            {/* TORSO / BUST */}
            <group position={[0, -0.65, 0]}>
                {/* Neck */}
                <mesh position={[0, 0.72, 0]}>
                    <cylinderGeometry args={[0.18, 0.22, 0.3, 32]} />
                    <meshPhysicalMaterial color="#EFEFEF" roughness={0.3} />
                </mesh>

                {/* Collar */}
                <mesh position={[0, 0.58, 0]} rotation={[0.2, 0, 0]}>
                    <torusGeometry args={[0.25, 0.04, 16, 32]} />
                    <meshStandardMaterial color="#FFFFFF" roughness={0.2} />
                </mesh>

                {/* Main Upper Torso */}
                <mesh position={[0, 0.15, 0]}>
                    <cylinderGeometry args={[0.54, 0.46, 0.85, 32]} />
                    <meshPhysicalMaterial color="#EAEAEA" roughness={0.3} metalness={0.05} />
                </mesh>

                {/* Shoulders */}
                <mesh position={[-0.55, 0.38, 0]} rotation={[0, 0, -0.2]}>
                    <sphereGeometry args={[0.24, 32, 32]} />
                    <meshPhysicalMaterial color="#EAEAEA" roughness={0.3} />
                </mesh>
                <mesh position={[0.55, 0.38, 0]} rotation={[0, 0, 0.2]}>
                    <sphereGeometry args={[0.24, 32, 32]} />
                    <meshPhysicalMaterial color="#EAEAEA" roughness={0.3} />
                </mesh>
            </group>
        </group>
    )
}

function GlowingPurpleOrb() {
    const orbRef = useRef<THREE.Mesh>(null)

    useFrame((state) => {
        if (orbRef.current) {
            orbRef.current.position.y = -0.1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.06
        }
    })

    return (
        <group position={[-0.4, 0.1, -1.5]}>
            <mesh ref={orbRef}>
                <sphereGeometry args={[0.7, 64, 64]} />
                <meshStandardMaterial
                    color="#5A189A"
                    emissive="#B84CFF"
                    emissiveIntensity={2.5}
                    roughness={0.2}
                    transparent
                    opacity={0.7}
                />
            </mesh>
            <pointLight position={[0, 0, 1]} color="#B84CFF" intensity={3.5} distance={7} />
        </group>
    )
}

export function HeroAvatarScene() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="h-full w-full relative">
            <Canvas
                camera={{ position: [0, 0, 4.6], fov: 38 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
                className="w-full h-full"
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[3, 5, 4]} intensity={1.8} color="#FFFFFF" />
                <directionalLight position={[-4, 2, -2]} intensity={2.5} color="#B84CFF" />
                <directionalLight position={[0, -3, 2]} intensity={1.2} color="#5A189A" />

                <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.25}>
                    <AvatarCharacter />
                </Float>

                <GlowingPurpleOrb />
            </Canvas>
        </div>
    )
}


