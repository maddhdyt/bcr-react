import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'; // Import arrow icons
import Container from '../layouts/Container';

interface FaqItem {
   question: string;
   answer: string;
}

const faqList: FaqItem[] = [
   {
      question: 'Apa saja syarat yang dibutuhkan?',
      answer: 'Syarat yang dibutuhkan adalah ...',
   },
   {
      question: 'Berapa hari minimal sewa mobil lepas kunci?',
      answer: 'Minimal sewa mobil lepas kunci adalah ...',
   },
   {
      question: 'Berapa hari sebelumnya sebaiknya booking sewa mobil?',
      answer: 'Sebaiknya melakukan booking minimal 2 hari sebelumnya.',
   },
   {
      question: 'Apakah Ada biaya antar-jemput?',
      answer: 'Ya, ada biaya antar-jemput yang dapat ditanyakan pada pihak penyedia sewa mobil.',
   },
   {
      question: 'Bagaimana jika terjadi kecelakaan?',
      answer: 'Jika terjadi kecelakaan, segera hubungi pihak penyedia sewa mobil dan laporkan kejadian tersebut ke pihak berwajib.',
   },
];

const Faq: React.FC = () => {
   const [activeIndex, setActiveIndex] = useState<number | null>(null);

   const handleToggle = (index: number) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
   };

   return (
      <section className="mt-28">
         <Container>
            <div className="grid lg:grid-cols-5 gap-5">
               <div className="lg:col-span-2">
                  <h2 className="font-bold text-[24px]">Frequently Asked Questions</h2>
                  <p className="mt-6 text-gray-600 text-sm">Here are some common questions and answers.</p>
               </div>
               <div className="lg:col-span-3 flex flex-col gap-4">
                  {faqList.map((faq, index) => (
                     <div key={index} className="border p-4 rounded-md hover:shadow-md transition duration-300">
                        <div className="cursor-pointer flex items-center justify-between" onClick={() => handleToggle(index)}>
                           <h3 className="font-semibold text-sm">{faq.question}</h3>
                           {activeIndex === index ? (
                              <FaAngleUp size={20} />
                           ) : (
                              <FaAngleDown size={20} />
                           )}
                        </div>
                        {activeIndex === index && (
                           <div className="mt-2 text-gray-600 text-sm">{faq.answer}</div>
                        )}
                     </div>
                  ))}
               </div>
            </div>
         </Container>
      </section>
   );
};

export default Faq;
