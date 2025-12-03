import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronRight, 
  Code, Database, Layout, Loader2, Award, Binary, Brain, 
  LineChart, GraduationCap, BookOpen, Terminal, Cpu, BarChart3, 
  Server, Rocket, Globe, Eye, Home, Users, Activity, MessageSquare,
  ChevronLeft, Calendar, FileCheck
} from 'lucide-react';

/* KOMPONEN 1: Loading Screen 
  Diubah menjadi Putih dengan Loader Biru & Emas
*/
const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "SELECT * FROM portfolio WHERE user = 'Aini'";
  const [loadingPercent, setLoadingPercent] = useState(0);

  useEffect(() => {
    let index = 0;
    
    // Animasi mengetik teks SQL
    const typingInterval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      
      // Update persentase loading simulasi
      if (index < fullText.length) {
        setLoadingPercent(Math.min(100, Math.floor((index / fullText.length) * 100)));
      }

      if (index > fullText.length) {
        clearInterval(typingInterval);
        setLoadingPercent(100);
        setTimeout(() => {
          onComplete();
        }, 800);
      }
    }, 50); // Kecepatan mengetik

    return () => clearInterval(typingInterval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-slate-50 flex flex-col items-center justify-center transition-opacity duration-1000">
      
      {/* Icon Database Berdenyut */}
      <div className="mb-6 relative">
        <div className="absolute inset-0 bg-blue-200 rounded-full blur-xl opacity-50 animate-pulse"></div>
        <Database size={48} className="text-blue-900 relative z-10 animate-bounce-slow" />
      </div>

      {/* Teks SQL Typing */}
      <div className="mb-8 font-mono text-lg md:text-2xl font-bold text-blue-950 tracking-tight">
        <span className="text-blue-600 mr-2">&gt;</span>
        {text}
        <span className="animate-blink text-amber-500 font-extrabold">_</span>
      </div>

      {/* Loading Bar Container */}
      <div className="w-[240px] md:w-[300px] h-1 bg-slate-200 rounded-full relative overflow-hidden">
        {/* Progress Bar Blue */}
        <div 
          className="h-full bg-blue-900 transition-all duration-100 ease-out rounded-full relative"
          style={{ width: `${loadingPercent}%` }}
        >
          {/* Shine effect pada bar */}
          <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent transform skew-x-12 translate-x-full animate-shimmer"></div>
        </div>
      </div>

      {/* Status Text Kecil */}
      <div className="mt-3 font-mono text-xs text-slate-500">
        {loadingPercent < 100 ? "Fetching Data..." : "Data Loaded Successfully"}
      </div>
    </div>
  );
};

