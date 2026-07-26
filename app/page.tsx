import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { OrdinaryToMagical } from "@/components/OrdinaryToMagical";
import { Feelings } from "@/components/Feelings";
import { DesignedForYou } from "@/components/DesignedForYou";
import { Benefits } from "@/components/Benefits";
import { DailyReset } from "@/components/DailyReset";
import { Framework } from "@/components/Framework";
import { NoRituals } from "@/components/NoRituals";
import { WorkshopExperience } from "@/components/WorkshopExperience";
import { WhatYouWillLearn } from "@/components/WhatYouWillLearn";
import { Bonuses } from "@/components/Bonuses";
import { Testimonials } from "@/components/Testimonials";
import { Mentors } from "@/components/Mentors";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OrdinaryToMagical />
        <Feelings />
        <DesignedForYou />
        <Benefits />
        <DailyReset />
        <Framework />
        <NoRituals />
        <WorkshopExperience />
        <WhatYouWillLearn />
        <Bonuses />
        <Testimonials />
        <Mentors />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
