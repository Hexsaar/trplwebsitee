import React, { useState } from 'react';

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

const LecturerSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-darkBg text-white py-24 overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* (-) Bagian Atas / Kiri: Judul Utama */}
          <div className="lg:col-span-7">
            <h2 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-sans font-semibold tracking-tight leading-[1.08] text-white">
              Lecturer & Expert<br />
              Software Engineer<br />
              Technology
            </h2>
          </div>

          {/* (_) Bagian Bawah / Kanan: Diturunkan jauh lebih ke bawah dengan lg:pt-52 */}
          <div className="lg:col-span-5 lg:pt-52 flex flex-col justify-end">
            
            {/* Teks Deskripsi: Ukuran diperbesar (text-base sm:text-lg) & lebih terang (text-gray-200) */}
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-10 font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.
            </p>

            {/* Statistik (Total LAB & Total Lecturer) */}
            <div className="flex items-center gap-12">
              <div className="flex flex-col">
                <div className="text-4xl sm:text-5xl font-serif font-normal text-white mb-1.5 tracking-tight">
                  6+
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-300 tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-brandGreen"></span>
                  Total LAB
                </div>
              </div>

              <div className="flex flex-col">
                <div className="text-4xl sm:text-5xl font-serif font-normal text-white mb-1.5 tracking-tight">
                  10+
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-300 tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-brandGreen"></span>
                  Total Lecturer
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Hiasan Shape Oren di Kiri Bawah */}
      <div className="absolute -bottom-20 -left-20 rotate-[135deg] pointer-events-none z-0">
        <div className="relative w-64 h-80 bg-brandOrange rounded-full opacity-95">
          <div className="absolute top-1/2 left-1/2 w-[130%] h-8 bg-darkBg -translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-[130%] h-[1px] bg-brandOrange -translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    </section>
  );
};



// ==================== 4. LECTURER SLIDER SECTION ====================
const lecturersData = [
  {
    name: "Sophie Bennett",
    title: "Product Designer",
    description: "Sophie leads product strategy with a sharp eye for detail and user experience. She bridges design systems with real-world workflows. Her approach is structured, collaborative, and driven by measurable results.",
    image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=600&auto=format&fit=crop",
    verified: true,
  },
  {
    name: "Alex Rivera",
    title: "Cloud Engineer",
    description: "Alex builds scalable cloud infrastructures that stay resilient under pressure. He combines network security with automation best practices. His teams deliver reliable deployments with clear observability.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e16fd8c?q=80&w=600&auto=format&fit=crop",
    verified: true,
  },
  {
    name: "Ben Carter",
    title: "DevOps Expert",
    description: "Ben optimizes developer workflows and streamlines CI/CD pipelines for faster releases. He champions systems driven by testing, monitoring, and incremental improvement. Every deployment is treated as an opportunity to learn.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
    verified: true,
  },
];

const staffData = [
  {
    name: "Maya Hart",
    title: "Program Coordinator",
    description: "Maya keeps operations running smoothly across every team. She coordinates events, schedules, and communication with a clear, people-first mindset. Her consistency keeps staff aligned and workflows efficient.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
    verified: true,
  },
  {
    name: "Noah Lin",
    title: "Community Support",
    description: "Noah supports students and staff with calm, reliable guidance. He resolves questions quickly while keeping everyone informed and focused. His friendly approach keeps the office connected and responsive.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    verified: true,
  },
  {
    name: "Leah Turner",
    title: "HR Specialist",
    description: "Leah builds culture through thoughtful staff programs and development. She manages recruitment, onboarding, and daily team wellbeing with care. Her work helps create a supportive environment for everyone.",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=600&auto=format&fit=crop",
    verified: true,
  },
];

const LecturerSliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? lecturersData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === lecturersData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white text-black font-sans min-h-screen py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-black text-2xl font-bold mb-6">Lecturer</h3>

        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Lecturer & Expert Software<br />Engineer Technology
          </h2>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute -left-4 sm:left-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-center hover:bg-white/70 transition cursor-pointer"
          >
            <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-4 sm:right-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-center hover:bg-white/70 transition cursor-pointer"
          >
            <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lecturersData.map((lecturer, index) => (
              <div
                key={index}
                className="bg-[#26282b] text-white rounded-[1.75rem] p-4 shadow-xl flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="w-full h-64 rounded-[1.3rem] overflow-hidden mb-4">
                  <img src={lecturer.image} alt={lecturer.name} className="w-full h-full object-cover" />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-lg">{lecturer.name}</h3>
                    {lecturer.verified && (
                      <span className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center text-[10px] font-bold">✓</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{lecturer.title}</p>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 whitespace-pre-line">
                    {lecturer.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

const StaffSliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? staffData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === staffData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white text-black font-sans min-h-screen py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-black text-2xl font-bold mb-6">Staff</h3>

        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Meet Our Dedicated<br />Support Staff
          </h2>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute -left-4 sm:left-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center hover:bg-white/25 transition cursor-pointer"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-4 sm:right-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center hover:bg-white/25 transition cursor-pointer"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {staffData.map((staff, index) => (
              <div
                key={index}
                className="bg-[#26282b] rounded-[1.75rem] p-4 shadow-xl flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="w-full h-64 rounded-[1.3rem] overflow-hidden mb-4">
                  <img src={staff.image} alt={staff.name} className="w-full h-full object-cover" />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-lg text-white">{staff.name}</h3>
                    {staff.verified && (
                      <span className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center text-[10px] font-bold">✓</span>
                    )}
                  </div>
                  <p className="text-sm text-white mb-2">{staff.title}</p>

                  <p className="text-white text-sm leading-relaxed mb-6 whitespace-pre-line">
                    {staff.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkshopSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-darkBg text-white py-24 overflow-hidden">
      {/* Hiasan Shape Oren di Kiri Atas */}
      <div className="absolute -top-20 -left-20 rotate-[15deg] pointer-events-none z-0">
        <div className="relative w-64 h-80 bg-brandOrange rounded-full opacity-90">
          <div className="absolute top-1/2 left-1/2 w-[130%] h-8 bg-darkBg -translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-[130%] h-[1px] bg-brandOrange -translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* (-) ATAS KANAN: Judul Utama */}
          <div className="lg:col-span-12 flex justify-end mb-12 lg:mb-0">
            <h2 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-sans font-bold tracking-tight leading-none text-right">
              Workshops<br />
              and student<br />
              creativity
            </h2>
          </div>

          {/* (_) TENGAH KIRI: Deskripsi & Stats */}
          <div className="lg:col-span-6 lg:mt-[-80px] flex flex-col justify-center">
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-8 font-medium max-w-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.
            </p>

            {/* Statistik Active Work */}
            <div className="flex flex-col">
              <div className="text-5xl sm:text-6xl font-serif font-normal text-white mb-2 tracking-tighter">
                500+
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-gray-400 tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-brandGreen"></span>
                Total Active Work
              </div>
            </div>
          </div>

          {/* (-) BAWAH KANAN: Gambar 3D Palu & Obeng */}
          <div className="lg:col-span-6 flex justify-end items-end relative pt-12 lg:pt-0">
            {/* Efek Cahaya (Glow) di belakang alat */}
            <div className="absolute w-64 h-64 bg-brandOrange/20 rounded-full blur-[80px] bottom-10 right-10"></div>
            
            <img 
              src="https://khuul-production.s3.ap-southeast-1.amazonaws.com/assets/workshop_tools_3d.png" // Menggunakan placeholder 3D tools berkualitas
              alt="Workshop Tools 3D"
              className="w-full max-w-[450px] object-contain relative z-10 transform hover:rotate-3 transition-transform duration-500"
              onError={(e) => {
                e.target.src = "https://static.vecteezy.com/system/resources/previews/010/851/458/original/3d-construction-tools-illustration-png.png"; // Fallback jika link utama mati
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

// Sample Data untuk Card (bisa kamu ganti gambarnya nanti)
const gridItemsData = [
  // Page 1 (6 Cards)
  [
    { id: 1, label: 'label', headline: 'Headline', text: 'Please add your content here. Keep it short and simple. And smile :)' },
    { id: 2, label: 'label', headline: 'Headline', text: 'Please add your content here. Keep it short and simple. And smile :)' },
    { id: 3, label: 'label', headline: 'Headline', text: 'Please add your content here. Keep it short and simple. And smile :)' },
    { id: 4, label: 'label', headline: 'Headline', text: 'Please add your content here. Keep it short and simple. And smile :)' },
    { id: 5, label: 'label', headline: 'Headline', text: 'Please add your content here. Keep it short and simple. And smile :)' },
    { id: 6, label: 'label', headline: 'Headline', text: 'Please add your content here. Keep it short and simple. And smile :)' },
  ],
  // Page 2 (6 Cards)
  [
    { id: 7, label: 'label', headline: 'Headline 2', text: 'Please add your content here. Keep it short and simple. And smile :)' },
    { id: 8, label: 'label', headline: 'Headline 2', text: 'Please add your content here. Keep it short and simple. And smile :)' },
    { id: 9, label: 'label', headline: 'Headline 2', text: 'Please add your content here. Keep it short and simple. And smile :)' },
    { id: 10, label: 'label', headline: 'Headline 2', text: 'Please add your content here. Keep it short and simple. And smile :)' },
    { id: 11, label: 'label', headline: 'Headline 2', text: 'Please add your content here. Keep it short and simple. And smile :)' },
    { id: 12, label: 'label', headline: 'Headline 2', text: 'Please add your content here. Keep it short and simple. And smile :)' },
  ]
];

const FacilityGridSection = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? gridItemsData.length - 1 : prev - 1));
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev === gridItemsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white text-black py-20 relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto px-8 relative">
        
        {/* Navigation Chevrons (Glassmorphism & Glowing Border) */}
        <button
          onClick={prevPage}
          className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/70 backdrop-blur-md border border-gray-300 shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition cursor-pointer group"
        >
          <div className="absolute inset-0 rounded-full border-2 border-cyan-400/60 opacity-80 group-hover:opacity-100 transition"></div>
          <svg className="w-6 h-6 text-slate-800 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextPage}
          className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/70 backdrop-blur-md border border-gray-300 shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition cursor-pointer group"
        >
          <div className="absolute inset-0 rounded-full border-2 border-amber-400/60 opacity-80 group-hover:opacity-100 transition"></div>
          <svg className="w-6 h-6 text-slate-800 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Grid 2 Baris x 3 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
          {gridItemsData[currentPage].map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-800 overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Bagian Atas Gambar/Visual */}
              <div className="bg-[#dcdcdc] h-48 p-4 flex justify-end items-start relative">
                <span className="bg-[#2d3036] text-white text-[11px] font-mono px-3 py-1 rounded-full shadow-sm">
                  {item.label}
                </span>
              </div>

              {/* Bagian Bawah Teks Content */}
              <div className="p-5 font-mono flex flex-col gap-2">
                <h3 className="font-bold text-black text-base tracking-tight">
                  {item.headline}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const newsItemsData = [
  {
    id: 1,
    badge: 'Hot News',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop', // Gambar gedung kampus
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since 1966,',
  },
  {
    id: 2,
    badge: 'Hot News',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop', // Gambar mahasiswa di depan komputer
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since 1966,',
  },
  {
    id: 3,
    badge: 'Hot News',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since 1966,',
  },
];

const NewsSection = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % (newsItemsData.length - 1));
  };

  const visibleNews = newsItemsData.slice(startIndex, startIndex + 2);

  return (
    <section className="bg-white text-black py-20 relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto px-6 relative">
        
        {/* Header Title */}
        <div className="text-center mb-12">
          <p className="text-sm font-bold tracking-wide">
            <span className="text-pink-500">Our </span>
            <span className="text-slate-900">Latest </span>
            <span className="text-sky-500">News</span>
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-black mt-1">
            TRPL News
          </h2>
        </div>

        {/* Cards Wrapper */}
        <div className="relative">
          
          {/* Glassmorphism Right Chevron Button */}
          <button
            onClick={nextSlide}
            className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/70 backdrop-blur-md border border-gray-300 shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition cursor-pointer group"
          >
            <div className="absolute inset-0 rounded-full border-2 border-indigo-500/60 opacity-80 group-hover:opacity-100 transition"></div>
            <svg className="w-6 h-6 text-slate-800 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* 2 Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visibleNews.map((item) => (
              <div
                key={item.id}
                className="relative h-[340px] sm:h-[380px] rounded-[2rem] overflow-hidden shadow-lg group transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt="News Thumbnail"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Badge Top Right */}
                <div className="absolute top-5 right-5 z-10">
                  <span className="bg-indigo-600/90 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md backdrop-blur-sm">
                    {item.badge}
                  </span>
                </div>

                {/* Gradient Overlay & Description Text */}
                <div className="absolute inset-x-0 bottom-0 pt-24 pb-6 px-6 bg-gradient-to-t from-blue-950/95 via-blue-900/70 to-transparent flex items-end">
                  <p className="text-white/90 text-xs sm:text-sm leading-relaxed font-normal max-w-md">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* See All Button */}
        <div className="mt-12 flex justify-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-8 py-3 rounded-full shadow-lg transition cursor-pointer hover:shadow-indigo-500/30">
            See All
          </button>
        </div>

      </div>
    </section>
  );
};

const FooterSection = () => {
  return (
    <footer className="bg-[#0b132a] text-white pt-16 pb-8 font-sans border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          
          {/* Brand & Logo */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex font-black text-3xl tracking-tighter leading-none italic">
                <span className="text-cyan-400">T</span>
                <span className="text-white">/</span>
                <span className="text-cyan-400">L</span>
              </div>
              <div className="text-[9px] leading-tight font-bold tracking-wider text-gray-300 uppercase">
                Teknologi<br />Rekayasa Perangkat<br />Lunak
              </div>
            </div>
          </div>

          {/* Column 1: Learn More */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4">Learn More</h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
              <li><a href="#" className="hover:text-white transition">About Lift</a></li>
              <li><a href="#" className="hover:text-white transition">Press Release</a></li>
              <li><a href="#" className="hover:text-white transition">Environment</a></li>
              <li><a href="#" className="hover:text-white transition">Jobs</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 2: Tickets & Booking */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4">Tickets & Booking</h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
              <li><a href="#" className="hover:text-white transition">Lift Tickets</a></li>
              <li><a href="#" className="hover:text-white transition">Season Passes</a></li>
              <li><a href="#" className="hover:text-white transition">Vacation Packages</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4">Contact Us</h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
              <li>Hotel Reservation: <span className="text-white">123-456-7890</span></li>
              <li>Ticket Office: <span className="text-white">123-456-789</span></li>
            </ul>
          </div>

          {/* Column 4: Social Icons */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4">Social</h4>
            <div className="flex items-center gap-4 text-gray-300">
              {/* Facebook Icon */}
              <a href="#" className="hover:text-cyan-400 transition" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* Instagram Icon */}
              <a href="#" className="hover:text-cyan-400 transition" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Twitter/X Icon */}
              <a href="#" className="hover:text-cyan-400 transition" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z"/>
                </svg>
              </a>
              {/* YouTube Icon */}
              <a href="#" className="hover:text-cyan-400 transition" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              {/* WordPress / Web Icon */}
              <a href="#" className="hover:text-cyan-400 transition" aria-label="Website">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.158 0C5.457 0 0 5.457 0 12.158c0 6.701 5.457 12.158 12.158 12.158 6.701 0 12.158-5.457 12.158-12.158C24.316 5.457 18.859 0 12.158 0zm0 22.568c-5.74 0-10.41-4.67-10.41-10.41 0-5.74 4.67-10.41 10.41-10.41 5.74 0 10.41 4.67 10.41 10.41 0 5.74-4.67 10.41-10.41 10.41z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-800/80 pt-8 text-center">
          <p className="text-xs text-gray-500 font-medium">
            © 2019 Lift Media | All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
};

export default function App() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <LecturerSection />
      <LecturerSliderSection />
      <StaffSliderSection />
      <WorkshopSection />
      <FacilityGridSection />
      <NewsSection />
      <FooterSection />
    </>
  );
}
