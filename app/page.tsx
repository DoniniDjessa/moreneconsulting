import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TextualShowcase from "@/components/TextualShowcase";
import Portfolio from "@/components/Portfolio";
import MarqueeGroup from "@/components/MarqueeGroup";
import WhyChooseUs from "@/components/WhyChooseUs";
import Solutions from "@/components/Solutions";
import LeadGen from "@/components/LeadGen";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import PreFooter from "@/components/PreFooter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <MarqueeGroup />
      <WhyChooseUs />
      <About />
      <Services />
      {/* <TextualShowcase /> */}
      <Portfolio />
      <Solutions />
      <LeadGen />
      <Testimonials />
      <FAQ />
      <PreFooter />
      <Footer />
    </main>
  );
}
