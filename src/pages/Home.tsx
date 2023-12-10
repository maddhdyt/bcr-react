import Benefit from "../sections/Benefit";
import Cta from "../sections/Cta";
import Faq from "../sections/Faq";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import Testimonial from "../sections/Testimonial";
import { Why } from "../sections/WhyUs";

export default function Home() {
   return (
      <>
         <Header />
         <Benefit />
         <Why />
         <Testimonial />
         <Cta />
         <Faq />
         <Footer />
      </>
   )
}