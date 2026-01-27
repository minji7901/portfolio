"use client";
import React from "react";
import Image from "next/image";
import State from "@/components/ui/State";
import Button from "@/components/ui/Button";
import { projectData } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className=" text-center">
      <div className="max-w-container mx-auto">
        <State text="MY WORKS" color="pink" />
        <div className="grid grid-cols-2 gap-8 mt-10 mb-20">
          {projectData.map((project) => (
            <div key={project.id}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src={project.images.src}
                  alt={project.name}
                  width={500}
                  height={400}
                />
              </a>
              <p className="font-bold text-xl mt-5 mb-2">{project.name}</p>
              <p className="whitespace-pre-line text-left text-base-secondary">
                {project.description}
              </p>
            </div>
          ))}
        </div>
        <Button
          text="View All Projects"
          onClick={() => {
            window.open("https://github.com/minji7901", "_blank");
          }}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
