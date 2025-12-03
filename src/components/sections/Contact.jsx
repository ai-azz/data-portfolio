import React, { useState, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Loader2, Send, User, MessageCircle, AlertCircle, CheckCircle2} from 'lucide-react';
import emailjs from 'emailjs-com';

export const Contact = () => {
    const form = useRef();
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState("idle"); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("sending");

        // setTimeout(() => {
        //     console.log("Email simulated sent!", formData);
        //     setStatus("success");
        //     setFormData({ name: '', email: '', message: '' });
        //     setTimeout(() => setStatus("idle"), 5000);
        // }, 2000);

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID, 
            import.meta.env.VITE_TEMPLATE_ID, 
            form.current, 
            import.meta.env.VITE_PUBLIC_KEY
        )
        .then((result) => {
            // console.log(result.text);
            setStatus("success");
            setFormData({ name: '', email: '', message: '' }); 
            setTimeout(() => setStatus("idle"), 5000);
        }, (error) => {
            console.log(error.text);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        });
    };

    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute -left-20 bottom-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-700 text-xs font-bold tracking-wide uppercase mb-4">
                            Get In Touch
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6 leading-tight">
                            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">Connect the Dots?</span>
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            Got a raw dataset waiting to be mined? Or perhaps a complex model that needs deployment? 
                            Whether it's a coffee chat about the future of AI, a potential collaboration, or just saying hi, 
                            my inbox is always open. Let's turn data into action!
                        </p>

                        <div className="space-y-4">
                            <a href="mailto:email@example.com" className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors group">
                                <div className="p-3 bg-white rounded-lg shadow-sm text-blue-600 group-hover:text-amber-500 transition-colors">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-blue-900">Email Me</h5>
                                    <p className="text-slate-500 text-sm">ainiazzah22@gmail.com</p>
                                </div>
                            </a>
                            
                            <div className="flex gap-4 mt-8">
                                <a href="https://github.com/ai-azz" className="p-3 bg-slate-100 rounded-full text-slate-500 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1">
                                    <Github size={24} />
                                </a>
                                <a href="https://linkedin.com/in/ainiazzah" className="p-3 bg-slate-100 rounded-full text-slate-500 hover:bg-blue-700 hover:text-white transition-all transform hover:-translate-y-1">
                                    <Linkedin size={24} />
                                </a>
                                {/* <a href="#" className="p-3 bg-slate-100 rounded-full text-slate-500 hover:bg-pink-600 hover:text-white transition-all transform hover:-translate-y-1">
                                    <ExternalLink size={24} />
                                </a> */}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 relative">
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            
                            {/* notif allert */}
                            {status === "success" && (
                                <div className="p-4 bg-green-50 border border-green-200 text-green-700 text-sm font-medium rounded-xl animate-fade-in flex items-center gap-3 shadow-sm">
                                    <CheckCircle2 size={20} className="text-green-500 flex-shrink-0" />
                                    <div>
                                        <p className="font-bold">High five! Message sent.</p>
                                        <p className="text-xs text-green-600">I'll get back to you faster than a SQL query!</p>
                                    </div>
                                </div>
                            )}
                            {status === "error" && (
                                <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm font-medium rounded-xl animate-fade-in flex items-center gap-3 shadow-sm">
                                    <AlertCircle size={20} className="text-red-500 flex-shrink-0" />
                                    <div>
                                        <p className="font-bold">Oops! The server hiccuped.</p>
                                        <p className="text-xs text-red-600">Please try again or ping me on LinkedIn.</p>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-semibold text-slate-700 ml-1">Your Name</label>
                                <div className="relative">
                                    <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input 
                                        type="text" 
                                        name="name" 
                                        value={formData.name}
                                        onChange={handleChange}
                                        required 
                                        placeholder="John Doe"
                                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-700 placeholder:text-slate-400"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-semibold text-slate-700 ml-1">Your Email</label>
                                <div className="relative">
                                    <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input 
                                        type="email" 
                                        name="email" 
                                        value={formData.email}
                                        onChange={handleChange}
                                        required 
                                        placeholder="john@example.com"
                                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-700 placeholder:text-slate-400"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-semibold text-slate-700 ml-1">Message</label>
                                <div className="relative">
                                    <MessageCircle size={20} className="absolute left-4 top-6 text-slate-400" />
                                    <textarea 
                                        name="message" 
                                        value={formData.message}
                                        onChange={handleChange}
                                        required 
                                        rows="4"
                                        placeholder="Let's build an AI model that..."
                                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-700 placeholder:text-slate-400 resize-none"
                                    ></textarea>
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                disabled={status === "sending"}
                                className="w-full py-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-900/20 transform hover:-translate-y-1 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {status === "sending" ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send size={20} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}