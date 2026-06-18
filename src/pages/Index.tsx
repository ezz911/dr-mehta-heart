import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import About from "@/components/site/About";
import Credentials from "@/components/site/Credentials";
import Testimonials from "@/components/site/Testimonials";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

const Index = () => (
    <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Credentials />
        <Testimonials />
        <Contact />
        <Footer />
    </main>main>
  );

export default Index;</main>
