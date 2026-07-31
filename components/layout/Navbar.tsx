"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";

import {
    Plane,
    LayoutDashboard,
    Shield,
    LogOut,
    Menu,
    X,
} from "lucide-react";

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();

    const [user, setUser] = useState<User | null>(null);
    const [role, setRole] = useState("user");
    const [mobileOpen, setMobileOpen] = useState(false);

    const navLinks = [
        {
            name: "Bookings",
            href: "/bookings",
        },
        {
            name: "Tours",
            href: "/tours",
        },
        {
            name: "Buses",
            href: "/buses",
        },
        {
            name: "Flights",
            href: "/flights",
        },
        {
            name: "Hotels",
            href: "/hotels",
        },
        {
            name: "Trains",
            href: "/trains",
        },
        {
            name: "About",
            href: "/about",
        },
        {
            name: "Contact",
            href: "/contact",
        },

    ];
    useEffect(() => {
        const checkAndGetUser = async () => {
            const loginTime = localStorage.getItem("loginTime");

            if (loginTime) {
                const oneDay = 24 * 60 * 60 * 1000;

                if (
                    Date.now() - Number(loginTime) >
                    oneDay
                ) {
                    await supabase.auth.signOut();

                    localStorage.removeItem("loginTime");

                    window.location.href = "/login";

                    return;
                }
            }

            const {
                data: { user },
            } = await supabase.auth.getUser();

            setUser(user);

            if (user) {
                const { data } = await supabase
                    .from("profiles")
                    .select("role")
                    .eq("id", user.id)
                    .single();

                setRole(data?.role || "user");
            }
        };

        void checkAndGetUser();

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange(
            async (_event, session) => {
                setUser(session?.user ?? null);

                if (session?.user) {
                    const { data } = await supabase
                        .from("profiles")
                        .select("role")
                        .eq("id", session.user.id)
                        .single();

                    setRole(data?.role || "user");
                } else {
                    setRole("user");
                }
            }
        );

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();

        localStorage.removeItem("loginTime");

        window.location.href = "/login";
    };

    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between">

                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-3"
                >
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-3 rounded-xl">
                        <Plane
                            className="text-white"
                            size={22}
                        />
                    </div>

                    <div>
                        <h1 className="text-2xl font-extrabold">
                            <span className="text-blue-600">
                                Go
                            </span>
                            <span className="text-slate-900">
                                Yatrik
                            </span>
                        </h1>

                        <p className="text-xs text-slate-500">
                            Explore India
                        </p>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`font-medium transition ${pathname === item.href
                                ? "text-blue-600"
                                : "text-slate-700 hover:text-blue-600"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Right Side */}
                {user ? (
                    <div className="hidden lg:flex items-center gap-5">

                        {role === "admin" ? (
                            <Link
                                href="/admin"
                                className="flex items-center gap-2 font-semibold text-purple-600"
                            >
                                <Shield size={18} />
                                Admin Panel
                            </Link>
                        ) : (
                            <Link
                                href="/dashboard"
                                className="flex items-center gap-2 text-slate-700 hover:text-blue-600"
                            >
                                <LayoutDashboard size={18} />
                                Dashboard
                            </Link>
                        )}

                        {/* Profile */}
                        <Link href="/profile">
                            <div className="flex items-center gap-3 border-l pl-5">

                                <img
                                    src={
                                        user?.user_metadata?.avatar_url ||
                                        "/avatar.png"
                                    }
                                    alt="Profile"
                                    className="w-11 h-11 rounded-full "
                                    referrerPolicy="no-referrer"
                                />
                                <div>
                                    <p className="font-bold text-slate-900 text-sm">
                                        {user.user_metadata?.full_name ||
                                            user.email?.split("@")[0]}
                                    </p>

                                    <p className="text-xs text-gray-600">
                                        {role === "admin"
                                            ? "Administrator"
                                            : "Traveler"}
                                    </p>
                                </div>

                            </div>
                        </Link>

                        <button
                            onClick={handleLogout}
                            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition"
                        >
                            Logout
                        </button>

                    </div>
                ) : (
                    <div className="hidden lg:flex items-center gap-4">

                        <Link
                            href="/login"
                            className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition"
                        >
                            Login
                        </Link>

                        <Link
                            href="/register"
                            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition"
                        >
                            Get Started
                        </Link>

                    </div>
                )}

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden"
                    onClick={() =>
                        setMobileOpen(!mobileOpen)
                    }
                >
                    {mobileOpen ? (
                        <X size={28} />
                    ) : (
                        <Menu size={28} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="lg:hidden bg-white border-t">
                    <div className="p-5 flex flex-col gap-4">

                        {navLinks.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() =>
                                    setMobileOpen(false)
                                }
                            >
                                {item.name}
                            </Link>
                        ))}

                        {user ? (
                            <>
                                <Link href="/dashboard">
                                    Dashboard
                                </Link>

                                <Link href="/profile">
                                    Profile
                                </Link>

                                {role === "admin" && (
                                    <Link href="/admin">
                                        Admin Panel
                                    </Link>
                                )}

                                <button
                                    onClick={handleLogout}
                                    className="text-left text-red-500"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link href="/login">
                                    Login
                                </Link>

                                <Link href="/register">
                                    Get Started
                                </Link>
                            </>
                        )}

                    </div>
                </div>
            )}
        </nav>
    );
}