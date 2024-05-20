import Image from "next/image";
import Header from "./components/Header";
import QuantityPriceModule from "./components/QuantityPriceModule";
import AIGNMachine from "./components/AIGNMachine";
import AboutAccordion from "./components/AboutAccordion";
import Footer from "./components/Footer";
import { createThirdwebClient } from "thirdweb";

export default function Home() {
  // Page is a Next convention which works like index.
  // https://nextjs.org/docs/app/building-your-application/routing/pages

  const client = createThirdwebClient({
    clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID as string,
  });

  return (
    <>
      <Header client={client} />
      <main className="main-content">
        <QuantityPriceModule />
        <AIGNMachine />
        <section className="gms-section">
            <h1>GMs</h1>
            <h3 id="totalMinted">Minted: 0</h3>
            <div id="gmGallery"></div>
        </section>
        <section className="gm-leaderboard-section">
            <h1>GM Leaderboard</h1>
            <ul id="leaderboardList"></ul>
            <button id="seeMoreButton1" className="see-more-btn">See More</button>
        </section>
        <AboutAccordion />
      </main>
      <Footer />
    </>
  );
}
