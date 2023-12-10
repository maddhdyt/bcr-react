import Container from "../layouts/Container";

export default function Cta () {
   return (
      <>
         <section className="mt-28">
            <Container>
               <div className="bg-[#0D28A6] py-[64px] flex flex-col items-center rounded-xl">
                  <h1 className="text-white font-semibold text-[24px] lg:text-[36px]">Sewa Mobil di (Lokasimu) Sekarang</h1>
                  <p className="mt-4 text-white text-center lg:w-[468px] text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  <a href="/search" className="block bg-[#5CB85F] px-3 py-2 text-white font-semibold w-fit mt-[24px]">Mulai Sewa Mobil</a>
               </div>
            </Container>
         </section>
      </>
   )
}