import { Code, Brain, GraduationCap, Terminal, Cpu, BarChart3, Server, ExternalLink } from 'lucide-react';

export const About = () => {
    return (
        <section id="about" className="py-20 bg-white relative">
            {/* background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px]"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-950 mb-16">
                    About <span className="text-amber-500">Me</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    
                    {/* left column: bio n ed */}
                    <div className="space-y-8">
                        {/* bio card */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-blue-50 shadow-sm">
                            <h3 className="flex items-center text-xl font-bold text-blue-900 mb-4">
                                <Terminal className="w-5 h-5 mr-2 text-amber-500" />
                                Hello, I'm aini!
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                I don't just look at numbers. I see the stories behind them. As a dedicated <span className="font-semibold text-blue-700">Data Enthusiast</span>, I specialize in transforming raw, complex data into clear, actionable insights. My core expertise lies in <span className="font-semibold text-amber-600">Data Science and Machine Learning</span>, where I build predictive models, conduct rigorous statistical analysis, and design interactive dashboards to drive strategic decision-making.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                What sets me apart is my solid foundation in <strong>Web & Backend Development</strong>. This technical versatility allows me to go beyond just training models. I understand how to engineer the infrastructure, manage databases, and deploy AI solutions via APIs to ensure they deliver real-world impact.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                I am driven by a <i>Lifelong Learning</i> mindset. Whether it's mastering the latest AI algorithms or exploring new BI tools, I am constantly evolving to stay reliable and deliver high-quality results in every project I undertake. ♡
                            </p>
                        </div>

                        {/* education section */}
                        <div>
                            <h3 className="flex items-center text-xl font-bold text-blue-950 mb-6">
                                <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
                                Education
                            </h3>
                            <div className="space-y-4">
                                {/* bangkit card */}
                                <a 
                                    href="https://www.linkedin.com/in/ainiazzah/overlay/1743870519145/single-media-viewer/?profileId=ACoAAErj_uQBGcaNwBrurJID5SIjzsC9JLCtjik"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block relative overflow-hidden bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-md group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                                >
                                    <div className="absolute top-4 right-4 z-20">
                                        <ExternalLink size={20} className="text-slate-300 group-hover:text-red-500 transition-colors duration-300" />
                                    </div>

                                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                                        <Brain size={80} className="text-red-500" />
                                    </div>

                                    <div className="flex justify-between items-start mb-2 relative z-10">
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg group-hover:text-red-600 transition-colors">
                                                Bangkit Academy led by Google, GoTo, & Traveloka
                                            </h4>
                                            <p className="text-red-600 font-medium text-sm">Machine Learning Cohort</p>
                                        </div>
                                        {/* <span className="text-xs font-semibold bg-red-100 text-red-700 px-2 py-1 rounded ml-2">Distinction</span> */}
                                    </div>

                                    <p className="text-slate-600 text-sm mt-3 leading-relaxed relative z-10">
                                        Selected for an intensive Machine Learning curriculum. Mastered TensorFlow, Deep Learning concepts, and successfully delivered an AI-based Capstone Project.
                                    </p>
                                </a>

                                {/* uni card */}
                                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:border-blue-200 transition-colors">
                                    <h4 className="font-bold text-blue-900 text-lg">State University of Surabaya</h4>
                                    <p className="text-slate-500 text-sm mb-2">Bachelor of Applied Science in Informatics Management</p>
                                    <p className="text-slate-400 text-xs">2021 - 2025</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right column: tech stack grid */}
                    <div>
                        <h3 className="flex items-center text-xl font-bold text-blue-950 mb-6">
                            <Cpu className="w-6 h-6 mr-2 text-blue-600" />
                            Arsenals & Tools
                        </h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* languages & core */}
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

                            {/* AI & ML */}
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

                            {/* deployment & engineering */}
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:border-indigo-300 transition-all hover:-translate-y-1">
                                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 text-indigo-600">
                                    <Server size={20} />
                                </div>
                                <h4 className="font-bold text-gray-800 mb-2">Deployment & Engineering</h4>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>• Flask / REST APIs</li>
                                    <li>• PostgreSQL & Database Design</li>
                                    <li>• Postman & Git</li>
                                </ul>
                            </div>

                             {/* visualization */}
                             <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:border-green-300 transition-all hover:-translate-y-1">
                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-green-600">
                                    <BarChart3 size={20} />
                                </div>
                                <h4 className="font-bold text-gray-800 mb-2">Visualization</h4>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>• Exploratory Data Analysis (EDA)</li>
                                    <li>• Matplotlib & Seaborn</li>
                                    <li>• Streamlit Dashboard</li>
                                </ul>
                            </div>
                        </div>

                        {/* quote */}
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