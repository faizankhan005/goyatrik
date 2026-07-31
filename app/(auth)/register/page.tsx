"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

import {
    Plane,
    Globe,
    ShieldCheck,
} from "lucide-react";

import {
    signUp,
    signInWithGoogle,
} from "@/services/auth.service";
import { FcGoogle } from "react-icons/fc";

const images = [
    "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg",
    "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
    "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg",
    "https://images.pexels.com/photos/730981/pexels-photo-730981.jpeg",
    "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg",
    "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg",
    "https://images.pexels.com/photos/248771/pexels-photo-248771.jpeg",
];

export default function RegisterPage() {
    const router = useRouter();

    const [currentImage, setCurrentImage] =
        useState(0);

    const [fullName, setFullName] =
        useState("");

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(
                (prev) => (prev + 1) % images.length
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleRegister = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        try {
            setLoading(true);

            await signUp(
                email,
                password,
                fullName
            );

            router.push("/");
        } catch (error: any) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen overflow-hidden">

            {/* Background Slider */}

            <AnimatePresence mode="wait">
                <motion.img
                    key={currentImage}
                    src={images[currentImage]}
                    alt="Travel"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </AnimatePresence>

            {/* Overlay */}

            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}

            <div className="relative z-10 min-h-screen grid lg:grid-cols-2">

                {/* Left Side */}

                <div className="hidden lg:flex flex-col justify-center px-20 text-white">

                    <div className="inline-flex items-center gap-2 mb-6">
                        <Plane className="text-cyan-400" />
                        <span className="font-medium">
                            GoYatrik Premium
                        </span>
                    </div>

                    <h1 className="text-7xl font-bold leading-tight">
                        Start Your
                        <span className="block text-cyan-400">
                            Journey Today
                        </span>
                    </h1>

                    <p className="mt-8 text-xl text-slate-200 max-w-xl">
                        Join thousands of travelers discovering
                        amazing destinations, hotels and tours.
                    </p>

                    <div className="mt-12 space-y-6">

                        <div className="flex items-center gap-4">
                            <Globe />
                            <span>
                                Access 500+ Destinations
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <Plane />
                            <span>
                                Instant Travel Booking
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <ShieldCheck />
                            <span>
                                Secure & Trusted Platform
                            </span>
                        </div>

                    </div>
                </div>

                {/* Register Card */}

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
                        className="w-full max-w-md"
                    >

                        <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl">

                            <div className="text-center">

                                <h2 className="text-4xl font-bold text-white">
                                    Create Account
                                </h2>

                                <p className="text-slate-300 mt-3">
                                    Begin your next adventure
                                </p>

                            </div>

                            <form
                                onSubmit={handleRegister}
                                className="mt-8 space-y-4"
                            >

                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    value={fullName}
                                    onChange={(e) =>
                                        setFullName(e.target.value)
                                    }
                                    className="w-full px-4 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-slate-300 outline-none"
                                />

                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    className="w-full px-4 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-slate-300 outline-none"
                                />

                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="w-full px-4 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-slate-300 outline-none"
                                />

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-[1.02] transition-all"
                                >
                                    {loading
                                        ? "Creating Account..."
                                        : "Create Account"}
                                </button>

                            </form>

                            <div className="my-8 flex items-center">
                                <div className="flex-1 border-t border-white/20"></div>

                                <span className="px-4 text-slate-300">
                                    OR
                                </span>

                                <div className="flex-1 border-t border-white/20"></div>
                            </div>

                            <button
                                onClick={() => signInWithGoogle()}
                                className="w-full bg-white text-black py-4 px-6 rounded-2xl font-semibold hover:scale-[1.02] transition-all flex items-center justify-center gap-3 shadow-sm border border-gray-200"
                            >
                                <FcGoogle size={24} className="shrink-0" />
                                <span>Continue with Google</span>
                            </button>

                            <p className="text-center text-slate-300 mt-8">
                                Already have an account?{" "}
                                <Link
                                    href="/login"
                                    className="text-cyan-400 font-semibold"
                                >
                                    Login
                                </Link>
                            </p>

                        </div>

                    </motion.div>

                </div>

            </div>
        </div>
    );
}