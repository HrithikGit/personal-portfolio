import Link from 'next/link';

export default function Education() {
  const educationDetails = [
    {
      degree: "Master of Science in Computer Science",
      school: "University of Maryland, Baltimore County",
      location: "Baltimore, MD",
      duration: "2023 - 2025",
      gpa: "3.8/4.0",
      highlights: [
        "Specializing in Software Engineering and Cloud Computing",
        "Relevant Coursework: Advanced Software Engineering, Cloud Computing, Machine Learning, Database Systems",
        "Teaching Assistant for Data Structures and Algorithms",
        "Member of the Graduate Student Association"
      ],
      color: "blue"
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "SRM Institute of Science and Technology",
      location: "Chennai, India",
      duration: "2018 - 2022",
      gpa: "8.5/10.0",
      highlights: [
        "Specialized in Software Development and Cloud Technologies",
        "Relevant Coursework: Data Structures, Algorithms, Database Management, Web Development",
        "Led the Technical Team of the Computer Science Club",
        "Organized multiple hackathons and coding competitions"
      ],
      color: "purple"
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-123456",
      color: "orange"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-789012",
      color: "blue"
    },
    {
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      credentialId: "CKA-345678",
      color: "blue"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
      orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center space-y-4 mb-12 animate-fade-in">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Education & Certifications
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          My academic journey and professional certifications that have shaped my technical expertise.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="space-y-8 mb-16">
        {educationDetails.map((edu, index) => (
          <div 
            key={edu.degree}
            className="relative pl-8 border-l-2 border-blue-500 dark:border-blue-400 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400" />
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-800">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h2>
                  <p className={`text-${edu.color}-600 dark:text-${edu.color}-400`}>{edu.school}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{edu.location}</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <p className="text-sm text-gray-600 dark:text-gray-400">{edu.duration}</p>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">GPA: {edu.gpa}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {edu.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <section className="mt-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Professional Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={cert.name}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-800"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🏆</span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{cert.name}</h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Issuer:</span> {cert.issuer}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Date:</span> {cert.date}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Credential ID:</span> {cert.credentialId}
                </p>
              </div>
              <div className="mt-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getColorClasses(cert.color)}`}>
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

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