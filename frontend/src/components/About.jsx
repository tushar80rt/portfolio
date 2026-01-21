import React, { useEffect, useRef, useState } from 'react';
import { Award, Briefcase, Code2, Users } from 'lucide-react';

const About = () => {
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

  const stats = [
    { icon: Award, label: 'CAMEL-AI Ambassador', value: 'Official' },
    { icon: Briefcase, label: 'Freelance Projects', value: '10+' },
    { icon: Code2, label: 'Tech Stack', value: '15+' },
    { icon: Users, label: 'Hackathon Winner', value: '2025' }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6"
      style={{
        background: 'var(--bg-primary)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="max-w-6xl mx-auto w-full">
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
            About <span className="gradient-text">Me</span>
          </h2>
          <div
            className="w-24 h-1 mx-auto"
            style={{ background: 'var(--brand-primary)' }}
          />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div
            className={`flex justify-center ${isVisible ? 'fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            <div
              className="glass-strong rounded-lg overflow-hidden neon-glow-cyan hover-lift p-8"
              style={{
                maxWidth: '400px',
                width: '100%'
              }}
            >
              <img
                src="/tushar-profile.jpg"
                alt="Tushar Singh"
                className="w-full h-auto rounded-lg"
                style={{
                  border: '2px solid var(--brand-primary)'
                }}
              />
            </div>
          </div>

          {/* Right: Bio */}
          <div
            className={`${isVisible ? 'fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.4s' }}
          >
            <h3
              className="text-3xl font-bold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              AI Engineer & Independent Freelancer
            </h3>
            <p
              className="text-lg mb-6"
              style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.8'
              }}
            >
              I'm a <span style={{ color: 'var(--brand-primary)', fontWeight: '600' }}>CAMEL-AI Ambassador</span> and Independent Freelancer specializing in Generative AI, RAG pipelines, and multi-agent systems.
            </p>
            <p
              className="text-lg mb-6"
              style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.8'
              }}
            >
              I design intelligent AI workflows, scalable automation systems, and full-stack applications with real-world impact. Currently pursuing BCA while building production-grade AI solutions for clients worldwide.
            </p>
            <p
              className="text-lg mb-8"
              style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.8'
              }}
            >
              Winner of <span style={{ color: 'var(--brand-primary)', fontWeight: '600' }}>IEEE Hackathon 2025</span>, passionate about pushing the boundaries of what's possible with AI technology.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="glass p-4 rounded-lg hover-lift"
                    style={{
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <Icon
                      size={28}
                      className="mb-2"
                      style={{ color: 'var(--brand-primary)' }}
                    />
                    <p
                      className="text-xl font-bold mb-1"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;