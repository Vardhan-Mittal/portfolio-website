import CustomCursor from "./components/shared/CustomCursor";
import Footer from "./components/shared/Footer";
import Hero from "./components/shared/Hero";
import Projects from "./components/shared/Projects";
import Achievements from "./components/shared/Achievements";
import Skills from "./components/shared/Skills";
import Timeline from "./components/shared/Timeline";
import { TracingBeam } from "./components/ui/TracingBeam";
import Navbar from "./components/shared/Navbar";
import { Modal } from "./components/ui/animated-modal";
import ModalForm from "./components/shared/ModalForm";

const App = () => {
  return (
    <>
      <CustomCursor />
      <Modal>
        <main className="min-h-screen w-full bg-background text-foreground transition-colors duration-300 max-sm:p-1 max-sm:pt-14 max-sm:px-1 selection:bg-cyan-500 selection:text-black">
          <Navbar />
          <TracingBeam>
            <Hero />
            <Timeline />
            <Projects />
            <Achievements />
            <Skills />
            <Footer />
          </TracingBeam>
        </main>
        <ModalForm />
      </Modal>
    </>
  );
};

export default App;
