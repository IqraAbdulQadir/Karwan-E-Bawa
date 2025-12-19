export function Verse() {
return (
<section className="relative w-full h-[70vh] flex items-center justify-center bg-black overflow-hidden">
<div className="absolute inset-0 bg-[url('/images/kaaba-close.jpg')] bg-cover bg-center opacity-40" />
<div className="absolute inset-0 bg-black/70" />


<div className="relative z-10 max-w-4xl px-6 text-center">
<p className="text-2xl md:text-3xl text-white font-light leading-loose">
وَمَن دَخَلَهُ كَانَ آمِنًا
</p>
<p className="mt-6 text-sm md:text-base text-yellow-400">
And whoever enters it shall be safe.
</p>
</div>
</section>
);
}