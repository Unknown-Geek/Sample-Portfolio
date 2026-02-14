import React from 'react';
import { Users, Zap, BarChart3, Trophy, Shield, Mic, Ticket, Monitor } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceCard from './components/ExperienceCard';
import EventTabs from './components/EventTabs';

function App() {
    return (
        <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
            <Navbar />

            <main>
                <Hero />

                {/* Experience Section */}
                <section id="experience" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
                    <div className="mb-12 border-b-2 border-black pb-4 flex items-end gap-4">
                        <h2 className="text-4xl md:text-6xl font-black font-space uppercase leading-none">
                            Experience <br /> Log
                        </h2>
                        <div className="w-4 h-4 bg-black mb-2 "></div>
                    </div>

                    {/* Leadership Section */}
                    <div className="mb-20">
                        <div className="font-space font-bold text-2xl border-b-2 border-black inline-block mb-8">LEADERSHIP</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <ExperienceCard
                                title="Part Time Job Assist Cell"
                                role="Co-Convenor"
                                period="2025-26"
                                icon={Users}
                                className="h-full"
                            >
                                <p>
                                    Coordinating cell activities and managing part-time initiatives.
                                    Ensuring smooth operations and student engagement.
                                </p>
                            </ExperienceCard>
                            
                            <ExperienceCard
                                title="Ladies Hostel Union"
                                role="Member"
                                period="2024-25"
                                icon={Shield}
                                className="h-full"
                            >
                                <p>
                                    Representing student interests and coordinating hostel activities. Ensuring
                                    resident welfare and maintaining discipline standards.
                                </p>
                            </ExperienceCard>

                            <ExperienceCard
                                title="IEDC Women’s Innovation"
                                role="Subpanel Member"
                                period="2024-25"
                                icon={Users}
                                className="h-full"
                            >
                                <p>
                                    Promoting women entrepreneurship and innovation. Organizing workshops
                                    and mentorship sessions to bridge the gender gap in tech.
                                </p>
                            </ExperienceCard>
                        </div>
                    </div>

                    {/* Marketing Section */}
                    <div className="mb-20">
                        <div className="font-space font-bold text-2xl border-b-2 border-black inline-block mb-8">MARKETING & GROWTH</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <ExperienceCard
                                title="IEDC Marketing"
                                role="Subpanel Member"
                                period="2025-26"
                                icon={BarChart3}
                                className="h-full"
                            >
                                <p>
                                    Strategizing outreach campaigns for IEDC events. Managing social media
                                    presence and driving engagement for campus initiatives.
                                </p>
                            </ExperienceCard>

                            <ExperienceCard
                                title="Build Club"
                                role="Publicity Team"
                                period="2024-25"
                                icon={Zap}
                                className="h-full"
                            >
                                <p>
                                    Executed publicity drives for hackathons and builder summits.
                                    Increased participation by 40% through targeted campus campaigns.
                                </p>
                            </ExperienceCard>

                            <ExperienceCard
                                title="Drishti’24"
                                role="Publicity & Sponsorship"
                                period="2024"
                                icon={Trophy}
                                className="h-full"
                            >
                                <p>
                                    Secured sponsorships and managed branding visibility.
                                    Coordinated rigorous on-ground publicity efforts.
                                </p>
                            </ExperienceCard>
                        </div>
                    </div>

                    {/* Event Operations Section */}
                    <div className="mb-20">
                        <div className="font-space font-bold text-2xl border-b-2 border-black inline-block mb-8">EVENT OPERATIONS</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="md:col-span-2 lg:col-span-1">
                                <ExperienceCard
                                    title="Dhwani’24"
                                    role="Multi-Role Coordinator"
                                    period="2024"
                                    icon={Mic}
                                    className="h-full"
                                >
                                    <EventTabs events={[
                                        {
                                            id: 'reg',
                                            label: 'Registration',
                                            content: 'Managed check-n systems for 1000+ attendees. Streamlined flow to reduce wait times.'
                                        },
                                        {
                                            id: 'stage',
                                            label: 'Live Stage',
                                            content: 'Coordinated backstage logistics and artist hospitality. Ensured seamless stage transitions.'
                                        },
                                        {
                                            id: 'disc',
                                            label: 'Discipline',
                                            content: 'Enforced crowd control protocols during peak performance hours. Maintained safety standards.'
                                        }
                                    ]} />
                                </ExperienceCard>
                            </div>

                            <div className="md:col-span-1">
                                <ExperienceCard
                                    title="Ignites’23 & ’24"
                                    role="IEDC Coordinator"
                                    period="2023-24"
                                    icon={Zap}
                                    className="h-full"
                                >
                                    <p>
                                        Spearheaded the planning and execution of the annual innovation summit.
                                        Managed volunteer teams and logistics.
                                    </p>
                                </ExperienceCard>
                            </div>

                            <div className="flex flex-col gap-6 md:col-span-1">
                                <ExperienceCard
                                    title="Spectra"
                                    role="Volunteer"
                                    period="2024"
                                    icon={Users}
                                    className="h-full"
                                >
                                    <p className="text-sm">Assisted in venue setup and crowd management.</p>
                                </ExperienceCard>

                                <ExperienceCard
                                    title="Mashi"
                                    role="Volunteer"
                                    period="2024"
                                    icon={Users}
                                    className="h-full"
                                >
                                    <p className="text-sm">Supported workshop logistics and participant guidance.</p>
                                </ExperienceCard>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer/Contact */}
                <footer id="contact" className="border-t-2 border-black bg-muted-slate py-12 px-6 text-center">
                    <h2 className="font-space font-bold text-3xl mb-6">READY TO COLLABORATE?</h2>
                    <a
                        href="https://wa.me/918075323865"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-black px-8 py-3 font-space font-bold uppercase text-lg border-2 border-black shadow-hard hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] active:scale-95 transition-all duration-200"
                    >
                        Get in Touch
                    </a>
                    <div className="mt-12 font-inter text-sm text-gray-500">
                        © Portfolio. Sandhra Treasa Maria .
                    </div>
                </footer>

            </main>
        </div>
    );
}

export default App;
