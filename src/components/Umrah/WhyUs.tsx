// export function WhyUs() {
//   const cards = [
//     {
//       title: "Faith-First Planning",
//       front: "Your Umrah is planned around ibadah — not luxury or rush.",
//       back: "Hotel distance, travel timing, and schedules are chosen to reduce exhaustion and increase focus in salah, tawaf, and reflection.",
//     },
//     {
//       title: "Clarity Over Claims",
//       front: "We believe trust begins with honesty.",
//       back: "You are guided step by step with clear information, realistic timelines, and no hidden conditions or last-minute surprises.",
//     },
//     {
//       title: "Support That Stays",
//       front: "Our role doesn’t end after booking.",
//       back: "From preparation to your days in Makkah and Madinah, assistance is available whenever you need reassurance or help.",
//     },
//   ];

//   return (
//     <section className="w-full bg-white py-24 px-6">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center max-w-3xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
//             Why Perform Umrah with Karwan e Bawa
//           </h2>
//           <p className="mt-4 text-gray-600">
//             A service shaped by responsibility, sincerity, and understanding of the sacred journey.
//           </p>
//         </div>
//         <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
//           {cards.map((card, index) => (
//             <div key={index} className="group relative h-64 [perspective:1200px]">
//               <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
//                 <div className="absolute inset-0 flex flex-col justify-center items-center rounded-2xl border border-black bg-white p-8 text-center [backface-visibility:hidden]">
//                   <h3 className="text-xl font-medium text-yellow-600">{card.title}</h3>
//                   <p className="mt-4 text-sm text-black font-semibold">{card.front}</p>
//                 </div>
//                 <div className="absolute inset-0 flex flex-col justify-center items-center rounded-2xl bg-black p-8 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
//                   <p className="text-sm leading-relaxed text-gray-200">{card.back}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



export function WhyUs() {
return (
<section className="relative w-full bg-black text-yellow-400 py-32 px-6 overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-[url('/images/kaaba-pattern.png')] bg-cover bg-center" />


<div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl md:text-5xl font-semibold leading-tight tr">
This Is Not a Tour
</h2>
<p className="mt-8 text-lg text-gray-300 leading-relaxed">
This is not a vacation. This is not luxury travel. This is not a checklist of destinations.
</p>
<p className="mt-6 text-lg text-gray-300 leading-relaxed">
This is standing where prophets stood. This is walking with humility. This is answering a call that comes only by permission of Allah.
</p>
</div>


<div className="hidden md:block">
<p className="text-2xl font-light text-gray-400 leading-loose">
A journey of surrender.
<br />
A journey of intention.
<br />
A journey of return.
</p>
</div>
</div>
</section>
);
}