import BusinessesChoose from "@/components/BusinessesChoose";
import Footer from "@/components/Footer";
import Helpful from "@/components/Helpful";
import HeroSection from "@/components/HeroSection";
import ImageSection from "@/components/ImageSection";
import Navbar from "@/components/Navbar";
import PricingCards from "@/components/PricingCard";
import Professional from "@/components/professional";
import Service from "@/components/Service";
import Stayinformed from "@/components/Stayinformed";
import Testimonials from "@/components/Testimonials";
import ValuePropositions from "@/components/ValuePropositions";
import Image from "next/image";

export default function Home() {
  return (
<div>
  <Navbar />
  <HeroSection />
  <Service />
  <BusinessesChoose />
  <ImageSection />
  <PricingCards />
  <ValuePropositions />
  <Testimonials />
  <Professional />
  <Stayinformed />
  <Helpful />
  <Footer />

</div>
  );
}
