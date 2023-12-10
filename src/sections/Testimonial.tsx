import Container from "../layouts/Container";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import testi2 from "../assets/img_photo (1).png";
import testi3 from "../assets/img_photo (2).png";
import rate from "../assets/Rate.png";



export default function Testimonial() {
   const [ref] = useKeenSlider<HTMLDivElement>(
      {
         breakpoints: {
            "(min-width: 400px)": {
               slides: { perView: 1, spacing: 10 },
            },
            "(min-width: 768px)": {
               slides: { perView: 2, spacing: 10 },
            },
            "(min-width: 1000px)": {
               slides: { perView: 2, spacing: 10 },
            },
         },
         slides: { perView: 1 },
         loop: true,
      },
   )
   return (
      <>
         <section className="mt-28">
            <Container>
               <div className="flex items-center flex-col">
                  <h2 className="font-bold text-[24px]">Testimonial</h2>
                  <p className="mt-4 text-gray-600 text-sm">Berbagai review positif dari para pelanggan kami</p>
               </div>
               <div ref={ref} className="keen-slider mt-5">
                  <div className="keen-slider__slide bg-[#F1F3FF] px-10 py-8 flex gap-12 rounded-xl">
                     <div className="rounded-full w-20 h-20 overflow-hidden flex-shrink-0">
                        <img src={testi2} alt="testi" />
                     </div>
                     <div>
                        <img src={rate} alt="" />
                        <p className="text-sm text-[#222] leading-[20px] mt-2">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                        <p className="mt-2 font-semibold text-sm">John Dee 32, Bromo</p>
                     </div>
                  </div>
                  <div className="keen-slider__slide bg-[#F1F3FF] px-10 py-8 flex gap-12 rounded-xl">
                     <div className="rounded-full w-20 h-20 overflow-hidden flex-shrink-0">
                        <img src={testi2} alt="testi" />
                     </div>
                     <div>
                        <img src={rate} alt="" />
                        <p className="text-sm text-[#222] leading-[20px] mt-2">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                        <p className="mt-2 font-semibold text-sm">John Dee 32, Bromo</p>
                     </div>
                  </div>
                  <div className="keen-slider__slide bg-[#F1F3FF] px-10 py-8 flex gap-12 rounded-xl">
                     <div className="rounded-full w-20 h-20 overflow-hidden flex-shrink-0">
                        <img src={testi3} alt="testi" />
                     </div>
                     <div>
                        <img src={rate} alt="" />
                        <p className="text-sm text-[#222] leading-[20px] mt-2">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                        <p className="mt-2 font-semibold text-sm">John Dee 32, Bromo</p>
                     </div>
                  </div>
               </div>
            </Container>
         </section>
      </>
   )
}