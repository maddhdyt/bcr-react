import Container from "../layouts/Container";

export default function Footer () {
   return (
      <>
         <footer className="mt-28">
            <Container>
               <div className="flex max-sm:gap-10 max-sm:flex-wrap justify-between">
                  <div className="max-sm:w-full col-1 flex flex-col gap-4">
                     <p className="text-sm font-light">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                     <p className="text-sm font-light">binarcarrental@gmail.com</p>
                     <p className="text-sm font-light">081-233-334-808</p>
                  </div>
                  <div className="max-sm:w-full col-2 flex flex-col gap-4">
                     <a href="#" className="block text-sm font-semibold text-black">Our services</a>
                     <a href="#" className="block text-sm font-semibold text-black">Why Us</a>
                     <a href="#" className="block text-sm font-semibold text-black">Testimonial</a>
                     <a href="#" className="block text-sm font-semibold text-black">FAQ</a>
                  </div>
                  <div className="max-sm:w-full col-3">
                  <p className="text-sm font-light">Connect with us</p>
                  <div className="flex gap-4 lg:justify-between mt-4">
                     <div className="icon rounded-full bg-[#0D28A6] w-[32px] h-[32px]">

                     </div>
                     <div className="icon rounded-full bg-[#0D28A6] w-[32px] h-[32px]">

                     </div>
                     <div className="icon rounded-full bg-[#0D28A6] w-[32px] h-[32px]">

                     </div>
                     <div className="icon rounded-full bg-[#0D28A6] w-[32px] h-[32px]">

                     </div>
                     <div className="icon rounded-full bg-[#0D28A6] w-[32px] h-[32px]">

                     </div>
                  </div>
                  </div>
                  <div className="max-sm:w-full col-4">
                     <p className="text-sm font-light">Copyright Binar 2022</p>
                     <div className="w-[100px] h-[34px] bg-[#0D28A6] mt-4"></div>
                  </div>
               </div>
            </Container>
         </footer>
      </>
   )
}