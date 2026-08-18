import React, { useState, useEffect, useRef, useCallback } from 'react';
import AdminPanel from './admin/AdminPanel';
import LoginPage from './admin/LoginPage';
import logoTrpl from './assets/logotrpl.png';

// ===== SCROLL REVEAL HOOK =====
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
}

// ===== SCROLL PROGRESS BAR =====
function ScrollProgressBar() {
  const barRef = useRef(null);
  useEffect(() => {
    const bar = barRef.current;
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (bar) bar.style.width = pct + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div id="scroll-progress" ref={barRef} style={{ width: '0%' }} />;
}

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Hidden admin access dengan keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Kombinasi Ctrl + Shift + A untuk akses admin
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        window.location.hash = '#/trpl-system-management';
      }
    };
    
    // Admin console command (hanya admin yang tahu)
    window.adminAccess = () => {
      window.location.hash = '#/dashboard-admin-secret';
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      delete window.adminAccess;
    };
  }, []);
  
  // navigation to login page
  return (
    <div id="home" className="bg-darkBg text-white font-sans min-h-screen overflow-x-hidden relative selection:bg-cyan-500 selection:text-black">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-amber-700/10 rounded-full blur-[100px] sm:blur-[140px] -z-10 pointer-events-none"></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-6 pb-20 sm:pb-12">

        {/* Navbar */}
        <header className="flex items-center justify-center py-3 sm:py-4 relative z-50">

          {/* Nav pill — glassmorphism */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 py-1.5 shadow-lg">
            <a href="#home" className="text-white text-sm font-medium px-4 py-1.5 rounded-full bg-white/10 hover:bg-cyan-500/20 hover:text-cyan-400 transition">Home</a>
            <a href="#about" className="text-gray-400 text-sm font-medium px-4 py-1.5 rounded-full hover:bg-white/10 hover:text-white transition">About</a>
            <a href="#lecturer" className="text-gray-400 text-sm font-medium px-4 py-1.5 rounded-full hover:bg-white/10 hover:text-white transition">Lecturer</a>
            <a href="#workshop" className="text-gray-400 text-sm font-medium px-4 py-1.5 rounded-full hover:bg-white/10 hover:text-white transition">Workshop</a>
            <a href="#news" className="text-gray-400 text-sm font-medium px-4 py-1.5 rounded-full hover:bg-white/10 hover:text-white transition">News</a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 absolute right-0">
            <button className="hidden sm:block bg-white/5 hover:bg-white/10 text-gray-200 text-xs font-semibold px-5 py-2 rounded-full border border-white/10 backdrop-blur-sm transition outline-none focus:outline-none">
              Join Now
            </button>
            <button
              className="md:hidden text-white hover:text-cyan-400 p-2 z-50 outline-none focus:outline-none transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-[60px] left-0 w-full bg-[#0b0c0e] z-40 border-b border-cyan-500/20 py-8 px-8 flex flex-col gap-1 shadow-2xl">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-white font-semibold text-base py-3 border-b border-white/5 hover:text-cyan-400 transition">Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-white font-semibold text-base py-3 border-b border-white/5 hover:text-cyan-400 transition">About</a>
            <a href="#lecturer" onClick={() => setIsMenuOpen(false)} className="text-white font-semibold text-base py-3 border-b border-white/5 hover:text-cyan-400 transition">Lecturer</a>
            <a href="#workshop" onClick={() => setIsMenuOpen(false)} className="text-white font-semibold text-base py-3 border-b border-white/5 hover:text-cyan-400 transition">Workshop</a>
            <a href="#news" onClick={() => setIsMenuOpen(false)} className="text-white font-semibold text-base py-3 border-b border-white/5 hover:text-cyan-400 transition">News</a>
            <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 text-sm font-bold px-6 py-3 rounded-full transition w-full mt-5 outline-none focus:outline-none">
              Join Now
            </button>
          </div>
        )}

        {/* Hero Content Section */}
        <main className="mt-4 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-between">

            {/* Logo besar dengan animasi */}
            <div className="mb-4 sm:mb-6">
              <img
                src={logoTrpl}
                alt="Logo TRPL"
                className="w-56 sm:w-72 lg:w-80 h-auto object-contain animate-logo-hero drop-shadow-[0_0_40px_rgba(77,228,190,0.35)] cursor-pointer"
                onClick={(e) => {
                  // Triple click + Ctrl untuk akses admin
                  if (e.detail === 3 && e.ctrlKey) {
                    window.location.hash = '#/trpl-system-management';
                  }
                }}
              />
            </div>

            {/* Cards Container - mobile: stacked, desktop: overlapping */}
            <div className="w-full mt-4 sm:mt-8 flex flex-col gap-4 sm:block sm:relative sm:h-[360px]">

              {/* Pink Card */}
              <div className="relative sm:absolute sm:top-0 sm:left-0 w-full sm:w-[263.34px] p-5 sm:p-6 bg-cardPink text-slate-900 rounded-[1.5rem] sm:rounded-[2rem] shadow-lg z-10 transition-all duration-500 hover:-translate-y-1 hover:scale-105">
                <div className="flex items-center gap-3 mb-2 sm:mb-3">
                  <div className="w-9 h-9 bg-white/95 rounded-full flex items-center justify-center shadow-sm shrink-0">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-slate-900" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 2 3 13h6v9l10-11h-6z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-sm leading-tight">Kurikulum Berbasis Industri</h3>
                </div>
                <p className="text-[11px] font-medium leading-snug opacity-95">
                  Materi pembelajaran yang selalu disesuaikan dengan kebutuhan teknologi terkini untuk mencetak lulusan yang siap kerja.
                </p>
              </div>

              {/* Green/Cyan Card */}
              <div className="relative sm:absolute sm:top-32 sm:left-[180px] w-full sm:w-[263.34px] p-5 sm:p-6 bg-cardCyan text-slate-900 rounded-[1.5rem] sm:rounded-[2rem] shadow-lg z-20 transition-all duration-500 hover:-translate-y-1 hover:scale-105">
                <div className="flex items-center gap-3 mb-2 sm:mb-3">
                  <div className="w-9 h-9 bg-white/95 rounded-full flex items-center justify-center shadow-sm shrink-0">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-slate-900" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 7.5 12 3l8 4.5v9L12 21 4 16.5v-9zm1.2 1.1L12 5.3l6.8 3.3v1.8L12 8.7 5.2 10.3v-1.7zm0 4.4 6.8 3.3 6.8-3.3v4.2L12 19.7 5.2 13.4v-1.4z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-sm leading-tight">Fasilitas Laboratorium Modern</h3>
                </div>
                <p className="text-[11px] font-medium leading-snug opacity-95">
                  Didukung dengan laboratorium komputer canggih dan infrastruktur penunjang kegiatan praktikum mahasiswa.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 flex flex-col pt-4 sm:pt-2 lg:pl-6 relative z-10">

            <div className="mb-8">
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-md mb-5 font-normal">
                Program Studi Teknologi Rekayasa Perangkat Lunak berdedikasi mencetak Software Engineer berkualitas yang unggul dalam pengembangan sistem, analisis data, dan inovasi teknologi digital.
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

              <div className="p-4 sm:p-5 font-mono text-[10px] sm:text-xs leading-relaxed text-gray-200 overflow-x-auto whitespace-nowrap">
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
            <div className="flex flex-col items-end w-full max-w-lg pr-4 mb-20 sm:mb-8">
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
      {/* admin panel rendered at app-level based on hash */}
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="relative z-30 -mt-8 sm:-mt-16 w-full min-h-screen bg-white py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Kolom Kiri: Imej */}
          <div className="relative w-full reveal reveal-left">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Tentang Mahasiswa"
              className="w-full h-[260px] sm:h-[380px] object-cover rounded-tl-[2.5rem] rounded-bl-[2.5rem] rounded-br-[2.5rem] rounded-tr-md shadow-lg relative z-10"
            />
          </div>

          {/* Kolom Kanan: Teks & Statistik */}
          <div className="flex flex-col relative z-20 reveal reveal-right">
            <h4 className="text-[17px] font-semibold text-black mb-2 tracking-wide">About</h4>

            <h2 className="text-5xl md:text-6xl font-serif text-black leading-[1.1] mb-5 tracking-tight">
              Software Engineer<br />Technology
            </h2>

            <p className="text-[13px] text-black/80 leading-[1.8] mb-10 max-w-lg font-medium">
              Program Studi Teknologi Rekayasa Perangkat Lunak (TRPL) merupakan program pendidikan vokasi unggulan yang fokus pada pengembangan perangkat lunak (software development), pengujian (testing), dan manajemen proyek TI. Kami membekali mahasiswa dengan keahlian teknis dan soft skill agar mampu bersaing di industri kreatif dan teknologi global.
            </p>

            {/* Statistik Bawah */}
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col reveal reveal-delay-1">
                <div className="text-4xl md:text-[2.75rem] font-normal text-black mb-2 font-serif tracking-tight">500+</div>
                <div className="flex items-center gap-1.5 text-[10px] font-medium text-gray-600 tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-brandGreen"></span>
                  Total Active Students
                </div>
              </div>

              <div className="flex flex-col reveal reveal-delay-2">
                <div className="text-4xl md:text-[2.75rem] font-normal text-black mb-2 font-serif tracking-tight">6+</div>
                <div className="flex items-center gap-1.5 text-[10px] font-medium text-gray-600 tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-brandGreen"></span>
                  Total LAB
                </div>
              </div>

              <div className="flex flex-col reveal reveal-delay-3">
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
    <section id="lecturer" className="relative w-full min-h-screen bg-darkBg text-white py-16 sm:py-24 overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* (-) Bagian Atas / Kiri: Judul Utama */}
          <div className="lg:col-span-7 reveal reveal-left">
            <h2 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-sans font-semibold tracking-tight leading-[1.08] text-white">
              Lecturer & Expert<br />
              Software Engineer<br />
              Technology
            </h2>
          </div>

          {/* (_) Bagian Bawah / Kanan */}
          <div className="lg:col-span-5 lg:pt-52 flex flex-col justify-end reveal reveal-right">

            {/* Teks Deskripsi: Ukuran diperbesar (text-base sm:text-lg) & lebih terang (text-gray-200) */}
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-10 font-normal">
              Dididik langsung oleh para dosen ahli dan praktisi industri yang berpengalaman. Kami memastikan setiap mahasiswa mendapatkan bimbingan intensif dalam mengembangkan solusi perangkat lunak yang inovatif, aman, dan efisien untuk menjawab tantangan dunia nyata.
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
const LecturerSliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [items, setItems] = useState([]);

  const loadData = () => {
    import('./api').then(m => m.default.list('lecturers')).then(data => {
      if (Array.isArray(data)) setItems(data);
    }).catch(() => { });
  };

  useEffect(() => {
    loadData();
    window.addEventListener('trpl_data_changed', loadData);
    return () => window.removeEventListener('trpl_data_changed', loadData);
  }, []);

  const prevSlide = () => {
    if (!items.length) return;
    setCurrentSlide((prev) => (prev === 0 ? Math.max(0, items.length - 3) : Math.max(0, prev - 1)));
  };

  const nextSlide = () => {
    if (!items.length) return;
    setCurrentSlide((prev) => (prev >= items.length - 3 ? 0 : prev + 1));
  };

  const visibleItems = items.length <= 3 ? items : items.slice(currentSlide, currentSlide + 3);

  return (
    <section className="bg-white text-black font-sans py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div className="reveal reveal-left">
            <h3 className="text-cyan-600 font-bold uppercase tracking-widest text-xs mb-2">Lecturer & Faculty</h3>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Lecturer & Expert Software<br />Engineer Technology
            </h2>
          </div>
          {items.length > 3 && (
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-11 h-11 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 flex items-center justify-center transition shadow-sm cursor-pointer"
                aria-label="Previous Lecturer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-11 h-11 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 flex items-center justify-center transition shadow-sm cursor-pointer"
                aria-label="Next Lecturer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleItems.map((lecturer, index) => (
            <div
              key={lecturer.id || index}
              className={`bg-[#1f232b] text-white rounded-[1.75rem] p-5 shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 border border-slate-800`}
            >
              <div className="w-full h-64 rounded-[1.25rem] overflow-hidden mb-5 relative group">
                <img
                  src={lecturer.imageUrl || lecturer.image || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop'}
                  alt={lecturer.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-xl text-white">{lecturer.name}</h3>
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                </div>
                <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                  {lecturer.title || 'Dosen TRPL'}
                </p>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-4">
                  {lecturer.bio || lecturer.description || 'Dosen pengajar Program Studi Teknologi Rekayasa Perangkat Lunak.'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StaffSliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [items, setItems] = useState([]);

  const loadData = () => {
    import('./api').then(m => m.default.list('staff')).then(data => {
      if (Array.isArray(data)) setItems(data);
    }).catch(() => { });
  };

  useEffect(() => {
    loadData();
    window.addEventListener('trpl_data_changed', loadData);
    return () => window.removeEventListener('trpl_data_changed', loadData);
  }, []);

  const prevSlide = () => {
    if (!items.length) return;
    setCurrentSlide((prev) => (prev === 0 ? Math.max(0, items.length - 3) : Math.max(0, prev - 1)));
  };

  const nextSlide = () => {
    if (!items.length) return;
    setCurrentSlide((prev) => (prev >= items.length - 3 ? 0 : prev + 1));
  };

  const visibleItems = items.length <= 3 ? items : items.slice(currentSlide, currentSlide + 3);

  return (
    <section className="bg-slate-50 text-black font-sans py-24 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-2">Academic Support</h3>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Meet Our Dedicated<br />Support Staff
            </h2>
          </div>
          {items.length > 3 && (
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-11 h-11 rounded-full bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 flex items-center justify-center transition shadow-sm cursor-pointer"
                aria-label="Previous Staff"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-11 h-11 rounded-full bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 flex items-center justify-center transition shadow-sm cursor-pointer"
                aria-label="Next Staff"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleItems.map((staff, index) => (
            <div
              key={staff.id || index}
              className="bg-[#1e232a] text-white rounded-[1.75rem] p-5 shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 border border-slate-800"
            >
              <div className="w-full h-64 rounded-[1.25rem] overflow-hidden mb-5 relative group">
                <img
                  src={staff.imageUrl || staff.image || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop'}
                  alt={staff.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-xl text-white">{staff.name}</h3>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                </div>
                <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">
                  {staff.role || staff.title || 'Staf Akademik'}
                </p>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-4">
                  {staff.bio || staff.description || 'Staf pendukung operasional akademik dan administrasi Prodi TRPL.'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WorkshopSection = () => {
  const [items, setItems] = useState([]);

  const loadData = () => {
    import('./api').then(m => m.default.list('workshops')).then(data => {
      if (Array.isArray(data)) setItems(data);
    }).catch(() => { });
  };

  useEffect(() => {
    loadData();
    window.addEventListener('trpl_data_changed', loadData);
    return () => window.removeEventListener('trpl_data_changed', loadData);
  }, []);

  // Guarantee 6 workshop cards (3 across x 2 down)
  const displayItems = items.length >= 6 ? items.slice(0, 6) : items;

  return (
    <section id="workshop" className="relative w-full bg-[#0e1117] text-white py-24 overflow-hidden">
      {/* Background Accent Decorative Circle */}
      <div className="absolute -top-24 -left-24 rotate-[15deg] pointer-events-none z-0">
        <div className="relative w-80 h-96 bg-brandOrange/80 blur-2xl rounded-full opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-gray-800/80 pb-8">
          <div>
            <span className="text-cyan-400 font-bold uppercase tracking-[0.25em] text-xs mb-3 inline-block">
              Skill Development Workshops
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Latest Workshop Events<br />& Hands-on Sessions
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md leading-relaxed">
            Ikuti workshop praktis bersama praktisi industri untuk meningkatkan keahlian koding, desain arsitektur perangkat lunak, dan teknologi terkini.
          </p>
        </div>

        {/* Grid 6 Cards: 3 Kesamping, 2 Kebawah (3 cols x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {displayItems.length ? (
            displayItems.map((workshop) => (
              <article
                key={workshop.id}
                className="group rounded-[2rem] overflow-hidden border border-gray-800 bg-[#161922] shadow-xl hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container with Label Tag directly on top of Image */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={workshop.imageUrl || 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop'}
                    alt={workshop.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient Overlay for photo readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161922] via-transparent to-black/40 pointer-events-none"></div>

                  {/* Label Tag Badge on top of Image */}
                  <span className="absolute top-4 left-4 bg-cyan-400 text-slate-950 font-extrabold text-[11px] px-3.5 py-1.2 rounded-full shadow-lg z-10 tracking-wider uppercase">
                    {workshop.label || 'Workshop'}
                  </span>

                  {/* Date Badge on Image Bottom Right */}
                  {workshop.date && (
                    <span className="absolute bottom-3 right-4 bg-slate-950/80 backdrop-blur-md text-cyan-300 text-[10px] font-mono font-medium px-2.5 py-1 rounded-md border border-cyan-500/20">
                      📅 {workshop.date}
                    </span>
                  )}
                </div>

                {/* Content Container with Short Description */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-cyan-300 transition-colors line-clamp-2">
                      {workshop.title}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                      {workshop.description || 'Workshop praktis untuk meningkatkan skill rekayasa perangkat lunak modern.'}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                      Open Registration
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform text-white font-bold">→</span>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full rounded-[2rem] border border-dashed border-gray-800 bg-gray-900/50 p-12 text-center text-gray-400">
              Belum ada workshop. Tambahkan melalui Admin Panel.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const NewsCardSection = () => {
  const [items, setItems] = useState([]);
  const [newsIndex, setNewsIndex] = useState(0);

  const loadData = () => {
    import('./api').then(m => m.default.list('news')).then(data => {
      if (Array.isArray(data)) setItems(data);
    }).catch(() => { });
  };

  useEffect(() => {
    loadData();
    window.addEventListener('trpl_data_changed', loadData);
    return () => window.removeEventListener('trpl_data_changed', loadData);
  }, []);

  const prevNews = () => {
    if (items.length <= 2) return;
    setNewsIndex((prev) => (prev <= 0 ? Math.max(0, items.length - 2) : prev - 1));
  };

  const nextNews = () => {
    if (items.length <= 2) return;
    setNewsIndex((prev) => (prev >= items.length - 2 ? 0 : prev + 1));
  };

  // Always show 2 cards at a time side-by-side
  const visibleNews = items.length <= 2 ? items : items.slice(newsIndex, newsIndex + 2);

  return (
    <section id="news" className="bg-[#0b0e14] text-white py-24 relative overflow-hidden font-sans border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">

        {/* Section Header with Left/Right Chevrons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-amber-400 font-bold uppercase tracking-[0.25em] text-xs mb-2 block">
              Latest Updates & Articles
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              News Cards
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-400 hidden sm:inline-block font-mono">
              Showing {visibleNews.length} of {items.length} news
            </span>

            {/* Left and Right Chevron Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevNews}
                className="w-12 h-12 rounded-full bg-gray-800/80 hover:bg-amber-400 hover:text-slate-950 border border-gray-700 text-white flex items-center justify-center transition-all shadow-lg cursor-pointer"
                aria-label="Previous News"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextNews}
                className="w-12 h-12 rounded-full bg-gray-800/80 hover:bg-amber-400 hover:text-slate-950 border border-gray-700 text-white flex items-center justify-center transition-all shadow-lg cursor-pointer"
                aria-label="Next News"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* 2 Horizontal Rectangular News Cards Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {visibleNews.length ? (
            visibleNews.map((item) => (
              <article
                key={item.id}
                className="rounded-[2rem] overflow-hidden border border-gray-800/90 bg-[#141722] shadow-2xl relative flex flex-col sm:flex-row group hover:border-amber-400/50 transition-all duration-300"
              >
                {/* Horizontal Rectangular Image Area with Gradient Color Overlay */}
                <div className="sm:w-1/2 relative overflow-hidden min-h-[220px] sm:min-h-[260px] bg-slate-900 shrink-0">
                  <img
                    src={item.imageUrl || 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=900&auto=format&fit=crop'}
                    alt={item.title || 'News'}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Color Overlay on Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141722] via-[#141722]/30 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-[#141722]/50 sm:to-[#141722] pointer-events-none z-10"></div>

                  {/* Label Tag Badge directly on Image */}
                  <span className="absolute top-4 left-4 bg-amber-400 text-slate-950 font-black text-[11px] px-3.5 py-1 rounded-full shadow-lg z-20 uppercase tracking-wider">
                    {item.label || 'Berita'}
                  </span>
                </div>

                {/* Content Side with Description */}
                <div className="sm:w-1/2 p-6 flex flex-col justify-between z-20 bg-[#141722]">
                  <div>
                    {item.date && (
                      <div className="text-[11px] font-mono text-amber-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                        <span>📅</span> {item.date}
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-amber-300 transition-colors line-clamp-2">
                      {item.title || 'Untitled News'}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-gray-300 line-clamp-4 mb-4">
                      {item.content || item.description || 'Penjelasan singkat mengenai berita terbaru prodi TRPL.'}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-800/80 flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-400 group-hover:text-white transition-colors">
                      Baca Selengkapnya
                    </span>
                    <span className="text-amber-400 font-extrabold group-hover:translate-x-1.5 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full rounded-[2rem] border border-dashed border-gray-800 bg-gray-900/50 p-12 text-center text-gray-400">
              Tidak ada berita. Login admin untuk menambahkan berita baru.
            </div>
          )}
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
            <div className="mb-6">
              <img
                src={logoTrpl}
                alt="Logo TRPL"
                className="w-40 sm:w-48 h-auto object-contain"
              />
            </div>
          </div>

          {/* Column 1: Akademik */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4">Akademik</h4>
            <ul className="space-y-4 sm:space-y-2.5 text-xs text-gray-400 font-medium">
              <li><a href="#about" className="hover:text-white transition">Tentang Prodi</a></li>
              <li><a href="#" className="hover:text-white transition">Kurikulum</a></li>
              <li><a href="#lecturer" className="hover:text-white transition">Dosen Pengajar</a></li>
              <li><a href="#workshop" className="hover:text-white transition">Workshop & Event</a></li>
              <li><a href="#" className="hover:text-white transition">Pendaftaran Mahasiswa</a></li>
            </ul>
          </div>

          {/* Column 2: Fasilitas */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4">Fasilitas</h4>
            <ul className="space-y-4 sm:space-y-2.5 text-xs text-gray-400 font-medium">
              <li><a href="#" className="hover:text-white transition">Laboratorium Komputer</a></li>
              <li><a href="#" className="hover:text-white transition">Perpustakaan Digital</a></li>
              <li><a href="#" className="hover:text-white transition">Ruang Diskusi Kreatif</a></li>
            </ul>
          </div>

          {/* Column 3: Hubungi Kami */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4">Hubungi Kami</h4>
            <ul className="space-y-4 sm:space-y-2.5 text-xs text-gray-400 font-medium">
              <li>Telepon: <span className="text-white">(021) 123-4567</span></li>
              <li>Email: <span className="text-white">info.trpl@kampus.ac.id</span></li>
              <li>Alamat: <span className="text-white">Gedung Fakultas Teknik, Lt 2</span></li>
            </ul>
          </div>

          {/* Column 4: Social Icons */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4">Social</h4>
            <div className="flex items-center gap-4 text-gray-300">
              {/* Facebook Icon */}
              <a href="#" className="hover:text-cyan-400 transition" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* Instagram Icon */}
              <a href="#" className="hover:text-cyan-400 transition" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* Twitter/X Icon */}
              <a href="#" className="hover:text-cyan-400 transition" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                </svg>
              </a>
              {/* YouTube Icon */}
              <a href="#" className="hover:text-cyan-400 transition" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              {/* WordPress / Web Icon */}
              <a href="#" className="hover:text-cyan-400 transition" aria-label="Website">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.158 0C5.457 0 0 5.457 0 12.158c0 6.701 5.457 12.158 12.158 12.158 6.701 0 12.158-5.457 12.158-12.158C24.316 5.457 18.859 0 12.158 0zm0 22.568c-5.74 0-10.41-4.67-10.41-10.41 0-5.74 4.67-10.41 10.41-10.41 5.74 0 10.41 4.67 10.41 10.41 0 5.74-4.67 10.41-10.41 10.41z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-800/80 pt-8 text-center">
          <p className="text-xs text-gray-500 font-medium">
            © {new Date().getFullYear()} Program Studi Teknologi Rekayasa Perangkat Lunak | Hak Cipta Dilindungi
          </p>
        </div>

      </div>
    </footer>
  );
};

export default function App() {
  const [route, setRoute] = useState(window.location.hash || '#/');
  useScrollReveal();

  useEffect(() => {
    function onHash() { setRoute(window.location.hash || '#/'); }
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Route untuk admin dengan path tersembunyi
  if (route.startsWith('#/admin')) {
    if (route === '#/admin/login') return <LoginPage />;
    if (route === '#/admin/panel') return <AdminPanel fullPage={true} />;
    return <LoginPage />;
  }
  
  // Route rahasia untuk admin - hanya admin yang tahu
  if (route === '#/trpl-system-management' || route === '#/dashboard-admin-secret') {
    return <LoginPage />;
  }

  return (
    <div className="page-enter">
      <ScrollProgressBar />
      <HeroSection />
      <AboutSection />
      <LecturerSection />
      <LecturerSliderSection />
      <StaffSliderSection />
      <WorkshopSection />
      <NewsCardSection />
      <FooterSection />
    </div>
  );
}
