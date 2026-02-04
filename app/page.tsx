const heroStats = [
  { label: 'Deployment incidents reduced', value: '90%' },
  { label: 'API call overhead reduced', value: '98%' },
  { label: 'Monthly infra savings', value: '$10k' },
  { label: 'LeetCode problems solved', value: '800+' },
];

const highlights = [
  'Distributed systems, microservices, and cloud-scale design',
  'Performance engineering with measurable impact',
  'AI-native tooling, RAG pipelines, and agentic workflows',
];

const skills = [
  { name: 'Java', icon: '☕' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Python', icon: '🐍' },
  { name: 'C++', icon: '🧩' },
  { name: 'C#', icon: '🎯' },
  { name: 'Go', icon: '🚀' },
  { name: 'AWS', icon: '☁️' },
  { name: 'React', icon: '⚛️' },
  { name: 'Spring Boot', icon: '🌱' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Swift', icon: '🦅' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'System Design', icon: '🏗️' },
  { name: 'Microservices', icon: '🧱' },
  { name: 'LLMs', icon: '🧠' },
  { name: 'RAG', icon: '📚' },
  { name: 'DevOps', icon: '🔁' },
  { name: 'CI/CD', icon: '🧪' },
];

const principles = [
  'Ownership',
  'Win as a Team',
  'Customer Obsession',
  'Think Big',
  'Innovate and Stay Creative',
];

const experience = [
  {
    role: 'Software Developer',
    company: 'Amazon',
    period: 'Jun 2025 - Present',
    location: 'Seattle, WA',
    logo: '/companies/amazon.svg',
    impact: [
      'Integrated GenAI-based MCM and code review assistants to surface defects early and cut manual review time.',
      'Architected progressive deployments with wave-based rollouts and onebox environments, cutting incident rates by 90%.',
      'Built a high-impact caching layer, slashing API overhead by 98% and saving $10k per month in infrastructure costs.',
      'Delivered an AI on-call assistant that learns from historical incidents to generate actionable remediation steps.',
      'Redesigned route-sorting logic and schemas for delivery stations, boosting throughput by 80%.',
      'Reduced cold start time by 12s through stress and chaos testing, significantly improving P99 latency.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'ServiceNow',
    period: 'Jul 2022 - Jun 2023',
    location: 'Hyderabad, India',
    logo: '/companies/servicenow.svg',
    impact: [
      'Led Security Incident Response application design and vendor integrations, landing 10 new clients.',
      'Built scalable microservices and reusable Java and JavaScript components powering $112M in quarterly revenue.',
      'Migrated databases and optimized queries to deliver a 64% platform efficiency boost.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'NCR Corporation',
    period: 'Jan 2022 - Jun 2022',
    location: 'Hyderabad, India',
    logo: '/companies/ncr.svg',
    impact: [
      'Scaled payment processing with Java, Spring, and AWS to raise transaction capacity by 30%.',
      'Applied OOD principles to help support $24M in daily transactions with higher reliability.',
    ],
  },
];

const projects = [
  {
    title: 'Sleep Disorder Prediction',
    description:
      'Built a multi-model prediction pipeline with Logistic Regression, Decision Trees, KNN, and Random Forest to reach 91% accuracy.',
    tags: ['Machine Learning', 'Data Analysis', 'Python'],
    outcome: '91% best accuracy',
  },
  {
    title: 'Pothole Detection & Reporting',
    description:
      'Computer vision system for live pothole detection and automated reporting into a centralized database.',
    tags: ['Computer Vision', 'Python', 'Data Pipeline'],
    outcome: 'Real-time reporting',
  },
  {
    title: 'AWS Multi-Tier Deployment',
    description:
      'Designed a scalable AWS architecture with auto-scaling, load balancing, and managed services.',
    tags: ['AWS', 'Elastic Beanstalk', 'RDS', 'S3'],
    outcome: 'Cloud-native scalability',
  },
  {
    title: 'Distributed Storage Prototype',
    description:
      'Fault-tolerant distributed file system with replication, 99.5% data availability, and 35% lower latency.',
    tags: ['Distributed Systems', 'Replication', 'Sharding'],
    outcome: '99.5% availability',
  },
];

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'University of Central Florida',
    period: 'Aug 2023 - May 2025',
    focus: 'Machine Learning, Data Mining, Incident Response, Advanced Architecture',
  },
  {
    degree: 'Bachelor of Computer Science',
    school: 'Jawaharlal Nehru Technological University',
    period: 'Aug 2018 - Jun 2022',
    focus: 'DBMS, Operating Systems, Software Engineering, Compiler Design',
  },
];

const awards = [
  {
    title: 'ServiceNow Llama Award Q1 2023',
    description: 'Recognized for teamwork, debugging excellence, and product impact.',
  },
  {
    title: 'Top 5% LeetCode Problem Solver',
    description: 'Solved 800+ algorithmic challenges and ranked among top performers.',
  },
];

const readings = [
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    image: 'https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg',
    note: 'Timeless principles for writing maintainable, high-quality software.',
  },
  {
    title: 'Head First Design Patterns',
    author: 'Eric Freeman & Elisabeth Robson',
    image: 'https://covers.openlibrary.org/b/isbn/9781492078005-L.jpg',
    note: 'Pattern-driven thinking for scalable, flexible system design.',
  },
];

export default function Home() {
  return (
    <div className="grid-lines">
      <section className="section">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-8">
              <div className="mono text-xs text-white/60">Software Engineer</div>
              <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
                Hrithik Manda <span className="gradient-text">builds resilient systems</span> that scale.
              </h1>
              <p className="text-lg text-white/70">
                Software engineer focused on large-scale systems with a love for exploring the practical power of AI. I design
                and ship reliable platforms, performance-critical infrastructure, and intelligent tooling that deliver
                measurable impact without compromising reliability.
              </p>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/80">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                I outsource the boring work to AI and keep the fun problems for myself.
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="#contact" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-1">
                  Start a Project
                </a>
                <a href="#experience" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:-translate-y-1 hover:border-white/50">
                  Explore Work
                </a>
              </div>
              <div className="flex flex-wrap gap-3">
                {highlights.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="mono text-xs text-white/60">Live impact</div>
                  <div className="text-2xl font-semibold">Performance Wins</div>
                </div>
                <div className="float h-16 w-16 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600" />
              </div>
              <div className="mt-6 grid gap-4">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <div className="text-sm text-white/70">{stat.label}</div>
                    <div className="text-xl font-semibold text-white">{stat.value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                Currently focused on AI-augmented engineering and distributed infrastructure optimization.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="card">
            <div className="mono text-xs text-white/60">About</div>
            <h2 className="section-title mt-4">A builder who ships fast and scales hard.</h2>
            <p className="section-subtitle mt-4">
              I specialize in architecting large-scale platforms, deep system integrations, and high-throughput services. I love
              exploring the practical capabilities of AI while shipping resilient distributed systems and cloud automation across AWS.
              I blend product instinct with systems rigor to deliver speed, stability, and standout user experiences.
            </p>
          </div>
          <div className="card">
            <div className="mono text-xs text-white/60">Core strengths</div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-lg font-semibold">AI Systems</div>
                <p className="text-sm text-white/70">LLMs, RAG, prompt engineering, LLMOps, and agent workflows.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-lg font-semibold">Cloud Architecture</div>
                <p className="text-sm text-white/70">AWS, microservices, distributed systems, and CI/CD automation.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-lg font-semibold">Backend Scale</div>
                <p className="text-sm text-white/70">Building resilient, scalable backend systems with tight SLOs.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-lg font-semibold">Performance</div>
                <p className="text-sm text-white/70">Latency, throughput, caching, and incident reduction at scale.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-lg font-semibold">Product Impact</div>
                <p className="text-sm text-white/70">Shipped features that drive revenue, retention, and reliability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="principles" className="section">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mono text-xs text-white/60">Core Principles</div>
              <h2 className="section-title">How I show up every day</h2>
            </div>
            <p className="section-subtitle">
              The operating principles that guide how I build, collaborate, and deliver impact.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle) => (
              <div key={principle} className="card">
                <div className="text-lg font-semibold">{principle}</div>
                <p className="mt-3 text-sm text-white/70">
                  {principle === 'Ownership' && 'Lead with accountability and take full responsibility for outcomes.'}
                  {principle === 'Win as a Team' && 'Collaborate deeply and elevate everyone around the table.'}
                  {principle === 'Customer Obsession' && 'Work backwards from the user to craft exceptional experiences.'}
                  {principle === 'Think Big' && 'Challenge the default and design for outsized impact.'}
                  {principle === 'Innovate and Stay Creative' && 'Experiment, iterate, and keep ideas bold and fresh.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mono text-xs text-white/60">Skills</div>
              <h2 className="section-title">Full-stack + AI-native toolbox</h2>
            </div>
            <p className="section-subtitle">
              Languages, frameworks, and infrastructure I use to build reliable, high-performance systems.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill.name} className="tag flex items-center gap-2">
                <span>{skill.icon}</span>
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mono text-xs text-white/60">Experience</div>
              <h2 className="section-title">High-impact roles, real-world scale</h2>
            </div>
            <p className="section-subtitle">
              Delivered AI-powered platforms, resilient deployments, and mission-critical systems across global orgs.
            </p>
          </div>

          <div className="mt-10 grid gap-6">
            {experience.map((job) => (
              <div key={job.company} className="card">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                      <img src={job.logo} alt={`${job.company} logo`} className="h-7 w-7" />
                    </div>
                    <div>
                      <div className="text-xl font-semibold">{job.role}</div>
                      <div className="text-sm text-white/60">{job.company} · {job.location}</div>
                    </div>
                  </div>
                  <div className="mono text-xs text-white/60">{job.period}</div>
                </div>
                <ul className="mt-5 space-y-3 text-sm text-white/70">
                  {job.impact.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mono text-xs text-white/60">Projects</div>
              <h2 className="section-title">Signature builds</h2>
            </div>
            <p className="section-subtitle">
              Projects that showcase my obsession with performance, intelligence, and reliability.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div key={project.title} className="card">
                <div className="text-xl font-semibold">{project.title}</div>
                <p className="mt-3 text-sm text-white/70">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="mt-4 text-sm text-cyan-300">{project.outcome}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mono text-xs text-white/60">Education</div>
              <h2 className="section-title">Academic foundation</h2>
            </div>
            <p className="section-subtitle">
              Deep technical coursework and research-driven learning.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {education.map((edu) => (
              <div key={edu.degree} className="card">
                <div className="text-lg font-semibold">{edu.degree}</div>
                <div className="text-sm text-white/60">{edu.school}</div>
                <div className="mono mt-2 text-xs text-white/50">{edu.period}</div>
                <p className="mt-4 text-sm text-white/70">{edu.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="readings" className="section">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mono text-xs text-white/60">Readings</div>
              <h2 className="section-title">Books that shape my craft</h2>
            </div>
            <p className="section-subtitle">
              My go-to reads for clean architecture, scalable systems, and design patterns that last.
            </p>
          </div>
          <p className="mt-4 text-sm text-white/60">
            I love reading books and learning from them — feel free to drop any interesting suggestions.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {readings.map((book) => (
              <div key={book.title} className="card group overflow-hidden">
                <div
                  className="h-56 w-full rounded-2xl border border-white/10 bg-cover bg-center transition duration-500 group-hover:scale-105 group-hover:-rotate-1"
                  style={{
                    backgroundImage: `linear-gradient(140deg, rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.8)), url('${book.image}')`,
                  }}
                />
                <div className="mt-5 text-lg font-semibold">{book.title}</div>
                <div className="text-sm text-white/60">{book.author}</div>
                <p className="mt-3 text-sm text-white/70">{book.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="awards" className="section">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mono text-xs text-white/60">Awards</div>
              <h2 className="section-title">Recognition & achievements</h2>
            </div>
            <p className="section-subtitle">
              A quick snapshot of standout wins across industry and competitive programming.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {awards.map((award) => (
              <div key={award.title} className="card">
                <div className="text-lg font-semibold">{award.title}</div>
                <p className="mt-3 text-sm text-white/70">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="card">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="mono text-xs text-white/60">Contact</div>
                <h2 className="section-title">Let&apos;s build something bold.</h2>
                <p className="section-subtitle mt-3">
                  Open to full-time roles, AI platform engineering, and high-impact collaborations.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-sm">
                <a href="mailto:mandhahrithik@gmail.com" className="rounded-full border border-white/20 px-4 py-2 text-white/80 hover:border-white/60">
                  mandhahrithik@gmail.com
                </a>
                <a href="https://hrithik-manda.netlify.app/" className="rounded-full border border-white/20 px-4 py-2 text-white/80 hover:border-white/60">
                  Portfolio
                </a>
                <a href="https://www.linkedin.com/in/hrithik-manda/" className="rounded-full border border-white/20 px-4 py-2 text-white/80 hover:border-white/60">
                  LinkedIn
                </a>
                <a href="https://github.com/HrithikGit" className="rounded-full border border-white/20 px-4 py-2 text-white/80 hover:border-white/60">
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-xs text-white/40">
            Built with Next.js, Tailwind, and an obsession with performance.
          </div>
        </div>
      </section>
    </div>
  );
}
