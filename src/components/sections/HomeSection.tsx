"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";
import State from "@/components/ui/State";
import ProfileImg from "@/assets/images/hero/profile-img.png";

const HeroSection = () => {
  return (
    <section className="yellow pt-0" id="home">
      <div className="max-w-container mx-auto pt-[210px]">
        <div className="flex justify-between items-center">
          <div>
            <State text="HELLO :)" color="green" />
            <div className="relative">
              <p className="font-bold text-6xl my-7 leading-[1.3]">
                Web Publisher
                <span className="block mt-6 text-4xl leading-[3rem]">
                  사용자 경험을 고려해 설계하고,
                  <br />
                  구조적으로 구현하는 퍼블리셔입니다.
                </span>
              </p>
              <div className="absolute top-5 -left-36">
                <Image
                  src="/icons/heart-icon.svg"
                  alt="icon"
                  width={100}
                  height={80}
                />
              </div>
            </div>
            <ul className="my-8 text-xl text-base-secondary space-y-2">
              <li>- 반응형 UI 설계 및 SCSS 구조화</li>
              <li>- 운영 환경을 고려한 유지보수 중심 마크업</li>
              <li>- 디자인 의도 1px까지 구현</li>
            </ul>
            <Button
              text="More About Me"
              onClick={() => {
                document.getElementById("experience")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            />
          </div>
          <div className="relative">
            <div className="border-2 border-base-primary rounded-[100%_100%_30px_30px] w-[400px] h-[500px] overflow-hidden">
              <Image src={ProfileImg} alt="profile image" />
            </div>
            <div className="absolute top-0 right-0">
              <Image
                src="/icons/star2-icon.svg"
                alt="icon"
                width={50}
                height={40}
              />
            </div>
            <div className="absolute -bottom-5 -right-32">
              <Image
                src="/icons/shop-icon.svg"
                alt="icon"
                width={50}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
