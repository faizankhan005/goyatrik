"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plane,
  ShieldCheck,
  Globe,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";



const images = [
    "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg",
    "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg",
    "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg",
    "https://images.pexels.com/photos/730981/pexels-photo-730981.jpeg",
    "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg",
    "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
    "https://images.pexels.com/photos/248771/pexels-photo-248771.jpeg",
];

export default function LoginPage() {
    const [currentImage, setCurrentImage] =
        useState(0);

    useEffect(() => {
        const slider = setInterval(() => {
            setCurrentImage(
                (prev) => (prev + 1) % images.length
            );
        }, 4000);

        return () => clearInterval(slider);
    }, []);

    const loginWithGoogle = async () => {
        localStorage.setItem(
            "loginTime",
            Date.now().toString()
        );

        await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: window.location.origin,
            },
        });
    };
   
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Slider */}

            <AnimatePresence mode="wait">
                <motion.img
                    key={currentImage}
                    src={images[currentImage]}
                    alt="Travel"
                    initial={{
                        opacity: 0,
                        scale: 1.1,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    exit={{
                        opacity: 0,
                        scale: 1.1,
                    }}
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* Dark Overlay */}

            <div className="absolute inset-0 bg-black/65" />

            {/* Content */}

            <div className="relative z-10 min-h-screen grid lg:grid-cols-2">
                {/* Left Side */}

                <div className="hidden lg:flex flex-col justify-center px-20 text-white">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <Plane
                            size={28}
                            className="text-cyan-400"
                        />

                        <span className="font-semibold text-lg">
                            GoYatrik Premium
                        </span>
                    </div>

                    <h1 className="text-7xl font-bold leading-tight">
                        Discover The
                        <span className="block text-cyan-400">
                            World Beyond
                        </span>
                    </h1>

                    <p className="mt-8 text-xl text-slate-200 max-w-xl">
                        Flights, Hotels, Tour Packages,
                        AI Trip Planning and Luxury
                        Experiences — all in one place.
                    </p>

                    <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-4">
                            <Globe />
                            <span>
                                500+ Destinations Worldwide
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <Plane />
                            <span>
                                Instant Flight Booking
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <ShieldCheck />
                            <span>
                                Secure Payments &
                                Reservations
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Side */}

                <div className="flex items-center justify-center p-6">
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 40,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="w-full max-w-md"
                    >
                        <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl">
                            <div className="text-center">
                                <h2 className="text-4xl font-bold text-white">
                                    Welcome Back
                                </h2>

                                <p className="text-slate-300 mt-3">
                                    Continue your travel
                                    journey with GoYatrik
                                </p>
                            </div>

                            {/* Google Login */}

                            <button
                                onClick={loginWithGoogle}
                                className="w-full mt-10 bg-white text-black py-4 rounded-2xl font-semibold hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
                            >
                                <FcGoogle size={24} />
                                Continue with Google
                            </button>

                            <div className="my-8 flex items-center">
                                <div className="flex-1 border-t border-white/20" />

                                <span className="px-4 text-slate-300">
                                    OR
                                </span>

                                <div className="flex-1 border-t border-white/20" />
                            </div>

                            <Link
                                href="/register"
                                className="block w-full text-center py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:opacity-90 transition"
                            >
                                Create New Account
                            </Link>

                            <p className="text-center text-slate-300 text-sm mt-8">
                                By continuing you agree to
                                our Terms & Privacy Policy.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}