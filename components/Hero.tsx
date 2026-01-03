
import React from 'react';
import { PORTFOLIO_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-100/30 skew-x-12 transform origin-right -z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 mb-6 bg-blue-100 text-blue-700 rounded-full text-xs font-bold tracking-widest uppercase">
            Available for Freelance & Collaborations
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
            Hi, I'm <span className="gradient-text">{PORTFOLIO_INFO.name}</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
            A dedicated <span className="text-blue-600 font-bold">{PORTFOLIO_INFO.role}</span>. 
            Currently pursuing BS Software Engineering at <span className="font-semibold text-slate-800">{PORTFOLIO_INFO.institution}</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="px-10 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-200 shadow-blue-100 inline-flex items-center justify-center transform hover:-translate-y-1 active:translate-y-0"
            >
              View My Work
              <i className="fa-solid fa-arrow-right ml-3 text-sm"></i>
            </a>
            <a 
              href="#contact" 
              className="px-10 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all inline-flex items-center justify-center transform hover:-translate-y-1 active:translate-y-0 shadow-lg shadow-slate-100"
            >
              Get in Touch
            </a>
          </div>
          
          <div className="mt-12 flex items-center space-x-8 opacity-60">
            <div className="flex -space-x-3">
               {[1,2,3].map(i => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-400">
                    <i className="fa-solid fa-user"></i>
                 </div>
               ))}
            </div>
            <p className="text-sm font-medium text-slate-500">
              Trusted by local startups & peers
            </p>
          </div>
        </div>
        
        {/* Floating Icon */}
        <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 w-1/3 pointer-events-none">
            <div className="relative">
                <i className="fa-brands fa-react text-[320px] text-blue-500/10 animate-spin-slow"></i>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-32 h-32 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
                </div>
            </div>
        </div>
      </div>
      
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
