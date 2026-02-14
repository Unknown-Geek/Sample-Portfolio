import React from 'react';
import { Linkedin } from 'lucide-react';
import profileImg from '../assets/profile.jpeg';

const Hero = () => {
    return (
        <section id="profile" className="py-20 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-space leading-[0.9] tracking-tighter text-black">
                    MANAGEMENT <br />
                    <span className="text-[var(--color-primary)]">& COORDINATION</span>
                </h1>
                <div className="flex flex-wrap gap-4 items-center">
                    <div className="inline-block bg-black text-white px-4 py-2 font-bold font-space uppercase">
                        Portfolio 2026
                    </div>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border-2 border-black bg-[var(--color-secondary)] px-4 py-2 font-bold font-space uppercase hover:bg-black hover:text-[var(--color-secondary)] transition-all duration-200 shadow-hard hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px]"
                    >
                        <Linkedin size={20} />
                        LinkedIn
                    </a>
                </div>
            </div>

            <div className="w-full">
                <div className="border-2 border-black bg-white p-6 shadow-hard h-full relative">
                    {/* Decorative element */}
                    <div className="hidden md:block absolute top-0 right-0 w-8 h-8 bg-[var(--color-accent)] border-l-2 border-b-2 border-black"></div>

                    <div className="border-b-2 border-black pb-4 mb-4 flex justify-between items-center">
                        <h2 className="font-space font-bold text-xl uppercase flex items-center gap-2 ">
                            <div className="w-3 h-3 bg-[var(--color-primary)] rounded-full border border-black"></div>
                            I'm SANDHRA TREASA MARIA
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                        <div className="w-full md:w-1/3 shrink-0">
                            <div className="aspect-square border-2 border-black overflow-hidden bg-[var(--color-muted-slate)]">
                                <img
                                    src={profileImg}
                                    alt="Profile"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <p className="font-inter text-lg leading-relaxed">
                                Dedicated coordinator with a proven track record in event management and team leadership.
                                Passionate about structured organization, effective communication, and driving operational success.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="border-2 border-black bg-[var(--color-accent)] p-3 text-center font-bold font-space text-sm hover:bg-black hover:text-[var(--color-accent)] transition-colors cursor-default">
                            LEADERSHIP
                        </div>
                        <div className="border-2 border-black bg-[var(--color-secondary)] p-3 text-center font-bold font-space text-sm hover:bg-black hover:text-[var(--color-secondary)] transition-colors cursor-default">
                            OPERATIONS
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
