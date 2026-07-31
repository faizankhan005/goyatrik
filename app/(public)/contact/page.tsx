"use client";

import Link from "next/link";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    MessageCircle,
    Globe,
    Wifi,
    Snowflake,
    ShieldCheck,
    Headphones,
    ArrowRight,
} from "lucide-react";
import { section } from "framer-motion/m";


const heroImages = [
  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
  "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
  "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg",
  "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
  "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
];

export default function ContactPage() {
    return (
        <div className="bg-slate-50">
        
           

      {/* WHY CONTACT */ }
    <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-black py-28 overflow-hidden">

        {/* Background Blur Effects */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-20 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6">

            <div className="text-center">
                <span className="px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-semibold">
                    Premium Support
                </span>

                <h2 className="mt-6 text-5xl md:text-6xl font-black text-white">
                    Why Contact
                    <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
                        GoYatrik
                    </span>
                </h2>

                <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
                    Get expert travel assistance, instant support, and
                    personalized guidance from our travel specialists.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-20">

                {/* Card 1 */}
                <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[32px] text-white hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-500 hover:-translate-y-3">

                    <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-400/20">
                        <Headphones
                            size={34}
                            className="text-cyan-400 group-hover:scale-110 transition"
                        />
                    </div>

                    <h3 className="text-3xl font-black mt-8">
                        24/7 Support
                    </h3>

                    <p className="mt-4 text-slate-300 leading-relaxed">
                        Dedicated travel experts available anytime to help
                        with bookings, cancellations, and trip planning.
                    </p>

                </div>

                {/* Card 2 */}
                <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[32px] text-white hover:border-blue-400/50 hover:bg-white/10 transition-all duration-500 hover:-translate-y-3">

                    <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-400/20">
                        <MessageCircle
                            size={34}
                            className="text-blue-400 group-hover:scale-110 transition"
                        />
                    </div>

                    <h3 className="text-3xl font-black mt-8">
                        Fast Responses
                    </h3>

                    <p className="mt-4 text-slate-300 leading-relaxed">
                        Receive quick answers and instant assistance for
                        all your travel-related questions.
                    </p>

                </div>

                {/* Card 3 */}
                <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[32px] text-white hover:border-emerald-400/50 hover:bg-white/10 transition-all duration-500 hover:-translate-y-3">

                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-400/20">
                        <Globe
                            size={34}
                            className="text-emerald-400 group-hover:scale-110 transition"
                        />
                    </div>

                    <h3 className="text-3xl font-black mt-8">
                        Global Coverage
                    </h3>

                    <p className="mt-4 text-slate-300 leading-relaxed">
                        Travel assistance and booking support for
                        destinations across India and around the world.
                    </p>

                </div>

            </div>

        </div>
    </section>


    {/* FEATURES */ }

    <section className="bg-slate-900 py-24">

        <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-center text-5xl font-black text-white">
                Premium Amenities
            </h2>

            <p className="text-center text-slate-300 mt-4 text-lg">
                Enjoy world-class comfort and safety on every journey
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

                {/* WIFI */}

                <div className="bg-slate-800 border border-slate-700 rounded-[30px] p-10 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300">

                    <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                        <Wifi
                            size={42}
                            className="text-cyan-400"
                        />
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                        Free WiFi
                    </h3>

                    <p className="text-slate-300 mt-3">
                        Stay connected throughout your journey.
                    </p>

                </div>

                {/* AC */}

                <div className="bg-slate-800 border border-slate-700 rounded-[30px] p-10 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300">

                    <div className="w-20 h-20 rounded-full bg-cyan-500/20 flex items-center justify-center mb-6">
                        <Snowflake
                            size={42}
                            className="text-cyan-300"
                        />
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                        AC Coaches
                    </h3>

                    <p className="text-slate-300 mt-3">
                        Premium air-conditioned luxury buses.
                    </p>

                </div>

                {/* SAFE */}

                <div className="bg-slate-800 border border-slate-700 rounded-[30px] p-10 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300">

                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                        <ShieldCheck
                            size={42}
                            className="text-green-400"
                        />
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                        Safe Travel
                    </h3>

                    <p className="text-slate-300 mt-3">
                        Verified operators and secure journeys.
                    </p>

                </div>

                {/* ON TIME */}

                <div className="bg-slate-800 border border-slate-700 rounded-[30px] p-10 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300">

                    <div className="w-20 h-20 rounded-full bg-orange-500/20 flex items-center justify-center mb-6">
                        <Clock
                            size={42}
                            className="text-orange-400"
                        />
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                        On Time
                    </h3>

                    <p className="text-slate-300 mt-3">
                        Reliable schedules with timely departures.
                    </p>

                </div>

            </div>

        </div>

    </section>

    {/* OFFICE HOURS */ }

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

    {/* FAQ */ }

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

            <section className="py-24 text-black bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-16">
                        <span className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-600 font-semibold">
                            Contact Us
                        </span>

                        <h2 className="mt-6 text-5xl font-black text-slate-900">
                            Get In Touch
                        </h2>

                        <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
                            Our travel experts are ready to help you plan your perfect trip.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">

                        {/* Form */}
                        <div className="lg:col-span-2 bg-white p-8 rounded-[30px] shadow-xl">

                            <h3 className="text-3xl font-black text-slate-900">
                                Send A Message
                            </h3>

                            <form
                                className="mt-8 space-y-5"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    window.open("https://wa.me/918535042494", "_blank");
                                }}
                            >
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full p-4 rounded-2xl border border-slate-200"
                                />

                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full p-4 rounded-2xl border border-slate-200"
                                />

                                <textarea
                                    rows={5}
                                    placeholder="Your Message"
                                    className="w-full p-4 rounded-2xl border border-slate-200"
                                />

                                <button
                                    type="submit"
                                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2"
                                >
                                    WhatsApp Us
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>

                        {/* Info Cards */}
                        <div className="space-y-5">

                            <a
                                href="mailto:as4325210@gmail.com"
                                className="block bg-white p-6 rounded-[25px] shadow-lg"
                            >
                                <Mail className="text-blue-600" />
                                <h3 className="font-bold text-xl mt-4">Email</h3>
                                <p className="text-slate-500 mt-2">
                                    as4325210@gmail.com
                                </p>
                            </a>

                            <a
                                href="tel:+918535042494"
                                className="block bg-white p-6 rounded-[25px] shadow-lg"
                            >
                                <Phone className="text-green-600" />
                                <h3 className="font-bold text-xl mt-4">Phone</h3>
                                <p className="text-slate-500 mt-2">
                                    +91 85350 42494
                                </p>
                            </a>

                            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6 rounded-[25px] text-white">
                                <Clock />
                                <h3 className="font-bold text-xl mt-4">
                                    24/7 Support
                                </h3>
                                <p className="mt-2 text-white/90">
                                    Always available for travel assistance.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </section>


    {/* CTA */ }

    <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
            <div className="rounded-[40px] bg-gradient-to-r from-blue-600 to-cyan-500 p-12 text-center text-white">
                <h2 className="text-5xl md:text-6xl font-black">
                    Ready For Your Next Adventure?
                </h2>

                <p className="mt-6 text-xl text-white/90">
                    Discover amazing destinations and book
                    your next journey with GoYatrik.
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

                    <button
                        onClick={() =>
                            window.dispatchEvent(
                                new CustomEvent("openTravelChat")
                            )
                        }
                        className="bg-white/10 border border-white/20 px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-slate-900 transition-all duration-300"
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    </section>
        </div >
    );
}