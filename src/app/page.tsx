import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandStrip from "@/components/BrandStrip";
import Services from "@/components/Services";
import Promise from "@/components/Promise";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Areas from "@/components/Areas";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandStrip />
        <Services />
        <Promise />
        <Pricing />
        <Process />
        <Areas />
        <Reviews />
        <Faq />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
