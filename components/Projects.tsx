
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Featured Projects</h3>
            <p className="text-slate-600 max-w-xl">
              A selection of my recent works where I combine functionality with modern design aesthetics.
            </p>
          </div>
          <a href="#" className="hidden md:block text-blue-600 font-bold hover:underline mt-4 md:mt-0">
            View All Projects <i className="fa-solid fa-arrow-right ml-2"></i>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a href={project.githubUrl} className="p-3 bg-white rounded-full text-slate-900 hover:bg-blue-600 hover:text-white transition-colors">
                    <i className="fa-brands fa-github text-xl"></i>
                  </a>
                  <a href={project.liveUrl} className="p-3 bg-white rounded-full text-slate-900 hover:bg-blue-600 hover:text-white transition-colors">
                    <i className="fa-solid fa-link text-xl"></i>
                  </a>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h4>
                <p className="text-slate-600 text-sm flex-grow mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="pt-4 border-t border-slate-50 flex justify-between items-center">
                   <a href={project.liveUrl} className="text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center">
                     Live Preview <i className="fa-solid fa-external-link-alt ml-2 text-[10px]"></i>
                   </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
