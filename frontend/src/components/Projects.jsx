import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: 'Reddit Insight Agents',
      description:
        'An AI-powered multi-agent system to analyze Reddit discussions, detect misinformation, perform sentiment analysis, and generate automated insights.',
      tech: ['Streamlit', 'CAMEL-AI', 'Reddit API', 'GPT-4o'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      link: '#',
      github: '#'
    },
    {
      title: 'Lost & Found 2.0',
      description:
        'An AI-driven platform to intelligently match lost and found items using embeddings, PHASH similarity, and semantic search, with automated alerts.',
      tech: ['Streamlit', 'CAMEL-AI', 'Python', 'SQLite', 'Twilio'],
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
      link: '#',
      github: '#'
    }
  ];

  return (
    <section
      id="projects"
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div
            className="w-24 h-1 mx-auto"
            style={{ background: 'var(--brand-primary)' }}
          />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass-strong rounded-lg overflow-hidden tilt-card hover-lift ${isVisible ? 'fade-in' : 'opacity-0'}`}
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{
                    filter: 'brightness(0.7)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                    e.target.style.filter = 'brightness(0.9)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.filter = 'brightness(0.7)';
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)'
                  }}
                />
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-base mb-6"
                  style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6'
                  }}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-lg"
                      style={{
                        background: 'rgba(0, 255, 209, 0.1)',
                        border: '1px solid var(--brand-primary)',
                        color: 'var(--brand-primary)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300"
                    style={{
                      background: 'var(--brand-primary)',
                      color: '#000000',
                      fontSize: '14px',
                      fontWeight: '500'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'var(--brand-hover)';
                      e.target.style.color = 'var(--brand-primary)';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'var(--brand-primary)';
                      e.target.style.color = '#000000';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    <ExternalLink size={16} />
                    View Project
                  </a>

                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300"
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: '#FFFFFF',
                      fontSize: '14px',
                      fontWeight: '500'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#FFFFFF';
                      e.target.style.color = '#000000';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.color = '#FFFFFF';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;