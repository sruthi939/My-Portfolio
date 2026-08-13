'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Html, Text } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'
import { techStackList } from '@/lib/site'

type TechItem = typeof techStackList[0]

function TechTile({ item, position }: { item: TechItem; position: [number, number, number] }) {
    const meshRef = useRef<THREE.Group>(null)
    const [hovered, setHovered] = useState(false)

    useFrame((state, delta) => {
        if (!meshRef.current) return
        const targetZ = position[2] + (hovered ? 0.8 : 0)
        const targetScale = hovered ? 1.2 : 1.0

        meshRef.current.position.z = THREE.MathUtils.damp(meshRef.current.position.z, targetZ, 6, delta)
        meshRef.current.scale.x = THREE.MathUtils.damp(meshRef.current.scale.x, targetScale, 6, delta)
        meshRef.current.scale.y = THREE.MathUtils.damp(meshRef.current.scale.y, targetScale, 6, delta)
        meshRef.current.scale.z = THREE.MathUtils.damp(meshRef.current.scale.z, targetScale, 6, delta)
    })

    return (
        <group
            ref={meshRef}
            position={position}
            onPointerOver={(e) => {
                e.stopPropagation()
                setHovered(true)
            }}
            onPointerOut={() => setHovered(false)}
        >
            {/* Glass / Metallic Rounded Tile Box */}
            <mesh>
                <boxGeometry args={[1.6, 0.7, 0.12]} />
                <meshPhysicalMaterial
                    color={hovered ? '#1E1433' : '#0F0D15'}
                    roughness={0.2}
                    metalness={0.5}
                    transmission={0.4}
                    thickness={0.2}
                    clearcoat={0.6}
                    emissive={hovered ? item.color : '#000000'}
                    emissiveIntensity={hovered ? 0.6 : 0}
                />
            </mesh>

            {/* Glowing Accent Border Lines */}
            <mesh position={[0, 0, 0.07]}>
                <planeGeometry args={[1.56, 0.66]} />
                <meshBasicMaterial
                    color={hovered ? item.color : 'rgba(184, 76, 255, 0.25)'}
                    transparent
                    opacity={hovered ? 0.9 : 0.3}
                    wireframe
                />
            </mesh>

            {/* 3D Text Label */}
            <Text
                position={[0, 0, 0.08]}
                fontSize={0.2}
                color={hovered ? '#FFFFFF' : '#D66BFF'}
                anchorX="center"
                anchorY="middle"
                font="/fonts/Inter-Bold.ttf"
            >
                {item.name}
            </Text>

            {/* Interactive Tooltip Overlay on Hover */}
            {hovered && (
                <Html position={[0, -0.6, 0.2]} center distanceFactor={8}>
                    <div className="pointer-events-none rounded-lg border border-accent/40 bg-[#070609]/90 px-3 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(184,76,255,0.5)]">
                        <p className="font-mono text-[10px] font-bold text-accent uppercase tracking-wider">
                            {item.category} &bull; {item.level}
                        </p>
                    </div>
                </Html>
            )}

            {/* Hover Spotlight Glow */}
            {hovered && <pointLight position={[0, 0, 0.5]} color={item.color} intensity={2.5} distance={3} />}
        </group>
    )
}

function ConstellationCloud() {
    const cloudGroup = useRef<THREE.Group>(null)

    useFrame((state) => {
        if (cloudGroup.current) {
            cloudGroup.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.15
            cloudGroup.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.15) * 0.08
        }
    })

    // Calculate constellation grid positions across 3 depth layers
    const positions: [number, number, number][] = [
        // Front Layer
        [-3.2, 1.8, 0.6],
        [-1.1, 1.9, 0.8],
        [1.1, 1.8, 0.6],
        [3.2, 1.9, 0.8],

        // Middle Layer
        [-4.2, 0.6, 0.2],
        [-2.1, 0.7, 0.3],
        [0, 0.8, 0.4],
        [2.1, 0.7, 0.3],
        [4.2, 0.6, 0.2],

        // Lower Middle Layer
        [-3.2, -0.5, 0.5],
        [-1.1, -0.4, 0.7],
        [1.1, -0.4, 0.7],
        [3.2, -0.5, 0.5],

        // Back Layer
        [-4.2, -1.7, -0.2],
        [-2.1, -1.6, -0.1],
        [0, -1.5, 0.1],
        [2.1, -1.6, -0.1],
        [4.2, -1.7, -0.2],
        [-1.1, -2.6, 0.3],
        [1.1, -2.6, 0.3],
    ]

    return (
        <group ref={cloudGroup}>
            {techStackList.map((item, index) => {
                const pos = positions[index % positions.length]
                return (
                    <Float key={item.name} speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
                        <TechTile item={item} position={pos} />
                    </Float>
                )
            })}
        </group>
    )
}

export function TechStack3D() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="relative h-[650px] w-full">
            {/* Atmospheric Background Purple Light Spill */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="h-[450px] w-[650px] rounded-full bg-accent/15 blur-[150px]" />
            </div>

            <Canvas
                camera={{ position: [0, 0, 7.5], fov: 48 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
                className="w-full h-full"
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[0, 0, 5]} color="#B84CFF" intensity={3} />
                <directionalLight position={[4, 5, 4]} color="#FFFFFF" intensity={1.5} />

                <ConstellationCloud />
            </Canvas>
        </div>
    )
}
