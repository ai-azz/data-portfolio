import { Github, ExternalLink, Award, Eye, Home, Users, Activity, MessageSquare } from 'lucide-react';

export const Projects = () => {
    const projects = [
        { 
            title: "Indonesian App Review Analyzer", 
            subtitle: "Shopee Case Study",
            desc: "Architected a robust data pipeline to scrape and analyze 20,000+ noisy user reviews. Transforms colloquial text into structured datasets for In-House LLM preparation.", 
            tech: ["Python", "Streamlit", "Pandas", "NLP"],
            icon: <MessageSquare size={28} className="text-orange-500" />,
            color: "border-orange-200 hover:border-orange-400",
            github: "https://github.com/ai-azz/shopeeId-review-analyzer",
            demo: "https://shopeeid-review-analyzer.streamlit.app/"
        },
        { 
            title: "CatBreed Detector", 
            subtitle: "End-to-End Computer Vision",
            desc: "A complete end-to-end CV project using EfficientNet-B0 transfer learning to classify cat breeds. Deployed via Flask with a responsive UI for real-time inference.", 
            tech: ["Flask", "TensorFlow", "SQLAlchemy", "JS"],
            icon: <Eye size={28} className="text-purple-500" />,
            color: "border-purple-200 hover:border-purple-400",
            github: "https://github.com/ai-azz/catbreed-predict-web",
            demo: "https://www.youtube.com/watch?v=rzV4_h7148s"
        },
        { 
            title: "The Eras Tour Sentiment", 
            subtitle: "Comprehensive NLP Analysis",
            desc: "Orchestrated an entire sentiment analysis pipeline in a single self-documented notebook. Features automated labeling, model comparison (3 schemas), and artifact management.", 
            tech: ["Jupyter", "Scikit-learn", "NLTK", "Seaborn"],
            icon: <Award size={28} className="text-pink-500" />,
            color: "border-pink-200 hover:border-pink-400",
            github: "https://github.com/ai-azz/analysis-sentiment_scrapping-data",
            demo: null
        },
        { 
            title: "House Pricing Regression", 
            subtitle: "Advanced Predictive Modeling",
            desc: "Developed high-accuracy regression models to predict housing prices. Includes extensive EDA, feature engineering, and model deployment strategies.", 
            tech: ["XGBoost", "Python", "EDA", "Statistics"],
            icon: <Home size={28} className="text-blue-500" />,
            color: "border-blue-200 hover:border-blue-400",
            github: "https://github.com/ai-azz/house-pricing-regression",
            demo: null 
        },
        { 
            title: "Customer Clustering", 
            subtitle: "Unsupervised Segmentation",
            desc: "Leveraged K-Means Clustering to segment mall customers based on income and spending scores, uncovering distinct behavioral groups for targeted marketing.", 
            tech: ["K-Means", "Unsupervised", "Matplotlib"],
            icon: <Users size={28} className="text-green-500" />,
            color: "border-green-200 hover:border-green-400",
            github: "https://github.com/ai-azz/customer-segmentation",
            demo: null 
        },
        { 
            title: "Customer Churn Prediction", 
            subtitle: "Supervised Classification",
            desc: "Evaluated multiple algorithms (KNN, Random Forest, SVM) to identify customers at risk of churning. Focuses on metric comparison and model interpretability.", 
            tech: ["Random Forest", "SVM", "Classification"],
            icon: <Activity size={28} className="text-red-500" />,
            color: "border-red-200 hover:border-red-400",
            github: "https://github.com/ai-azz/customer-churn-classification",
            demo: null 
        },
    ];

    return (
        <section id="projects" className="py-24 bg-slate-50 relative overflow-hidden">
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
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-white group-hover:shadow-md transition-all">
                                    {project.icon}
                                </div>
                                <div className="flex gap-2">
                                     <a 
                                        href={project.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="p-2 text-slate-400 hover:text-blue-600 transition-colors" 
                                        title="View Code on GitHub"
                                     >
                                        <Github size={20} />
                                     </a>
                                     
                                     {project.demo && (
                                         <a 
                                            href={project.demo} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="p-2 text-slate-400 hover:text-blue-600 transition-colors" 
                                            title="Live Demo"
                                         >
                                            <ExternalLink size={20} />
                                         </a>
                                     )}
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

                            <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                {project.desc}
                            </p>

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