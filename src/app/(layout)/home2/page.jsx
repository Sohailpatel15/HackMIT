import About from "./_components/About";
import Contact from "./_components/Contact";
import Features from "./_components/Features";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import Story from "./_components/Story";



const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      {/* <Contact /> */}
      <Footer />
    </main>
  );
};

export default App;
