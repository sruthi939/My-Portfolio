import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
    display: 'swap',
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: 'Sruthi Alex — UI/UX Designer & Frontend Developer',
        template: '%s — Sruthi Alex',
    },
    description:
        'Sruthi Alex is a UI/UX Designer and Frontend Developer based in Kerala, India. Designing intuitive digital experiences and building fast, responsive, beautiful web applications.',
    keywords: [
        'Sruthi Alex',
        'UI/UX Designer',
        'Frontend Developer',
        'Product Designer',
        'Design Engineer',
        'React',
        'Next.js',
        'Portfolio',
        'Kerala',
    ],
    authors: [{ name: 'Sruthi Alex' }],
    creator: 'Sruthi Alex',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: SITE_URL,
        title: 'Sruthi Alex — UI/UX Designer & Frontend Developer',
        description:
            'Designing experiences. Building the web. A portfolio by Sruthi Alex, UI/UX Designer & Frontend Developer from Kerala, India.',
        siteName: 'Sruthi Alex',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sruthi Alex — UI/UX Designer & Frontend Developer',
        description:
            'Designing experiences. Building the web. Portfolio of Sruthi Alex.',
    },
}

export const viewport: Viewport = {
    colorScheme: 'dark',
    themeColor: '#0a0a0f',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            className={`dark ${inter.variable} ${spaceGrotesk.variable} bg-background`}
        >
            <body className="antialiased">
                {children}
            </body>
        </html>
    )
}

