import React from "react";
import Image from "next/image";
import State from "@/components/ui/State";
import ProfileImg from "@/assets/images/hero/profile-img.png";

const ExperienceSection = () => {
  return (
    <section id="experience" className="pb-[300px]">
      <div className="max-w-container mx-auto">
        <div className="flex justify-center items-center gap-32">
          <div className="relative">
            <div className="w-[400px] h-[400px] rounded-full border-base-primary border-2  overflow-hidden">
              <Image src={ProfileImg} alt="profile image" />
            </div>
            <a
              href="https://bom-na.tistory.com/"
              target="_blank"
              className="w-28 aspect-square grid place-items-center absolute top-0 right-0 border-2 border-base-primary rounded-full bg-white"
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
          <div className="relative">
            <State text="ABOUT" color="pink" />
            <div className="absolute -bottom-5 -right-32">
              <Image
                src="/icons/heart-icon.svg"
                alt="icon"
                width={50}
                height={40}
              />
            </div>
            <p className="my-3 font-semibold text-2xl">More about me</p>
            <p className=" text-lg leading-8">
              웹 퍼블리셔 김민지입니다. <br />
              <br />
              다양한 프로젝트 환경에서 <br />
              디자이너·개발자·PM과 협업하며 <br />
              화면 구현, 컴포넌트화, 유지보수까지 경험해왔습니다.
              <br /> <br />
              “보이는 그대로”를 넘어 <br />
              재사용 가능한 구조와 일관된 스타일 가이드를 만들고, <br />
              접근성/반응형/크로스브라우징까지 꼼꼼히 챙기는 퍼블리셔를
              지향합니다.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-20 -left-32">
            <Image
              src="/icons/shop-icon.svg"
              alt="icon"
              width={50}
              height={40}
            />
          </div>
          <ul className="m-auto mt-32 max-w-[960px] dot">
            <li className="flex pb-10 gap-20">
              <strong className="w-32 text-right text-lg">2025</strong>
              <div>
                <strong className="text-lg">Freelance Web Publisher</strong>
                <p className="pt-3  leading-7">
                  퍼블리싱 프리랜서 프로젝트를 단독 수행하며 <br />
                  페이지/컴포넌트 단위로 작업 우선순위를 조율하고, 일정에 맞춰
                  안정적으로 산출물을 납품했습니다. <br />
                  계약된 일정 대비 약 한 달 빠르게 마무리하며, 이슈 대응과
                  품질(반응형/호환성) 관리를 병행한 경험이 있습니다.
                  <br />
                  이를 통해 “빠르게”가 아니라 “예측 가능하게” 일정과 리스크를
                  관리하는 습관을 갖추게 되었습니다.
                </p>
              </div>
            </li>
            <li className="flex pb-10 gap-20">
              <strong className="w-32 text-right text-lg">2022 - 2024</strong>
              <div>
                <strong className="text-lg">Web Publisher</strong>
                <p className="pt-3  leading-7">
                  다수의 웹 프로젝트에서 퍼블리셔로 참여하며 15개 이상의
                  사이트를 단독 퍼블리싱했습니다.
                  <br />
                  PM·디자이너·개발자 간 커뮤니케이션을 주도하며 요구사항을
                  정리하고, 일정/작업 범위를 조율했습니다.
                  <br />
                  SCSS 기반 스타일 구조를 설계해 코드 재사용성과 유지보수성을
                  개선했고,
                  <br />
                  반복 작업을 컴포넌트화/템플릿화하여 기존 약 7일 소요되던
                  작업을 2~3일 내로 단축하는 등 생산성을 크게 끌어올렸습니다.
                </p>
              </div>
            </li>
            <li className="flex pb-10 gap-20">
              <strong className="w-32 text-right text-lg">2021 - 2022</strong>
              <div>
                <strong className="text-lg">Web Publisher</strong>
                <p className="pt-3  leading-7">
                  외부 개발사 및 YBM과 협업하는 프로젝트에서 퍼블리싱을
                  담당했습니다. <br />
                  사수와 교대 근무 형태로 운영 이슈를 대응하며, 일정 내 배포를
                  목표로 화면 수정/버그픽스/QA 대응을 경험했습니다. <br />이
                  시기를 통해 협업 프로세스에서의 책임감과 기본기를 탄탄히 다질
                  수 있었습니다.
                </p>
              </div>
            </li>
          </ul>
          <div className="absolute -bottom-40 right-32">
            <Image
              src="/icons/arrow-icon.svg"
              alt="icon"
              width={150}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
