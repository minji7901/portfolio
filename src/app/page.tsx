import Header from "@/components/layout/Header";
import HomeSection from "@/components/sections/HomeSection";
import WorkSection from "@/components/sections/WorkSection";
import ClosingSection from "@/components/sections/ClosingSection";
import ProofSection from "@/components/sections/ProofSection";
import ProcessSection from "@/components/sections/ProcessSection";

const Home = () => {
  return (
    <>
      <Header />
      <HomeSection />
      <ProofSection />
      <WorkSection />
      <ProcessSection />
      <ClosingSection />
    </>
  );
};

export default Home;
