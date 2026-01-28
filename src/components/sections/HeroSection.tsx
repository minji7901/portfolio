"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";
import State from "@/components/ui/State";
import ProfileImg from "@/assets/images/hero/profile-img.png";

const HeroSection = () => {
  return (
    <section className="yellow pt-0" id="hero">
      <div className="max-w-container mx-auto pt-[210px]">
        <div className="flex justify-between items-center">
          <div>
            <State text="HELLO :)" color="green" />
            <div className="relative">
              <p className="font-bold text-6xl my-7 leading-[1.2]">
                Hi, I&apos;m Minji
                <br />
                Frontend Developer
              </p>
              <div className="absolute top-0 right-32">
                <Image
                  src="/icons/heart-icon.svg"
                  alt="icon"
                  width={100}
                  height={80}
                />
              </div>
            </div>
            <p className="mb-7 text-2xl text-base-secondary">
              I&apos;m a front-end developer with experience developing <br />
              Next.js-based services and hands-on publishing collaboration.
            </p>

            <Button
              text="More About Me"
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({
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
