import { motion } from 'framer-motion';
import { Code2, Layout, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Backend',
    icon: Code2,
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Spring Boot', level: 85 },
      { name: 'Node.js', level: 75 }
    ],
    color: 'from-blue-500/20 to-blue-500/5'
  },
  {
    title: 'Frontend',
    icon: Layout,
    skills: [
      { name: 'React', level: 80 },
      { name: 'TypeScript', level: 85 },
      { name: 'HTML/CSS', level: 90 }
    ],
    color: 'from-purple-500/20 to-purple-500/5'
  },
  {
    title: 'Database',
    icon: Database,
    skills: [
      { name: 'SQL', level: 95 },
      { name: 'MongoDB', level: 70 },
      { name: 'PostgreSQL', level: 85 }
    ],
    color: 'from-green-500/20 to-green-500/5'
  },
  {
    title: 'Tools & Others',
    icon: Wrench,
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 }
    ],
    color: 'from-orange-500/20 to-orange-500/5'
  }
];

export function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.title}
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
        >
          <div className={`bg-gradient-to-br ${category.color} p-6 rounded-xl border border-white/5`}>
            <div className="flex items-center gap-3 mb-6">
              <category.icon className="w-6 h-6 text-white" />
              <h3 className="text-xl font-semibold text-white">{category.title}</h3>
            </div>
            
            <div className="space-y-4">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-white/25 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}