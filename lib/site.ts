export const site = {
    name: 'Sruthi Alex',
    role: 'UI/UX Designer & Frontend Developer',
    tagline: 'Designing experiences. Building the web.',
    location: 'Kerala, India',
    email: 'hello@sruthialex.design',
    socials: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        x: 'https://x.com',
        behance: 'https://behance.net',
    },
}

export const navItems = [
    { label: 'ABOUT', href: '#about' },
    { label: 'WORK', href: '#projects' },
    { label: 'CONTACT', href: '#contact' },
]

export const stats = [
    { label: 'Projects Completed', value: 24, suffix: '+' },
    { label: 'UI/UX Projects', value: 14, suffix: '' },
    { label: 'Frontend Projects', value: 18, suffix: '' },
    { label: 'Technologies', value: 20, suffix: '+' },
]

export const techStackList = [
    { name: 'Figma', category: 'UI/UX', level: 'Master', color: '#F24E1E' },
    { name: 'HTML', category: 'Frontend', level: 'Master', color: '#E34F26' },
    { name: 'CSS', category: 'Frontend', level: 'Master', color: '#1572B6' },
    { name: 'JavaScript', category: 'Frontend', level: 'Expert', color: '#F7DF1E' },
    { name: 'TypeScript', category: 'Frontend', level: 'Expert', color: '#3178C6' },
    { name: 'React', category: 'Frontend', level: 'Expert', color: '#61DAFB' },
    { name: 'Next.js', category: 'Frontend', level: 'Expert', color: '#FFFFFF' },
    { name: 'Tailwind CSS', category: 'Frontend', level: 'Master', color: '#06B6D4' },
    { name: 'Three.js', category: '3D/Graphics', level: 'Advanced', color: '#B84CFF' },
    { name: 'GSAP', category: 'Motion', level: 'Advanced', color: '#88CE02' },
    { name: 'Git', category: 'Tools', level: 'Expert', color: '#F05032' },
    { name: 'GitHub', category: 'Tools', level: 'Expert', color: '#FFFFFF' },
    { name: 'Node.js', category: 'Backend', level: 'Advanced', color: '#339933' },
    { name: 'MongoDB', category: 'Backend', level: 'Advanced', color: '#47A248' },
    { name: 'Express', category: 'Backend', level: 'Advanced', color: '#9D94B0' },
    { name: 'Framer Motion', category: 'Motion', level: 'Expert', color: '#0055FF' },
    { name: 'Cursor', category: 'AI Tools', level: 'Power User', color: '#D66BFF' },
    { name: 'Lovable', category: 'AI Tools', level: 'User', color: '#FF70A6' },
    { name: 'Figma Make', category: 'AI Tools', level: 'Power User', color: '#A259FF' },
    { name: 'MCP', category: 'AI Protocol', level: 'Pioneer', color: '#B84CFF' },
]

export type Project = {
    number: string
    slug: string
    name: string
    problem: string
    solution: string
    role: string
    technologies: string[]
    designTools: string[]
    liveDemo: string
    caseStudy: string
    image: string
    featured?: boolean
}

export const projects: Project[] = [
    {
        number: '01',
        slug: 'fishermen-safety',
        name: 'Smart Fishermen Safety System',
        problem:
            'Fishermen at sea face life-threatening emergencies with no reliable way to alert families or rescue teams in time.',
        solution:
            'A real-world safety platform that monitors fishermen, detects emergencies, and connects fishermen, families and rescue teams through dedicated portals.',
        role: 'Lead UI/UX Designer & Frontend Developer',
        technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Node.js'],
        designTools: ['Figma', 'Figma AI', 'Framer Motion'],
        liveDemo: '#',
        caseStudy: '/work/fishermen-safety',
        image: '/projects/fishermen-dashboard.png',
        featured: true,
    },
    {
        number: '02',
        slug: 'doctor-appointment',
        name: 'Doctor Appointment & Health Portal',
        problem:
            'Patients encounter convoluted booking flows, long wait times, and fragmented medical record access.',
        solution:
            'An intuitive, real-time medical scheduling dashboard with instant telemedicine consultations and patient records.',
        role: 'UI/UX Lead & Frontend Developer',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        designTools: ['Figma', 'Prototyping', 'Design System'],
        liveDemo: '#',
        caseStudy: '#',
        image: '/projects/finance-dashboard.png',
    },
    {
        number: '03',
        slug: 'finance-dashboard',
        name: 'Aperture Finance Dashboard',
        problem:
            'Retail investors struggle to read fragmented data across many accounts and apps.',
        solution:
            'A unified, calm analytics dashboard that turns noisy market data into clear, actionable insight.',
        role: 'Product Designer & Frontend Developer',
        technologies: ['Next.js', 'TypeScript', 'Three.js', 'Tailwind CSS'],
        designTools: ['Figma', 'Design Systems'],
        liveDemo: '#',
        caseStudy: '#',
        image: '/projects/finance-dashboard.png',
    },
    {
        number: '04',
        slug: 'commerce-storefront',
        name: 'Nova Commerce Storefront',
        problem:
            'A boutique brand needed a storefront that felt premium and converted browsers into buyers.',
        solution:
            'An immersive, fast storefront with cinematic product moments and a friction-free checkout.',
        role: 'Frontend Developer & UI Designer',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP'],
        designTools: ['Figma', 'Design Systems'],
        liveDemo: '#',
        caseStudy: '#',
        image: '/projects/commerce-storefront.png',
    },
]

export const experience = [
    {
        kind: 'Education',
        title: 'B.Tech, Computer Science',
        org: 'APJ Abdul Kalam Technological University',
        period: '2021 — 2025',
        detail:
            'Focused on human-computer interaction, web engineering and product design.',
    },
    {
        kind: 'Internship',
        title: 'Frontend Developer Intern',
        org: 'Product Studio',
        period: '2024',
        detail:
            'Shipped production React components and design-system primitives used across three products.',
    },
    {
        kind: 'Project',
        title: 'Smart Fishermen Safety System',
        org: 'Final Year Capstone',
        period: '2024 — 2025',
        detail:
            'End-to-end design and frontend for a multi-portal emergency safety platform.',
    },
    {
        kind: 'Certification',
        title: 'Google UX Design Certificate',
        org: 'Coursera',
        period: '2023',
        detail:
            'Complete UX process — research, wireframing, prototyping and usability testing.',
    },
    {
        kind: 'Achievement',
        title: 'Winner — State Level Hackathon',
        org: 'TinkerHub',
        period: '2024',
        detail:
            'Built a civic-tech prototype recognised for design quality and impact.',
    },
]

export const processSteps = [
    { number: '01', title: 'RESEARCH', detail: 'Understand people, context and the real problem.' },
    { number: '02', title: 'DEFINE', detail: 'Frame the challenge and success metrics clearly.' },
    { number: '03', title: 'IDEATE', detail: 'Explore many directions before committing to one.' },
    { number: '04', title: 'DESIGN', detail: 'Craft interfaces with hierarchy, rhythm and clarity.' },
    { number: '05', title: 'PROTOTYPE', detail: 'Make it tangible and testable, fast.' },
    { number: '06', title: 'DEVELOP', detail: 'Build accessible, performant, production-ready UI.' },
    { number: '07', title: 'TEST', detail: 'Validate with users and refine relentlessly.' },
    { number: '08', title: 'LAUNCH', detail: 'Ship, measure and keep improving.' },
]

