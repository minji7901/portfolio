import React from "react";
import Image from "next/image";
import State from "@/components/ui/State";
import ProfileImg from "@/assets/images/hero/profile-img.png";

const AboutSection = () => {
  return (
    <section id="about" className="">
      <div className="max-w-container mx-auto">
        <div className="flex justify-center items-center gap-32">
          <div className="relative">
            <div className="w-[400px] h-[400px] rounded-full border-base-primary border-2  overflow-hidden">
              <Image src={ProfileImg} alt="profile image" />
            </div>
            <a
              href="https://bom-na.tistory.com/"
              target="_blank"
              className="w-28 aspect-square grid place-items-center absolute top-0 right-0 border-2 border-base-primary rounded-full bg-primary"
            >
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full animate-spin-slow"
                aria-hidden="true"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 100,100 m -72,0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
                  />
                </defs>
                <text className="fill-base-primary tracking-[9px] font-bold text-2xl">
                  <textPath
                    href="#circlePath"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    ✦ Go ✦ to ✦ my ✦ blog
                  </textPath>
                </text>
              </svg>
              <Image
                src="/icons/arrow-right.svg"
                alt="img"
                width={30}
                height={30}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </a>
          </div>
          <div>
            <State text="ABOUT" color="pink" />
            <p className="my-3 font-semibold text-2xl">More about me</p>
            <p className="text-base-secondary text-lg leading-8">
              웹 프론트엔드 개발자이자 웹 퍼블리셔 김민지입니다. <br />
              <br />
              팀 프로젝트와 프리랜서 경험을 통해 <br />
              다양한 사람들과 협업하며 작업해왔고, <br />
              의사소통과 커뮤니티 환경에 익숙합니다.
              <br /> <br />
              현재에 머무르기보다, <br />
              작은 개선을 꾸준히 쌓아가며 성장하는 개발자를 목표로 하고
              있습니다.
            </p>
          </div>
        </div>
        <ul className="m-auto mt-32 max-w-[960px] dot">
          <li className="flex pb-10 gap-20">
            <strong className="w-32 text-right text-lg">2025</strong>
            <div>
              <strong className="text-lg">
                Frontend Junior Developer & Freelance Publisher
              </strong>
              <p className="pt-3 text-base-secondary leading-7">
                SI 회사에서 프론트엔드 주니어 개발자로 근무하며 프론트엔드
                개발을 담당하였습니다. <br />
                그리고 퍼블리셔 프리랜서 프로젝트를 수행하여, 계약된 일정보다 한
                달 빠르게 작업을 마무리한 경험이 있습니다.
                <br />
                이런 경험들을 통해서 작업 우선순위를 조율하고, 일정 관리의
                중요성을 체득했습니다.
              </p>
            </div>
          </li>
          <li className="flex pb-10 gap-20">
            <strong className="w-32 text-right text-lg">2022 - 2024</strong>
            <div>
              <strong className="text-lg">Web Publisher</strong>
              <p className="pt-3 text-base-secondary leading-7">
                다수의 웹 프로젝트에서 퍼블리셔로 참여하며 15개 이상의 사이트를
                단독으로 퍼블리싱했습니다.
                <br />
                PM, 디자이너, 개발자 간의 소통을 주도하며 작업 흐름을 정리하고
                일정을 조율하는 역할을 맡았습니다. <br />
                SCSS 기반의 스타일 구조를 설계해 코드 재사용성과 유지보수성을
                개선했고, <br />
                기존에 약 7일이 소요되던 프로젝트를 2-3일 내로 완료하며 작업
                생산성을 약 70% 이상 향상시켰습니다.
              </p>
            </div>
          </li>
          <li className="flex pb-10 gap-20">
            <strong className="w-32 text-right text-lg">2021 - 2022</strong>
            <div>
              <strong className="text-lg">Web Publisher</strong>
              <p className="pt-3 text-base-secondary leading-7">
                외부 개발사 및 YBM과 협업하는 프로젝트에 참여하며 퍼블리싱
                업무를 수행했습니다. <br />
                사수와의 교대 근무를 통해 프로젝트를 안정적으로 운영했고, <br />
                일정 내 배포를 목표로 이슈 대응과 작업 관리를 경험했습니다.{" "}
                <br /> 이 시기를 통해 협업 환경에서의 책임감과 기본기를 다질 수
                있었습니다.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
