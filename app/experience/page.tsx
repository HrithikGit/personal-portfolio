import Link from 'next/link';

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-12">
      <div className="text-center space-y-4 animate-fade-in">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Professional Experience
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A journey through my professional growth, highlighting key achievements and technical expertise.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-8">
        {/* Fannie Mae */}
        <div className="relative pl-8 border-l-2 border-blue-500 dark:border-blue-400 animate-fade-in">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400" />
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-800">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Software Developer</h2>
                <p className="text-blue-600 dark:text-blue-400">Fannie Mae</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Remote, USA</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">Oct 2024 - Present</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Led frontend development using React, Redux, and React Router for the Mortgage Loan Application Portal</li>
              <li>Designed optimized PostgreSQL schemas and secured file uploads to AWS S3</li>
              <li>Developed scalable Python FastAPI backend services with asyncio and dependency injection</li>
              <li>Implemented blue-green deployment strategies on AWS, reducing downtime by 90%</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm">AWS</span>
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full text-sm">PostgreSQL</span>
              <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm">FastAPI</span>
            </div>
          </div>
        </div>

        {/* Comcast */}
        <div className="relative pl-8 border-l-2 border-purple-500 dark:border-purple-400 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 dark:bg-purple-400" />
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-800">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Software Engineer</h2>
                <p className="text-purple-600 dark:text-purple-400">Comcast India Engineering Center</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Tamil Nadu, India</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">Jun 2022 - Jul 2023</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Spearheaded AWS services implementation, including S3, EC2, and EKS clusters</li>
              <li>Utilized Terraform for infrastructure automation, reducing deployment errors</li>
              <li>Led Grafana integration for monitoring, improving incident response by 30%</li>
              <li>Containerized applications with Docker and Kubernetes, handling 75% traffic surge</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">AWS</span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm">Terraform</span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm">Docker</span>
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full text-sm">Kubernetes</span>
              <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm">Python</span>
            </div>
          </div>
        </div>

        {/* Comcast Internship */}
        <div className="relative pl-8 border-l-2 border-green-500 dark:border-green-400 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 dark:bg-green-400" />
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-800">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Software Engineer Intern</h2>
                <p className="text-green-600 dark:text-green-400">Comcast India Engineering Center</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Tamil Nadu, India</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">Jan 2022 - Jun 2022</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Gained hands-on experience in cloud technologies and containerization</li>
              <li>Contributed to CI/CD pipeline development, improving system reliability by 25%</li>
              <li>Analyzed customer feedback data, increasing user engagement by 40%</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">Cloud</span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm">CI/CD</span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm">Docker</span>
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full text-sm">Data Analysis</span>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section className="mt-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">Frontend & UI</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                React.js & Redux
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Next.js & TypeScript
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Responsive Design
              </li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-semibold mb-4 text-purple-600 dark:text-purple-400">Backend & Database</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                Python & FastAPI
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                Node.js & Express
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                PostgreSQL & MongoDB
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                RESTful APIs
              </li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-semibold mb-4 text-green-600 dark:text-green-400">Cloud & DevOps</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                AWS (EC2, S3, EKS)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Docker & Kubernetes
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Terraform & CI/CD
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Monitoring & Logging
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="text-center mt-12">
        <Link
          href="/projects"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors hover-lift hover-glow"
        >
          View Projects
        </Link>
      </div>
    </div>
  );
} 