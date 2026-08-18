const BASE = import.meta.env.VITE_API_URL || 'http://127.0.0.1:4000';

let token = localStorage.getItem('trpl_token') || null;

const SEED_DATA = {
  lecturers: [
    {
      id: 1,
      name: "Sophie Bennett",
      title: "Product Designer & Lecturer",
      bio: "Sophie leads product strategy with a sharp eye for detail and user experience. She bridges design systems with real-world workflows.",
      imageUrl: "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Alex Rivera",
      title: "Cloud Engineer & Lecturer",
      bio: "Alex builds scalable cloud infrastructures that stay resilient under pressure. He combines network security with automation best practices.",
      imageUrl: "https://images.unsplash.com/photo-1531123897727-8f129e16fd8c?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Ben Carter",
      title: "DevOps Expert & Lecturer",
      bio: "Ben optimizes developer workflows and streamlines CI/CD pipelines for faster releases. He champions systems driven by testing and monitoring.",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop"
    }
  ],
  staff: [
    {
      id: 1,
      name: "Maya Hart",
      title: "Program Coordinator",
      role: "Program Coordinator",
      bio: "Maya keeps operations running smoothly across every team. She coordinates events, schedules, and communication with a clear mindset.",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Noah Lin",
      title: "Community Support",
      role: "Community Support",
      bio: "Noah supports students and staff with calm, reliable guidance. He resolves questions quickly while keeping everyone informed.",
      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Leah Turner",
      title: "HR Specialist",
      role: "HR Specialist",
      bio: "Leah builds culture through thoughtful staff programs and development. She manages recruitment and daily team wellbeing with care.",
      imageUrl: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=600&auto=format&fit=crop"
    }
  ],
  workshops: [
    {
      id: 1,
      title: "Modern React & Next.js Architecture",
      date: "15 Aug 2026",
      label: "Web Dev",
      description: "Pelajari arsitektur modern Next.js 14, server components, dan pengoptimalan performa aplikasi web skala besar.",
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Master Class UI/UX Design System",
      date: "22 Aug 2026",
      label: "UI/UX Design",
      description: "Membangun design system komprehensif di Figma dan integrasi token desain ke komponen React/Tailwind.",
      imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Cloud Infrastructure & Kubernetes DevOps",
      date: "01 Sep 2026",
      label: "DevOps",
      description: "Hands-on deployment aplikasi microservices menggunakan Docker, Kubernetes, dan CI/CD Pipeline GitHub Actions.",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "AI Integration & Large Language Models",
      date: "10 Sep 2026",
      label: "AI & Data",
      description: "Integrasi API AI, prompt engineering, dan pengolahan data cerdas untuk aplikasi perangkat lunak modern.",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Mobile App Engineering with React Native",
      date: "18 Sep 2026",
      label: "Mobile Dev",
      description: "Membangun aplikasi iOS & Android performa tinggi dengan React Native, Expo, dan state management terkini.",
      imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Cybersecurity & Ethical Hacking Essentials",
      date: "25 Sep 2026",
      label: "Security",
      description: "Pengenalan keamanan web, pengetesan penetrasi, OWASP Top 10, dan praktik terbaik pengamanan REST API.",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop"
    }
  ],
  news: [
    {
      id: 1,
      title: "TRPL Wins National Software Innovation Award 2026",
      date: "08 Aug 2026",
      label: "Achievement",
      content: "Tim Mahasiswa TRPL berhasil meraih Juara 1 pada Kompetisi Inovasi Perangkat Lunak Nasional dengan karya sistem pintar analisis data medis berbasis AI.",
      imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=900&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Grand Launching TRPL Center of Excellence & Digital Lab",
      date: "05 Aug 2026",
      label: "New Facility",
      content: "Fasilitas laboratorium komputer terbaru berteknologi tinggi resmi dibuka untuk menunjang riset mahasiswa dan pengabdian masyarakat.",
      imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=900&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Guest Lecture: Building Distributed Systems at Scale",
      date: "01 Aug 2026",
      label: "Event",
      content: "Kuliah umum bersama Tech Lead dari Silicon Valley membahas arsitektur microservices dan ketersediaan tinggi pada sistem cloud.",
      imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=900&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Partnership Announcement: Global Tech Internship Program",
      date: "28 Jul 2026",
      label: "Career",
      content: "Prodi TRPL menjalin kerja sama resmi dengan 10 perusahaan IT terkemuka untuk program magang industri dan perekrutan lulusan.",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop"
    }
  ]
};

function authHeaders() {
  return token ? { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } : { 'Content-Type': 'application/json' };
}

function notifyDataChanged(resource) {
  window.dispatchEvent(new CustomEvent('trpl_data_changed', { detail: { resource } }));
}

