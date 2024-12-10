import React from 'react';
import { CircularProgress } from './CircularProgress';

const skills = [
  { category: 'Backend', items: [
    { name: 'Java', proficiency: 90 },
    { name: 'Spring Boot', proficiency: 85 },
    { name: 'Node.js', proficiency: 75 }
  ]},
  { category: 'Frontend', items: [
    { name: 'React', proficiency: 80 },
    { name: 'TypeScript', proficiency: 85 },
    { name: 'HTML/CSS', proficiency: 90 }
  ]},
  { category: 'Database', items: [
    { name: 'SQL', proficiency: 95 },
    { name: 'MongoDB', proficiency: 70 },
    { name: 'PostgreSQL', proficiency: 85 }
  ]},
  { category: 'Tools & Others', items: [
    { name: 'Git', proficiency: 90 },
    { name: 'Docker', proficiency: 75 },
    { name: 'AWS', proficiency: 70 }
  ]}
];

export function SkillsTable() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      {skills.map((category) => (
        <div key={category.category} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-6">{category.category}</h3>
          <div className="space-y-6">
            {category.items.map((skill) => (
              <div key={skill.name} className="flex items-center justify-between">
                <span className="text-gray-300 min-w-[100px]">{skill.name}</span>
                <div className="flex-1 mx-4">
                  <CircularProgress value={skill.proficiency} />
                </div>
                <span className="text-blue-400 font-medium w-12 text-right">
                  {skill.proficiency}%
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}