import Clients from "./components/Clients";
import FeedbackSection from "./components/FeedbackSection";
import Hero from "./components/Hero";
import ShareSection from "./components/ShareSection";

export default function Home() {
  return (
      <main>
        <Hero/>
        <Clients/>
        <ShareSection/>
        <FeedbackSection/>
      </main>
  );
}
