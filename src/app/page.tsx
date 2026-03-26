"use client";

import { motion } from "framer-motion";
import { Download, ChevronDown, Rocket, Code, Database, Layout, Smartphone, PenTool, Cpu } from "lucide-react";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skills = [
    { name: "Python", icon: <Cpu className="w-5 h-5" /> },
    { name: "C#", icon: <Code className="w-5 h-5" /> },
    { name: "Next.js", icon: <Layout className="w-5 h-5" /> },
    { name: "HTML", icon: <Smartphone className="w-5 h-5" /> },
    { name: "Firebase", icon: <Database className="w-5 h-5" /> },
    { name: "Gemini API", icon: <Rocket className="w-5 h-5" /> },
    { name: "Grafik Tasarım", icon: <PenTool className="w-5 h-5" /> },
    { name: "Microsoft Office", icon: <Layout className="w-5 h-5" /> },
  ];

  const projects = [
    {
      title: "FitUzman AI",
      description: "Yapay zeka destekli akıllı fitness koçu sohbet robotu. Kişiselleştirilmiş antrenman tavsiyeleri ve geri bildirim sağlar.",
      tech: ["Python", "Streamlit", "Firebase", "Gemini API"],
      delay: 0,
    },
    {
      title: "Gem AI",
      description: "Sistem analizi ve tasarımı dersi için geliştirdiğim, teknoloji bağımlılığını azaltmaya odaklı özel yapay zeka asistanı.",
      tech: ["Yapay Zeka", "Sistem Tasarımı", "Veri Analizi"],
      delay: 0.1,
    },
    {
      title: "Stok Takip Otomasyonu",
      description: "İşletmeler için depo ve stok yönetimini kolaylaştıran, masaüstü üzerinde çalışan veritabanı bağlantılı otomasyon sistemi.",
      tech: ["C#", "Windows Forms", "SQL Server"],
      delay: 0.2,
    },
    {
      title: "E-Ticaret Tasarımı",
      description: "Bir tişört satış platformu için yürütülen kapsamlı görsel tasarım ve modern vitrin yönetimi projesi.",
      tech: ["Görsel Tasarım", "Kullanıcı Deneyimi", "UI/UX"],
      delay: 0.3,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-900/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed w-full top-0 z-50 glass-panel border-b border-white/5 py-4">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <span className="text-xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Kadir Alp
            </span>
            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
              <a href="#about" className="hover:text-cyan-400 transition-colors">Hakkımda</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Yetenekler</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projeler</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="about" className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className=" max-w-3xl flex flex-col items-center"
          >
            <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Portfolyoma Hoş Geldiniz
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Teknoloji</span> ile <br className="hidden md:block"/> Geleceği Tasarlamak
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
              Yapay zeka, masaüstü yazılımları ve modern web teknolojileri kullanarak yenilikçi, verimli ve kullanıcı odaklı çözümler geliştiriyorum.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <a 
                href="/cv.pdf" 
                download
                className="group relative flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/40 transition-all hover:-translate-y-1"
              >
                CV İndir
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>
              <a 
                href="#projects" 
                className="flex items-center gap-2 px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-slate-300 rounded-xl font-semibold border border-slate-700 hover:border-slate-500 transition-all"
              >
                Projelerimi İncele
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-slate-950/50 relative border-y border-white/5">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div 
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Teknik <span className="text-cyan-400">Yeteneklerim</span></h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Sürekli öğrenmeyi ve farklı teknolojilerle projeler geliştirmeyi vizyon olarak benimsiyorum.</p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="flex flex-wrap justify-center gap-4"
            >
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-6 py-4 rounded-2xl hover:border-cyan-500/50 shadow-sm hover:shadow-cyan-500/20 transition-all cursor-default"
                >
                  <div className="p-2 bg-slate-800 rounded-lg text-cyan-400">
                    {skill.icon}
                  </div>
                  <span className="font-semibold text-slate-200">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 relative">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div 
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Öne Çıkan <span className="text-cyan-400">Projelerim</span></h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Gerçek hayattaki problemleri çözmek üzere geliştirdiğim çeşitli yazılım ve tasarım projeleri.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: project.delay }}
                  whileHover={{ y: -10 }}
                  className="group relative bg-slate-900 overflow-hidden border border-slate-800 hover:border-blue-500/50 rounded-3xl p-8 transition-all flex flex-col h-full"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-colors"></div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors z-10">{project.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-8 flex-grow z-10">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto z-10">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs font-semibold px-3 py-1 bg-slate-950 text-slate-300 rounded-full border border-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 py-10 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Kadir Alp. Tüm hakları saklıdır.</p>
          <p className="mt-2 text-xs">Modern web teknolojileri ile geliştirilmiştir.</p>
        </footer>
      </div>
    </div>
  );
}
