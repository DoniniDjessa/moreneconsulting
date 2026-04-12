import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TextualShowcase from "@/components/TextualShowcase";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import Solutions from "@/components/Solutions";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import PreFooter from "@/components/PreFooter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <TextualShowcase />
      <Portfolio />
      <WhyChooseUs />
      <Solutions />
      <Testimonials />
      <FAQ />
      <CTA />
      <PreFooter />
      <Footer />
    </main>
  );
}
