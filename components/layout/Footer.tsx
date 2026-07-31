"use client";

import Link from "next/link";
import {
    Mail,
    Phone,
    MapPin,
    Plane,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-white">

            {/* Premium CTA Section */}

            <div className="relative py-24 px-6 overflow-hidden">
                {/* Background Glow */}

                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black" />

                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 blur-[140px] rounded-full" />

                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 blur-[140px] rounded-full" />

                <div className="relative max-w-7xl mx-auto">
                    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.4)]">

                        {/* Gradient Overlay */}

                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10" />

                        <div className="relative p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">

                            {/* Left Content */}

                            <div className="max-w-3xl">
                                <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
                                    ✈️ Premium Travel Experiences
                                </span>

                                <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-tight text-white">
                                    Your Next Journey
                                    <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                                        Starts Here
                                    </span>
                                </h2>

                                <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                                    Discover handpicked destinations, luxury stays,
                                    exclusive tour packages and AI-powered travel planning
                                    designed for modern explorers.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-4">
                                    <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-slate-200">
                                        🌍 500+ Destinations
                                    </div>

                                    <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-slate-200">
                                        ⭐ 4.9 Rating
                                    </div>

                                    <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-slate-200">
                                        ✈️ 10K+ Travelers
                                    </div>
                                </div>
                            </div>

                            {/* Right CTA */}

                            <div className="flex flex-col gap-4 w-full lg:w-auto">
                                <Link
                                    href="/tours"
                                    onClick={() =>
                                        window.dispatchEvent(
                                            new CustomEvent("openTravelChat")
                                        )
                                    }
                                    className="group px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg shadow-xl hover:scale-105 transition-all duration-300"
                                >
                                    Explore Tours →
                                </Link>

                                <button
                                    onClick={() =>
                                        window.dispatchEvent(
                                            new CustomEvent("openTravelChat")
                                        )
                                    }
                                    className="px-10 py-5 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                                >
                                    AI Trip Planner
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-10">

                    {/* Brand Section */}
                    <div className="lg:col-span-2">

                        <div className="flex items-center gap-3">
                            <div className="bg-blue-600 p-3 rounded-xl">
                                <Plane size={24} />
                            </div>

                            <h2 className="text-3xl font-bold">
                                GoYatrik
                            </h2>
                        </div>

                        <p className="text-slate-400 mt-6 leading-relaxed max-w-md">
                            Your trusted travel companion for flights,
                            hotels, tours, buses and trains. Travel
                            smarter, faster and better with GoYatrik.
                        </p>

                        <div className="space-y-4 mt-8 text-slate-300">

                            <div className="flex items-center gap-3">
                                <MapPin size={18} />
                                <a href="https://www.google.com/maps/place/The+Menta/@28.519671,77.199295,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce1d9ac85d0ef:0x1866d40b999cfb2f!8m2!3d28.5196663!4d77.2018699!16s%2Fg%2F11sttrc582" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                                    <span >Ground Floor, Gali No. 2,
                                        Metro Station Gate No. 2,
                                        Saket, New Delhi, India, Pincode-110017</span>
                                </a>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone size={18} />
                                <a href="https://wa.me/918535042494">
                                    <span>+91 85350 42494</span>
                                </a>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail size={18} />
                                <a href="mailto:as4325210@gmail.com" className="hover:text-white transition">
                                    <span>as4325210@gmail.com</span>
                                </a>
                            </div>

                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-bold text-xl mb-5">
                            Company
                        </h3>

                        <ul className="space-y-3 text-slate-400">
                            <li>
                                <Link href="/about" className="hover:text-white transition">
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link href="/about" className="hover:text-white transition">
                                    Careers
                                </Link>
                            </li>

                            <li>
                                <Link href="/contact" className="hover:text-white transition">
                                    Contact
                                </Link>
                            </li>

                            <li>
                                <Link href="/about" className="hover:text-white transition">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-bold text-xl mb-5">
                            Services
                        </h3>

                        <ul className="space-y-3 text-slate-400">
                            <li>
                                <Link href="/flights" className="hover:text-white transition">
                                    Flights
                                </Link>
                            </li>

                            <li>
                                <Link href="/hotels" className="hover:text-white transition">
                                    Hotels
                                </Link>
                            </li>

                            <li>
                                <Link href="/trains" className="hover:text-white transition">
                                    Trains
                                </Link>
                            </li>

                            <li>
                                <Link href="/buses" className="hover:text-white transition">
                                    Buses
                                </Link>
                            </li>

                            <li>
                                <Link href="/tours" className="hover:text-white transition">
                                    Tour Packages
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-bold text-xl mb-5">
                            Support
                        </h3>

                        <ul className="space-y-3 text-slate-400">
                            <li>
                                <Link href="/contact" className="hover:text-white transition">
                                    Help Center
                                </Link>
                            </li>

                            <li>
                                <Link href="/contact" className="hover:text-white transition">
                                    Privacy Policy
                                </Link>
                            </li>

                            <li>
                                <Link href="/contact" className="hover:text-white transition">
                                    Terms & Conditions
                                </Link>
                            </li>

                            <li>
                                <Link href="/contact" className="hover:text-white transition">
                                    Refund Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Footer */}
                <div className="border-t border-slate-800 mt-12 pt-9 flex flex-col  gap-6">

                    <p className="text-slate-500 ">
                        <a href="https://www.instagram.com/goyatrik07?igsh=MXMzeWVud203M280dw==" className="hover:text-white transition">
                            © {new Date().getFullYear()} GoYatrik.
                            All rights reserved.
                        </a>
                    </p>

                    <div className="flex items-center  gap-4">

                        <a
                            href="https://www.instagram.com/goyatrik07?igsh=MXMzeWVud203M280dw=="
                            className="bg-slate-800 p-3 rounded-xl hover:bg-blue-600 transition duration-300"
                        >
                            <FaFacebookF size={18} />
                        </a>

                        <a
                            href="https://www.instagram.com/goyatrik07?igsh=MXMzeWVud203M280dw=="
                            className="bg-slate-800 p-3 rounded-xl hover:bg-pink-600 transition duration-300"
                        >
                            <FaInstagram size={18} />
                        </a>

                        <a
                            href="https://www.instagram.com/goyatrik07?igsh=MXMzeWVud203M280dw=="
                            className="bg-slate-800 p-3 rounded-xl hover:bg-sky-500 transition duration-300"
                        >
                            <FaTwitter size={18} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/faizan05"
                            className="bg-slate-800 p-3 rounded-xl hover:bg-blue-700 transition duration-300"
                        >
                            <FaLinkedinIn size={18} />
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    );
}