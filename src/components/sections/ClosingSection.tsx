"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { ClipboardCheck, CalendarCheck, BadgeCheck } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const ClosingSection = () => {
  const promises = [
    {
      icon: ClipboardCheck,
      title: "작업 범위를 꼼꼼하게 확인합니다.",
      desc: "페이지와 요구사항을 먼저 정리하고 누락 없이 작업합니다.",
    },
    {
      icon: CalendarCheck,
      title: "정해진 일정과 약속을 지킵니다.",
      desc: "작업 순서를 정리해 일정에 맞춰 안정적으로 진행합니다.",
    },
    {
      icon: BadgeCheck,
      title: "마지막 QA까지 책임집니다.",
      desc: "구현에서 끝내지 않고 화면을 다시 확인하며 마무리합니다.",
    },
  ];

  return (
    <section id="closing" className="relative py-28 bg-base-background">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold tracking-[0.2em] text-text-muted"
          >
            THANK YOU
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-3xl md:text-4xl font-bold text-text-primary leading-tight"
          >
            맡은 화면은 끝까지 책임지겠습니다.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-base md:text-lg text-text-secondary leading-relaxed"
          >
            빠르게 구현하는 것보다 정확하게 이해하고,
            <br className="hidden md:block" />
            일정과 완성도를 함께 지키는 퍼블리셔가 되겠습니다.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {promises.map((promise) => {
            const Icon = promise.icon;

            return (
              <motion.div
                key={promise.title}
                variants={fadeUp}
                className="rounded-3xl border border-line bg-white p-6 md:p-7 text-center"
              >
                <div className="mx-auto w-11 h-11 rounded-full border border-accent-soft flex items-center justify-center">
                  <Icon size={21} strokeWidth={1.8} className="text-accent" />
                </div>

                <p className="mt-5 text-sm md:text-base font-bold text-text-primary">
                  {promise.title}
                </p>

                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  {promise.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted"
        >
          <p className="font-semibold text-text-secondary">© Made in Minji.</p>
          <p className="text-center sm:text-right">읽어주셔서 감사합니다 :) </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingSection;
