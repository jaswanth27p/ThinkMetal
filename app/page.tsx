import Archive from "./components/Archive";
import BetterFeadback from "./components/BetterFeadback";
import Clients from "./components/Clients";
import CTA from "./components/CTA";
import FeedbackSection from "./components/FeedbackSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Loop from "./components/loop";
import LovedBy from "./components/LovedBy";
import Review from "./components/Review";
import ShareSection from "./components/ShareSection";

export default function Home() {
  return (
      <main>
        <Hero/>
        <Clients/>
        <ShareSection/>
        <FeedbackSection/>
        <BetterFeadback/>
        <Archive/>
        <Review/>
        <LovedBy/>
        <Loop/>
        <CTA/>
        <Footer/>
      </main>
  );
}
