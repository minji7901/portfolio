import Header from "@/components/layout/Header";
import HomeSection from "@/components/sections/HomeSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import WorkSection from "@/components/sections/WorkSection";
import ContactSection from "@/components/sections/ContactSection";

 const Home = () => {
  return (
    <>
      <Header />
      <HomeSection />
      <WorkSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}

export default Home;