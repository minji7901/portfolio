"use client";

import Image from "next/image";
import React, { useState } from "react";
import State from "@/components/ui/State";
import Button from "@/components/ui/Button";

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
      setErrorMsg("필수 항목을 모두 입력해 주세요");
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
      if (!res.ok) throw new Error(data?.error || "전송에 실패했습니다");

      setDoneMsg("전송되었습니다");
      form.reset();
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "전송 중 오류가 발생했습니다";
      setErrorMsg(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative pb-14 yellow">
      <div className="z-10 absolute left-1/2 -translate-x-1/2 -top-20 border-2 border-base-primary px-20 py-14 max-w-[1000px] mx-auto rounded-xl text-center bg-primary-light w-full">
        <State text="CONTACT" color="pink" />
        <p className="my-10 font-bold text-xl leading-8">
          사용자를 배려하는 <strong>마크업과 UI 구현</strong>을 좋아합니다.
          <br /> 좋은 인연으로 이어질 수 있다면 언제든지 연락 주세요.
        </p>
        <form onSubmit={handleSubmit}>
          <table className="text-left w-full mb-20">
            <tbody>
              <tr>
                <th>* 이름</th>
                <th>*연락처/이메일</th>
              </tr>
              <tr>
                <td>
                  <input
                    name="name"
                    className="border-b-2 border-base-primary w-[90%] bg-transparent p-1 mt-2 pb-2 placeholder:text-base-secondary outline-none"
                    type="text"
                    placeholder="이름을 입력해주세요"
                  />
                </td>
                <td>
                  <input
                    name="contact"
                    className="border-b-2 border-base-primary w-[90%] bg-transparent p-1 mt-2 pb-2 placeholder:text-base-secondary outline-none"
                    type="text"
                    placeholder="연락처 또는 이메일을 입력해주세요"
                  />
                </td>
              </tr>
              <tr>
                <th colSpan={2} className="pt-10">
                  * 메시지
                </th>
              </tr>
              <tr>
                <td colSpan={2}>
                  <textarea
                    name="message"
                    className="border-b-2 border-base-primary w-[95%] bg-transparent h-8 mt-2 px-1 placeholder:text-base-secondary resize-none outline-none"
                    placeholder="남기고 싶은 메시지를 작성해주세요"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          {errorMsg && (
            <p className="text-sm font-semibold text-red-600 mb-3">
              {errorMsg}
            </p>
          )}
          {doneMsg && (
            <p className="text-sm font-semibold text-green-700 mb-3">
              {doneMsg}
            </p>
          )}

          <Button
            text={loading ? "Sending..." : "Submit"}
            type="submit"
            disabled={loading}
          />
        </form>
      </div>
      <div className="max-w-container mx-auto w-full flex justify-between pt-[500px] items-center relative">
        <div className="absolute top-0 -left-32">
          <Image
            src="/icons/email-icon.svg"
            alt="icon"
            width={60}
            height={60}
            className="rotate-12"
          />
        </div>
        <div className="absolute bottom-40 -right-32">
          <Image
            src="/icons/star-icon.svg"
            alt="icon"
            width={60}
            height={60}
            className="-rotate-12"
          />
        </div>
        <p className="font-bold text-base-secondary">©Made in Minji.</p>
        <div className="flex gap-5">
          <a
            className="border-2 border-base-primary rounded-md bg-primary-light p-1"
            href="https://bom-na.tistory.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/footer-icon1.svg"
              alt="img"
              width={30}
              height={30}
              className=""
            />
          </a>
          <a
            className="border-2 border-base-primary rounded-md bg-primary-light p-1"
            href="https://github.com/minji7901"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/footer-icon2.svg"
              alt="img"
              width={30}
              height={30}
              className=""
            />
          </a>
          {/* <a
            className="border-2 border-base-primary rounded-md bg-primary-light p-1"
            href="https://www.notion.so/Frontend-Developer-2e2cd058617b8109a06bcb40b83cdd54?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/footer-icon3.svg"
              alt="img"
              width={30}
              height={30}
              className=""
            />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
