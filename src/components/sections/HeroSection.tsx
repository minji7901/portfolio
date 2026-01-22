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
            <p className="font-bold text-6xl my-7 leading-[1.2]">
              Hi, I’m Kim Min Ji,
              <br />
              Frontend Developer
            </p>
            <p className="mb-7 text-2xl text-base-secondary">
              I'm a front-end developer with experience developing <br />{" "}
              Next.js-based services and hands-on publishing collaboration.
            </p>
            {/* TODO: 밑에 버튼때문에 use client, 나중에 분리할지 고민해볼것. */}
            <Button
              text="More About Me"
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            />
          </div>
          <div className="border-2 border-base-primary rounded-[100%_100%_30px_30px] w-[400px] h-[500px] overflow-hidden">
            <Image src={ProfileImg} alt="profile image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
