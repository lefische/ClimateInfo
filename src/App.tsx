import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Causes } from './components/sections/Causes';
import { GreenhouseEffect } from './components/sections/GreenhouseEffect';
import { Hero } from './components/sections/Hero';
import { Myths } from './components/sections/Myths';
import { Solutions } from './components/sections/Solutions';
import { TippingPoints } from './components/sections/TippingPoints';

export default function App() {
  return (
    <>
      <a
        href="#inhalt"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-amber-300 focus:px-4 focus:py-2 focus:font-semibold focus:text-slate-950"
      >
        Zum Inhalt springen
      </a>
      <Navbar />
      <main id="inhalt">
        <Hero />
        <GreenhouseEffect />
        <Causes />
        <TippingPoints />
        <Myths />
        <Solutions />
      </main>
      <Footer />
    </>
  );
}
