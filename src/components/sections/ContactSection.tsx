"use client";

import Image from "next/image";
import React, { useState } from "react";
import TypeWrite from "@/components/ui/TypeWrite";
import { motion, type Variants } from "framer-motion";
import StyleSheet from "@/components/ui/LoadingDot";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const dotVariants: Variants = {
  pulse: {
    scale: [1, 1.5, 1],
    transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
  },
};

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [doneMsg, setDoneMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDoneMsg(null);
    setErrorMsg(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const contact = String(formData.get("contact") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !contact || !message) {
      setErrorMsg("필수 항목을 모두 입력해 주세요.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, message }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "전송에 실패했습니다.");

      setDoneMsg("메시지를 보냈습니다. 확인 후 연락드릴게요!");
      form.reset();
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : "전송 중 오류가 발생했습니다.";
      setErrorMsg(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-base-background">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
        >
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-line bg-white p-8 h-full"
          >
            <p className="text-sm font-semibold tracking-[0.2em] text-text-muted">
              CONTACT
            </p>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-text-primary leading-tight">
              같이 일할 퍼블리셔를 찾고 계신가요?
            </h2>

            <p className="mt-4 text-base text-text-secondary">
              <TypeWrite
                text={`일정이 흔들리지 않게 작업 범위를 정리하고,
공통 UI와 체크리스트로 품질을 맞춰드립니다.
편하게 연락 주세요.`}
              />
            </p>

            <div className="mt-7 rounded-2xl border border-line bg-accent-soft p-5">
              <p className="text-sm font-semibold text-text-secondary">
                빠른 연락을 원하시면
              </p>
              <p className="mt-2 text-sm text-text-secondary leading-6">
                아래 폼에{" "}
                <span className="font-semibold text-text-primary">이메일</span>
                을 남겨주시면 회신드릴게요. <br />
                (프로젝트/업무 형태, 일정이 정해져 있으면 함께 적어주시면
                좋아요.)
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-line bg-white p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm font-semibold text-text-secondary">
                    * 이름
                  </span>
                  <input
                    name="name"
                    type="text"
                    placeholder="이름을 입력해주세요"
                    className="mt-2 w-full rounded-2xl border border-line bg-base-background px-4 py-3
                               text-text-primary placeholder:text-text-muted outline-none
                               focus:border-accent"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-text-secondary">
                    * 연락처/이메일
                  </span>
                  <input
                    name="contact"
                    type="text"
                    placeholder="연락처 또는 이메일을 입력해주세요"
                    className="mt-2 w-full rounded-2xl border border-line bg-base-background px-4 py-3
                               text-text-primary placeholder:text-text-muted outline-none
                               focus:border-accent"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-sm font-semibold text-text-secondary">
                  * 메시지
                </span>
                <textarea
                  name="message"
                  placeholder="어떤 프로젝트인지, 필요한 범위/일정/참고 링크가 있으면 함께 적어주세요."
                  className="mt-2 w-full min-h-[140px] rounded-2xl border border-line bg-base-background px-4 py-3
                             text-text-primary placeholder:text-text-muted resize-none outline-none
                             focus:border-accent"
                />
              </label>

              {errorMsg && (
                <p className="text-sm font-semibold text-red-600">{errorMsg}</p>
              )}

              {loading ? (
                <motion.div
                  animate="pulse"
                  variants={dotVariants}
                  className="flex justify-center"
                >
                  <StyleSheet />
                </motion.div>
              ) : doneMsg ? (
                <p className="text-green-600 font-semibold">{doneMsg}</p>
              ) : (
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-accent px-5 py-3 text-white font-semibold hover:bg-accent-hover transition"
                >
                  메시지 보내기
                </button>
              )}

              <div className="pt-4 border-t border-line flex items-center justify-between gap-4 text-sm text-text-secondary">
                <p>Blog / GitHub도 같이 확인하실 수 있어요.</p>
                <div className="flex gap-3">
                  <a
                    className="w-11 h-11 grid place-items-center rounded-2xl border border-line bg-base-background"
                    href="https://bom-na.tistory.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Blog"
                  >
                    <Image
                      src="/icons/footer-icon1.svg"
                      alt="blog"
                      width={22}
                      height={22}
                    />
                  </a>
                  <a
                    className="w-11 h-11 grid place-items-center rounded-2xl border border-line bg-base-background"
                    href="https://github.com/minji7901"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Image
                      src="/icons/footer-icon2.svg"
                      alt="github"
                      width={22}
                      height={22}
                    />
                  </a>
                </div>
              </div>
            </form>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted"
        >
          <div className="flex items-center gap-3">
            <p className="font-semibold text-text-secondary">
              © Made in Minji.
            </p>
          </div>

          <p className="text-center sm:text-right">
            빠르게 확인 후 답장드리겠습니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
