import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DashboardPreview from "../components/DashboardPreview";
import Features from "../components/Features";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main className="relative "> 
        <Hero />
        <DashboardPreview />
        <Features />
        <Statistics />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
     <Footer/>
    </div>
  );
};

export default Home;