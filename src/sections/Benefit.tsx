import Container from "../layouts/Container";
import imgService from "../assets/img_service.png";
import { Icon } from '@iconify/react';
export default function Benefit() {
   return (
      <>
         <section>
            <Container>
               <div className="grid lg:grid-cols-2 gap-10 items-center mt-24">
                  <div>
                     <img className="w-[75%] mx-auto" src={imgService} alt="image" />
                  </div>
                  <div>
                     <h2 className="font-bold text-[24px]">Best Car Rental for any kind of trip in (Lokasimu)!</h2>
                     <p className="mt-6 text-gray-600 text-sm">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                     <ul className="flex flex-col gap-4 mt-4">
                        <li className="flex gap-2">
                           <div className="rounded-full w-6 h-6 bg-[#CFD4ED] flex items-center justify-center">
                              <Icon icon="mingcute:check-fill" className="text-[#0D28A6]" />
                           </div>
                           <p className="text-sm">Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                        </li>
                        <li className="flex gap-2">
                           <div className="rounded-full w-6 h-6 bg-[#CFD4ED] flex items-center justify-center">
                              <Icon icon="mingcute:check-fill" className="text-[#0D28A6]" />
                           </div>
                           <p className="text-sm">Sewa Mobil Lepas Kunci di Bali 24 Jam</p>                          
                        </li>
                        <li className="flex gap-2">
                           <div className="rounded-full w-6 h-6 bg-[#CFD4ED] flex items-center justify-center">
                              <Icon icon="mingcute:check-fill" className="text-[#0D28A6]" />
                           </div>
                           <p className="text-sm">Sewa Mobil Jangka Panjang Bulanan</p>                          
                        </li>
                        <li className="flex gap-2">
                           <div className="rounded-full w-6 h-6 bg-[#CFD4ED] flex items-center justify-center">
                              <Icon icon="mingcute:check-fill" className="text-[#0D28A6]" />
                           </div>
                           <p className="text-sm">Gratis Antar - Jemput Mobil di Bandara</p>                         
                        </li>
                     </ul>
                  </div>
               </div>
            </Container>
         </section>
      </>
   )
}