import { useEffect, useState } from 'react';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('portfolio-theme');
    return savedTheme || 'light';
  });

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setMobileMenuOpen(false); // Close mobile menu on navigation
        }
      });
    });

    // Close mobile menu on scroll
    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    // Close mobile menu when clicking outside
    const handleClickOutside = (e) => {
      const nav = document.querySelector('.portfolio-nav');
      const menuToggle = document.querySelector('.mobile-menu-toggle');
      if (mobileMenuOpen && nav && !nav.contains(e.target) && !menuToggle?.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClickOutside);

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all animatable elements
    const animateElements = document.querySelectorAll(
      '.project-card, .timeline-item, .skill-category, .education-card, .certification-item, .about-content, .contact-item'
    );
    
    animateElements.forEach(el => {
      el.classList.add('animate-on-scroll');
      observer.observe(el);
    });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
      animateElements.forEach(el => observer.unobserve(el));
    };
  }, [mobileMenuOpen]);

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="portfolio-nav">
        <div className="nav-container">
          <div className="nav-logo">Priyanka</div>
          <div className="nav-actions">
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? (
                <i className="bi bi-moon-fill"></i>
              ) : (
                <i className="bi bi-sun-fill"></i>
              )}
            </button>
            <button 
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={mobileMenuOpen ? 'active' : ''}></span>
              <span className={mobileMenuOpen ? 'active' : ''}></span>
              <span className={mobileMenuOpen ? 'active' : ''}></span>
            </button>
          </div>
          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
            <li><a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a></li>
            <li><a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
            <li><a href="#education" onClick={() => setMobileMenuOpen(false)}>Education</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-image">
            <img src="/priyanka_photo.jpeg" alt="Priyanka" />
          </div>
          <div className="hero-text">
            <div className="hero-badge">Full Stack Developer</div>
            <h1 className="hero-name">Priyanka</h1>
            <h2 className="hero-title">Building Scalable Backend Systems & Modern Web Applications</h2>
            <p className="hero-description">
              Passionate Full Stack Developer with 4.5+ years crafting robust backend architectures and 
              seamless user experiences. Specializing in Node.js, microservices, and modern web technologies 
              to deliver high-performance solutions.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a href="#projects" className="btn btn-secondary">View Projects</a>
            </div>
            <div className="hero-social">
              <a href="mailto:priyankabsr12@gmail.com" className="social-link" aria-label="Email">
                <i className="bi bi-envelope"></i>
              </a>
              <a href="https://linkedin.com/in/priyankaer" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p>
              A Full Stack Developer with 4.5+ years of experience building scalable, high-performance applications. 
              Specializing in Node.js backend development and modern frontend technologies, I architect 
              robust server-side systems and seamless user experiences. My expertise includes designing 
              efficient APIs, optimizing database performance, implementing microservices architecture, 
              and crafting maintainable, production-ready code that scales.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">4.5+</span>
                <span className="highlight-label">Years Experience</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">10+</span>
                <span className="highlight-label">Projects Delivered</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">50+</span>
                <span className="highlight-label">REST APIs Developed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Senior Software Engineer</h3>
                  <span className="company">BNG Advanced Mobile Solutions Pvt. Ltd, Gurgaon</span>
                  <span className="duration">Feb 2024 – Present</span>
                </div>
                <ul className="timeline-details">
                  <li>Architected and developed scalable backend services using Node.js and Express.js for WAP promotion management platforms, serving 10,000+ concurrent users with 99.9% uptime.</li>
                  <li>Designed and implemented 20+ RESTful APIs for promotion lifecycle, callback interfaces, and DND data handling, reducing API response time by 40% through caching and query optimization.</li>
                  <li>Led development of IOBD project, a real-time reporting system for marketing campaigns, improving data accuracy by 35% and reducing report generation time from 5 minutes to 30 seconds.</li>
                  <li>Optimized existing services by implementing async processing, connection pooling, and error handling best practices, resulting in 20% performance improvement and 30% reduction in server costs.</li>
                  <li>Collaborated with cross-functional teams, mentored junior developers, and maintained comprehensive API documentation, reducing integration time by 50%.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Associate Product Engineer</h3>
                  <span className="company">MarinePals, Gurgaon</span>
                  <span className="duration">Oct 2023 – Feb 2024</span>
                </div>
                <ul className="timeline-details">
                  <li>Developed 15+ RESTful APIs for AeFlix educational video app backend using Node.js and Express.js, implementing JWT-based authentication serving 5,000+ active users.</li>
                  <li>Integrated multiple third-party APIs (video streaming, payment gateways) and implemented real-time data synchronization, reducing data inconsistency issues by 90%.</li>
                  <li>Collaborated closely with frontend and mobile teams, optimized API responses through pagination and selective field queries, reducing average response time from 800ms to 250ms.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Associate Product Engineer</h3>
                  <span className="company">Innologic Lab, Gurgaon</span>
                  <span className="duration">Jan 2021 – Sep 2023</span>
                </div>
                <ul className="timeline-details">
                  <li>Led backend development of Digital Learning Management System (DLMS) using Node.js, Express.js, and MySQL, serving 15,000+ users across 50+ organizations with role-based access control and SCORM compliance.</li>
                  <li>Architected and developed 30+ RESTful APIs for School ERP system, optimizing database queries with indexing and query optimization, improving query performance by 60% and reducing database load by 45%.</li>
                  <li>Built modular, reusable backend components following MVC architecture, implemented comprehensive unit and integration testing (80%+ code coverage), reducing production bugs by 70%.</li>
                  <li>Developed competency management system backend with MongoDB aggregation pipelines, processing 100,000+ records daily and reducing report generation time from 10 minutes to 2 minutes.</li>
                  <li>Mentored 2 junior developers, conducted code reviews, and established coding standards, improving team productivity by 25%.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <div className="skill-header">
                <div className="skill-icon">⚡</div>
                <h3 className="skill-category-title">Backend Technologies</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">RESTful APIs</span>
                <span className="skill-tag">GraphQL</span>
                <span className="skill-tag">Microservices</span>
                <span className="skill-tag">Event-driven Architecture</span>
                <span className="skill-tag">JWT & OAuth2</span>
                <span className="skill-tag">WebSockets</span>
                <span className="skill-tag">Serverless (AWS Lambda)</span>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-header">
                <div className="skill-icon">🗄️</div>
                <h3 className="skill-category-title">Databases & Caching</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Mongoose</span>
                <span className="skill-tag">MongoDB Aggregation</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">Redis</span>
                <span className="skill-tag">Elasticsearch</span>
                <span className="skill-tag">Database Optimization</span>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-header">
                <div className="skill-icon">💬</div>
                <h3 className="skill-category-title">Message Queues & Jobs</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">RabbitMQ</span>
                <span className="skill-tag">Bull/BullMQ</span>
                <span className="skill-tag">Background Jobs</span>
                <span className="skill-tag">Queue Management</span>
                <span className="skill-tag">Task Scheduling</span>
                <span className="skill-tag">Event Processing</span>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-header">
                <div className="skill-icon">📊</div>
                <h3 className="skill-category-title">Logging & Monitoring</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">ELK Stack</span>
                <span className="skill-tag">Elasticsearch</span>
                <span className="skill-tag">Logstash</span>
                <span className="skill-tag">Kibana</span>
                <span className="skill-tag">Log Management</span>
                <span className="skill-tag">Performance Monitoring</span>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-header">
                <div className="skill-icon">⚛️</div>
                <h3 className="skill-category-title">Frontend Technologies</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">JavaScript (ES6+)</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">HTML5 & CSS3</span>
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">Redux</span>
                <span className="skill-tag">AJAX</span>
                <span className="skill-tag">Responsive Design</span>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-header">
                <div className="skill-icon">☁️</div>
                <h3 className="skill-category-title">Cloud & DevOps</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">AWS Lambda</span>
                <span className="skill-tag">AWS Services</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">CI/CD</span>
                <span className="skill-tag">Git & GitHub</span>
                <span className="skill-tag">Jenkins</span>
                <span className="skill-tag">Linux</span>
                <span className="skill-tag">Nginx</span>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-header">
                <div className="skill-icon">🧪</div>
                <h3 className="skill-category-title">Testing & Quality</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">Jest</span>
                <span className="skill-tag">Mocha & Chai</span>
                <span className="skill-tag">Unit Testing</span>
                <span className="skill-tag">Integration Testing</span>
                <span className="skill-tag">API Testing</span>
                <span className="skill-tag">Postman</span>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-header">
                <div className="skill-icon">🏗️</div>
                <h3 className="skill-category-title">Architecture & Patterns</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">MVC Architecture</span>
                <span className="skill-tag">OOP & Design Patterns</span>
                <span className="skill-tag">SOLID Principles</span>
                <span className="skill-tag">RESTful Design</span>
                <span className="skill-tag">API Design</span>
                <span className="skill-tag">Performance Optimization</span>
                <span className="skill-tag">Code Refactoring</span>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-header">
                <div className="skill-icon">🤖</div>
                <h3 className="skill-category-title">AI Tools & Automation</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">ChatGPT</span>
                <span className="skill-tag">Amazon Q</span>
                <span className="skill-tag">Cursor</span>
                <span className="skill-tag">N8N</span>
                <span className="skill-tag">AI Code Generation</span>
                <span className="skill-tag">Workflow Automation</span>
                <span className="skill-tag">AI-Assisted Development</span>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-header">
                <div className="skill-icon">🛠️</div>
                <h3 className="skill-category-title">Tools & Others</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">VS Code</span>
                <span className="skill-tag">Jira</span>
                <span className="skill-tag">Confluence</span>
                <span className="skill-tag">Postman</span>
                <span className="skill-tag">MongoDB Compass</span>
                <span className="skill-tag">CSV Processing</span>
                <span className="skill-tag">Third-party APIs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h3>IOBD (Interactive Outbound Dialing)</h3>
              </div>
              <p className="project-description">
                Campaign management platform for outbound dialing systems using Node.js, Express, and MongoDB. 
                Provides RESTful API for creating and managing automated calling campaigns.
              </p>
              <ul className="project-features">
                <li>Handles CSV file uploads for phone numbers with data scrubbing and validation.</li>
                <li>Implements role-based authentication and campaign lifecycle management.</li>
                <li>Generates analytics using MongoDB aggregation pipelines.</li>
                <li>Integrates with external telephony services and uses background job queues for scheduling.</li>
              </ul>
              <div className="tech-stack-section">
                <p className="tech-stack-text">
                  <strong>Tech Stack:</strong> Node.js, Express.js, MongoDB, Mongoose, Bull Queue, Redis, JWT, RESTful APIs, MongoDB Aggregation, CSV Processing, Background Jobs
                </p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Offer Platform</h3>
              </div>
              <p className="project-description">
                Affiliate marketing and offer tracking system that manages the complete lifecycle of digital advertising offers.
              </p>
              <ul className="project-features">
                <li>Click and conversion tracking with device, browser, and OS detection.</li>
                <li>Callback/postback management for affiliate networks.</li>
                <li>Capping control (daily, hourly, weekly, monthly) on clicks and conversions.</li>
                <li>Revenue tracking with multiple models (CPC, CPA, CPL) and real-time analytics.</li>
              </ul>
              <div className="tech-stack-section">
                <p className="tech-stack-text">
                  <strong>Tech Stack:</strong> Node.js, Express.js, MongoDB, Mongoose, Redis, Device Detection, User-Agent Parsing, Real-time Analytics, MongoDB Aggregation, RESTful APIs, Postback Management
                </p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>CCI (Customer Care Interface)</h3>
              </div>
              <p className="project-description">
                Web-based subscription management platform for telecommunications and value-added services (VAS).
              </p>
              <ul className="project-features">
                <li>User management and subscription lifecycle management.</li>
                <li>Bulk operations via CSV uploads with background job processing.</li>
                <li>DND management and complaint tracking.</li>
                <li>Real-time status checking and MIS reporting with MongoDB aggregation.</li>
              </ul>
              <div className="tech-stack-section">
                <p className="tech-stack-text">
                  <strong>Tech Stack:</strong> Node.js, Express.js, MongoDB, Mongoose, Bull Queue, Redis, JWT, RESTful APIs, MongoDB Aggregation, CSV Processing, Background Jobs, MIS Reporting
                </p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>DLMS (Digital Learning Management System)</h3>
              </div>
              <p className="project-description">
                Learning Management System for corporate training using Node.js, Express, and MongoDB. The platform enables administrators to create and manage courses, enroll employees, track progress, and generate reports.
              </p>
              <ul className="project-features">
                <li>Role-based access control with secure authentication and authorization.</li>
                <li>Multimedia content support with quizzes and certifications.</li>
                <li>RESTful API for integration with third-party HR systems.</li>
                <li>SCORM-compliant content support and background jobs for email notifications.</li>
                <li>Progress tracking and comprehensive reporting system.</li>
              </ul>
              <div className="tech-stack-section">
                <p className="tech-stack-text">
                  <strong>Tech Stack:</strong> Node.js, Express.js, MongoDB, Mongoose, JWT, OAuth2, SCORM, RESTful APIs, Role-Based Access Control, Email Services, Background Jobs, Progress Tracking
                </p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>AE Flix - Educational Video App</h3>
              </div>
              <p className="project-description">
                Android educational video app offering curated learning content across subjects. Built as a Node.js backend developer, creating RESTful APIs for course catalog, authentication, enrollment, bookmarks and progress tracking.
              </p>
              <ul className="project-features">
                <li>RESTful APIs for course catalog and content management.</li>
                <li>JWT-based authentication with secure input validation.</li>
                <li>User enrollment, bookmarks, and progress tracking features.</li>
                    <li>Video metadata integration and reporting capabilities.</li>
                    <li>Scalable, maintainable endpoints optimized for mobile users.</li>
                  </ul>
              <div className="tech-stack-section">
                <p className="tech-stack-text">
                  <strong>Tech Stack:</strong> Node.js, Express.js, MongoDB, Mongoose, JWT, RESTful APIs, Mobile Backend, Input Validation, Video Metadata, Progress Tracking
                </p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>FreshCart – Grocery Delivery Application</h3>
                <span className="project-badge">Personal</span>
              </div>
              <p className="project-description">
                Developed the backend services for FreshCart using Node.js and Express.js, implementing RESTful APIs 
                to manage product listings, user authentication, cart operations, and order processing.
              </p>
              <ul className="project-features">
                <li>Designed and optimized MongoDB schemas to efficiently handle product inventory, user data, and order transactions.</li>
                <li>Integrated payment gateway APIs and implemented secure authentication with JWT.</li>
                <li>Implemented role-based access control and input validation to ensure data security and integrity.</li>
                <li>Applied asynchronous programming and error handling to maintain application responsiveness and stability.</li>
              </ul>
              <div className="tech-stack-section">
                <p className="tech-stack-text">
                  <strong>Tech Stack:</strong> Node.js, Express.js, MongoDB, Mongoose, JWT, RESTful APIs, Payment Gateway, Role-Based Access Control, Input Validation, Error Handling, Asynchronous Programming
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education-section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            <div className="education-card">
              <div className="education-icon">
                <i className="bi bi-mortarboard"></i>
              </div>
              <h3>B. Tech. in Computer Science & Engineering</h3>
              <p className="education-institution">Skyline Institute of Engg. and Tech., Gr. Noida</p>
              <p className="education-grade">87% (2020)</p>
            </div>
            <div className="education-card">
              <div className="education-icon">
                <i className="bi bi-book"></i>
              </div>
              <h3>XII (CBSE)</h3>
              <p className="education-institution">Jawahar Navodaya Vidyalaya</p>
              <p className="education-grade">72% (2016)</p>
            </div>
            <div className="education-card">
              <div className="education-icon">
                <i className="bi bi-award"></i>
              </div>
              <h3>X (CBSE)</h3>
              <p className="education-institution">Jawahar Navodaya Vidyalaya</p>
              <p className="education-grade">CGPA 9.8 (2014)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
        <div className="container">
          <h2 className="section-title">Certifications & Achievements</h2>
          <div className="certifications-list">
            <div className="certification-item">
              <i className="bi bi-trophy"></i>
              <div>
                <h4>Certificate of Appreciation</h4>
                <p>Innologic Lab — Dec 2022 & June 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <i className="bi bi-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:priyankabsr12@gmail.com">priyankabsr12@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <i className="bi bi-linkedin"></i>
                <div>
                  <h4>LinkedIn</h4>
                  <a href="https://linkedin.com/in/priyankaer" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/priyankaer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="portfolio-footer">
        <div className="container">
          <p>&copy; 2024 Priyanka. All rights reserved.</p>
          <p>Full Stack Developer | Node.js Specialist</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

