import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/ui/TrustBar";
import { OrdinaryToMagical } from "@/components/OrdinaryToMagical";
import { Feelings } from "@/components/Feelings";
import { DesignedForYou } from "@/components/DesignedForYou";
import { Benefits } from "@/components/Benefits";
import { DailyReset } from "@/components/DailyReset";
import { Framework } from "@/components/Framework";
import { Mentors } from "@/components/Mentors";
import { NoRituals } from "@/components/NoRituals";
import { WorkshopExperience } from "@/components/WorkshopExperience";
import { WhatYouWillLearn } from "@/components/WhatYouWillLearn";
import { Bonuses } from "@/components/Bonuses";
import { Testimonials } from "@/components/Testimonials";
import { WhyJoin } from "@/components/WhyJoin";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

export default function HomePage() {
  return (
    <>
      <main className="pb-20 sm:pb-0">
        <Hero />
        <TrustBar />
        <OrdinaryToMagical />
        <Feelings />
        <DesignedForYou />
        <Benefits />
        <DailyReset />
        <Framework />
        <Mentors />
        <NoRituals />
        <WorkshopExperience />
        <WhatYouWillLearn />
        <Bonuses />
        <Testimonials />
        <WhyJoin />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
