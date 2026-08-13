import { Nav } from '@/components/sections/navbar'
import { Hero } from '@/components/sections/hero'
import { Experience } from '@/components/sections/experience'
import { Projects } from '@/components/sections/projects'
import { Skills } from '@/components/sections/skills'
import { About } from '@/components/sections/about'
import { Process } from '@/components/sections/process'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'
import { CursorGlow } from '@/components/motion/cursor-glow'

export default function HomePage() {
    return (
        <>
            <CursorGlow />
            <Nav />
            <main className="bg-[#070609] text-white">
                <Hero />
                <Experience />
                <Projects />
                <Skills />
                <About />
                <Process />
                <Contact />
            </main>
            <Footer />
        </>
    )
}

