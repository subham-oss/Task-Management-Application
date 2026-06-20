import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DashboardPreview from "../components/DashboardPreview";
import Features from "../components/Features";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";

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
      <footer className="text-center py-8 opacity-50 text-sm">
        © {new Date().getFullYear()} TaskFlow. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;