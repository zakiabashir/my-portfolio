import About from "./component/about";
import Hero from "./component/hero";
import Portfolio from "./component/portfolio";
import Service from './component/service';

import Contact from "./component/contact";
import Skills from "./component/skill";


export default function Home() {
  return (
   <div>
 <Hero/>
 <About/>
 <Service/>
 <Skills/>
 <Portfolio/>
 <Contact/>
   </div>
  );
}