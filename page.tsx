'use client';

import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown, ExternalLink, Mail } from 'lucide-react';

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  console.log(scrollY)
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated constellation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const techs = [
      { x: 0.2, y: 0.2, label: 'C++', color: '#00d4ff' },
      { x: 0.8, y: 0.3, label: 'Kubernetes', color: '#326ce5' },
      { x: 0.5, y: 0.5, label: 'Docker', color: '#2496ed' },
      { x: 0.15, y: 0.7, label: 'React', color: '#61dafb' },
      { x: 0.85, y: 0.75, label: 'PostgreSQL', color: '#336791' },
      { x: 0.5, y: 0.85, label: 'FIX Protocol', color: '#ff6b35' },
      { x: 0.3, y: 0.4, label: 'UDP/TCP', color: '#00ff88' },
      { x: 0.7, y: 0.6, label: 'Node.js', color: '#68a063' },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.1)';
      ctx.lineWidth = 1;

      techs.forEach((tech, i) => {
        techs.slice(i + 1).forEach((other) => {
          if (Math.random() > 0.7) {
            ctx.beginPath();
            ctx.moveTo(tech.x * canvas.width, tech.y * canvas.height);
            ctx.lineTo(other.x * canvas.width, other.y * canvas.height);
            ctx.stroke();
          }
        });
      });

      // Draw nodes
      techs.forEach((tech) => {
        const x = tech.x * canvas.width;
        const y = tech.y * canvas.height;
        const pulse = Math.sin(Date.now() / 1000 + tech.x) * 2 + 3;

        ctx.fillStyle = tech.color;
        ctx.beginPath();
        ctx.arc(x, y, 5 + pulse, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.font = '12px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText(tech.label, x, y + 20);
      });

      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-slate-950 to-transparent">
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Praveen
          </h1>
          <div className="flex gap-6">
            <a href="#about" className="text-sm hover:text-cyan-400 transition">About</a>
            <a href="#experience" className="text-sm hover:text-cyan-400 transition">Experience</a>
            <a href="#projects" className="text-sm hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="text-sm hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-6 inline-block px-4 py-2 border border-cyan-400/30 rounded-full text-cyan-400 text-sm">
            Real-time Systems Engineer
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            C++ Performance<br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Systems Specialist
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Building high-performance real-time financial systems processing billions of messages daily with sub-10ms latency. Specialized in exchange connectivity and market data systems.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">3.5+</div>
              <div className="text-sm text-slate-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">10B+</div>
              <div className="text-sm text-slate-400">Messages/Day</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">&lt;10ms</div>
              <div className="text-sm text-slate-400">Latency</div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <a href="#projects" className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition">
              View Work
            </a>
            <a href="#contact" className="px-8 py-3 border border-cyan-400 hover:bg-cyan-400/10 rounded-lg font-semibold transition">
              Get In Touch
            </a>
          </div>

          <div className="mt-16 animate-bounce">
            <ChevronDown className="mx-auto text-cyan-400" size={24} />
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section id="about" className="py-32 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">My Journey</h2>

        <div className="space-y-12">
          {/* 2015 */}
          <div className="flex gap-8 items-start">
            <div className="flex-shrink-0 w-24 text-right">
              <div className="text-2xl font-bold text-cyan-400">2015</div>
              <div className="text-sm text-slate-400">Age 18</div>
            </div>
            <div className="flex-1">
              <div className="h-1 w-8 bg-cyan-400 mb-4"></div>
              <h3 className="text-2xl font-bold mb-2">Aditya Birla Intermediate College</h3>
              <p className="text-slate-300">12th Grade — 74%</p>
              <p className="text-slate-400 text-sm mt-2">Renukoot, Uttar Pradesh</p>
            </div>
          </div>

          {/* 2016-2020 */}
          <div className="flex gap-8 items-start">
            <div className="flex-shrink-0 w-24 text-right">
              <div className="text-2xl font-bold text-cyan-400">2016</div>
              <div className="text-sm text-slate-400">Age 19</div>
            </div>
            <div className="flex-1">
              <div className="h-1 w-8 bg-cyan-400 mb-4"></div>
              <h3 className="text-2xl font-bold mb-2">B.Tech Computer Science</h3>
              <p className="text-slate-300">IIMT Engineering College (2016–2020) — 72%</p>
              <p className="text-slate-300 text-sm">Affiliated to Dr. APJ Abdul Kalam Technical University</p>
              <p className="text-slate-400 text-sm mt-2">Gained foundational knowledge in systems programming, data structures, and software architecture.</p>
            </div>
          </div>

          {/* 2020 */}
          <div className="flex gap-8 items-start">
            <div className="flex-shrink-0 w-24 text-right">
              <div className="text-2xl font-bold text-cyan-400">2020</div>
              <div className="text-sm text-slate-400">Age 23</div>
            </div>
            <div className="flex-1">
              <div className="h-1 w-8 bg-cyan-400 mb-4"></div>
              <h3 className="text-2xl font-bold mb-2">Redon System — Associate Software Engineer</h3>
              <p className="text-slate-300">Hyderabad | June 2020 – Nov 2021 (18 months)</p>
              <p className="text-slate-400 mt-2">Built real-time sensor data processing pipelines for autonomous drone flight operations using C++. Worked on low-latency systems critical to flight safety and performance.</p>
            </div>
          </div>

          {/* 2021 */}
          <div className="flex gap-8 items-start">
            <div className="flex-shrink-0 w-24 text-right">
              <div className="text-2xl font-bold text-cyan-400">2021</div>
              <div className="text-sm text-slate-400">Age 24</div>
            </div>
            <div className="flex-1">
              <div className="h-1 w-8 bg-cyan-400 mb-4"></div>
              <h3 className="text-2xl font-bold mb-2">TechMahindra — C++ Backend Developer, Real-time Engineer</h3>
              <p className="text-slate-300">Bengaluru, Karnataka | Dec 2021 – Present (3+ years)</p>
              <p className="text-slate-400 mt-2">
                Architecting and maintaining LSEG Line Handler — the industry's leading real-time market data connectivity platform. Processing billions of messages daily from global exchanges with sub-10ms latency. Serving tier-1 financial institutions including Morgan Stanley, Goldman Sachs, and Citi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Constellation */}
      <section id="tech" className="py-32 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Tech Constellation</h2>
        <div className="relative w-full h-96 rounded-lg border border-cyan-400/30 bg-slate-900/30 overflow-hidden">
          <canvas ref={canvasRef} className="w-full h-full" />
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-4 border border-cyan-400/20 rounded-lg hover:border-cyan-400/50 transition">
            <h4 className="font-bold text-cyan-400 mb-2">Languages</h4>
            <p className="text-sm text-slate-300">C++, Java, Python, C</p>
          </div>
          <div className="p-4 border border-cyan-400/20 rounded-lg hover:border-cyan-400/50 transition">
            <h4 className="font-bold text-cyan-400 mb-2">Frameworks</h4>
            <p className="text-sm text-slate-300">Boost, STL, CMake, FIX Protocol</p>
          </div>
          <div className="p-4 border border-cyan-400/20 rounded-lg hover:border-cyan-400/50 transition">
            <h4 className="font-bold text-cyan-400 mb-2">Cloud & DevOps</h4>
            <p className="text-sm text-slate-300">Docker, Jenkins, Kubernetes</p>
          </div>
          <div className="p-4 border border-cyan-400/20 rounded-lg hover:border-cyan-400/50 transition">
            <h4 className="font-bold text-cyan-400 mb-2">Databases</h4>
            <p className="text-sm text-slate-300">Oracle, PostgreSQL, MySQL</p>
          </div>
          <div className="p-4 border border-cyan-400/20 rounded-lg hover:border-cyan-400/50 transition">
            <h4 className="font-bold text-cyan-400 mb-2">Market Data</h4>
            <p className="text-sm text-slate-300">KRX, NSE, LSEG APIs, UDP/TCP</p>
          </div>
          <div className="p-4 border border-cyan-400/20 rounded-lg hover:border-cyan-400/50 transition">
            <h4 className="font-bold text-cyan-400 mb-2">Tools</h4>
            <p className="text-sm text-slate-300">Git, SVN, Postman</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Featured Projects</h2>

        <div className="space-y-12">
          {/* Line Handler */}
          <div className="group border border-cyan-400/20 rounded-lg p-8 hover:border-cyan-400/50 hover:bg-slate-900/50 transition">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-3xl font-bold mb-2">Line Handler</h3>
                <p className="text-slate-300 text-lg">Real-time Market Data Connectivity Platform (LSEG)</p>
              </div>
              <ExternalLink className="text-cyan-400 opacity-0 group-hover:opacity-100 transition" />
            </div>

            <p className="text-slate-400 mb-6">
              Enterprise-grade real-time market data system handling live feeds from global financial exchanges. Processes encrypted exchange data, decrypts, processes through custom pipelines, and publishes live market values with guaranteed sub-10ms latency.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-slate-900/50 p-4 rounded">
                <div className="text-2xl font-bold text-cyan-400">10B+</div>
                <div className="text-xs text-slate-400">Messages/Day</div>
              </div>
              <div className="bg-slate-900/50 p-4 rounded">
                <div className="text-2xl font-bold text-cyan-400">&lt;10ms</div>
                <div className="text-xs text-slate-400">Latency</div>
              </div>
              <div className="bg-slate-900/50 p-4 rounded">
                <div className="text-2xl font-bold text-cyan-400">10+</div>
                <div className="text-xs text-slate-400">Global Clients</div>
              </div>
              <div className="bg-slate-900/50 p-4 rounded">
                <div className="text-2xl font-bold text-cyan-400">5</div>
                <div className="text-xs text-slate-400">Exchanges</div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-cyan-400 mb-3">Key Achievements</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>✓ Developed pre-open sessions for NSE NSD (derivatives) from scratch</li>
                <li>✓ Built closing auction session for premium clients (Morgan Stanley, Goldman Sachs, Citi)</li>
                <li>✓ Migrated Korea Exchange compliance from single price scraping to new equity model</li>
                <li>✓ Implemented block trade solutions for NSE and BSE</li>
                <li>✓ Closing Auction feature going live on NSE next month</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs">C++</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs">UDP/TCP</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs">FIX Protocol</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs">Kubernetes</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs">Docker</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs">Jenkins</span>
            </div>
          </div>

          {/* HealthyIndia */}
          <div className="group border border-cyan-400/20 rounded-lg p-8 hover:border-cyan-400/50 hover:bg-slate-900/50 transition">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-3xl font-bold mb-2">HealthyIndia</h3>
                <p className="text-slate-300 text-lg">Doctor Booking & Emergency Medical Services</p>
              </div>
              <ExternalLink className="text-cyan-400 opacity-0 group-hover:opacity-100 transition" />
            </div>

            <p className="text-slate-400 mb-6">
              Full-stack platform aggregating specialized doctors with real-time availability. Handles emergency cases with real-time ambulance dispatch and live GPS tracking of hospitals and ambulances for immediate service delivery.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-slate-900/50 p-4 rounded">
                <div className="text-2xl font-bold text-cyan-400">2mo</div>
                <div className="text-xs text-slate-400">To Launch</div>
              </div>
              <div className="bg-slate-900/50 p-4 rounded">
                <div className="text-2xl font-bold text-cyan-400">Full-Stack</div>
                <div className="text-xs text-slate-400">Architecture</div>
              </div>
              <div className="bg-slate-900/50 p-4 rounded">
                <div className="text-2xl font-bold text-cyan-400">Real-time</div>
                <div className="text-xs text-slate-400">GPS Tracking</div>
              </div>
              <div className="bg-slate-900/50 p-4 rounded">
                <div className="text-2xl font-bold text-cyan-400">Vercel</div>
                <div className="text-xs text-slate-400">Hosting</div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-cyan-400 mb-3">Key Features</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>✓ Search and filter specialized doctors by expertise</li>
                <li>✓ Real-time availability calendar and appointment booking</li>
                <li>✓ Emergency case handling with one-click ambulance dispatch</li>
                <li>✓ Live GPS tracking of hospitals and ambulances</li>
                <li>✓ Instant notifications and service confirmation</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs">TypeScript</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs">React</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs">Node.js</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs">PostgreSQL</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs">Real-time Maps</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Build Something Great</h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Interested in discussing high-performance systems, real-time architecture, or new opportunities? Let's connect.
        </p>

        <div className="flex gap-6 justify-center mb-12">
          <a href="mailto:sharmapraveen2003.com" className="p-4 border border-cyan-400/30 rounded-lg hover:bg-cyan-400/10 transition">
            <Mail size={24} className="text-cyan-400 mx-auto" />
          </a>
          <a href="https://github.com/prvn09" className="px-6 py-3 border border-cyan-400/30 rounded-lg hover:bg-cyan-400/10 transition text-cyan-400 font-semibold">
            LinkedIn
          </a>
          <a href="https://www.linkedin.com/in/praveen-sharma-262911112/" className="px-6 py-3 border border-cyan-400/30 rounded-lg hover:bg-cyan-400/10 transition text-cyan-400 font-semibold">
            GitHub
          </a>
        </div>

        <div className="text-sm text-slate-400">
          © 2024 Praveen. Crafted with performance and precision in mind.
        </div>
      </section>
    </div>
  );
}