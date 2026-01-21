import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-400 ${
        isScrolled ? 'glass-strong' : 'bg-transparent'
      }`}
      style={{
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        padding: '16px 7.6923%'
      }}
    >
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#hero" className="text-2xl font-bold tracking-tight">
          <span style={{ color: 'var(--brand-primary)' }}>Tushar</span>
          <span style={{ color: 'var(--text-primary)' }}> Singh</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-normal transition-colors duration-300"
              style={{
                color: 'var(--text-muted)'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-3 font-medium transition-all duration-400"
            style={{
              background: 'var(--brand-primary)',
              color: '#000000',
              borderRadius: '0px',
              minHeight: '48px',
              display: 'inline-flex',
              alignItems: 'center'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--brand-hover)';
              e.target.style.color = 'var(--brand-primary)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'var(--brand-primary)';
              e.target.style.color = '#000000';
            }}
          >
            Let's Talk
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ color: 'var(--brand-primary)' }}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 glass-strong rounded-lg p-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-3 text-lg font-normal transition-colors duration-300"
              style={{ color: 'var(--text-muted)' }}
              onClick={() => setIsMobileMenuOpen(false)}
              onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-4 px-6 py-3 text-center font-medium transition-all duration-400"
            style={{
              background: 'var(--brand-primary)',
              color: '#000000',
              borderRadius: '0px'
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Let's Talk
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;