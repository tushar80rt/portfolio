import React from 'react';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12 px-6"
      style={{
        background: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-subtle)'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              <span style={{ color: 'var(--brand-primary)' }}>Tushar</span> Singh
            </h3>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '16px',
                lineHeight: '1.6'
              }}
            >
              AI Engineer & Independent Freelancer building intelligent solutions
              that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-lg font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Achievements', 'Contact'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="transition-colors duration-300"
                      style={{
                        color: 'var(--text-muted)',
                        fontSize: '16px'
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.color = 'var(--brand-primary)')
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.color = 'var(--text-muted)')
                      }
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-lg font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Get In Touch
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:tushar80rt@gmail.com"
                className="block transition-colors duration-300"
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '16px'
                }}
                onMouseEnter={(e) =>
                  (e.target.style.color = 'var(--brand-primary)')
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = 'var(--text-muted)')
                }
              >
                tushar80rt@gmail.com
              </a>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://www.linkedin.com/in/tushar-singh-1ba975296"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300"
                  style={{ color: 'var(--text-muted)' }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'var(--brand-primary)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'var(--text-muted)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300"
                  style={{ color: 'var(--text-muted)' }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'var(--brand-primary)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'var(--text-muted)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  GitHub
                </a>
                <a
                  href="https://x.com/_tusharrathore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300"
                  style={{ color: 'var(--text-muted)' }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'var(--brand-primary)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'var(--text-muted)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid var(--border-subtle)' }}
        >
          <p
            className="flex items-center gap-2"
            style={{
              color: 'var(--text-muted)',
              fontSize: '14px'
            }}
          >
            Built with
            <Heart
              size={16}
              style={{ color: 'var(--brand-primary)' }}
              fill="var(--brand-primary)"
            />
            and
            <Code2 size={16} style={{ color: 'var(--brand-primary)' }} />
            by Tushar Singh
          </p>
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '14px'
            }}
          >
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;