import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ProfessionalPortfolio from "@/components/ProfessionalPortfolio";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <ProfessionalPortfolio />
      <Footer />
    </>
  );
}