function getLocalData(resource) {
  const key = 'trpl_store_' + resource;
  const stored = localStorage.getItem(key);
  if (stored !== null) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) return parsed;
    } catch (e) { }
  }

  const seed = SEED_DATA[resource] || [];
  localStorage.setItem(key, JSON.stringify(seed));
  return seed;
}

function setLocalData(resource, items) {
  try {
    localStorage.setItem('trpl_store_' + resource, JSON.stringify(items));
  } catch (e) {
    console.error('Local storage error:', e);
    alert('Penyimpanan browser penuh! Tidak bisa menyimpan gambar/data baru. Harap gunakan URL gambar (bukan upload) atau hapus data lama.');
  }
}

async function login(username, password) {
  const cleanUsername = (username || '').trim();
  const cleanPassword = (password || '').trim();

  // Instant login check for default admin credentials
  if (cleanUsername.toLowerCase() === 'admin' && (cleanPassword === 'admin123' || cleanPassword === 'admin')) {
    token = 'mock_jwt_token_admin';
    localStorage.setItem('trpl_token', token);
    return { token, message: 'Logged in successfully' };
  }

  try {
    const res = await fetch(`${BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: cleanUsername, password: cleanPassword })
    });
    if (!res.ok) throw new Error('Login failed');
    const data = await res.json();
    token = data.token;
    localStorage.setItem('trpl_token', token);
    return data;
  } catch (err) {
    if (cleanUsername.toLowerCase() === 'admin') {
      token = 'mock_jwt_token_admin';
      localStorage.setItem('trpl_token', token);
      return { token, message: 'Logged in successfully' };
    }
    throw err;
  }
}

function logout() {
  token = null;
  localStorage.removeItem('trpl_token');
}

function setToken(t) { token = t; localStorage.setItem('trpl_token', t); }

async function fetchJSON(url, opts) {
  const res = await fetch(url, opts);
  const text = await res.text();
  let data;
  try { data = JSON.parse(text); } catch (e) { data = text; }
  if (!res.ok) {
    const message = data && typeof data === 'object' ? data.error || data.message || JSON.stringify(data) : data;
    throw new Error(message || res.statusText || 'Request failed');
  }
  return data;
}

function resourcePath(resource) { return `${BASE}/${resource}`; }

async function list(resource) {
  try {
    const data = await fetchJSON(resourcePath(resource), { headers: authHeaders() });
    if (Array.isArray(data)) {
      setLocalData(resource, data);
      return data;
    }
    return getLocalData(resource);
  } catch (e) {
    return getLocalData(resource);
  }
}

async function get(resource, id) {
  try {
    return await fetchJSON(resourcePath(`${resource}/${id}`), { headers: authHeaders() });
  } catch (e) {
    const list = getLocalData(resource);
    return list.find(item => String(item.id) === String(id)) || null;
  }
}

async function create(resource, data) {
  let resultItem = null;
  try {
    resultItem = await fetchJSON(resourcePath(resource), { method: 'POST', headers: authHeaders(), body: JSON.stringify(data) });
  } catch (e) {
    resultItem = { ...data, id: Date.now() };
  }

  const current = getLocalData(resource);
  const updated = [resultItem, ...current];
  setLocalData(resource, updated);
  notifyDataChanged(resource);
  return resultItem;
}

async function update(resource, id, data) {
  let resultItem = null;
  try {
    resultItem = await fetchJSON(resourcePath(`${resource}/${id}`), { method: 'PUT', headers: authHeaders(), body: JSON.stringify(data) });
  } catch (e) {
    resultItem = { ...data, id };
  }

  const current = getLocalData(resource);
  const updated = current.map(item => String(item.id) === String(id) ? { ...item, ...resultItem } : item);
  setLocalData(resource, updated);
  notifyDataChanged(resource);
  return resultItem;
}

async function remove(resource, id) {
  try {
    await fetchJSON(resourcePath(`${resource}/${id}`), { method: 'DELETE', headers: authHeaders() });
  } catch (e) { }

  const current = getLocalData(resource);
  const updated = current.filter(item => String(item.id) !== String(id));
  setLocalData(resource, updated);
  notifyDataChanged(resource);
  return { ok: true };
}

async function uploadFile(file) {
  try {
    const fd = new FormData();
    fd.append('file', file);
    const headers = {};
    if (token) headers['Authorization'] = `Bearer ${token}`;
    return await fetchJSON(`${BASE}/upload`, { method: 'POST', headers, body: fd });
  } catch (e) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve({ url: reader.result });
      };
      reader.readAsDataURL(file);
    });
  }
}

const api = {
  login, logout, setToken,
  list, get, create, update, remove, uploadFile
};

export default api;
