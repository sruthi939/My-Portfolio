'use client'

import { useEffect, useRef, useState } from 'react'

type CountUpProps = {
    to: number
    suffix?: string
    duration?: number
    className?: string
}

export function CountUp({
    to,
    suffix = '',
    duration = 1600,
    className,
}: CountUpProps) {
    const [value, setValue] = useState(0)
    const ref = useRef<HTMLSpanElement>(null)
    const started = useRef(false)

    useEffect(() => {
        const node = ref.current
        if (!node) return

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !started.current) {
                    started.current = true
                    const start = performance.now()
                    const tick = (now: number) => {
                        const progress = Math.min((now - start) / duration, 1)
                        // easeOutExpo
                        const eased =
                            progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
                        setValue(Math.round(eased * to))
                        if (progress < 1) requestAnimationFrame(tick)
                    }
                    requestAnimationFrame(tick)
                }
            },
            { threshold: 0.4 },
        )

        observer.observe(node)
        return () => observer.disconnect()
    }, [to, duration])

    return (
        <span ref={ref} className={className}>
            {value}
            {suffix}
        </span>
    )
}
