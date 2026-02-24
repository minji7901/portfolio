"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";
import State from "@/components/ui/State";
import Counter from "@/components/ui/Counter";
import ProfileImg from "@/assets/images/hero/profile-img.png";

const HomeSection = () => {

  return (
    <section className="yellow pt-0" id="home">
      <div className="max-w-container mx-auto pt-[210px]">
        <div className="flex justify-between items-center">
          <div>
            <State text="WEB PUBLISHER" color="green" />
            <div className="relative">
              <p className="font-bold text-6xl my-7 leading-[1.2]">
                Web Publisher
                <span className="block mt-6 text-4xl leading-[3rem]">
                  운영을 기준으로 설계합니다. <br /> 유지보수에 강한 구조로
                  구현합니다.
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

            <div className="mt-8 flex gap-4 text-center">
              <div className="border border-navi rounded-2xl px-5 py-4 bg-white/40">
                <p className="text-3xl font-extrabold leading-none">
                  <Counter to={3} suffix="년+" />
                </p>
                <p className="text-sm text-base-secondary mt-2">
                  실무 퍼블리싱 경험
                </p>
              </div>
              <div className="border border-navi rounded-2xl px-5 py-4 bg-white/40">
                <p className="text-3xl font-extrabold leading-none">
                  <Counter to={200} suffix="+" />
                </p>
                <p className="text-sm text-base-secondary mt-2">페이지 구현</p>
              </div>
              <div className="border border-navi rounded-2xl px-5 py-4 bg-white/40">
                <p className="text-3xl font-extrabold leading-none">
                  <Counter to={10} suffix="개+" />
                </p>
                <p className="text-sm text-base-secondary mt-2">
                  단독 프로젝트 수행
                </p>
              </div>
            </div>

            <ul className="my-8 text-xl text-base-secondary space-y-2">
              <li>- 반응형·접근성·일관성 기준으로 UI를 구현합니다.</li>
              <li>
                - 컴포넌트/SCSS 구조화를 통해 재사용성과 유지보수성을 높입니다.
              </li>
              <li>- 빈 데이터·예외 상황을 고려해 UI를 설계합니다.</li>
            </ul>

            <div className="flex gap-5">
              <Button
                text="View Work"
                onClick={() => {
                  document.getElementById("work")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              />
              <Button
                text="Experience"
                onClick={() => {
                  document.getElementById("experience")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              />
            </div>
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

export default HomeSection;
