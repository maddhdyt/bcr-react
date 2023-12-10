import Navbar from "../components/Navbar";
import Container from "../layouts/Container";
import image from "../assets/Mercedes Car EQC 300kW Edition - 900x598 1.png"

export default function Header() {
   return (
      <>
         <header className="relative bg-[#F1F3FF]">
            <Container>
               <Navbar />
               <div className="header-content grid lg:grid-cols-2 max-sm:gap-16 items-center pt-5 pb-10">
                  <div>
                     <h1 className="font-bold lg:text-[36px]">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                     <p className="mt-4 text-[#444] text-sm w-[70%]">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                     <a href="/search" className="block bg-[#5CB85F] px-3 py-2 text-white font-semibold w-fit mt-[16px]">Mulai Sewa Mobil</a>
                  </div>
                  <div className="z-10">
                     <img src={image} alt="" />
                  </div>
               </div>
            </Container>
            <div className="absolute w-screen left-0 bottom-0 grid lg:grid-cols-2 pointer-events-none">
               <div></div>
               <div className="bg-[#0D28A6] w-full h-[243px] rounded-tl-[60px]">
                     
               </div>
            </div>
         </header>
      </>
   )
}