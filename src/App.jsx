import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-darkBg text-white font-sans min-h-screen overflow-x-hidden relative selection:bg-cyan-500 selection:text-black">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-700/10 rounded-full blur-[140px] -z-10 pointer-events-none"></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        
        {/* Navbar */}
        <header className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="flex font-black text-3xl tracking-tighter leading-none italic">
              <span className="text-cyan-400">T</span>
              <span className="text-white">/</span>
              <span className="text-cyan-400">L</span>
            </div>
            <div className="text-[9px] leading-tight font-bold tracking-wider text-gray-300 uppercase">
              Teknologi<br />Rekayasa Perangkat<br />Lunak
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-10 text-sm font-medium text-gray-300">
            <a href="#" className="text-white hover:text-cyan-400 transition">Home</a>
            <a href="#" className="hover:text-white transition">About</a>
            <a href="#" className="hover:text-white transition">Lecturer</a>
            <a href="#" className="hover:text-white transition">Workshop</a>
            <a href="#" className="hover:text-white transition">News</a>
          </nav>

          <button className="bg-[#1e2028] hover:bg-gray-800 text-gray-200 text-xs font-semibold px-6 py-2.5 rounded-full border border-gray-700/50 transition">
            Join Now
          </button>
        </header>

        {/* Hero Content Section */}
        <main className="mt-8 lg:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <h1 className="text-6xl sm:text-7xl lg:text-[5.25rem] font-serif tracking-tight leading-[1.05] text-white mb-6">
              Teknologi<br />
              Rekayasa<br />
              Perangkat<br />
              Lunak
            </h1>

            {/* Cards Container */}
            <div className="relative w-full h-[360px] mt-8 overflow-hidden"> 
              
              {/* Pink Card */}
              <div className="absolute top-0 left-0 w-[263.34px] h-[385px] bg-cardPink text-slate-900 p-6 rounded-[2rem] shadow-[0_30px_80px_rgba(242,160,149,0.18)] z-10 transition-all duration-500 hover:-translate-y-1 hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-white/95 rounded-full flex items-center justify-center shadow-sm shrink-0">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-slate-900" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 2 3 13h6v9l10-11h-6z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-sm leading-tight">Lorem Ipsum Sit Dolor Amet</h3>
                </div>
                <p className="text-[11px] font-medium leading-snug opacity-95">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.
                </p>
              </div>

              {/* Green/Cyan Card */}
              <div className="absolute top-32 left-[150px] sm:left-[180px] w-[263.34px] h-[335px] bg-cardCyan text-slate-900 p-6 rounded-[2rem] shadow-[0_30px_80px_rgba(77,228,190,0.18)] z-20 transition-all duration-500 hover:-translate-y-1 hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-white/95 rounded-full flex items-center justify-center shadow-sm shrink-0">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-slate-900" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 7.5 12 3l8 4.5v9L12 21 4 16.5v-9zm1.2 1.1L12 5.3l6.8 3.3v1.8L12 8.7 5.2 10.3v-1.7zm0 4.4 6.8 3.3 6.8-3.3v4.2L12 19.7 5.2 13.4v-1.4z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-sm leading-tight">Lorem Ipsum Sit Dolor Amet</h3>
                </div>
                <p className="text-[11px] font-medium leading-snug opacity-95">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 flex flex-col pt-2 lg:pl-6">
            
            <div className="mb-8">
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-md mb-5 font-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.
              </p>
              
              <button className="bg-gradient-to-r from-lime-400 to-yellow-400 text-slate-950 font-bold text-xs px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:opacity-95 transition transform hover:scale-105">
                Let's Explore
              </button>
            </div>

            {/* Terminal Mockup */}
            <div className="bg-[#12141a] border border-gray-800/80 rounded-2xl overflow-hidden shadow-2xl w-full max-w-lg mb-6">
              <div className="flex items-center justify-between px-4 py-3 bg-[#181a22] border-b border-gray-800/60">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
                </div>
                <div className="text-gray-400 text-xs font-mono flex items-center gap-1.5">
                  <span className="text-cyan-400 font-bold">{'>_'}</span> trpl-stack-architecture.ts
                </div>
                <button className="text-gray-500 hover:text-gray-300 text-xs transition">
                  <i className="fa-regular fa-copy"></i>
                </button>
              </div>
              
              <div className="p-5 font-mono text-xs leading-relaxed text-gray-200 overflow-x-auto">
                <div className="mb-4">
                  <span className="text-purple-400">import</span> {"{ "} <span className="text-yellow-300">getStrapiData</span> {" }"} <span className="text-purple-400">from</span> <span className="text-emerald-300">'@/lib/api'</span>;
                </div>
                <div>
                  <span className="text-purple-400">export async function</span> <span className="text-blue-400">getProdiOverview</span>() {"{"}<br />
                  &nbsp;&nbsp;<span className="text-purple-400">const</span> <span className="text-red-300">res</span> = <span className="text-purple-400">await</span> <span className="text-blue-400">fetch</span>(<span className="text-emerald-300">'https://trpl.kampus.ac.id/api/prodi'</span>);<br />
                  &nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-red-300">res</span>.<span className="text-blue-400">json</span>();<br />
                  {"}"}
                </div>
              </div>

              <div className="px-5 py-3 border-t border-gray-800/40 bg-[#14161f] flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Headless CMS API Connected
              </div>
            </div>

            {/* Stats Badge */}
            <div className="flex flex-col items-end w-full max-w-lg pr-4">
              <span className="text-gray-400 text-[11px] font-medium tracking-wide">Strapi v4 + PostgreSQL</span>
              <div className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white my-1 animate-pulse">
                500<span className="text-gray-400 font-light">+</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Total Active Students
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section className="relative z-30 -mt-32 w-full min-h-screen bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Kolom Kiri: Imej */}
          <div className="relative w-full">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Tentang Mahasiswa" 
              className="w-full h-[380px] object-cover rounded-tl-[2.5rem] rounded-bl-[2.5rem] rounded-br-[2.5rem] rounded-tr-md shadow-lg relative z-10"
            />
          </div>

          {/* Kolom Kanan: Teks & Statistik */}
          <div className="flex flex-col relative z-20">
            <h4 className="text-[17px] font-semibold text-black mb-2 tracking-wide">About</h4>
            
            <h2 className="text-5xl md:text-6xl font-serif text-black leading-[1.1] mb-5 tracking-tight">
              Software Engineer<br />Technology
            </h2>
            
            <p className="text-[13px] text-black/80 leading-[1.8] mb-10 max-w-lg font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.
            </p>

            {/* Statistik Bawah */}
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col">
                <div className="text-4xl md:text-[2.75rem] font-normal text-black mb-2 font-serif tracking-tight">500+</div>
                <div className="flex items-center gap-1.5 text-[10px] font-medium text-gray-600 tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-brandGreen"></span>
                  Total Active Students
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="text-4xl md:text-[2.75rem] font-normal text-black mb-2 font-serif tracking-tight">6+</div>
                <div className="flex items-center gap-1.5 text-[10px] font-medium text-gray-600 tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-brandGreen"></span>
                  Total LAB
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="text-4xl md:text-[2.75rem] font-normal text-black mb-2 font-serif tracking-tight">10+</div>
                <div className="flex items-center gap-1.5 text-[10px] font-medium text-gray-600 tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-brandGreen"></span>
                  Total Lecturer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elemen Hiasan Oren */}
      <div className="absolute -bottom-24 -right-16 rotate-[-50deg] pointer-events-none z-0">
        <div className="relative w-56 h-72 bg-brandOrange rounded-full opacity-95">
          <div className="absolute top-1/2 left-1/2 w-[130%] h-8 bg-white -translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-[130%] h-[1px] bg-brandOrange -translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  );
}