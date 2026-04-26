// Atensai — central content store. Edit text & links here.
// All copy lives in one file so a future CMS can write into the same shape.

export const site = {
  brand: 'Atensai',
  brandFull: 'Atensai Labs',
  tagline: 'Where ideas become software.',
  email: 'hello@atensai.com',
  location: 'Dublin, Ireland · Remote',
  social: {
    github: 'https://github.com/atensaiadmin',
    linkedin: '#',
  },
  year: new Date().getFullYear(),
}

export const hero = {
  eyebrow: 'A software craft studio',
  title: ['Where ideas', 'become software.'],
  lead:
    'Atensai is a small, deliberate studio. We design and build thoughtful products at the intersection of engineering, education and innovation — for founders with a real idea and teams who want their software to feel inevitable.',
  primaryCta: { label: 'Start a conversation', href: '#contact' },
  secondaryCta: { label: 'See how we work', href: '#approach' },
  // Words that flow under the hero
  marquee: [
    'Software Engineering',
    'Educational Research',
    'AI Integration',
    'Rapid Prototyping',
    'Product Design',
    'Web · Mobile · Cloud',
  ],
}

export const manifesto = {
  kicker: 'Manifesto',
  title: 'Software, made with care.',
  body: [
    'The name “Atensai” is built from two halves: A — the English article, the smallest possible word for a single thing — and Tensai (天才), the Japanese word for a natural genius. A natural genius. One thing, made well, with the kind of attention craft has always asked for.',
    'We’re not an agency optimised for headcount, and we’re not a factory optimised for tickets. We’re a studio — small enough to think carefully, technical enough to build the hard parts ourselves, and patient enough to do work that’s still worth using in five years.',
  ],
}

export const practices = [
  {
    id: 'engineering',
    number: '01',
    title: 'Software Engineering',
    sub: 'Building',
    text:
      'Full-stack product engineering — web, mobile, cloud and the integrations between them. Modern stacks (React, Node, Python, Go, Postgres, AWS / Cloudflare) used with restraint, not for novelty.',
  },
  {
    id: 'innovation',
    number: '02',
    title: 'Innovation Labs',
    sub: 'Inventing',
    text:
      'Turning early-stage ideas into working software fast. Rapid prototyping, technical de-risking and MVPs we’re proud to put real users in front of — without burning the runway.',
  },
  {
    id: 'research',
    number: '03',
    title: 'Educational Research',
    sub: 'Learning',
    text:
      'A long-running interest in how people learn, and how software can carry that. We build learning tools, run small studies, and partner with educators to make digital pedagogy feel less like a worksheet.',
  },
]

export const capabilities = [
  {
    icon: 'web',
    title: 'Full-stack web',
    text: 'React, Next.js, modern back-ends and a stubborn focus on speed, clarity and accessibility.',
  },
  {
    icon: 'mobile',
    title: 'Cross-platform mobile',
    text: 'iOS and Android with React Native or Flutter, delivered from one codebase that doesn’t feel like a compromise.',
  },
  {
    icon: 'edtech',
    title: 'EdTech & learning tools',
    text: 'Learning platforms, classroom tools and content systems designed with teachers, not at them.',
  },
  {
    icon: 'ai',
    title: 'Applied AI',
    text: 'LLMs and ML where they earn their place — retrieval, copilots, automation. No demos for the sake of demos.',
  },
  {
    icon: 'data',
    title: 'Data & analytics',
    text: 'Pipelines, dashboards and decision tools that give your team a clean answer instead of a noisy chart.',
  },
  {
    icon: 'mvp',
    title: 'Rapid prototyping',
    text: 'From sketch to working prototype in a couple of weeks. We build the smallest thing that actually proves the idea.',
  },
]

export const approach = {
  kicker: 'How we work',
  title: 'Small team. Senior hands. Few projects at a time.',
  steps: [
    {
      label: 'Listen',
      text: 'A short, honest conversation. What are you trying to make true in the world? What have you tried? What hurts?',
    },
    {
      label: 'Shape',
      text: 'We turn the idea into a sharp brief — scope, risks, the smallest version that proves it. No 40-page proposals.',
    },
    {
      label: 'Build',
      text: 'Senior engineers, weekly demos, code you own. We work in the open and ship continuously, not in big-bang reveals.',
    },
    {
      label: 'Hand over',
      text: 'Documented, sensible, boring-where-it-should-be. So your team — or your future team — can keep going without us.',
    },
  ],
}

export const principles = [
  {
    title: 'Restraint',
    text: 'The right amount of code, framework, abstraction and process — and not one bit more.',
  },
  {
    title: 'Truth at the boundary',
    text: 'We sit at the boundary between business and engineering and refuse to lie in either direction.',
  },
  {
    title: 'Make it last',
    text: 'We choose tools and patterns that will still be sane in five years. Software is a thing you live with.',
  },
  {
    title: 'Quiet excellence',
    text: 'Loud demos fade. We aim for the kind of work people quietly rely on every day.',
  },
]

export const cta = {
  kicker: 'Let’s talk',
  title: 'Have an idea worth building well?',
  body: 'Tell us about it. Even if it’s a half-formed sketch — those are usually the best ones.',
  button: { label: 'Start a conversation', href: 'mailto:hello@atensai.com' },
}

export const nav = [
  { href: '#manifesto', label: 'Manifesto' },
  { href: '#practices', label: 'Practices' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#approach', label: 'Approach' },
  { href: '#contact', label: 'Contact' },
]
