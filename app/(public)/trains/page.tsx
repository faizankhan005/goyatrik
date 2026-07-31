"use client";
import { bookingsData } from "@/data/bookings";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Train,
    MapPin,
    Calendar,
    ArrowRight,
    ShieldCheck,
    Clock3,
    Ticket,
    Star,
    TrendingUp,
} from "lucide-react";

export default function TrainsPage() {
    const popularTrains = [
        {
            name: "Vande Bharat Express",
            image:
                "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1200&q=80",
            desc: "India's fastest premium train experience",
        },
        {
            name: "Rajdhani Express",
            image:
                "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
            desc: "Premium overnight travel across India",
        },
        {
            name: "Shatabdi Express",
            image:
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
            desc: "Comfortable day journeys",
        },
    ];

    const routes = [
        "Delhi → Mumbai",
        "Delhi → Kolkata",
        "Delhi → Chennai",
        "Bangalore → Hyderabad",
        "Mumbai → Goa",
        "Jaipur → Delhi",
    ];

    return (
        <div className="min-h-screen bg-slate-50">

            {/* Hero Section */}
            <section className="relative min-h-[700px] overflow-hidden flex items-center">

                <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=2000&q=80"
                    alt="Train"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/40" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >

                        <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-white">
                            🚆 Smart Train Booking Platform
                        </span>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mt-6 leading-tight">
                            Book Train Tickets
                            <br />
                            Across India
                        </h1>

                        <p className="text-lg md:text-xl text-gray-200 mt-6">
                            Search trains, check seat availability,
                            live train status and book confirmed tickets instantly.
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
                    </motion.div>

                    {/* Search Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-12"
                    >
                        <div className="bg-white rounded-[32px] shadow-2xl p-6 md:p-8">

                            <div className="grid md:grid-cols-4 gap-4">

                                <div className="border rounded-2xl p-4">
                                    <label className="text-gray-500 text-sm">
                                        From Station
                                    </label>

                                    <div className="text-black flex items-center gap-2 mt-2">
                                        <MapPin size={18} className="text-purple-600" />
                                        <input
                                            type="text"
                                            placeholder="Delhi"
                                            className="outline-none w-full"
                                        />
                                    </div>
                                </div>

                                <div className="border rounded-2xl p-4">
                                    <label className="text-gray-500 text-sm">
                                        To Station
                                    </label>

                                    <div className="text-black flex items-center gap-2 mt-2">
                                        <MapPin size={18} className="text-purple-600" />
                                        <input
                                            type="text"
                                            placeholder="Mumbai"
                                            className="outline-none w-full"
                                        />
                                    </div>
                                </div>

                                <div className="border rounded-2xl p-4">
                                    <label className="text-gray-500 text-sm">
                                        Journey Date
                                    </label>

                                    <div className="text-gray-500 flex items-center gap-2 mt-2">
                                        <Calendar size={18} className="text-purple-600" />
                                        <input
                                            type="date"
                                            className="outline-none w-full"
                                        />
                                    </div>
                                </div>

                                <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition">
                                    Search Trains
                                    <ArrowRight size={18} />
                                </button>

                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* Popular Trains */}
            <section className=" text-black max-w-7xl mx-auto px-6 py-16">

                <h2 className="text-4xl font-bold mb-8">
                    Popular Trains
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {popularTrains.map((train) => (
                        <motion.div
                            whileHover={{ y: -10 }}
                            key={train.name}
                            className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-2xl transition"
                        >
                            <img
                                src={train.image}
                                alt={train.name}
                                className="h-64 w-full object-cover"
                            />

                            <div className="p-6">

                                <h3 className="text-2xl font-bold">
                                    {train.name}
                                </h3>

                                <p className="text-gray-500 mt-3">
                                    {train.desc}
                                </p>

                                <button
                                    onClick={() =>
                                        window.dispatchEvent(
                                            new CustomEvent("openTravelChat")
                                        )
                                    }
                                    className="mt-8 w-full bg-white text-slate-900 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300"
                                >
                                    Book Now
                                </button>

                            </div>
                        </motion.div>
                    ))}

                </div>

            </section>

            {/* POPULAR ROUTES */}

            <section className="max-w-7xl mx-auto px-6 py-24">

                <div className="text-center mb-16">

                    <span className="inline-flex px-5 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold">
                        Trending Routes
                    </span>

                    <h2 className="mt-6 text-5xl md:text-6xl font-black text-slate-900">
                        Popular Tours
                        <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                            Routes
                        </span>
                    </h2>

                    <p className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto">
                        Travel comfortably with India's most trusted tours operators.
                    </p>

                </div>

                <div className="grid lg:grid-cols-3 gap-8">

                    {bookingsData.map((route) => (
                        <div
                            key={route.id}
                            className="group relative h-[500px] overflow-hidden rounded-[32px] shadow-2xl"
                        >
                            <img
                                src={route.image}
                                alt={route.title}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">

                                <div className="inline-flex px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
                                    Premium Tour
                                </div>

                                <h3 className="text-4xl font-black text-center">
                                    {route.title}
                                </h3>

                                <p className="mt-3 text-center text-white/80">
                                    {route.location}
                                </p>

                                <p className="mt-6 text-white/80 text-center">
                                    Starting From
                                </p>

                                <h4 className="text-5xl font-black text-center mt-2">
                                    {route.price}
                                </h4>

                                <Link
                                    href={`/tours/${route.id}`}
                                    className="mt-8 block w-full bg-white text-slate-900 py-4 rounded-2xl font-bold text-center hover:bg-blue-600 hover:text-white transition-all"
                                >
                                    View Details
                                </Link>

                            </div>
                        </div>
                    ))}
                </div>

            </section>

            {/* Stats */}
            <section className="max-w-7xl mx-auto px-6 py-12">

                <div className="grid md:grid-cols-4 gap-6">

                    <div className="bg-white rounded-3xl p-6 shadow-sm">
                        <h3 className="text-4xl font-bold text-purple-600">
                            13K+
                        </h3>
                        <p className="text-gray-500 mt-2">
                            Trains Available
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-6 shadow-sm">
                        <h3 className="text-4xl font-bold text-blue-600">
                            8M+
                        </h3>
                        <p className="text-gray-500 mt-2">
                            Tickets Booked
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-6 shadow-sm">
                        <h3 className="text-4xl font-bold text-green-600">
                            24/7
                        </h3>
                        <p className="text-gray-500 mt-2">
                            Support
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-6 shadow-sm">
                        <h3 className="text-4xl font-bold text-orange-600">
                            99%
                        </h3>
                        <p className="text-gray-500 mt-2">
                            Customer Satisfaction
                        </p>
                    </div>

                </div>

            </section>


            {/* Popular Routes */}
            <section className="text-black max-w-7xl mx-auto px-6 py-8">

                <h2 className="text-4xl font-bold mb-8">
                    Popular Routes
                </h2>

                <div className="grid md:grid-cols-3 gap-6">

                    {routes.map((route) => (
                        <motion.div
                            whileHover={{ y: -8 }}
                            key={route}
                            className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition"
                        >
                            <Train className="text-purple-600 mb-4" />

                            <h3 className="font-bold text-xl">
                                {route}
                            </h3>

                            <p className="text-gray-500 mt-2">
                                Fast booking & real-time seat availability.
                            </p>
                        </motion.div>
                    ))}

                </div>

            </section>



            {/* Features */}
            <section className="text-black max-w-7xl mx-auto px-6 py-8">

                <h2 className="text-4xl font-bold mb-8">
                    Why Choose Us?
                </h2>

                <div className="grid md:grid-cols-4 gap-6">

                    <div className="bg-white p-6 rounded-3xl shadow-sm">
                        <Ticket className="text-purple-600 mb-4" size={36} />
                        <h3 className="font-bold text-lg">
                            Instant Booking
                        </h3>
                    </div>

                    <div className="bg-white p-6 rounded-3xl shadow-sm">
                        <Clock3 className="text-blue-600 mb-4" size={36} />
                        <h3 className="font-bold text-lg">
                            Live Status
                        </h3>
                    </div>

                    <div className="bg-white p-6 rounded-3xl shadow-sm">
                        <ShieldCheck className="text-green-600 mb-4" size={36} />
                        <h3 className="font-bold text-lg">
                            Secure Payments
                        </h3>
                    </div>

                    <div className="bg-white p-6 rounded-3xl shadow-sm">
                        <Star className="text-yellow-500 mb-4" size={36} />
                        <h3 className="font-bold text-lg">
                            Top Rated Service
                        </h3>
                    </div>

                </div>

            </section>

            {/* Offer Banner */}
            <section className="max-w-7xl mx-auto px-6 py-16">

                <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-[40px] p-10 text-white">

                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                        <div>
                            <h2 className="text-4xl font-bold">
                                Get Up To 25% OFF
                            </h2>

                            <p className="text-purple-100 mt-3">
                                On train bookings this month.
                            </p>
                        </div>

                        <TrendingUp size={70} />

                    </div>

                </div>

            </section>

            {/* CTA */}
            <section className="max-w-7xl mx-auto px-6 pb-20">

                <div className="relative overflow-hidden rounded-[40px]">

                    <img
                        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=2000&q=80"
                        alt="Train Banner"
                        className="h-[350px] w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/60" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">

                        <h2 className="text-5xl font-bold text-white">
                            Ready For Your Next Journey?
                        </h2>

                        <p className="text-gray-200 mt-4">
                            Travel smarter with Goyatrik Travel
                        </p>

                        <button className="mt-6 bg-white text-purple-700 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
                            Book Now
                        </button>

                    </div>

                </div>

            </section>

        </div>
    );
}