import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
    {
        company: 'Badan Pertanahan Nasional',
        period: '2019 - 2019',
        description: 'Bertanggung jawab dalam instalasi komputer, pengaturan server, dan optimasi jaringan untuk memastikan performa serta keamanan yang optimal di lingkungan kantor. Melakukan konfigurasi perangkat IP, pemetaan jaringan, dan troubleshooting konektivitas untuk menjaga operasional jaringan tetap lancar.',
      },
      {
        company: 'Infinite Learning',
        period: '2023 - 2023',
        description: 'Belajar secara mandiri dan meraih kesuksesan dengan lulus ujian sertifikasi RHCSA EX200 Red Hat Linux, yang menunjukkan kemahiran sebagai administrator sistem. Melakukan tugas akhir tentang keamanan siber dan AI,  dan projek menggunakan service Watson Studio untuk pembuatan website berfitur chatbot.',
      },
      {
        company: 'PT. Surya Citra Media, Tbk',
        period: '2023 - 2023',
        description: 'Memelihara perangkat keras dan perangkat lunak dalam infrastruktur jaringan, termasuk server, perangkat penyimpanan, switch, router, dan peralatan jaringan lainnya, serta menangani masalah teknis yang muncul untuk memastikan kinerja jaringan tetap optimal. Melakukan instalasi dan konfigurasi perangkat jaringan seperti router dan switch untuk mendukung konektivitas dan komunikasi antar perangkat dengan fokus pada stabilitas dan kehandalan.',
      },
]



const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] mx-auto'>
        <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
        <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
        >
            {experiences.map((experience, index) => (
                <Reveal>
                <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3}}
                    transition={{ duration: 1}}
                    className=' border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
                >
                    <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
                    <p className='text-gray-300'>{experience.period}</p>
                    <p className='text-gray-400 mt-4'>{experience.description}</p>


                </motion.div>
                </Reveal>
            ))}

        </motion.div>
        

    </div>
  )
}

export default Experience