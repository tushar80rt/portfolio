import React, { useEffect, useRef, useState } from 'react';
import { Code, Brain, Palette, Server } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: 'Programming',
      color: 'var(--brand-primary)',
      skills: ['C++', 'C', 'Python', 'SQL']
    },
    {
      icon: Brain,
      title: 'AI & ML',
      color: 'var(--neon-purple)',
      skills: [
        'Generative AI',
        'RAG',
        'CAMEL-AI',
        'LangChain',
        'LLM Pipelines',
        'Multi-Agent Systems'
      ]
    },
    {
      icon: Palette,
      title: 'Frontend & Tools',
      color: 'var(--neon-blue)',
      skills: ['React.js', 'HTML', 'CSS', 'Streamlit', 'Git', 'GitHub']
    },
    {
      icon: Server,
      title: 'Deployment',
      color: 'var(--brand-primary)',
      skills: [
        'API Development',
        'MCP Server Integration',
        'Automation Systems'
      ]
    }
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 px-6"
      style={{
        background: 'var(--bg-primary)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <h2
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{
              color: 'var(--text-primary)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}
          >
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div
            className="w-24 h-1 mx-auto"
            style={{ background: 'var(--brand-primary)' }}
          />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`glass-strong rounded-lg p-8 hover-lift ${isVisible ? 'fade-in' : 'opacity-0'}`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  borderTop: `4px solid ${category.color}`
                }}
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center mb-6"
                  style={{
                    background: `${category.color}20`,
                    border: `2px solid ${category.color}`
                  }}
                >
                  <Icon size={32} style={{ color: category.color }} />
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-4 py-2 rounded-lg transition-all duration-300"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        fontSize: '16px',
                        color: 'var(--text-secondary)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = `${category.color}20`;
                        e.target.style.borderColor = category.color;
                        e.target.style.color = 'var(--text-primary)';
                        e.target.style.transform = 'translateX(8px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        e.target.style.color = 'var(--text-secondary)';
                        e.target.style.transform = 'translateX(0)';
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;