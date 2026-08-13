'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

function CharacterAtDesk() {
    const characterRef = useRef<THREE.Group>(null)

    useFrame((state) => {
        if (characterRef.current) {
            characterRef.current.position.y = -0.3 + Math.sin(state.clock.elapsedTime * 1.2) * 0.02
        }
    })

    return (
        <group ref={characterRef} position={[-0.2, -0.3, 0]} rotation={[0, 0.4, 0]}>
            {/* DESK */}
            <group position={[0, -0.8, 0]}>
                {/* Tabletop */}
                <mesh position={[0, 0.6, 0.2]}>
                    <boxGeometry args={[2.2, 0.08, 1.2]} />
                    <meshStandardMaterial color="#1E1C26" roughness={0.3} metalness={0.5} />
                </mesh>

                {/* Desk Legs */}
                <mesh position={[-0.95, 0.1, 0.6]}>
                    <boxGeometry args={[0.06, 1.0, 0.06]} />
                    <meshStandardMaterial color="#0F0D15" roughness={0.4} />
                </mesh>
                <mesh position={[0.95, 0.1, 0.6]}>
                    <boxGeometry args={[0.06, 1.0, 0.06]} />
                    <meshStandardMaterial color="#0F0D15" roughness={0.4} />
                </mesh>
                <mesh position={[-0.95, 0.1, -0.2]}>
                    <boxGeometry args={[0.06, 1.0, 0.06]} />
                    <meshStandardMaterial color="#0F0D15" roughness={0.4} />
                </mesh>
                <mesh position={[0.95, 0.1, -0.2]}>
                    <boxGeometry args={[0.06, 1.0, 0.06]} />
                    <meshStandardMaterial color="#0F0D15" roughness={0.4} />
                </mesh>

                {/* COMPUTER MONITOR */}
                <group position={[0.1, 0.64, -0.1]}>
                    {/* Stand Base */}
                    <mesh position={[0, 0.02, 0]}>
                        <cylinderGeometry args={[0.16, 0.18, 0.03, 32]} />
                        <meshStandardMaterial color="#120A21" roughness={0.2} metalness={0.8} />
                    </mesh>
                    {/* Stand Stem */}
                    <mesh position={[0, 0.22, 0]}>
                        <boxGeometry args={[0.06, 0.38, 0.06]} />
                        <meshStandardMaterial color="#120A21" roughness={0.2} metalness={0.8} />
                    </mesh>
                    {/* Monitor Frame */}
                    <mesh position={[0, 0.6, 0]}>
                        <boxGeometry args={[1.3, 0.85, 0.06]} />
                        <meshStandardMaterial color="#0F0D15" roughness={0.2} metalness={0.8} />
                    </mesh>
                    {/* Monitor Screen (Glowing Purple Display) */}
                    <mesh position={[0, 0.6, 0.035]}>
                        <planeGeometry args={[1.22, 0.78]} />
                        <meshBasicMaterial color="#5A189A" />
                    </mesh>
                    {/* Screen Light Glow Spill */}
                    <pointLight position={[0, 0.6, 0.3]} color="#B84CFF" intensity={2.5} distance={3.5} />
                </group>

                {/* KEYBOARD */}
                <mesh position={[0.1, 0.65, 0.35]}>
                    <boxGeometry args={[0.65, 0.02, 0.22]} />
                    <meshStandardMaterial color="#111116" roughness={0.4} />
                </mesh>
            </group>

            {/* AVATAR CHARACTER (SITTING) */}
            <group position={[-0.3, -0.15, 0.6]} rotation={[0, 0.2, 0]}>
                {/* Head */}
                <group position={[0, 0.65, 0]}>
                    <mesh>
                        <sphereGeometry args={[0.38, 32, 32]} />
                        <meshPhysicalMaterial color="#EFEFEF" roughness={0.3} />
                    </mesh>
                    {/* Hair */}
                    <mesh position={[0, 0.15, -0.02]} rotation={[-0.2, 0, 0]}>
                        <sphereGeometry args={[0.37, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.55]} />
                        <meshStandardMaterial color="#111115" roughness={0.4} />
                    </mesh>
                    {/* Sleepy Eyes */}
                    <mesh position={[-0.12, 0.02, 0.34]} rotation={[0, 0, -0.1]}>
                        <capsuleGeometry args={[0.025, 0.06, 16, 16]} />
                        <meshStandardMaterial color="#0A0812" />
                    </mesh>
                    <mesh position={[0.12, 0.02, 0.34]} rotation={[0, 0, 0.1]}>
                        <capsuleGeometry args={[0.025, 0.06, 16, 16]} />
                        <meshStandardMaterial color="#0A0812" />
                    </mesh>
                </group>

                {/* Torso */}
                <mesh position={[0, 0.05, 0]}>
                    <cylinderGeometry args={[0.32, 0.28, 0.65, 32]} />
                    <meshPhysicalMaterial color="#EAEAEA" roughness={0.3} />
                </mesh>

                {/* Arms Typing */}
                <mesh position={[0.2, 0.1, 0.22]} rotation={[0.8, -0.3, 0]}>
                    <capsuleGeometry args={[0.06, 0.35, 16, 16]} />
                    <meshPhysicalMaterial color="#EAEAEA" roughness={0.3} />
                </mesh>
                <mesh position={[-0.1, 0.1, 0.22]} rotation={[0.8, 0.2, 0]}>
                    <capsuleGeometry args={[0.06, 0.35, 16, 16]} />
                    <meshPhysicalMaterial color="#EAEAEA" roughness={0.3} />
                </mesh>
            </group>
        </group>
    )
}

export function CharacterDeskScene() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="h-full w-full relative">
            <Canvas
                camera={{ position: [0, 0, 4.2], fov: 42 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
                className="w-full h-full"
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[3, 5, 4]} intensity={1.8} color="#FFFFFF" />
                <directionalLight position={[-4, 2, -2]} intensity={2.5} color="#B84CFF" />

                <Float speed={1.2} rotationIntensity={0.05} floatIntensity={0.15}>
                    <CharacterAtDesk />
                </Float>
            </Canvas>
        </div>
    )
}
