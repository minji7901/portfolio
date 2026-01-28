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
        <div className="relative">
          <div className="grid grid-cols-2 gap-y-20 mt-10 mb-20">
            {projectData.map((project) => (
              <div key={project.id}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block cursor-custom"
                >
                  <Image
                    src={project.images.src}
                    alt={project.name}
                    width={500}
                    height={400}
                  />
                </a>
                <p className="font-bold text-2xl mt-5 mb-5">{project.name}</p>
                <p className="whitespace-pre-line text-left text-base-secondary w-[500px] mx-auto text-lg">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
          <div className="absolute -top-20 -left-20">
            <Image
              src="/icons/star-icon.svg"
              alt="icon"
              width={50}
              height={40}
            />
          </div>
          <div className="absolute -bottom-20 -right-20">
            <Image
              src="/icons/shop-icon.svg"
              alt="icon"
              width={50}
              height={40}
            />
          </div>
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
