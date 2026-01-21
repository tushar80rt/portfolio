import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
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

  const experiences = [
    {
      title: 'AI Developer & Ambassador',
      company: 'CAMEL-AI',
      location: 'Remote',
      period: '2024 - Present',
      description: [
        'Official CAMEL-AI Ambassador representing the framework globally',
        'Designed and deployed multi-agent RAG systems for production use',
        'Built intelligent workflows leveraging LLM orchestration',
        'Contributed to open-source AI agent development'
      ]
    },
    {
      title: 'AI & Full Stack Developer',
      company: 'Independent Freelancer',
      location: 'Remote',
      period: '2023 - Present',
      description: [
        'Delivered end-to-end AI solutions for real clients worldwide',
        'Built and deployed RAG systems, automation pipelines, and full-stack apps',
        'Specialized in Generative AI, multi-agent systems, and LLM integration',
        'Managed 10+ successful freelance projects with 100% client satisfaction'
      ]
    },
    {
      title: 'Computer Vision Intern',
      company: 'Labellerr AI',
      location: 'Remote',
      period: '2023',
      description: [
        'Worked on computer vision and ML annotation projects',
        'Developed data labeling pipelines for training AI models',
        'Collaborated with cross-functional teams on AI datasets',
        'Gained hands-on experience in production ML workflows'
      ]
    }
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 px-6"
      style={{
        background: 'var(--bg-primary)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="max-w-5xl mx-auto w-full">
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
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div
            className="w-24 h-1 mx-auto"
            style={{ background: 'var(--brand-primary)' }}
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1"
            style={{
              background: 'linear-gradient(180deg, var(--brand-primary), var(--neon-purple))'
            }}
          />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative ${isVisible ? 'fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  {/* Left Side (odd) or Right Side (even) */}
                  <div
                    className={`${index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}`}
                  >
                    <div className="glass-strong rounded-lg p-8 hover-lift">
                      {/* Icon */}
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                        style={{
                          background: 'var(--brand-primary)',
                          marginLeft: index % 2 === 0 ? 'auto' : '0',
                          marginRight: index % 2 === 0 ? '0' : 'auto'
                        }}
                      >
                        <Briefcase size={24} style={{ color: '#000000' }} />
                      </div>

                      {/* Title */}
                      <h3
                        className="text-2xl font-bold mb-2"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {exp.title}
                      </h3>

                      {/* Company */}
                      <p
                        className="text-xl font-medium mb-3"
                        style={{ color: 'var(--brand-primary)' }}
                      >
                        {exp.company}
                      </p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-4 justify-start md:justify-end">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} style={{ color: 'var(--text-muted)' }} />
                          <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
                            {exp.period}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} style={{ color: 'var(--text-muted)' }} />
                          <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2 text-left">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2"
                            style={{
                              color: 'var(--text-secondary)',
                              fontSize: '16px',
                              lineHeight: '1.6'
                            }}
                          >
                            <span style={{ color: 'var(--brand-primary)', marginTop: '6px' }}>
                              •
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div
                  className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 w-6 h-6 rounded-full neon-glow-cyan"
                  style={{
                    background: 'var(--brand-primary)',
                    border: '4px solid var(--bg-primary)'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;