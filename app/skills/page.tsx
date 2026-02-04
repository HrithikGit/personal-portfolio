import Link from 'next/link';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React.js", level: "Advanced", color: "primary" },
        { name: "Next.js", level: "Advanced", color: "primary" },
        { name: "TypeScript", level: "Advanced", color: "primary" },
        { name: "Tailwind CSS", level: "Advanced", color: "primary" },
        { name: "HTML5/CSS3", level: "Advanced", color: "primary" },
        { name: "Redux", level: "Intermediate", color: "primary" },
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Python", level: "Advanced", color: "secondary" },
        { name: "FastAPI", level: "Advanced", color: "secondary" },
        { name: "Node.js", level: "Intermediate", color: "secondary" },
        { name: "Express.js", level: "Intermediate", color: "secondary" },
        { name: "RESTful APIs", level: "Advanced", color: "secondary" },
        { name: "GraphQL", level: "Intermediate", color: "secondary" },
      ]
    },
    {
      title: "Database & Storage",
      icon: "💾",
      skills: [
        { name: "PostgreSQL", level: "Advanced", color: "primary" },
        { name: "MongoDB", level: "Intermediate", color: "primary" },
        { name: "Redis", level: "Intermediate", color: "primary" },
        { name: "AWS S3", level: "Advanced", color: "primary" },
        { name: "SQL", level: "Advanced", color: "primary" },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: [
        { name: "AWS", level: "Advanced", color: "secondary" },
        { name: "Docker", level: "Advanced", color: "secondary" },
        { name: "Kubernetes", level: "Intermediate", color: "secondary" },
        { name: "Terraform", level: "Intermediate", color: "secondary" },
        { name: "CI/CD", level: "Advanced", color: "secondary" },
        { name: "Git", level: "Advanced", color: "secondary" },
      ]
    },
    {
      title: "Testing & Quality",
      icon: "🧪",
      skills: [
        { name: "Jest", level: "Advanced", color: "primary" },
        { name: "React Testing Library", level: "Advanced", color: "primary" },
        { name: "Pytest", level: "Intermediate", color: "primary" },
        { name: "Selenium", level: "Intermediate", color: "primary" },
        { name: "Postman", level: "Advanced", color: "primary" },
      ]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: "VS Code", level: "Advanced", color: "secondary" },
        { name: "GitHub", level: "Advanced", color: "secondary" },
        { name: "Jira", level: "Advanced", color: "secondary" },
        { name: "Figma", level: "Intermediate", color: "secondary" },
        { name: "Agile/Scrum", level: "Advanced", color: "secondary" },
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      primary: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      secondary: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center space-y-4 mb-12 animate-fade-in">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Technical Skills
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise and proficiency levels across various technologies and tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div 
            key={category.title}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-800 p-6 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{category.icon}</span>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {category.title}
              </h2>
            </div>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getColorClasses(skill.color)}`}>
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.level}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        skill.level === 'Advanced' ? 'w-full' : 
                        skill.level === 'Intermediate' ? 'w-2/3' : 'w-1/3'
                      } ${skill.color === 'primary' ? 'bg-blue-500' : 'bg-purple-500'}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/experience"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors hover-lift hover-glow"
        >
          View Experience
        </Link>
      </div>
    </div>
  );
} 