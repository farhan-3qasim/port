
import React from 'react';
import { PORTFOLIO_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 pt-20 pb-10 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-3xl font-bold mb-6">Let's work together</h4>
            <p className="text-slate-400 max-w-md mb-8 leading-relaxed">
              I'm always looking for interesting projects to collaborate on. Whether you have a question or just want to say hi, my inbox is always open!
            </p>
            <div className="flex space-x-6">
                <a href={PORTFOLIO_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="text-2xl text-slate-400 hover:text-white transition-colors">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href={PORTFOLIO_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-2xl text-slate-400 hover:text-white transition-colors">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href={`mailto:${PORTFOLIO_INFO.socials.email}`} className="text-2xl text-slate-400 hover:text-white transition-colors">
                    <i className="fa-solid fa-envelope"></i>
                </a>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold mb-6 uppercase text-sm tracking-wider text-blue-500">Navigation</h5>
            <ul className="space-y-4">
              {['About', 'Skills', 'Projects', 'Contact'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold mb-6 uppercase text-sm tracking-wider text-blue-500">Contact Info</h5>
            <ul className="space-y-4">
              <li className="flex items-center text-sm text-slate-400">
                <i className="fa-solid fa-envelope mr-3 text-blue-500"></i>
                {PORTFOLIO_INFO.socials.email}
              </li>
              <li className="flex items-start text-sm text-slate-400">
                <i className="fa-solid fa-location-dot mr-3 text-blue-500 mt-1"></i>
                Peshawar, Khyber Pakhtunkhwa, Pakistan
              </li>
              <li className="flex items-center text-sm text-slate-400">
                <i className="fa-solid fa-university mr-3 text-blue-500"></i>
                Islamia College Peshawar
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Farhan Ullah. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Built with <i className="fa-solid fa-heart text-red-500 mx-1"></i> using React & Tailwind</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
