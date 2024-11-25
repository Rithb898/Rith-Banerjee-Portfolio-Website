import React from "react";
import CheckCircleIcon from "../assets/icons/check-circle.svg?react";
import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg?react";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

const projects = [
  {
    category: "Web Development",
    title: "Personal Portfolio",
    results: [
      { title: "Responsive Design Implementation" },
      { title: "Improved Load Times" },
      { title: "Enhanced UI/UX" },
    ],
    link: "https://beam.jobs/#contact-us",
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/0*oE0XMh2uPzhqXXGM",
  },
  {
    category: "Mobile App",
    title: "Task Tracker",
    results: [
      { title: "Cross-Platform Support" },
      { title: "Real-time Sync" },
      { title: "Customizable Notifications" },
    ],
    link: "https://www.wecargo.be/",
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/0*OmqeHcS8eI8SyU41",
  },
  {
    category: "Machine Learning",
    title: "Image Classifier",
    results: [
      { title: "High Accuracy" },
      { title: "Fast Performance" },
      { title: "Scalable Solution" },
    ],
    link: "https://github.com/luixaviles/image-classifier",
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/0*xc55-4QHtpRd8kzh",
  },
];

function Projects() {
  return (
    <section className="pb-16 lg:py-24 px-4 pt-16" id="projects">
      <div className="container">
        
        <SectionHeader
          eyebrow="Real World Results"
          title="Featured Projects"
          description="See how i transform concepts into engaging digital experiences."
        />

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{ 
                top: `calc(64px + ${index * 40}px)`,
               }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    {project.category}
                  </div>
                  <h3 className="font-calistoga text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span className="font-bold">{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-6" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
    </section>
  );
}

export default Projects;
