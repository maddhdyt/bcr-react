import { Icon } from "@iconify/react";
import Container from "../layouts/Container";

export function Why() {
   return (
      <>
         <section className="mt-28">
            <Container>
               <div>
                  <h2 className="font-bold text-[24px]">Why Us?</h2>
                  <p className="mt-6 text-gray-600 text-sm">Mengapa harus pilih Binar Car Rental?</p>
               </div>
               <div className="grid lg:grid-cols-4 gap-8 mt-7">
                  <div className="rounded-lg border border-[#ddd] p-6">
                     <div className="w-8 h-8 rounded-full text-white bg-yellow-500 flex items-center justify-center"><Icon icon="tabler:thumb-up" /></div>
                     <h4 className="text-[16px] font-bold mt-4">Mobil Lengkap</h4>
                     <p className="mt-4 text-sm">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                  </div>
                  <div className="rounded-lg border border-[#ddd] p-6">
                     <div className="w-8 h-8 rounded-full text-white bg-red-500 flex items-center justify-center"><Icon icon="majesticons:tag-line" /></div>
                     <h4 className="text-[16px] font-bold mt-4">Harga Murah</h4>
                     <p className="mt-4 text-sm">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                  </div>
                  <div className="rounded-lg border border-[#ddd] p-6">
                     <div className="w-8 h-8 rounded-full text-white bg-indigo-800 flex items-center justify-center"><Icon icon="ph:clock-bold" /></div>
                     <h4 className="text-[16px] font-bold mt-4">Layanan 24 Jam</h4>
                     <p className="mt-4 text-sm">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                  </div>
                  <div className="rounded-lg border border-[#ddd] p-6">
                     <div className="w-8 h-8 rounded-full text-white bg-green-500 flex items-center justify-center"><Icon icon="ph:medal" /></div>
                     <h4 className="text-[16px] font-bold mt-4">Sopir Profesional</h4>
                     <p className="mt-4 text-sm">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                  </div>
               </div>
            </Container>
         </section>
      </>
   )
}