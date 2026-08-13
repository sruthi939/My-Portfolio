export type CaseSection = {
    index: string
    title: string
    body: string
    bullets?: string[]
    image?: { src: string; alt: string }
}

export const fishermenCase = {
    slug: 'fishermen-safety',
    name: 'Smart Fishermen Safety System',
    tagline:
        'A real-world safety platform that monitors fishermen, detects emergencies, and connects fishermen, families and rescue teams.',
    role: 'Lead UI/UX Designer & Frontend Developer',
    duration: '2024 — 2025',
    team: 'Capstone team of 4',
    technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Node.js'],
    designTools: ['Figma', 'Figma AI', 'Framer Motion'],
    cover: {
        src: '/projects/fishermen-dashboard.png',
        alt: 'Fishermen safety monitoring dashboard',
    },
    sections: [
        {
            index: '01',
            title: 'Problem',
            body: 'Fishermen routinely head far out to sea with no dependable way to signal distress. When engines fail, weather turns, or someone is injured, help is often hours away because families and rescue teams have no live picture of where anyone is or what is happening.',
            bullets: [
                'No reliable emergency signalling from open water',
                'Families left uninformed and anxious',
                'Rescue teams lacked live location and status data',
            ],
        },
        {
            index: '02',
            title: 'Research',
            body: 'We spoke with fishermen, their families and local rescue coordinators to map the real journey of an emergency — from the first sign of trouble to a completed rescue. Field interviews surfaced constraints like poor connectivity, one-handed use on a moving boat, and low tolerance for complex interfaces.',
            bullets: [
                '12 field interviews across three fishing communities',
                'Connectivity and glare were the biggest usability constraints',
                'Trust and speed mattered more than features',
            ],
        },
        {
            index: '03',
            title: 'User Personas',
            body: 'Four distinct users emerged, each needing a purpose-built portal: the fisherman at sea, the worried family member on shore, the rescue coordinator, and the system administrator overseeing the fleet.',
            bullets: [
                'Fisherman — needs a one-tap SOS and clear status',
                'Family — needs live location and reassurance',
                'Rescue team — needs actionable, prioritised alerts',
                'Admin — needs fleet-wide oversight and reporting',
            ],
        },
        {
            index: '04',
            title: 'User Journey',
            body: 'I mapped the end-to-end emergency flow so every second counted: detect → alert → locate → coordinate → resolve. This revealed where automation (like fall and inactivity detection) could shave critical minutes off response time.',
        },
        {
            index: '05',
            title: 'Information Architecture',
            body: 'Each portal was structured around its single most important job. The fisherman app foregrounds the SOS action; the rescue portal foregrounds the live map and alert queue; the admin dashboard organises fleet health, incidents and analytics into a calm hierarchy.',
        },
        {
            index: '06',
            title: 'Wireframes',
            body: 'Low-fidelity wireframes let us test the riskiest flows early — especially the emergency path — before investing in visual design. We iterated the SOS interaction until it was impossible to trigger by accident yet effortless in a real emergency.',
            image: {
                src: '/projects/fishermen-wireframes.png',
                alt: 'Wireframes and user flows for the fishermen safety app',
            },
        },
        {
            index: '07',
            title: 'UI Design',
            body: 'The visual language is high-contrast and calm: a dark interface that stays readable under sea glare, with a single decisive accent for emergencies. Four portals share one design system so the product feels coherent from the boat to the control room.',
            image: {
                src: '/projects/fishermen-portals.png',
                alt: 'The four connected portals: fisherman, family, rescue and admin',
            },
        },
        {
            index: '08',
            title: 'Prototype',
            body: 'I built an interactive Figma prototype covering the full emergency journey across all four portals, then ran usability sessions to validate that a real distress signal could be sent, received and acted on without confusion.',
        },
        {
            index: '09',
            title: 'Development',
            body: 'I translated the design system into a production frontend with Next.js, TypeScript and Tailwind CSS — accessible, responsive and fast even on weak connections. Real-time status and location updates keep every portal in sync.',
        },
        {
            index: '10',
            title: 'Final Result',
            body: 'The result is a coherent multi-portal safety platform that turns a life-threatening gap into a connected response system. In testing, the emergency flow was completed reliably and quickly by first-time users — exactly what a safety product demands.',
            image: {
                src: '/projects/fishermen-dashboard.png',
                alt: 'Final fishermen safety monitoring dashboard',
            },
        },
    ] as CaseSection[],
}
