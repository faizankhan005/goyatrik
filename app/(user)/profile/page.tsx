"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import {
  Plane,
  MapPin,
  Calendar,
  Star,
  LogOut,
  UserCircle,
} from "lucide-react";

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      setUser(user);
      setLoading(false);
    };

    getUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Banner */}
      <section
        className="relative h-[420px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="text-white">
            <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-md text-sm">
              Premium Traveler
            </span>

            <h1 className="mt-6 text-6xl font-bold">
              Welcome Back
            </h1>

            <p className="mt-4 text-xl text-slate-200">
              Manage your trips, bookings and travel experiences.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 -mt-32 relative z-20">
        {/* Profile Card */}
        <div className="bg-white/80 backdrop-blur-xl border border-white shadow-2xl rounded-3xl p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <Image
                src={
                  user.user_metadata?.avatar_url ||
                  "/avatar.png"
                }
                alt="Profile"
                width={140}
                height={140}
                className="rounded-full border-4 border-white shadow-xl"
              />

              <div>
                <h2 className="text-4xl font-bold text-slate-900">
                  {user.user_metadata?.full_name ||
                    "Traveler"}
                </h2>

                <p className="text-slate-500 mt-2">
                  {user.email}
                </p>

                <div className="mt-4 flex items-center gap-2">
                  <Star
                    size={18}
                    className="text-yellow-500"
                  />
                  <span className="text-yellow-500 font-medium">
                    Gold Member
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="text-gray-600 grid md:grid-cols-4 gap-6 mt-8">
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <Plane className="text-blue-600" />
            <h3 className=" mt-4 text-3xl font-bold">
              12
            </h3>
            <p className="text-slate-500">
              Trips Completed
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <Calendar className="text-green-600" />
            <h3 className=" mt-4 text-3xl font-bold">
              4
            </h3>
            <p className="text-slate-500">
              Upcoming Trips
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <MapPin className="text-purple-600" />
            <h3 className=" mt-4 text-3xl font-bold">
              18
            </h3>
            <p className="text-slate-500">
              Destinations
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <Star className="text-yellow-500" />
            <h3 className=" mt-4 text-3xl font-bold">
              2450
            </h3>
            <p className="text-slate-500">
              Reward Points
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">
          <h2 className="text-gray-600 text-3xl font-bold mb-8">
            Quick Actions
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/bookings"
              className="bg-blue-600 text-white rounded-2xl p-6 hover:scale-105 transition"
            >
              <Calendar size={32} />
              <h3 className="mt-4 text-xl font-semibold">
                My Bookings
              </h3>
            </Link>

            <Link
              href="/dashboard"
              className="bg-green-600 text-white rounded-2xl p-6 hover:scale-105 transition"
            >
              <UserCircle size={32} />
              <h3 className="mt-4 text-xl font-semibold">
                Dashboard
              </h3>
            </Link>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white rounded-2xl p-6 hover:scale-105 transition text-left"
            >
              <LogOut size={32} />
              <h3 className="mt-4 text-xl font-semibold">
                Logout
              </h3>
            </button>
          </div>
        </div>

        {/* Travel Timeline */}
        <div className="text-gray-600 bg-white rounded-3xl shadow-lg p-8 mt-8 mb-16">
          <h2 className="text-gray-600 text-3xl font-bold mb-8">
            Recent Travel Activity
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-5">
              <h3 className="font-semibold">
                Goa Beach Tour
              </h3>
              <p className="text-slate-500">
                Completed • March 2026
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-5">
              <h3 className="font-semibold">
                Kashmir Adventure
              </h3>
              <p className="text-slate-500">
                Upcoming • August 2026
              </p>
            </div>

            <div className="border-l-4 border-purple-600 pl-5">
              <h3 className="font-semibold">
                Kerala Backwaters
              </h3>
              <p className="text-slate-500">
                Upcoming • October 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}