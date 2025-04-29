import BusinessesChoose from "@/components/BusinessesChoose";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PricingCards from "@/components/PricingCard";
import Service from "@/components/Service";
import Image from "next/image";

export default function Home() {
  return (
<div>
  <Navbar />
  <HeroSection />
  <Service />
  <BusinessesChoose />
  <PricingCards />
</div>
  );
}
