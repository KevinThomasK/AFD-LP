import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Home1 from "@/components/homes/home-1";
import dynamic from "next/dynamic";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
import Hero1 from "@/components/homes/home-1/heros/Hero1";

import { mainDemoOnepage } from "@/data/menu";
import StickyModal from "@/components/homes/StickyModal";

export const metadata = {
  title: "afdindia",
  description: "afdindia",
};
export default function Home1MainDemoOnepage() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
            <Header1 links={mainDemoOnepage} />
          </nav>
          <main id="main">
            <ParallaxContainer
              className="home-section bg-gray-light-1 bg-light-alpha-90 parallax-5 parallax-mousemove-scene scrollSpysection"
              style={{
                // background: "yellow",
                backgroundImage: "url(/assets/images/afd/three.jpg)",
              }}
              id="home"
            >
              <Hero1 />
            </ParallaxContainer>
            <Home1 onePage />
          </main>
          <Footer1 />
          <StickyModal />
        </div>{" "}
      </div>
    </>
  );
}
