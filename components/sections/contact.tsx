'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Send } from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'
import { SocialLinks } from '@/components/sections/social-links'
import { site } from '@/lib/site'

type Errors = { name?: string; email?: string; message?: string }

export function Contact() {
    const [values, setValues] = useState({ name: '', email: '', message: '' })
    const [errors, setErrors] = useState<Errors>({})
    const [sent, setSent] = useState(false)

    function validate(): boolean {
        const next: Errors = {}
        if (!values.name.trim()) next.name = 'Please enter your name.'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
            next.email = 'Please enter a valid email.'
        if (values.message.trim().length < 10)
            next.message = 'Tell me a little more (10+ characters).'
        setErrors(next)
        return Object.keys(next).length === 0
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!validate()) return
        // UI-only: show a success state without sending anything yet.
        setSent(true)
    }

    return (
        <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
            {/* Animated glowing orb background */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.75, 0.5] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="h-[380px] w-[380px] rounded-full bg-primary/20 blur-[120px]"
                />
                <motion.div
                    animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.65, 0.4] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute h-[300px] w-[300px] translate-x-32 rounded-full bg-accent/20 blur-[120px]"
                />
            </div>

            <div className="relative mx-auto max-w-3xl px-5 text-center">
                <Reveal>
                    <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-primary">
                        06 — Contact
                    </p>
                    <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
                        Let&apos;s build something meaningful.
                    </h2>
                    <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                        Have a role, a project or an idea in mind? I&apos;d love to hear
                        about it.
                    </p>
                </Reveal>

                <Reveal delay={0.1}>
                    <div className="glass mt-10 rounded-3xl border border-border p-6 text-left sm:p-8">
                        {sent ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center gap-4 py-10 text-center"
                            >
                                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                                    <Check size={26} />
                                </span>
                                <h3 className="font-display text-xl font-semibold">
                                    Thanks, {values.name.split(' ')[0] || 'there'}!
                                </h3>
                                <p className="max-w-sm text-muted-foreground">
                                    Your message is ready to send. I&apos;ll get back to you as soon
                                    as I can.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setSent(false)
                                        setValues({ name: '', email: '', message: '' })
                                    }}
                                    className="mt-2 text-sm text-primary hover:text-accent"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate className="space-y-5">
                                <Field
                                    id="name"
                                    label="Name"
                                    value={values.name}
                                    error={errors.name}
                                    onChange={(v) => setValues((s) => ({ ...s, name: v }))}
                                    placeholder="Your name"
                                />
                                <Field
                                    id="email"
                                    label="Email"
                                    type="email"
                                    value={values.email}
                                    error={errors.email}
                                    onChange={(v) => setValues((s) => ({ ...s, email: v }))}
                                    placeholder="you@example.com"
                                />
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="mb-2 block text-sm font-medium text-foreground"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        value={values.message}
                                        onChange={(e) =>
                                            setValues((s) => ({ ...s, message: e.target.value }))
                                        }
                                        placeholder="Tell me about your project or role…"
                                        aria-invalid={!!errors.message}
                                        className="w-full resize-none rounded-xl border border-input bg-background/60 px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60"
                                    />
                                    {errors.message && (
                                        <p className="mt-1.5 text-sm text-destructive">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.01] active:scale-[0.99] sm:w-auto"
                                >
                                    <Send size={16} />
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>
                </Reveal>

                <Reveal delay={0.2}>
                    <div className="mt-8 flex flex-col items-center gap-4">
                        <a
                            href={`mailto:${site.email}`}
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {site.email}
                        </a>
                        <SocialLinks className="justify-center" />
                    </div>
                </Reveal>
            </div>
        </section>
    )
}

function Field({
    id,
    label,
    value,
    onChange,
    error,
    type = 'text',
    placeholder,
}: {
    id: string
    label: string
    value: string
    onChange: (v: string) => void
    error?: string
    type?: string
    placeholder?: string
}) {
    return (
        <div>
            <label htmlFor={id} className="mb-2 block text-sm font-medium text-foreground">
                {label}
            </label>
            <input
                id={id}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                aria-invalid={!!error}
                className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60"
            />
            {error && <p className="mt-1.5 text-sm text-destructive">{error}</p>}
        </div>
    )
}
