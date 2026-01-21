import React, { useEffect, useRef, useState } from 'react';
import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mock submission for now
    toast({
      title: 'Message Sent Successfully!',
      description: 'Thank you for reaching out. I\'ll get back to you soon!',
      duration: 5000
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/tushar-singh-1ba975296',
      color: 'var(--neon-blue)'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/',
      color: 'var(--text-primary)'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://x.com/_tusharrathore',
      color: 'var(--neon-blue)'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:tushar80rt@gmail.com',
      color: 'var(--brand-primary)'
    }
  ];

  return (
    <section
      id="contact"
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
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-6"
            style={{ background: 'var(--brand-primary)' }}
          />
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.6'
            }}
          >
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities and ideas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`glass-strong rounded-lg p-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-300"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'var(--text-primary)',
                    fontSize: '16px'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--brand-primary)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-300"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'var(--text-primary)',
                    fontSize: '16px'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--brand-primary)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-300"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'var(--text-primary)',
                    fontSize: '16px'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--brand-primary)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-300 resize-none"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'var(--text-primary)',
                    fontSize: '16px'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--brand-primary)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 font-medium transition-all duration-400 inline-flex items-center justify-center gap-3"
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
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'var(--brand-primary)';
                  e.target.style.color = '#000000';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links & Info */}
          <div
            className={`space-y-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.4s' }}
          >
            {/* Social Links */}
            <div className="glass-strong rounded-lg p-8">
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: 'var(--text-primary)' }}
              >
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-3 p-4 rounded-lg transition-all duration-300"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = `${social.color}20`;
                        e.target.style.borderColor = social.color;
                        e.target.style.transform = 'translateY(-4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      <Icon size={28} style={{ color: social.color }} />
                      <span
                        className="text-sm font-medium"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {social.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Contact Info */}
            <div className="glass-strong rounded-lg p-8">
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: 'var(--text-primary)' }}
              >
                Direct Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail size={24} style={{ color: 'var(--brand-primary)' }} />
                  <div>
                    <p
                      className="text-sm mb-1"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Email
                    </p>
                    <a
                      href="mailto:tushar80rt@gmail.com"
                      className="text-lg font-medium"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      tushar80rt@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="glass-strong rounded-lg p-8">
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                Availability
              </h3>
              <p
                className="text-lg"
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}
              >
                <span style={{ color: 'var(--brand-primary)', fontWeight: '600' }}>
                  Open to freelance projects
                </span>{' '}
                and consulting opportunities. Available for AI development, RAG systems,
                and full-stack applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;