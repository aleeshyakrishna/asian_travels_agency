import React from "react";
import BannerSection from "./_components/Home/BannerSection";
import MoreInfo from "./_components/Home/MoreInfo";
import VisaServices from "./_components/Home/VisaServices";
import SaudiSection from "./_components/Home/SaudiSection";
export default function Home() {
  return (
    <section className="relative ">
      <BannerSection />
      <MoreInfo />
      <VisaServices />
      <SaudiSection />
    </section>
  );
}
