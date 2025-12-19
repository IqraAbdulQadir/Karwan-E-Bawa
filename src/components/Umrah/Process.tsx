export function Process() {
const steps = [
{
title: "Niyyah & Consultation",
text: "Every journey begins with intention. We listen first, advise gently, and help you align your plans with purpose.",
},
{
title: "Documentation & Preparation",
text: "Visas, bookings, and briefings handled with clarity so nothing distracts you later.",
},
{
title: "Departure & Arrival",
text: "From airport guidance to hotel check-in, you are never wondering what comes next.",
},
{
title: "While You Perform Umrah",
text: "Quiet support in the background. Present when needed, invisible when not.",
},
{
title: "Return With Ease",
text: "Your journey closes smoothly, leaving space for reflection, not fatigue.",
},
];


return (
<section className="w-full bg-black py-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="max-w-3xl mb-24">
<h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
Guided, Not Left Alone
</h2>
<p className="mt-6 text-lg text-gray-400">
Every step feels accompanied — never rushed, never abandoned.
</p>
</div>


<div className="relative">
<div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />


<div className="grid grid-cols-1 md:grid-cols-5 gap-16 relative">
{steps.map((step, index) => (
<div key={index} className="relative">
<div className="w-4 h-4 rounded-full bg-yellow-500 mx-auto" />


<div className="mt-10 text-center px-2">
<h3 className="text-lg font-medium text-white">
{step.title}
</h3>
<p className="mt-4 text-sm text-gray-400 leading-relaxed">
{step.text}
</p>
</div>
</div>
))}
</div>
</div>
</div>
</section>
);
}