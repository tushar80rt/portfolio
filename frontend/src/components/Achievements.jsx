import React, { useEffect, useRef, useState } from 'react';
import { Trophy, Award, Star } from 'lucide-react';

const Achievements = () => {
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

  return (
    <section
      id="achievements"
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
            Achievements & <span className="gradient-text">Recognition</span>
          </h2>
          <div
            className="w-24 h-1 mx-auto"
            style={{ background: 'var(--brand-primary)' }}
          />
        </div>

        {/* Main Achievement - IEEE Winner */}
        <div
          className={`glass-strong rounded-lg overflow-hidden neon-glow-cyan hover-lift mb-12 ${isVisible ? 'fade-in' : 'opacity-0'}`}
          style={{
            animationDelay: '0.2s',
            border: '2px solid var(--brand-primary)'
          }}
        >
          <div className="md:grid md:grid-cols-2 gap-8">
            {/* Image Side */}
            <div className="relative h-80 md:h-auto overflow-hidden">
              <img
                src="/ieee-winner.jpg"
                alt="IEEE Hackathon Winner 2025"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute top-4 right-4 glass-strong rounded-full p-3"
              >
                <Trophy size={32} style={{ color: 'var(--brand-primary)' }} />
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-4 w-fit"
                style={{
                  background: 'rgba(0, 255, 209, 0.1)',
                  border: '1px solid var(--brand-primary)'
                }}
              >
                <Star size={20} style={{ color: 'var(--brand-primary)' }} />
                <span
                  style={{
                    color: 'var(--brand-primary)',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}
                >
                  WINNER 2025
                </span>
              </div>

              <h3
                className="text-4xl font-bold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                IEEE Hackathon Winner
              </h3>

              <p
                className="text-xl mb-6"
                style={{
                  color: 'var(--brand-primary)',
                  fontWeight: '600'
                }}
              >
                VIBEFORGE 6-Hour Coding Challenge
              </p>

              <p
                className="text-lg mb-6"
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.8'
                }}
              >
                Won first place in the prestigious IEEE VIBEFORGE Hackathon 2025,
                competing against talented developers from across the region.
                Demonstrated exceptional problem-solving skills and technical expertise
                in a high-pressure 6-hour coding challenge.
              </p>

              <div className="flex items-center gap-3">
                <Award size={24} style={{ color: 'var(--brand-primary)' }} />
                <span
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '16px'
                  }}
                >
                  IEEE Computer Society & C+S Engineers
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Achievements */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Award,
              title: 'CAMEL-AI Ambassador',
              description: 'Official ambassador representing CAMEL-AI framework globally'
            },
            {
              icon: Star,
              title: '10+ Client Projects',
              description: 'Successfully delivered AI solutions to clients worldwide'
            },
            {
              icon: Trophy,
              title: 'Open Source Contributor',
              description: 'Active contributor to AI and multi-agent system projects'
            }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`glass-strong rounded-lg p-8 hover-lift text-center ${isVisible ? 'fade-in' : 'opacity-0'}`}
                style={{
                  animationDelay: `${(index + 3) * 0.1}s`
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: 'rgba(0, 255, 209, 0.1)',
                    border: '2px solid var(--brand-primary)'
                  }}
                >
                  <Icon size={28} style={{ color: 'var(--brand-primary)' }} />
                </div>
                <h4
                  className="text-xl font-bold mb-3"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '16px',
                    lineHeight: '1.6'
                  }}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;