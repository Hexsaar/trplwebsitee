require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize, models } = require('./models');
const authRoutes = require('./routes/auth');
const lecturerRoutes = require('./routes/lecturers');
const staffRoutes = require('./routes/staff');
const workshopRoutes = require('./routes/workshops');
const newsRoutes = require('./routes/news');
const uploadRoutes = require('./routes/upload');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/lecturers', lecturerRoutes);
app.use('/staff', staffRoutes);
app.use('/workshops', workshopRoutes);
app.use('/news', newsRoutes);
app.use('/upload', uploadRoutes);

// serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));

const PORT = process.env.PORT || 4000;

async function seedInitialData() {
  const { Admin, Lecturer, Staff, Workshop, News } = models;

  // Admin
  if (await Admin.count() === 0) {
    console.log('Creating default admin...');
    await Admin.create({ username: 'admin', password: 'admin123' });
  }

  // Lecturers
  if (await Lecturer.count() === 0) {
    console.log('Seeding Lecturers...');
    await Lecturer.bulkCreate([
      {
        name: "Sophie Bennett",
        title: "Product Designer & Lecturer",
        bio: "Sophie leads product strategy with a sharp eye for detail and user experience. She bridges design systems with real-world workflows.",
        imageUrl: "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=600&auto=format&fit=crop"
      },
      {
        name: "Alex Rivera",
        title: "Cloud Engineer & Lecturer",
        bio: "Alex builds scalable cloud infrastructures that stay resilient under pressure. He combines network security with automation best practices.",
        imageUrl: "https://images.unsplash.com/photo-1531123897727-8f129e16fd8c?q=80&w=600&auto=format&fit=crop"
      },
      {
        name: "Ben Carter",
        title: "DevOps Expert & Lecturer",
        bio: "Ben optimizes developer workflows and streamlines CI/CD pipelines for faster releases. He champions systems driven by testing and monitoring.",
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop"
      }
    ]);
  }

  // Staff
  if (await Staff.count() === 0) {
    console.log('Seeding Staff...');
    await Staff.bulkCreate([
      {
        name: "Maya Hart",
        role: "Program Coordinator",
        bio: "Maya keeps operations running smoothly across every team. She coordinates events, schedules, and communication with a clear mindset.",
        imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop"
      },
      {
        name: "Noah Lin",
        role: "Community Support",
        bio: "Noah supports students and staff with calm, reliable guidance. He resolves questions quickly while keeping everyone informed.",
        imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop"
      },
      {
        name: "Leah Turner",
        role: "HR Specialist",
        bio: "Leah builds culture through thoughtful staff programs and development. She manages recruitment and daily team wellbeing with care.",
        imageUrl: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=600&auto=format&fit=crop"
      }
    ]);
  }

  // Workshops
  if (await Workshop.count() === 0) {
    console.log('Seeding Workshops...');
    await Workshop.bulkCreate([
      {
        title: "Modern React & Next.js Architecture",
        date: "15 Aug 2026",
        label: "Web Dev",
        description: "Pelajari arsitektur modern Next.js 14, server components, dan pengoptimalan performa aplikasi web skala besar.",
        imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
      },
      {
        title: "Master Class UI/UX Design System",
        date: "22 Aug 2026",
        label: "UI/UX Design",
        description: "Membangun design system komprehensif di Figma dan integrasi token desain ke komponen React/Tailwind.",
        imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop"
      },
      {
        title: "Cloud Infrastructure & Kubernetes DevOps",
        date: "01 Sep 2026",
        label: "DevOps",
        description: "Hands-on deployment aplikasi microservices menggunakan Docker, Kubernetes, dan CI/CD Pipeline GitHub Actions.",
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
      },
      {
        title: "AI Integration & Large Language Models",
        date: "10 Sep 2026",
        label: "AI & Data",
        description: "Integrasi API AI, prompt engineering, dan pengolahan data cerdas untuk aplikasi perangkat lunak modern.",
        imageUrl: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=800&auto=format&fit=crop"
      },
      {
        title: "Mobile App Engineering with React Native",
        date: "18 Sep 2026",
        label: "Mobile Dev",
        description: "Membangun aplikasi iOS & Android performa tinggi dengan React Native, Expo, dan state management terkini.",
        imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop"
      },
      {
        title: "Cybersecurity & Ethical Hacking Essentials",
        date: "25 Sep 2026",
        label: "Security",
        description: "Pengenalan keamanan web, pengetesan penetrasi, OWASP Top 10, dan praktik terbaik pengamanan REST API.",
        imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop"
      }
    ]);
  }

  // News
  if (await News.count() === 0) {
    console.log('Seeding News...');
    await News.bulkCreate([
      {
        title: "TRPL Wins National Software Innovation Award 2026",
        date: "08 Aug 2026",
        label: "Achievement",
        content: "Tim Mahasiswa TRPL berhasil meraih Juara 1 pada Kompetisi Inovasi Perangkat Lunak Nasional dengan karya sistem pintar analisis data medis berbasis AI.",
        imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=900&auto=format&fit=crop"
      },
      {
        title: "Grand Launching TRPL Center of Excellence & Digital Lab",
        date: "05 Aug 2026",
        label: "New Facility",
        content: "Fasilitas laboratorium komputer terbaru berteknologi tinggi resmi dibuka untuk menunjang riset mahasiswa dan pengabdian masyarakat.",
        imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=900&auto=format&fit=crop"
      },
      {
        title: "Guest Lecture: Building Distributed Systems at Scale",
        date: "01 Aug 2026",
        label: "Event",
        content: "Kuliah umum bersama Tech Lead dari Silicon Valley membahas arsitektur microservices dan ketersediaan tinggi pada sistem cloud.",
        imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=900&auto=format&fit=crop"
      },
      {
        title: "Partnership Announcement: Global Tech Internship Program",
        date: "28 Jul 2026",
        label: "Career",
        content: "Prodi TRPL menjalin kerja sama resmi dengan 10 perusahaan IT terkemuka untuk program magang industri dan perekrutan lulusan.",
        imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop"
      }
    ]);
  }
}

async function start() {
  await sequelize.sync({ alter: true });
  await seedInitialData();

  app.listen(PORT, '0.0.0.0', () => console.log(`Server listening on port ${PORT}`));
}

start();
