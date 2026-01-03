
import React from 'react';
import { SKILLS, FUTURE_SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">My Skills</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            These are the core technologies I currently use to build interactive web experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <i className={`${skill.icon} text-xl`}></i>
                </div>
                <h4 className="ml-4 text-xl font-bold text-slate-800">{skill.name}</h4>
              </div>
              
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-blue-600 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="mt-2 text-right">
                <span className="text-sm font-bold text-slate-400">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Path Section */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-blue-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <i className="fa-solid fa-rocket text-8xl text-blue-600"></i>
          </div>
          <div className="relative z-10">
            <h4 className="text-2xl font-bold text-slate-900 mb-2">The Learning Path</h4>
            <p className="text-slate-600 mb-8 max-w-xl">
              I am constantly evolving. Here are the technologies I'm currently studying to transition into Full Stack development.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {FUTURE_SKILLS.map((skill) => (
                <div key={skill.name} className="flex items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <i className={`${skill.icon} text-blue-500 mr-3`}></i>
                  <span className="font-semibold text-slate-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
