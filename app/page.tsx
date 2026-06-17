import Stats from "../components/Stats";
import Hero from "../components/Hero";
import ChoosePath from "../components/choosePath";
import HowItWorks from "../components/HowItworks";
import Footer from "../components/Footer";
import CaseStudies from "../components/caseStudies";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import TrustBar from "../components/TrustBar";

export default function Home() {
  return (
    <>

      <main>
        <Hero />
        <TrustBar />
        <Stats />
        <ChoosePath />
        <HowItWorks />
        <CaseStudies />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}