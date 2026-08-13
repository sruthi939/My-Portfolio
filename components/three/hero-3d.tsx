'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { useMediaQuery, usePrefersReducedMotion } from '@/lib/use-media-query'

const HeroCanvas = dynamic(() => import('./hero-canvas'), {
    ssr: false,
    loading: () => <SceneFallback pulse />,
})

function SceneFallback({ pulse = false }: { pulse?: boolean }) {
    return (
        <div className="relative flex h-full w-full items-center justify-center">
            <div
                className={`h-48 w-48 rounded-full bg-gradient-to-br from-primary/40 via-accent/30 to-transparent blur-2xl ${pulse ? 'animate-pulse' : ''
                    }`}
            />
            <div className="absolute h-40 w-40 rounded-full border border-accent/30" />
            <div className="absolute h-56 w-56 animate-spin rounded-full border border-primary/20 [animation-duration:14s]" />
        </div>
    )
}

export function Hero3D() {
    const isDesktop = useMediaQuery('(min-width: 768px)')
    const reduced = usePrefersReducedMotion()

    // Lightweight fallback on mobile or when reduced motion is requested.
    if (!isDesktop || reduced) {
        return (
            <div className="relative flex h-full w-full items-center justify-center">
                <div className="h-52 w-52 rounded-full bg-gradient-to-br from-primary/40 via-accent/30 to-transparent blur-2xl" />
                <div className="absolute h-44 w-44 rounded-full border border-accent/30" />
                <div className="absolute h-64 w-64 rounded-full border border-primary/20" />
                <div className="absolute h-32 w-32 rounded-full bg-primary/10 backdrop-blur-sm" />
            </div>
        )
    }

    return (
        <Suspense fallback={<SceneFallback pulse />}>
            <HeroCanvas />
        </Suspense>
    )
}
