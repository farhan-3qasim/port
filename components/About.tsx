
import React from 'react';
import { PORTFOLIO_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Column */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <div className="relative group">
              {/* Animated decorative rings */}
              <div className="absolute -inset-4 border-2 border-dashed border-blue-200 rounded-full animate-spin-slow opacity-60"></div>
              <div className="absolute -inset-8 border border-blue-100 rounded-full animate-spin-reverse-slow opacity-40"></div>
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-blue-600 to-indigo-400 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white bg-slate-200">
                  <img 
                    src={PORTFOLIO_INFO.profileImage} 
                    alt={PORTFOLIO_INFO.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      // Improved fallback using a professional avatar service
                      target.src = `https://ui-avatars.com/api/?name=Farhan+Ullah&background=2563eb&color=fff&size=512&bold=true`;
                    }}
                  />
                </div>
                
                {/* Status Badge */}
                <div className="absolute -bottom-2 -right-2 bg-white px-4 py-2 rounded-2xl shadow-xl border border-blue-50 flex items-center space-x-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] font-bold text-slate-700 uppercase tracking-tighter">Open to Work</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="w-full lg:w-7/12">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="h-px w-8 bg-blue-600"></div>
                <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">Get to know me</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Software Engineer & <br />
                <span className="gradient-text">React Specialist</span>
              </h3>
              
              <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
                {PORTFOLIO_INFO.about}
              </p>
              
              {/* Highlight Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start space-x-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                  <div className="text-blue-600 mt-1">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">Responsive Design</h5>
                    <p className="text-xs text-slate-500">Mobile-first, fluid interfaces</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                  <div className="text-blue-600 mt-1">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">Clean Code</h5>
                    <p className="text-xs text-slate-500">Maintainable, scalable React</p>
                  </div>
                </div>
              </div>
              
              {/* Education Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-200 transform transition hover:scale-[1.02]">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                    <i className="fa-solid fa-university text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Academic Background</h4>
                    <p className="text-blue-100 text-sm">{PORTFOLIO_INFO.institution}</p>
                  </div>
                </div>
                <p className="text-sm font-medium opacity-90 leading-relaxed">
                  Currently in <strong>{PORTFOLIO_INFO.education}</strong>. 
                  Building a strong foundation in data structures, algorithms, and software architecture.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex flex-wrap items-center gap-6 pt-6">
                <div className="flex space-x-4">
                  <a 
                    href={PORTFOLIO_INFO.socials.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-2.5 bg-[#0077b5] text-white rounded-full font-bold hover:shadow-lg hover:shadow-blue-200 transition-all transform hover:-translate-y-1"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a 
                    href={PORTFOLIO_INFO.socials.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-2.5 bg-slate-900 text-white rounded-full font-bold hover:shadow-lg hover:shadow-slate-300 transition-all transform hover:-translate-y-1"
                  >
                    <i className="fa-brands fa-github"></i>
                    <span className="text-sm">GitHub</span>
                  </a>
                </div>
                
                <a 
                  href={`mailto:${PORTFOLIO_INFO.socials.email}`}
                  className="text-slate-500 hover:text-blue-600 font-bold text-sm transition-colors flex items-center"
                >
                  <i className="fa-solid fa-envelope mr-2"></i>
                  {PORTFOLIO_INFO.socials.email}
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse-slow {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        .animate-spin-reverse-slow {
          animation: spin-reverse-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
