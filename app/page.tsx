import { Nav } from '@/components/sections/navbar'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import { Projects } from '@/components/sections/projects'
import { Experience } from '@/components/sections/experience'
import { Process } from '@/components/sections/process'
import { Resume } from '@/components/sections/resume'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'
import { CursorGlow } from '@/components/motion/cursor-glow'

export default function HomePage() {
    return (
        <>
            <CursorGlow />
            <Nav />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Process />
                <Resume />
                <Contact />
            </main>
            <Footer />
        </>
    )
}
