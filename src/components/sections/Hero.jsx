import { Database, Binary, Brain, LineChart} from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-28 pb-20 md:pt-32">
      
      {/* background */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-[120px]"></div>

      {/* main container */}
      <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* left column: text n info */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          
          {/* fun element: code greeting */}
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
                 &nbsp;&nbsp;user = <span className="text-amber-400">"Aini"</span> <span className="text-slate-500"># Data Enthusiast</span>
               </p>
            </div>
          </div>

          {/* main title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-950 leading-[1.15] mb-6 tracking-tight">
            Transforming Data into <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-amber-500 animate-gradient-x">
              Intelligent Insights
            </span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            Leveraging the synergy of <span className="font-semibold text-blue-700">SQL & Python</span> to engineer data pipelines, develop robust <span className="font-semibold text-amber-600">Machine Learning</span> models, and craft data-driven narratives that empower strategic decision-making.
          </p>
          
          {/* button cta */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <a href="#projects" className="px-8 py-3.5 bg-blue-900 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-900/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group">
              <Database size={18} className="text-amber-400 group-hover:rotate-12 transition-transform"/>
              View Projects
            </a>
            <a href="#contact" className="px-8 py-3.5 border border-blue-200 text-blue-900 font-medium rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all text-center">
              Let's Connect
            </a>
          </div>

          {/* skills tags */}
          <div className="mt-12 flex flex-wrap items-center justify-center md:justify-start gap-3 text-sm font-medium">
             <span className="px-4 py-1.5 bg-white text-blue-700 rounded-full border border-blue-100 shadow-sm hover:scale-105 transition-transform cursor-default">Python 🐍</span>
             <span className="px-4 py-1.5 bg-white text-amber-700 rounded-full border border-amber-100 shadow-sm hover:scale-105 transition-transform cursor-default">SQL 🗄️</span>
             <span className="px-4 py-1.5 bg-white text-slate-700 rounded-full border border-slate-100 shadow-sm hover:scale-105 transition-transform cursor-default">TensorFlow 🧠</span>
             <span className="px-4 py-1.5 bg-white text-indigo-700 rounded-full border border-indigo-100 shadow-sm hover:scale-105 transition-transform cursor-default">Streamlit 📊</span>
          </div>
        </div>
        
        {/* right column: visual illustration */}
        <div className="mt-16 md:mt-0 md:w-1/2 flex justify-center perspective-1000">
            <div className="relative w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tr from-blue-900 to-blue-600 rounded-full shadow-2xl flex items-center justify-center animate-pulse">
                {/* orbit rings */}
                <div className="absolute inset-0 border-[3px] border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-6 border border-amber-400/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                
                {/* main icon: brain */}
                <Brain size={110} className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] z-10" />
                
                {/* float element1 */}
                <div className="absolute -top-6 right-10 bg-white p-4 rounded-xl shadow-xl animate-bounce border border-blue-100" style={{animationDelay: '0s'}}>
                    <Binary className="text-blue-600" size={32} />
                    <div className="absolute -bottom-2 left-1/2 w-3 h-3 bg-white transform rotate-45 -translate-x-1/2"></div>
                </div>
                
                {/* float element2 */}
                <div className="absolute bottom-12 -left-8 bg-white p-4 rounded-xl shadow-xl animate-bounce border border-amber-100" style={{animationDelay: '0.8s'}}>
                    <LineChart className="text-amber-500" size={32} />
                    <div className="absolute -right-2 top-1/2 w-3 h-3 bg-white transform rotate-45 -translate-y-1/2"></div>
                </div>
                
                {/* float element3 */}
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