import React from 'react';

const Hero = () => {
    return (
        <section id="profile" className="py-20 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-space leading-[0.9] tracking-tighter break-words">
                    MANAGEMENT <br />
                    & COORDINATION
                </h1>
                <div className="inline-block bg-black text-white px-4 py-2 font-bold font-space uppercase">
                    Portfolio 2026
                </div>
            </div>

            <div className="w-full">
                <div className="border-2 border-black bg-white p-6 shadow-hard h-full">
                    <div className="border-b-2 border-black pb-4 mb-4 flex justify-between items-center">
                        <h2 className="font-space font-bold text-xl uppercase">CANDIDATE PROFILE</h2>
                        <div className="w-4 h-4 bg-black"></div>
                    </div>
                    <p className="font-inter text-lg leading-relaxed mb-6">
                        Dedicated coordinator with a proven track record in event management and team leadership.
                        Passionate about structured organization, effective communication, and driving operational success.
                        Ready to bring discipline and creativity to impactful projects.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="border-2 border-black p-3 text-center font-bold font-space text-sm hover:bg-black hover:text-white transition-colors cursor-default">
                            LEADERSHIP
                        </div>
                        <div className="border-2 border-black p-3 text-center font-bold font-space text-sm hover:bg-black hover:text-white transition-colors cursor-default">
                            OPERATIONS
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
