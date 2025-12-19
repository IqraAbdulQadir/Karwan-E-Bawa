"use client";


import { motion } from "framer-motion";


export default function Hero() {
return (
<section className="relative w-full h-screen overflow-hidden">
<video
className="absolute inset-0 w-full h-full object-cover"
src="/images/umrah3.mp4"
autoPlay
muted
loop
playsInline
/>


<div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />


<div className="relative z-10 h-full flex items-end px-6 pb-24">
<div className="max-w-3xl">
<motion.p
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1, delay: 0.2 }}
className="text-sm md:text-base text-gray-300 tracking-wide"
>
When Allah invites you…
</motion.p>


<motion.h1
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1, delay: 0.6 }}
className="mt-4 text-4xl md:text-6xl font-semibold text-white leading-tight"
>
The Journey Begins
</motion.h1>


<motion.p
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1, delay: 1.1 }}
className="mt-6 text-sm md:text-base text-gray-300"
>
Umrah with Karwan e Bawa
</motion.p>
</div>
</div>
</section>
);
}