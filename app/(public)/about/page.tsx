"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
    Plane,
    Building2,
    Map,
    Bot,
    Globe,
    Shield,
    Users,
    ArrowRight,
    Mail,
    Clock,
} from "lucide-react";
import { div } from "framer-motion/m";
import { PiPlaceholder } from "react-icons/pi";


const heroImages = [
    "https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg",
    "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg",
    "https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg",
];

const services = [
    {
        title: "Flight Booking",
        icon: Plane,
        desc: "Search and compare flights from top airlines worldwide.",
        route: "/flights",
    },
    {
        title: "Hotel Booking",
        icon: Building2,
        desc: "Discover premium hotels and luxury stays.",
        route: "/hotels",
    },
    {
        title: "Tour Packages",
        icon: Map,
        desc: "Domestic and international tour experiences.",
        route: "/tours",
    },
    {
        title: "AI Travel Planning",
        icon: Bot,
        desc: "Smart travel recommendations powered by AI.",
        route: "/ai-trip-planner",
    },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "PostgreSQL",
  "Node.js",
  "Express.js",
  "MongoDB",
  "AI Agents",
  "OpenAI",
  "Gemini AI",
  "LangChain",
  "n8n",
  "Razorpay",
  "Vercel",
];



export default function AboutPage() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const slider = setInterval(() => {
            setCurrentImage(
                (prev) => (prev + 1) % heroImages.length
            );
        }, 5000);

        return () => clearInterval(slider);
    }, []);


    return (
        <div className="bg-slate-50">
            <section className="relative min-h-[90vh] overflow-hidden">

                {heroImages.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt=""
                        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[2500ms] ${currentImage === index ? "opacity-100" : "opacity-0"
                            }`}
                    />
                ))}

                <div className="text-black absolute inset-0 bg-black/60" />

                <div className="relative z-10 flex min-h-[90vh] items-center">

                    <div className=" max-w-7xl mx-auto px-6 w-full">

                        <span className="inline-flex px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white">
                            ✈ Modern Travel Platform
                        </span>

                        <h1 className="mt-8 text-6xl md:text-8xl font-black text-white">
                            About
                            <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                                GoYatrik
                            </span>
                        </h1>

                        <p className="mt-8 text-xl text-slate-200 max-w-3xl">
                            GoYatrik helps travelers discover destinations,
                            compare flights, book hotels and plan memorable
                            journeys with the power of technology.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-10">

                            <div className="flex flex-wrap gap-4 mt-10">
                                <button
                                    onClick={() =>
                                        window.dispatchEvent(
                                            new CustomEvent("openTravelChat")
                                        )
                                    }
                                    className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl text-white font-semibold shadow-xl transition"
                                >
                                    Start Planning
                                </button>

                                <button
                                    onClick={() =>
                                        window.dispatchEvent(
                                            new CustomEvent("openTravelChat")
                                        )
                                    }
                                    className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 px-8 py-4 rounded-2xl text-white font-semibold transition"
                                >
                                    Explore Tours
                                </button>
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ABOUT GOYATRIK */}

            <section className="py-24 bg-gradient-to-b from-slate-50 to-white">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="relative overflow-hidden bg-white rounded-[45px] p-12 md:p-16 shadow-2xl border border-slate-100">

                        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full" />
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />

                        <div className="relative">

                            <span className="px-5 py-2 rounded-full bg-blue-100 text-blue-600 font-bold">
                                About Us
                            </span>

                            <h2 className="mt-6 text-5xl md:text-6xl font-black text-slate-900">
                                About
                                <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                                    GoYatrik
                                </span>
                            </h2>

                            <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-4xl">
                                GoYatrik is a next-generation travel platform designed to
                                simplify travel planning, bookings, and destination discovery.
                                We combine technology, convenience, and premium travel
                                experiences into one seamless platform.
                            </p>

                            <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-4xl">
                                Whether you're booking flights, planning a family vacation,
                                exploring international destinations, or searching for luxury
                                stays, GoYatrik helps you discover, compare and book everything
                                in one place.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* MISSION & VISION */}

            <section className="py-24 bg-white">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-16">

                        <span className="px-5 py-2 rounded-full bg-cyan-100 text-cyan-700 font-bold">
                            Our Purpose
                        </span>

                        <h2 className="mt-6 text-5xl md:text-6xl font-black text-slate-900">
                            Mission &
                            <span className="text-cyan-500"> Vision</span>
                        </h2>

                    </div>

                    <div className="grid md:grid-cols-2 gap-10">

                        {/* Mission Card */}
                        <div className="group relative overflow-hidden bg-gradient-to-br from-blue-600 via-cyan-600 to-sky-500 rounded-[40px] p-10 text-white shadow-2xl hover:-translate-y-2 transition-all duration-500">

                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />

                            <div className="relative">

                                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                                    🚀
                                </div>

                                <h3 className="text-4xl font-black mt-8">
                                    Mission
                                </h3>

                                <p className="mt-6 text-lg text-white/90 leading-relaxed">
                                    To make travel planning easy, affordable, secure,
                                    and accessible through innovative technology and
                                    exceptional customer experiences.
                                </p>

                            </div>

                        </div>

                        {/* Vision Card */}
                        <div className="group relative overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 rounded-[40px] p-10 text-white shadow-2xl hover:-translate-y-2 transition-all duration-500">

                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />

                            <div className="relative">

                                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                                    🌍
                                </div>

                                <h3 className="text-4xl font-black mt-8">
                                    Vision
                                </h3>

                                <p className="mt-6 text-lg text-white/90 leading-relaxed">
                                    To become a globally trusted travel platform connecting
                                    millions of travelers with unforgettable journeys,
                                    premium experiences, and world-class services.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* OFFICE HOURS */}

            <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="relative overflow-hidden bg-white rounded-[40px] border border-slate-200 shadow-2xl p-10 md:p-14">

                        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full" />

                        <div className="relative flex items-center gap-5">
                            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white">
                                <Clock size={40} />
                            </div>

                            <div>
                                <p className="text-blue-600 font-bold uppercase tracking-widest">
                                    Working Hours
                                </p>

                                <h2 className="text-4xl md:text-5xl font-black text-slate-900">
                                    Office Hours
                                </h2>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mt-12">

                            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
                                <h3 className="font-black text-xl text-slate-900">
                                    Monday - Friday
                                </h3>
                                <p className="mt-3 text-slate-600">
                                    9:00 AM – 6:00 PM
                                </p>
                            </div>

                            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
                                <h3 className="font-black text-xl text-slate-900">
                                    Saturday
                                </h3>
                                <p className="mt-3 text-slate-600">
                                    10:00 AM – 4:00 PM
                                </p>
                            </div>

                            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
                                <h3 className="font-black text-xl text-slate-900">
                                    Sunday
                                </h3>
                                <p className="mt-3 text-slate-600">
                                    Emergency Support Only
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* FAQ */}

            <section className="py-24 bg-slate-50">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center">
                        <span className="px-5 py-2 rounded-full bg-blue-100 text-blue-600 font-bold">
                            FAQs
                        </span>

                        <h2 className="mt-6 text-5xl md:text-6xl font-black text-slate-900">
                            Frequently Asked
                            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                Questions
                            </span>
                        </h2>
                    </div>

                    <div className="mt-16 space-y-6">

                        <div className="group bg-white p-8 rounded-[30px] shadow-lg hover:shadow-2xl transition-all duration-300">
                            <h3 className="text-2xl font-black text-slate-900">
                                How can I book a flight?
                            </h3>

                            <p className="mt-4 text-slate-600 leading-relaxed">
                                Visit our Flights page and search your preferred destination,
                                compare fares and complete your booking in minutes.
                            </p>
                        </div>

                        <div className="group bg-white p-8 rounded-[30px] shadow-lg hover:shadow-2xl transition-all duration-300">
                            <h3 className="text-2xl font-black text-slate-900">
                                Is customer support available 24/7?
                            </h3>

                            <p className="mt-4 text-slate-600 leading-relaxed">
                                Yes. Our dedicated travel experts are available 24/7 to
                                assist with bookings, modifications and travel inquiries.
                            </p>
                        </div>

                        <div className="group bg-white p-8 rounded-[30px] shadow-lg hover:shadow-2xl transition-all duration-300">
                            <h3 className="text-2xl font-black text-slate-900">
                                Can I book international trips?
                            </h3>

                            <p className="mt-4 text-slate-600 leading-relaxed">
                                Absolutely. GoYatrik offers both domestic and international
                                travel packages, flights and hotel reservations.
                            </p>
                        </div>

                    </div>

                </div>
            </section>
            <section className="bg-slate-900 py-24">

                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-center text-5xl font-black text-white">
                        What We Offer
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 mt-16">

                        {services.map((service, index) => {

                            const Icon = service.icon;

                            return (

                                <Link
                                    href={service.route}
                                    key={index}
                                    className="bg-white/10 p-8 rounded-[30px] text-white hover:bg-white/20 transition"
                                >

                                    <Icon size={40} />

                                    <h3 className="text-3xl font-black mt-6">
                                        {service.title}
                                    </h3>

                                    <p className="mt-4 text-slate-300">
                                        {service.desc}
                                    </p>

                                </Link>

                            );

                        })}

                    </div>

                </div>

            </section>
            <section className="max-w-7xl mx-auto px-6 py-24">

                <div className="grid md:grid-cols-4 gap-8">

                    {[
                        ["500+", "Airlines"],
                        ["120+", "Countries"],
                        ["1M+", "Travelers"],
                        ["24/7", "Support"]
                    ].map((item, index) => (

                        <div
                            key={index}
                            className="bg-white rounded-[30px] p-8 shadow-lg text-center"
                        >
                            <h3 className="text-5xl font-black text-blue-600">
                                {item[0]}
                            </h3>

                            <p className="mt-3 text-slate-500">
                                {item[1]}
                            </p>

                        </div>

                    ))}

                </div>

            </section>
            <section className="text-black max-w-7xl mx-auto px-6 py-10">

                <h2 className="text-center text-5xl font-black">
                    Why Choose GoYatrik
                </h2>

                <div className="grid md:grid-cols-3 gap-8 mt-16">

                    <div className="bg-white p-8 rounded-[30px] shadow-lg">
                        <Shield size={40} />
                        <h3 className="text-2xl font-black mt-6">
                            Secure Booking
                        </h3>
                    </div>

                    <div className="bg-white p-8 rounded-[30px] shadow-lg">
                        <Users size={40} />
                        <h3 className="text-2xl font-black mt-6">
                            Trusted Platform
                        </h3>
                    </div>

                    <div className="bg-white p-8 rounded-[30px] shadow-lg">
                        <Globe size={40} />
                        <h3 className="text-2xl font-black mt-6">
                            Worldwide Coverage
                        </h3>
                    </div>

                </div>

            </section>
            {/* DEVELOPER SECTION */}

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 rounded-[40px] p-12 md:p-16 shadow-2xl">

                        <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" />
                        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />

                        <div className="relative grid lg:grid-cols-3 gap-12 items-center">

                            {/* Profile */}

                            <div className="flex justify-center">

                                <div className="w-52 h-52 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl">

                                    <Mail
                                        size={100}
                                        className="text-cyan-400"
                                    />

                                </div>

                            </div>

                            {/* Content */}

                            <div className="lg:col-span-2 text-white">

                                <span className="inline-block px-5 py-2 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-semibold">
                                    Software Developer &  AI / ML Engineer
                                </span>

                                <h2 className="mt-6 text-5xl md:text-6xl font-black">
                                    Faizan Khan
                                </h2>

                                <h3 className="mt-4 text-2xl font-bold text-cyan-300">
                                    Full Stack Developer • AI Engineer
                                </h3>

                                <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-3xl">
                                    Creator of GoYatrik — a modern AI-powered travel platform.
                                    Specialized in Full Stack Development, Artificial Intelligence,
                                    AI Agents, Automation and scalable SaaS applications.
                                </p>

                                <div className="flex flex-wrap gap-4 mt-10">

                                    <a
                                        href="https://faizankhan005.github.io/Portfolio/"
                                        target="_blank"
                                        className="bg-cyan-500 hover:bg-cyan-400 text-white px-7 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105"
                                    >
                                        Portfolio
                                    </a>

                                    <a
                                        href="https://github.com/faizankhan005"
                                        target="_blank"
                                        className="bg-white/10 backdrop-blur-md border border-white/20 px-7 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all duration-300"
                                    >
                                        GitHub
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/faizan05"
                                        target="_blank"
                                        className="bg-blue-600 px-7 py-4 rounded-2xl font-bold hover:bg-blue-500 transition-all duration-300"
                                    >
                                        LinkedIn
                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* TECHNOLOGY STACK */}

            <section className="py-24 bg-slate-50">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center">

                        <span className="px-5 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold">
                            Technologies
                        </span>

                        <h2 className="mt-6 text-5xl md:text-6xl font-black text-slate-900">
                            Technology Stack
                        </h2>

                        <p className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto">
                            Built using modern technologies for speed,
                            scalability and exceptional user experience.
                        </p>

                    </div>

                    <div className="flex flex-wrap justify-center gap-5 mt-16">

                        {technologies.map((tech) => (
                            <div
                                key={tech}
                                className="px-7 py-4 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-bold text-slate-800"
                            >
                                {tech}
                            </div>
                        ))}

                    </div>

                </div>

            </section>
            <section className="py-24">

                <div className="max-w-5xl mx-auto px-6">

                    <div className="rounded-[40px] bg-gradient-to-r from-blue-600 to-cyan-500 p-12 text-center text-white">

                        <h2 className="text-5xl md:text-6xl font-black">
                            Ready For Your Next Adventure?
                        </h2>

                        <p className="mt-6 text-xl text-white/90">
                            Book flights, discover destinations and
                            explore the world with GoYatrik.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mt-10">

                            <button
                                onClick={() =>
                                    window.dispatchEvent(
                                        new CustomEvent("openTravelChat")
                                    )
                                }
                                className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-cyan-400 hover:text-white transition-all duration-300"
                            >
                                Plan My Trip
                                <ArrowRight size={18} />
                            </button>

                            <Link
                                href="/contact"
                                className="bg-white/10 border border-white/20 px-8 py-4 rounded-2xl font-bold"
                            >
                                Contact Us
                            </Link>

                        </div>

                    </div>

                </div>

            </section>
        </div>
    );
}
