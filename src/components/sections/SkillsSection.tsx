"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import State from "@/components/ui/State";
import { skills } from "@/data/skills";

import "swiper/css";
import { Autoplay, FreeMode } from "swiper/modules";

const tools = [
  "✶",
  "VSCODE",
  "✶",
  "CURSOR",
  "✶",
  "SUPABASE",
  "✶",
  "GIT",
  "✶",
  "VERCEL",
  "✶",
  "FIGMA",
  "✶",
  "CHAT GPT",
  "✶",
  "NOTION",
  "✶",
  "JIRA",
  "✶",
  "SLACK",
];
const marqueeItems = [...tools, ...tools, ...tools];
const SkillsSection = () => {
  return (
    <section className="yellow" id="skills">
      <div className="max-w-container mx-auto text-center">
        <div className="relative">
          <State text="MY SKILLS" color="green" />
          <div className="absolute -top-10 -left-40">
            <Image
              src="/icons/star2-icon.svg"
              alt="icon"
              width={60}
              height={40}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 mt-10 gap-5">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className={`border-2 border-base-primary flex flex-col ${skill.color} rounded-lg py-8`}
            >
              <p className="font-bold text-2xl mb-5">{skill.title}</p>
              <ul className="w-[200px] mx-auto text-left mb-5">
                {skill.skillsList.map((item, index) => (
                  <li
                    key={index}
                    className="list-disc font-semibold text-lg mb-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="whitespace-pre-line mt-auto">{skill.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-20 mb-8 text-base-secondary font-semibold text-lg">
          Tools that power my every day :
        </p>
        <div className="skills-mask">
          <Swiper
            modules={[Autoplay, FreeMode]}
            slidesPerView="auto"
            spaceBetween={50}
            loop
            freeMode={{ enabled: true, momentum: false }}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            allowTouchMove={false}
            className="skills-swiper"
          >
            {marqueeItems.map((t, i) => (
              <SwiperSlide key={`${t}-${i}`} className="!w-fit">
                <span className="whitespace-nowrap text-2xl  font-semibold">
                  {t}
                </span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
