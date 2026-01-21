import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowDown, Download, Eye } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    'AI Engineer',
    'RAG & Multi-Agent Architect',
    'Full Stack Developer',
    'Independent Freelancer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'var(--bg-primary)',
        paddingTop: '80px'
      }}
    >
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode"
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        {/* Profile Image with Neon Glow */}
        <div className="mb-8 flex justify-center">
          <div
            className="relative rounded-full overflow-hidden neon-glow-cyan"
            style={{
              width: '200px',
              height: '200px',
              border: '4px solid var(--brand-primary)',
              animation: 'float 3s ease-in-out infinite'
            }}
          >
            <img
              src="/tushar-profile.jpg"
              alt="Tushar Singh"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h1
          className="text-6xl md:text-7xl font-bold mb-6 tracking-tight"
          style={{
            color: 'var(--text-primary)',
            lineHeight: '1.1',
            letterSpacing: '-0.02em'
          }}
        >
          Tushar Singh
        </h1>

        {/* Animated Role */}
        <div className="h-20 mb-8">
          <p
            className="text-2xl md:text-3xl font-medium gradient-text"
            style={{
              lineHeight: '1.3',
              transition: 'opacity 0.5s ease-in-out'
            }}
          >
            {roles[currentRole]}
          </p>
        </div>

        {/* Description */}
        <p
          className="text-lg md:text-xl mb-12 max-w-3xl mx-auto"
          style={{
            color: 'var(--text-secondary)',
            lineHeight: '1.6'
          }}
        >
          CAMEL-AI Ambassador specializing in Generative AI, RAG pipelines,
          and multi-agent systems. Building intelligent AI workflows that solve real-world problems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <a
            href="#projects"
            className="px-8 py-4 font-medium transition-all duration-400 inline-flex items-center gap-3"
            style={{
              background: 'var(--brand-primary)',
              color: '#000000',
              borderRadius: '0px',
              fontSize: '18px',
              minHeight: '56px'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--brand-hover)';
              e.target.style.color = 'var(--brand-primary)';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'var(--brand-primary)';
              e.target.style.color = '#000000';
              e.target.style.transform = 'scale(1)';
            }}
          >
            <Eye size={20} />
            View Projects
          </a>

          <a
            href="#resume"
            className="px-8 py-4 font-medium transition-all duration-400 inline-flex items-center gap-3"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#FFFFFF',
              borderRadius: '0px',
              fontSize: '18px',
              minHeight: '56px'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#FFFFFF';
              e.target.style.color = '#000000';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.color = '#FFFFFF';
              e.target.style.transform = 'scale(1)';
            }}
          >
            <Download size={20} />
            Download Resume
          </a>

          <a
            href="#contact"
            className="px-8 py-4 font-medium transition-all duration-400 inline-flex items-center gap-3"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#FFFFFF',
              borderRadius: '0px',
              fontSize: '18px',
              minHeight: '56px'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#FFFFFF';
              e.target.style.color = '#000000';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.color = '#FFFFFF';
              e.target.style.transform = 'scale(1)';
            }}
          >
            Contact Me
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ArrowDown
            size={32}
            style={{
              color: 'var(--brand-primary)',
              animation: 'bounce 2s infinite'
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;