import About from "./components/About";
import CTA from "./components/CTA";
import Countdown from "./components/Countdown";
import Hero from "./components/Hero";
import Service from "./components/Service";
import SlideUpForm from "./components/SlideUpForm";

function App() {
  return (
    <div className="h-full w-full">
      <Hero />
      <About />
      <Service />
      <Countdown />
      <CTA
        title="Skip the Cook, Order In!"
        desc1="Order with a tap, get food delivered hot."
        desc2="Skip the hassle, feed your friends easily."
        desc3="Browse hundreds of restaurants near you."
        buttonText="Treat Yourself, Order Now!"
        actionUrl="/"
      />
      <SlideUpForm />
    </div>
  );
}

export default App;
