"use client";
import { bookingsData } from "@/data/bookings";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
    ArrowRight,
    Bus,
    Wifi,
    Snowflake,
    ShieldCheck,
    Clock,
} from "lucide-react";

const heroImages = [
    "https://images.pexels.com/photos/68629/pexels-photo-68629.jpeg",
    "https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg",
    "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg",
];

export default function BusesPage() {
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
        <div className="text-black bg-slate-50">

            {/* HERO */}

            <section className="relative min-h-[85vh] overflow-hidden">

                {heroImages.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt=""
                        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[2500ms] ${currentImage === index
                            ? "opacity-100"
                            : "opacity-0"
                            }`}
                    />
                ))}

                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 flex min-h-[85vh] items-center">

                    <div className="max-w-7xl mx-auto px-6 w-full">

                        <div className="max-w-4xl">

                            <span className="inline-flex px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white">
                                🚌 Premium Bus Booking
                            </span>

                            <h1 className="mt-8 text-6xl md:text-8xl font-black text-white">
                                Travel
                                <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                                    Comfortably
                                </span>
                            </h1>

                            <p className="mt-6 text-xl text-slate-200 max-w-2xl">
                                Book luxury sleeper, AC, Volvo and
                                premium buses across India at the
                                best prices.
                            </p>

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

            {/* POPULAR ROUTES */}

            <section className="max-w-7xl mx-auto px-6 py-24">

                <div className="text-center mb-16">

                    <span className="inline-flex px-5 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold">
                        Trending Routes
                    </span>

                    <h2 className="mt-6 text-5xl md:text-6xl font-black text-slate-900">
                        Popular Bus
                        <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                            Routes
                        </span>
                    </h2>

                    <p className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto">
                        Travel comfortably with India's most trusted bus operators.
                    </p>

                </div>

                <div className="grid lg:grid-cols-3 gap-8">

                    {bookingsData.map((route) => (
                        <div
                            key={route.id}
                            className="group relative overflow-hidden rounded-[32px] h-[500px] shadow-2xl"
                        >

                            {/* Background Image */}

                            <img
                                src={route.image}
                                alt={route.title}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                            />

                            {/* Overlay */}

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                            {/* Content */}

                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">

                                <div className="inline-flex px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-5">
                                    Premium Route
                                </div>

                                <h3 className="text-4xl font-black">
                                    Delhi
                                </h3>

                                <div className="flex items-center gap-3 my-4">

                                    <div className="h-[2px] flex-1 bg-white/40" />

                                    <div className="bg-white/20 p-3 rounded-full backdrop-blur-xl">
                                        ✈
                                    </div>

                                    <div className="h-[2px] flex-1 bg-white/40" />

                                </div>

                                <h3 className="text-4xl font-black">
                                    {route.title}
                                </h3>

                                <p className="mt-3 text-white/80">
                                    {route.location}
                                </p>

                                <p className="mt-6 text-white/80">
                                    Starting From
                                </p>

                                <h4 className="text-5xl font-black mt-1">
                                    {route.price}
                                </h4>

                                <Link
                                    href={`/tours/${route.id}`}
                                    className="mt-8 block w-full bg-white text-slate-900 py-4 rounded-2xl font-bold text-center hover:bg-blue-600 hover:text-white transition-all duration-300"
                                >
                                    View Details
                                </Link>

                            </div>

                        </div>
                    ))}

                </div>
            </section>
            {/* FEATURES */}

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
            {/* STATS */}

            <section className="py-24">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid md:grid-cols-4 gap-8">

                        <div className="bg-white rounded-[30px] p-8 shadow-lg text-center">
                            <h3 className="text-5xl font-black text-blue-600">
                                5000+
                            </h3>
                            <p>Routes</p>
                        </div>

                        <div className="bg-white rounded-[30px] p-8 shadow-lg text-center">
                            <h3 className="text-5xl font-black text-green-600">
                                200+
                            </h3>
                            <p>Operators</p>
                        </div>

                        <div className="bg-white rounded-[30px] p-8 shadow-lg text-center">
                            <h3 className="text-5xl font-black text-purple-600">
                                1M+
                            </h3>
                            <p>Travelers</p>
                        </div>

                        <div className="bg-white rounded-[30px] p-8 shadow-lg text-center">
                            <h3 className="text-5xl font-black text-orange-600">
                                24/7
                            </h3>
                            <p>Support</p>
                        </div>

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="pb-24">

                <div className="max-w-5xl mx-auto px-6">

                    <div className="rounded-[40px] bg-gradient-to-r from-blue-600 to-cyan-500 p-12 text-center text-white">

                        <h2 className="text-5xl font-black">
                            Ready For Your Next Journey?
                        </h2>

                        <p className="mt-6 text-xl text-white/90">
                            Book your bus tickets with GoYatrik
                            and travel stress free.
                        </p>

                        <div className="flex justify-center">
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
                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
}