/* 
  KOMPONEN 2: Navbar 
*/
const Navbar = ({ menuOpen, setMenuOpen }) => {
  const navItems = ["Home", "About", "Projects", "Certificates"]; // Item menu baru

  return (
    <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-blue-100 shadow-sm transition-all duration-300">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo Branding: Menggunakan .data agar lebih spesifik */}
          <a href="#home" className="text-xl font-bold text-blue-950 font-mono tracking-tight group">
            aini<span className="text-amber-500 group-hover:text-blue-600 transition-colors">.data_enthusiast</span>
          </a>

          {/* Tombol Hamburger Mobile */}
          <div className="md:hidden relative z-50">
             <button 
                onClick={() => setMenuOpen((prev) => !prev)}
                className="text-blue-900 focus:outline-none p-2"
             >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
             </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-600 hover:text-blue-900 transition-colors font-medium relative group text-sm lg:text-base"
              >
                {item}
                {/* Garis bawah animasi Emas */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            {/* CTA Button tetap Hire Me -> Contact */}
            <a href="#contact" className="px-5 py-2 text-sm font-medium text-white bg-blue-900 rounded hover:bg-blue-800 transition-all shadow-md hover:shadow-lg flex items-center gap-2">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

/* KOMPONEN 3: Mobile Menu
*/
const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const navItems = ["Home", "About", "Projects", "Certificates"];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-30 bg-white flex flex-col items-center justify-center transition-all duration-300 ease-in-out
      ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
      `}
    >
      {navItems.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-semibold text-blue-950 my-6 hover:text-amber-500 transition-colors relative group"
        >
          {item}
          {item === "Certificates" && <Award className="inline-block ml-2 text-amber-500 w-6 h-6" />}
        </a>
      ))}
      
      <a 
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="mt-8 px-8 py-3 bg-blue-900 text-white rounded-lg text-lg font-medium shadow-lg active:scale-95 transition-transform"
      >
        Hire Me
      </a>
    </div>
  );
};

/* KOMPONEN 4: Home (Hero Section)
  Update: Data Science & Engineering Theme
  Fitur: Code Snippet Greeting & Brain/Data Visualization
*/
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-28 pb-20 md:pt-32">
      
      {/* Dekorasi Background Abstrak - Diperhalus */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-[120px]"></div>

      {/* Container Utama: Menggunakan Gap untuk jarak yang rapi */}
      <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* Kolom Kiri: Teks & Intro */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          
          {/* Fun Element: Code Greeting 
             Diberikan margin bottom (mb-8) agar tidak menempel ke judul
          */}
          <div className="inline-block mb-8 transform hover:-translate-y-1 transition-transform duration-300 cursor-default">
            <div className="px-6 py-4 bg-slate-900 rounded-xl shadow-2xl border border-slate-700/50 backdrop-blur-sm">
               <div className="flex gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
               </div>
               <p className="font-mono text-xs sm:text-sm text-slate-300 leading-relaxed tracking-wide">
                  <span className="text-pink-400">def</span> <span className="text-yellow-300">data_journey</span>(): <br/>
                 &nbsp;&nbsp;print(<span className="text-green-400">"Hi, welcome to my portfolio!"</span>) <br/>
                 &nbsp;&nbsp;user = <span className="text-amber-400">"Dani"</span> <span className="text-slate-500"># Data Enthusiast</span>
               </p>
            </div>
          </div>

          {/* Judul Utama: Ukuran diperkecil sedikit agar lebih elegan (text-6xl max) */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-950 leading-[1.15] mb-6 tracking-tight">
            Transforming Data into <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-amber-500 animate-gradient-x">
              Intelligent Insights
            </span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            Menggabungkan kekuatan <span className="font-semibold text-blue-700">SQL & Python</span> untuk mengolah data, membangun model <span className="font-semibold text-amber-600">Machine Learning</span>, dan menyajikan cerita visual yang berdampak.
          </p>
          
          {/* Tombol CTA */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <a href="#projects" className="px-8 py-3.5 bg-blue-900 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-900/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group">
              <Database size={18} className="text-amber-400 group-hover:rotate-12 transition-transform"/>
              Lihat Proyek
            </a>
            <a href="#contact" className="px-8 py-3.5 border border-blue-200 text-blue-900 font-medium rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all text-center">
              Hubungi Saya
            </a>
          </div>

          {/* Tech Stack Pills - Margin top diperbesar (mt-12) */}
          <div className="mt-12 flex flex-wrap items-center justify-center md:justify-start gap-3 text-sm font-medium">
             <span className="px-4 py-1.5 bg-white text-blue-700 rounded-full border border-blue-100 shadow-sm hover:scale-105 transition-transform cursor-default">Python 🐍</span>
             <span className="px-4 py-1.5 bg-white text-amber-700 rounded-full border border-amber-100 shadow-sm hover:scale-105 transition-transform cursor-default">SQL 🗄️</span>
             <span className="px-4 py-1.5 bg-white text-slate-700 rounded-full border border-slate-100 shadow-sm hover:scale-105 transition-transform cursor-default">TensorFlow 🧠</span>
             <span className="px-4 py-1.5 bg-white text-indigo-700 rounded-full border border-indigo-100 shadow-sm hover:scale-105 transition-transform cursor-default">Tableau 📊</span>
          </div>
        </div>
        
        {/* Kolom Kanan: Ilustrasi Visual 
            Menggunakan flex items-center agar vertikal alignment pas di tengah
        */}
        <div className="mt-16 md:mt-0 md:w-1/2 flex justify-center perspective-1000">
            <div className="relative w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tr from-blue-900 to-blue-600 rounded-full shadow-2xl flex items-center justify-center animate-pulse">
                {/* Cincin Orbit */}
                <div className="absolute inset-0 border-[3px] border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-6 border border-amber-400/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                
                {/* Main Icon: Brain (Intelligence/ML) */}
                <Brain size={110} className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] z-10" />
                
                {/* Elemen Mengambang 1: Raw Data/Code */}
                <div className="absolute -top-6 right-10 bg-white p-4 rounded-xl shadow-xl animate-bounce border border-blue-100" style={{animationDelay: '0s'}}>
                    <Binary className="text-blue-600" size={32} />
                    <div className="absolute -bottom-2 left-1/2 w-3 h-3 bg-white transform rotate-45 -translate-x-1/2"></div>
                </div>
                
                {/* Elemen Mengambang 2: Analytics/Visualization */}
                <div className="absolute bottom-12 -left-8 bg-white p-4 rounded-xl shadow-xl animate-bounce border border-amber-100" style={{animationDelay: '0.8s'}}>
                    <LineChart className="text-amber-500" size={32} />
                    <div className="absolute -right-2 top-1/2 w-3 h-3 bg-white transform rotate-45 -translate-y-1/2"></div>
                </div>
                
                {/* Elemen Mengambang 3: Storage/Engineering */}
                <div className="absolute -bottom-8 right-20 bg-white p-4 rounded-xl shadow-xl animate-bounce border border-indigo-100" style={{animationDelay: '1.5s'}}>
                    <Database className="text-indigo-600" size={32} />
                    <div className="absolute -top-2 left-1/2 w-3 h-3 bg-white transform rotate-45 -translate-x-1/2"></div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

/* KOMPONEN 5: About Section */
const About = () => {
    return (
        <section id="about" className="py-20 bg-white relative">
            {/* Background Pattern Halus */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px]"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-950 mb-16">
                    Tentang <span className="text-amber-500">Saya</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    
                    {/* Kolom Kiri: Bio & Education */}
                    <div className="space-y-8">
                        {/* Bio Card */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-blue-50 shadow-sm">
                            <h3 className="flex items-center text-xl font-bold text-blue-900 mb-4">
                                <Terminal className="w-5 h-5 mr-2 text-amber-500" />
                                Hello, I'm Dani!
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Memiliki latar belakang kuat di bidang <span className="font-semibold text-blue-700">Web & Backend Development</span> memberikan saya perspektif unik dalam dunia Data. Saya tidak hanya bisa membangun model AI, tetapi juga memahami infrastruktur server, API, dan database untuk men-deploy model tersebut agar berdampak nyata.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Saya memegang teguh prinsip <i>Lifelong Learning</i>. Saya selalu haus akan ilmu baru, terus mengeksplorasi teknologi mutakhir, dan bersemangat untuk meningkatkan keahlian saya agar dapat memberikan kontribusi positif di tempat saya berkarya.
                            </p>
                        </div>

                        {/* Education Section */}
                        <div>
                            <h3 className="flex items-center text-xl font-bold text-blue-950 mb-6">
                                <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
                                Pendidikan
                            </h3>
                            <div className="space-y-4">
                                {/* Bangkit Academy Card - Highlight Merah */}
                                <div className="relative overflow-hidden bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-md group hover:shadow-lg transition-all">
                                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Brain size={80} className="text-red-500" />
                                    </div>
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">Bangkit Academy led by Google, GoTo, & Traveloka</h4>
                                            <p className="text-red-600 font-medium text-sm">Machine Learning Cohort</p>
                                        </div>
                                        <span className="text-xs font-semibold bg-red-100 text-red-700 px-2 py-1 rounded">Distinction</span>
                                    </div>
                                    <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                                        Mengikuti kurikulum intensif Machine Learning. Mempelajari TensorFlow, Deep Learning, dan menuntaskan Capstone Project berbasis AI.
                                    </p>
                                </div>

                                {/* University Card */}
                                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:border-blue-200 transition-colors">
                                    <h4 className="font-bold text-blue-900 text-lg">Universitas [Nama Kampus]</h4>
                                    <p className="text-slate-500 text-sm mb-2">Bachelor's Degree, Computer Science / Informatics</p>
                                    <p className="text-slate-400 text-xs">20xx - 20xx</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Kolom Kanan: Tech Stack Grid */}
                    <div>
                        <h3 className="flex items-center text-xl font-bold text-blue-950 mb-6">
                            <Cpu className="w-6 h-6 mr-2 text-blue-600" />
                            Arsenals & Tools
                        </h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Kategori 1: Languages & Core */}
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:border-blue-300 transition-all hover:-translate-y-1">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                                    <Code size={20} />
                                </div>
                                <h4 className="font-bold text-gray-800 mb-2">Core & Logic</h4>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>• Python (Advanced)</li>
                                    <li>• SQL (Expert)</li>
                                    <li>• JavaScript (ES6+)</li>
                                </ul>
                            </div>

                            {/* Kategori 2: AI & ML */}
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:border-amber-300 transition-all hover:-translate-y-1">
                                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-4 text-amber-600">
                                    <Brain size={20} />
                                </div>
                                <h4 className="font-bold text-gray-800 mb-2">Machine Learning</h4>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>• TensorFlow & Keras</li>
                                    <li>• Scikit-learn</li>
                                    <li>• Deep Learning</li>
                                </ul>
                            </div>

                            {/* Kategori 3: Deployment & Engineering (BARU) 
                                Ini adalah tempat skill web dev Anda bersinar sebagai nilai tambah
                            */}
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:border-indigo-300 transition-all hover:-translate-y-1">
                                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 text-indigo-600">
                                    <Server size={20} />
                                </div>
                                <h4 className="font-bold text-gray-800 mb-2">Deploy & Backend</h4>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>• Flask & Node.js (API)</li>
                                    <li>• Supabase & Postgre</li>
                                    <li>• Postman & Git</li>
                                </ul>
                            </div>

                             {/* Kategori 4: Visualization */}
                             <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:border-green-300 transition-all hover:-translate-y-1">
                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-green-600">
                                    <BarChart3 size={20} />
                                </div>
                                <h4 className="font-bold text-gray-800 mb-2">Visualization</h4>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>• Tableau / Power BI</li>
                                    <li>• Matplotlib & Seaborn</li>
                                    <li>• Streamlit Dashboard</li>
                                </ul>
                            </div>
                        </div>

                        {/* Quote dengan Atribusi */}
                        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-white rounded-xl border border-blue-100 text-center relative">
                            <span className="text-4xl text-blue-200 absolute top-2 left-4">“</span>
                            <p className="italic text-blue-900 font-medium mb-2 relative z-10">
                                In God we trust. All others must bring data.
                            </p>
                            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                                — W. Edwards Deming, Statistician
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* KOMPONEN 6: Projects Section */
const Projects = () => {
    const projects = [
        { 
            title: "Indonesian App Review Analyzer", 
            subtitle: "Shopee Case Study",
            desc: "Architected a robust data pipeline to scrape and analyze 20,000+ noisy user reviews. Transforms colloquial text into structured datasets for In-House LLM preparation.", 
            tech: ["Python", "Streamlit", "Pandas", "NLP"],
            icon: <MessageSquare size={28} className="text-orange-500" />,
            color: "border-orange-200 hover:border-orange-400"
        },
        { 
            title: "CatBreed Detector", 
            subtitle: "End-to-End Computer Vision",
            desc: "A complete end-to-end CV project using EfficientNet-B0 transfer learning to classify cat breeds. Deployed via Flask with a responsive UI for real-time inference.", 
            tech: ["Flask", "TensorFlow", "SQLAlchemy", "JS"],
            icon: <Eye size={28} className="text-purple-500" />,
            color: "border-purple-200 hover:border-purple-400"
        },
        { 
            title: "The Eras Tour Sentiment", 
            subtitle: "Comprehensive NLP Analysis",
            desc: "Orchestrated an entire sentiment analysis pipeline in a single self-documented notebook. Features automated labeling, model comparison (3 schemas), and artifact management.", 
            tech: ["Jupyter", "Scikit-learn", "NLTK", "Seaborn"],
            icon: <Award size={28} className="text-pink-500" />,
            color: "border-pink-200 hover:border-pink-400"
        },
        { 
            title: "House Pricing Regression", 
            subtitle: "Advanced Predictive Modeling",
            desc: "Developed high-accuracy regression models to predict housing prices. Includes extensive EDA, feature engineering, and model deployment strategies.", 
            tech: ["XGBoost", "Python", "EDA", "Statistics"],
            icon: <Home size={28} className="text-blue-500" />,
            color: "border-blue-200 hover:border-blue-400"
        },
        { 
            title: "Customer Clustering", 
            subtitle: "Unsupervised Segmentation",
            desc: "Leveraged K-Means Clustering to segment mall customers based on income and spending scores, uncovering distinct behavioral groups for targeted marketing.", 
            tech: ["K-Means", "Unsupervised", "Matplotlib"],
            icon: <Users size={28} className="text-green-500" />,
            color: "border-green-200 hover:border-green-400"
        },
        { 
            title: "Customer Churn Prediction", 
            subtitle: "Supervised Classification",
            desc: "Evaluated multiple algorithms (KNN, Random Forest, SVM) to identify customers at risk of churning. Focuses on metric comparison and model interpretability.", 
            tech: ["Random Forest", "SVM", "Classification"],
            icon: <Activity size={28} className="text-red-500" />,
            color: "border-red-200 hover:border-red-400"
        },
    ];

    return (
        <section id="projects" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/40 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-amber-100/40 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                 <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wide uppercase mb-3">
                        Portfolio
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-blue-950 mb-4">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">Data Chronicles</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        A curated collection of my work in Data Science, Machine Learning, and Engineering. 
                        Each project represents a unique challenge solved with code and logic.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className={`group bg-white rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full ${project.color} border-slate-200`}>
                            
                            {/* Header: Icon & Titles */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-white group-hover:shadow-md transition-all">
                                    {project.icon}
                                </div>
                                <div className="flex gap-2">
                                     <a href="#" className="p-2 text-slate-400 hover:text-blue-600 transition-colors" title="View Code">
                                        <Github size={20} />
                                     </a>
                                     <a href="#" className="p-2 text-slate-400 hover:text-blue-600 transition-colors" title="Live Demo">
                                        <ExternalLink size={20} />
                                     </a>
                                </div>
                            </div>
                            
                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-900 transition-colors mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
                                    {project.subtitle}
                                </p>
                            </div>

                            {/* Body: Description */}
                            <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                {project.desc}
                            </p>

                            {/* Footer: Tech Stack */}
                            <div className="pt-4 border-t border-slate-100 mt-auto">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const Certificates = () => {
    const [activeTab, setActiveTab] = useState("All");

    // Data Sertifikat (Dikategorikan untuk kemudahan filter)
    const featuredCerts = [
        { title: "Machine Learning Specialization", provider: "DeepLearning.AI & Stanford", date: "2024-09-09", type: "Specialization" },
        { title: "TensorFlow Developer Specialization", provider: "DeepLearning.AI", date: "2024-09-09", type: "Specialization" },
        { title: "Math for Machine Learning & Data Science", provider: "DeepLearning.AI", date: "2024-09-09", type: "Specialization" },
        { title: "Bangkit Academy Machine Learning", provider: "Google, GoTo, Traveloka", date: "2023", type: "Distinction" },
        { title: "Junior Web Programmer", provider: "BNSP", date: "2024-12-02", type: "Professional Certification" },
    ];

    const allCerts = [
        // ML & AI Deep Dives
        { title: "NLP with Classification and Vector Spaces", provider: "DeepLearning.AI", category: "AI & ML" },
        { title: "NLP with Sequence Models", provider: "DeepLearning.AI", category: "AI & ML" },
        { title: "NLP with Probabilistic Models", provider: "DeepLearning.AI", category: "AI & ML" },
        { title: "Advanced Computer Vision with TensorFlow", provider: "DeepLearning.AI", category: "AI & ML" },
        { title: "Generative AI for Everyone", provider: "DeepLearning.AI", category: "AI & ML" },
        { title: "Build Basic GANs", provider: "DeepLearning.AI", category: "AI & ML" },
        { title: "Unsupervised Learning, Recommenders, RL", provider: "DeepLearning.AI", category: "AI & ML" },
        { title: "Supervised ML: Regression and Classification", provider: "DeepLearning.AI", category: "AI & ML" },
        { title: "Advanced Learning Algorithms", provider: "DeepLearning.AI", category: "AI & ML" },
        { title: "Convolutional Neural Networks in TensorFlow", provider: "Google", category: "AI & ML" },
        { title: "Building a Machine Learning System", provider: "Dicoding", category: "AI & ML" },
        
        // Data Science & Math
        { title: "Linear Algebra for ML & Data Science", provider: "DeepLearning.AI", category: "Data Science" },
        { title: "Calculus for ML & Data Science", provider: "DeepLearning.AI", category: "Data Science" },
        { title: "Probability & Statistics for ML & DS", provider: "DeepLearning.AI", category: "Data Science" },
        { title: "Learn Data Analysis with Python", provider: "Dicoding", category: "Data Science" },
        { title: "Learn the Basics of Data Visualization", provider: "Dicoding", category: "Data Science" },
        { title: "Learn the Basics of Data Science", provider: "Dicoding", category: "Data Science" },
        { title: "Learn Basic SQL", provider: "Dicoding", category: "Data Science" },

        // Engineering & Deployment (MLOps/Web)
        { title: "Data Pipelines with TensorFlow Data Services", provider: "DeepLearning.AI", category: "Engineering" },
        { title: "Browser-based Models with TF.js", provider: "DeepLearning.AI", category: "Engineering" },
        { title: "Device-based Models with TF Lite", provider: "DeepLearning.AI", category: "Engineering" },
        { title: "Custom and Distributed Training with TF", provider: "DeepLearning.AI", category: "Engineering" },
        { title: "Learn Cloud Basics and Gen AI on AWS", provider: "Dicoding", category: "Engineering" },
        { title: "Learn Google Cloud Basics", provider: "Dicoding", category: "Engineering" },
        { title: "Learn DevOps Basics", provider: "Dicoding", category: "Engineering" },
        { title: "Learn Git Basics with GitHub", provider: "Dicoding", category: "Engineering" },
        { title: "Using Python to Interact with OS", provider: "Google", category: "Engineering" },
        { title: "Beginner Back-End with JavaScript", provider: "Dicoding", category: "Web Dev" },
        { title: "Learn to Build Web Apps with React", provider: "Dicoding", category: "Web Dev" },
    ];

    const categories = ["All", "AI & ML", "Data Science", "Engineering", "Web Dev"];

    const filteredCerts = activeTab === "All" 
        ? allCerts 
        : allCerts.filter(c => c.category === activeTab);

    return (
        <section id="certificates" className="py-20 bg-white relative overflow-hidden">
             {/* Decorative Elements */}
             <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-slate-50 to-white"></div>
             
             <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
                        Credentials & <span className="text-amber-500">Certifications</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Continuous learning is my core value. Here are the specializations and courses 
                        I've completed to master the end-to-end Data & AI pipeline.
                    </p>
                </div>

                {/* 1. FEATURED CAROUSEL (Horizontal Scroll) */}
                <div className="mb-16">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                        <Award size={16} className="text-amber-500" /> 
                        Hall of Fame (Specializations)
                    </h3>
                    
                    <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide">
                        {featuredCerts.map((cert, index) => (
                            <div key={index} className="min-w-[300px] md:min-w-[350px] bg-gradient-to-br from-blue-900 to-slate-900 p-6 rounded-2xl text-white shadow-xl snap-center border border-blue-700 relative overflow-hidden group">
                                {/* Abstract Shine */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-colors duration-500"></div>
                                
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                                            <FileCheck size={24} className="text-amber-400" />
                                        </div>
                                        <span className="text-xs font-medium bg-blue-600/50 px-2 py-1 rounded border border-blue-500/50">
                                            {cert.type}
                                        </span>
                                    </div>
                                    
                                    <h4 className="text-lg font-bold leading-snug mb-2 group-hover:text-amber-300 transition-colors">
                                        {cert.title}
                                    </h4>
                                    <p className="text-sm text-slate-300 mb-4">{cert.provider}</p>
                                    
                                    <div className="flex items-center text-xs text-slate-400 gap-2">
                                        <Calendar size={14} />
                                        {cert.date}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. CATEGORIZED LIST (Tabs & Grid) */}
                <div>
                    <div className="flex flex-wrap justify-center gap-2 mb-10">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
                                ${activeTab === cat 
                                    ? "bg-blue-900 text-white shadow-lg scale-105" 
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in">
                        {filteredCerts.map((cert, index) => (
                            <div key={index} className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-white transition-all duration-200 group">
                                <div className="mt-1 mr-4">
                                    <div className="w-2 h-2 rounded-full bg-blue-400 group-hover:bg-amber-500 transition-colors"></div>
                                </div>
                                <div>
                                    <h5 className="text-sm font-bold text-slate-800 group-hover:text-blue-700 transition-colors line-clamp-2">
                                        {cert.title}
                                    </h5>
                                    <p className="text-xs text-slate-500 mt-1">{cert.provider}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* View All Credentials Link (Optional) */}
                    <div className="text-center mt-10">
                        <a href="#" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-amber-600 transition-colors">
                            View All Credentials on LinkedIn <ExternalLink size={14} className="ml-1" />
                        </a>
                    </div>
                </div>
             </div>
        </section>
    );
};

/* KOMPONEN 7: Contact Section */
const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-blue-950 mb-6">Mari Berkolaborasi</h2>
                <p className="text-slate-600 mb-8">
                    Tertarik untuk membuat website dengan desain yang elegan seperti ini? 
                    Hubungi saya untuk diskusi lebih lanjut.
                </p>
                <a 
                    href="mailto:email@example.com" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-900 text-white font-medium rounded-lg shadow-lg hover:bg-blue-800 transition-all group"
                >
                    <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Kirim Email
                </a>

                <div className="mt-12 flex justify-center space-x-6">
                    <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Github size={24} /></a>
                    <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Linkedin size={24} /></a>
                    <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><ExternalLink size={24} /></a>
                </div>
            </div>
        </section>
    );
}

/* MAIN APP COMPONENT 
  Ini adalah struktur utama yang menggantikan App.jsx Anda 
*/
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen font-sans bg-slate-50 text-slate-800 transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Contact />
        
        {/* Footer Sederhana */}
        <footer className="py-6 bg-slate-50 border-t border-slate-200 text-center text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Dani Portfolio. All rights reserved.
        </footer>
      </div>
    </>
  );
}

export default App;