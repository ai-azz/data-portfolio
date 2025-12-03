import { useState } from "react";
import { ExternalLink, Award, Calendar, FileCheck } from 'lucide-react';

export const Certificates = () => {
    const [activeTab, setActiveTab] = useState("All");

    const featuredCerts = [
        { title: "Machine Learning Specialization", provider: "DeepLearning.AI & Stanford", date: "2024-09-09", type: "Specialization", link: "https://www.coursera.org/account/accomplishments/specialization/831INCRG4UQ8" },
        { title: "TensorFlow Developer Specialization", provider: "DeepLearning.AI", date: "2024-09-09", type: "Specialization", link: "https://www.coursera.org/account/accomplishments/professional-cert/IWI7DVZVN9E9" },
        { title: "Math for Machine Learning & Data Science", provider: "DeepLearning.AI", date: "2024-09-09", type: "Specialization", link: "https://coursera.org/share/89e7c993e46c5b4a9037e6c04fd0a350" },
        // { title: "Bangkit Academy Machine Learning", provider: "Google, GoTo, Traveloka", date: "2023", type: "Distinction", link: "https://www.dicoding.com/certificates/YOUR_ID" },
        // { title: "Junior Web Programmer", provider: "BNSP", date: "2024-12-02", type: "Professional Certification", link: "#" },
    ];

    const allCerts = [
    // --- AI & Machine Learning ---
    {
        title: "Machine Learning Specialization",
        provider: "DeepLearning.AI",
        category: "AI & ML",
        link: "https://www.coursera.org/account/accomplishments/specialization/831INCRG4UQ8"
    },
    {
        title: "DeepLearning.AI TensorFlow Developer",
        provider: "DeepLearning.AI",
        category: "AI & ML",
        link: "https://www.coursera.org/account/accomplishments/professional-cert/IWI7DVZVN9E9"
    },
    {
        title: "Advanced Computer Vision with TensorFlow",
        provider: "DeepLearning.AI",
        category: "AI & ML",
        link: "https://coursera.org/share/2f3bc9a3bf3e175732d54794dd212d0f"
    },
    {
        title: "Natural Language Processing with Sequence Models",
        provider: "DeepLearning.AI",
        category: "AI & ML",
        link: "https://coursera.org/share/f8ca73d40bd01677269cdeff7cfaf634"
    },
    {
        title: "Natural Language Processing with Probabilistic Models",
        provider: "DeepLearning.AI",
        category: "AI & ML",
        link: "https://www.dicoding.com/certificates/0LZ09D4Q0Z65"
    },
    {
        title: "NLP with Classification and Vector Spaces",
        provider: "DeepLearning.AI",
        category: "AI & ML",
        link: "https://coursera.org/share/afd44cb92d00a84819e377870820ec1d"
    },
    {
        title: "NLP in TensorFlow",
        provider: "DeepLearning.AI",
        category: "AI & ML",
        link: "https://coursera.org/share/c8d867193a370442567a04c419b5aa4c"
    },
    {
        title: "Convolutional Neural Networks in TensorFlow",
        provider: "Google",
        category: "AI & ML",
        link: "https://coursera.org/share/525fb7beee7bd571100a3ce945fdb9f1"
    },
    {
        title: "Supervised ML: Regression and Classification",
        provider: "DeepLearning.AI",
        category: "AI & ML",
        link: "https://coursera.org/share/58a94316fa03af29d99663d9d99eb838"
    },
    {
        title: "Unsupervised Learning, Recommenders, RL",
        provider: "DeepLearning.AI",
        category: "AI & ML",
        link: "https://coursera.org/share/676d439011c8a5476b9a372482da82ef"
    },
    {
        title: "Advanced Learning Algorithms",
        provider: "DeepLearning.AI",
        category: "AI & ML",
        link: "https://coursera.org/share/49ddbbfc238cd9ca99672296c9417138"
    },
    {
        title: "Sequences, Time Series and Prediction",
        provider: "DeepLearning.AI",
        category: "AI & ML",
        link: "https://coursera.org/share/849c4c0063d4188c81eeb6f283ecb2e0"
    },
    {
        title: "Generative AI for Everyone",
        provider: "DeepLearning.AI",
        category: "AI & ML",
        link: "https://coursera.org/share/da4126c06a719de4548102f1cdfc02de"
    },
    {
        title: "Build Basic GANs",
        provider: "DeepLearning.AI",
        category: "AI & ML",
        link: "https://coursera.org/share/1fcc27c6939d983b4e7a88d640d8e968"
    },
    {
        title: "Custom Models, Layers, and Loss Functions",
        provider: "DeepLearning.AI",
        category: "AI & ML",
        link: "https://coursera.org/share/19b258ece2d3f4c9e0864dfb83dd1063"
    },
    {
        "title": "Structuring Machine Learning Projects",
        provider: "DeepLearning.AI",
        category: "AI & ML",
        link: "https://coursera.org/share/5c9d91b84e20d37f93e6af9122683d3f"
    },
    {
        "title": "Intro to TensorFlow for AI, ML, and DL",
        provider: "DeepLearning.AI",
        category: "AI & ML",
        link: "https://coursera.org/share/b6b396e41c847543919f4efaf3727337"
    },
    {
        "title": "Building a Machine Learning System",
        provider: "Dicoding",
        category: "AI & ML",
        link: "https://www.dicoding.com/certificates/0LZ0592E3X65"
    },
    {
        "title": "Learn Machine Learning for Beginners",
        provider: "Dicoding",
        category: "AI & ML",
        link: "https://www.dicoding.com/certificates/1OP82JQN8PQK"
    },
    {
        "title": "Learn Deep Learning Fundamentals",
        provider: "Dicoding",
        category: "AI & ML",
        link: "https://www.dicoding.com/certificates/81P25OEKNPOY"
    },
    {
        "title": "Learn AI Basics",
        provider: "Dicoding",
        category: "AI & ML",
        link: "https://www.dicoding.com/certificates/EYX4GRW1OZDL"
    },
    {
        "title": "Learning to Use Generative AI",
        provider: "Dicoding",
        category: "AI & ML",
        link: "https://www.dicoding.com/certificates/1RXYQW5QKZVM"
    },
    {
        "title": "Prompt Engineering for Software Developers",
        provider: "Dicoding",
        category: "AI & ML",
        link: "https://www.dicoding.com/certificates/1OP8J580VPQK"
    },
    {
        "title": "Practical AI for Productivity",
        provider: "Dicoding",
        category: "AI & ML",
        link: "https://www.dicoding.com/certificates/QLZ968MMMZ5D"
    },

    // --- Data Science ---
    {
        title: "Mathematics for ML and Data Science",
        provider: "DeepLearning.AI",
        category: "Data Science",
        link: "https://coursera.org/share/89e7c993e46c5b4a9037e6c04fd0a350"
    },
    {
        title: "Calculus for ML and Data Science",
        provider: "DeepLearning.AI",
        category: "Data Science",
        link: "https://coursera.org/share/1824abc010d9775cfc0be866557f46da"
    },
    {
        title: "Linear Algebra for ML and Data Science",
        provider: "DeepLearning.AI",
        category: "Data Science",
        link: "https://coursera.org/share/8eeb836d54480a262fb6859ec6cf3739"
    },
    {
        title: "Probability & Statistics for ML & DS",
        provider: "DeepLearning.AI",
        category: "Data Science",
        link: "https://coursera.org/share/89e7c993e46c5b4a9037e6c04fd0a350"
    },
    {
        title: "Learn Data Analysis with Python",
        provider: "Dicoding",
        category: "Data Science",
        link: "https://www.dicoding.com/certificates/N9ZOY6YJDPG5"
    },
    {
        "title": "Learn the Basics of Data Visualization",
        provider: "Dicoding",
        category: "Data Science",
        link: "https://www.dicoding.com/certificates/72ZD5KGVQZYW"
    },
    {
        "title": "Learn the Basics of Data Science",
        provider: "Dicoding",
        category: "Data Science",
        link: "https://www.dicoding.com/certificates/KEXL8492YZG2"
    },
    {
        "title": "Learn Basic SQL",
        provider: "Dicoding",
        category: "Data Science",
        link: "https://www.dicoding.com/certificates/2VX36VRJ3XYQ"
    },

    // --- Engineering (Cloud, DevOps, MLOps, System) ---
    {
        title: "Data Pipelines with TensorFlow Data Services",
        provider: "DeepLearning.AI",
        category: "Engineering",
        link: "https://coursera.org/share/71636495e9da4586ea2578158045c2d5"
    },
    {
        "title": "Custom and Distributed Training with TF",
        provider: "DeepLearning.AI",
        category: "Engineering",
        link: "https://coursera.org/share/8c4012961ea2b9a2b019524ae13befb1"
    },
    {
        "title": "Device-based Models with TensorFlow Lite",
        provider: "DeepLearning.AI",
        category: "Engineering",
        link: "https://coursera.org/share/eac7392c4aeeb2d409a61ac9d474477b"
    },
    {
        "title": "Browser-based Models with TensorFlow.js",
        provider: "DeepLearning.AI",
        category: "Engineering",
        link: "https://coursera.org/share/b6443d66c1524dca289b0f81e7f28d89"
    },
    {
        "title": "Using Python to Interact with the OS",
        provider: "Google",
        category: "Engineering",
        link: "https://coursera.org/share/320f58a5b5e48396e58fee6f643aca35"
    },
    {
        "title": "Learn Cloud Basics and Gen AI on AWS",
        provider: "Dicoding",
        category: "Engineering",
        link: "https://www.dicoding.com/certificates/1OP82JEO2PQK"
    },
    {
        "title": "Learn Google Cloud Basics",
        provider: "Dicoding",
        category: "Engineering",
        link: "https://www.dicoding.com/certificates/GRX5JWV4KX0M"
    },
    {
        "title": "Learn DevOps Basics",
        provider: "Dicoding",
        category: "Engineering",
        link: "https://www.dicoding.com/certificates/0LZ09D4Q0Z65"
    },
    {
        "title": "Learn Computer Networks for Beginners",
        provider: "Dicoding",
        category: "Engineering",
        link: "https://www.dicoding.com/certificates/JLX1DVOW2Z72"
    },
    {
        "title": "Learn Git Basics with GitHub",
        provider: "Dicoding",
        category: "Engineering",
        link: "https://www.dicoding.com/certificates/JMZV3KWVNPN9"
    },
    {
        "title": "Crash Course on Python",
        provider: "Google",
        category: "Engineering",
        link: "https://coursera.org/share/8b18b6ee0bd6fbc247bd2d7264118bcd"
    },
    {
        "title": "Learn the Basics of Project Management",
        provider: "Dicoding",
        category: "Engineering",
        link: "https://www.dicoding.com/certificates/2VX3JMJ23PYQ"
    },

    // --- Web Dev & General ---
    {
        title: "Junior Web Programmer",
        provider: "BNSP",
        category: "Web Dev",
        link: "https://drive.google.com/file/d/1jKDqIfJagw6LXkGzYkYDkYQI7iK4-Fnx/view?usp=sharing"
    },
    {
        "title": "Beginner Back-End Learning with JavaScript",
        provider: "Dicoding",
        category: "Web Dev",
        link: "https://www.dicoding.com/certificates/07Z6095VJZQR"
    },
    {
        "title": "Learn to Build Web Apps with React",
        provider: "Dicoding",
        category: "Web Dev",
        link: "https://www.dicoding.com/certificates/98XWE69M9XM3"
    },
    {
        "title": "Learn to Create Front-End Web for Beginners",
        provider: "Dicoding",
        category: "Web Dev",
        link: "https://www.dicoding.com/certificates/1RXYENK11ZVM"
    },
    {
        "title": "Learn the Basics of Web Programming",
        provider: "Dicoding",
        category: "Web Dev",
        link: "https://www.dicoding.com/certificates/53XEQ765VXRN"
    },
    {
        "title": "Getting Started with Programming with Python",
        provider: "Dicoding",
        category: "Web Dev",
        link: "https://www.dicoding.com/certificates/0LZ0R5LQRP65"
    },
    {
        "title": "Getting Started with Programming Basics",
        provider: "Dicoding",
        category: "Web Dev",
        link: "https://www.dicoding.com/certificates/81P2NR9VNXOY"
    },
    {
        "title": "Introduction to Programming Logic",
        provider: "Dicoding",
        category: "Web Dev",
        link: "https://www.dicoding.com/certificates/N9ZOMKMN0PG5"
    }
    ];

    const categories = ["All", "AI & ML", "Data Science", "Engineering", "Web Dev"];

    const filteredCerts = activeTab === "All" 
        ? allCerts 
        : allCerts.filter(c => c.category === activeTab);

    return (
        <section id="certificates" className="py-20 bg-white relative overflow-hidden">
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

                <div className="mb-16">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                        <Award size={16} className="text-amber-500" /> 
                        Hall of Fame (Specializations)
                    </h3>
                    
                    <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide">
                        {featuredCerts.map((cert, index) => (
                            <a 
                                key={index} 
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="min-w-[300px] md:min-w-[350px] bg-gradient-to-br from-blue-900 to-slate-900 p-6 rounded-2xl text-white shadow-xl snap-center border border-blue-700 relative overflow-hidden group block hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-colors duration-500"></div>
                                
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                                            <FileCheck size={24} className="text-amber-400" />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-medium bg-blue-600/50 px-2 py-1 rounded border border-blue-500/50">
                                                {cert.type}
                                            </span>
                                            <ExternalLink size={16} className="text-slate-400 group-hover:text-white transition-colors" />
                                        </div>
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
                            </a>
                        ))}
                    </div>
                </div>

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
                            <a 
                                key={index} 
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-white transition-all duration-200 group cursor-pointer"
                            >
                                <div className="mt-1 mr-4">
                                    <div className="w-2 h-2 rounded-full bg-blue-400 group-hover:bg-amber-500 transition-colors"></div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h5 className="text-sm font-bold text-slate-800 group-hover:text-blue-700 transition-colors line-clamp-2 pr-2">
                                            {cert.title}
                                        </h5>
                                        <ExternalLink size={14} className="text-slate-300 group-hover:text-blue-400 flex-shrink-0 transition-colors mt-1" />
                                    </div>
                                    <p className="text-xs text-slate-500 mt-1">{cert.provider}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                    
                    {/* <div className="text-center mt-10">
                        <a href="#" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-amber-600 transition-colors">
                            View All Credentials on LinkedIn <ExternalLink size={14} className="ml-1" />
                        </a>
                    </div> */}
                </div>
             </div>
        </section>
    );
};