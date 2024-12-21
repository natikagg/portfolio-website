'use client'

export default function Experience() {
  const experiences = [
    {
      company: "Company Name",
      position: "Senior Software Developer",
      period: "2020 - Present",
      description: "Key responsibilities and achievements...",
    },
    // Add more experiences
  ];

  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold mb-10">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4">
            <h3 className="font-bold text-xl">{exp.company}</h3>
            <p className="text-gray-600 dark:text-gray-400">{exp.position}</p>
            <p className="text-sm text-gray-500">{exp.period}</p>
            <p className="mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 