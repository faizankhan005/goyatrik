"use client";
import { bookingsData } from "@/data/bookings";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Plane,
  Calendar,
  Users,
  Search,
  ArrowRight,
} from "lucide-react";

const heroImages = [
  "https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg",
  "https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg",
  "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg",
  "https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg",
];

export default function FlightsPage() {
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

      {/* Hero */}

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

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex min-h-[85vh] items-center">

          <div className="max-w-7xl mx-auto px-6 w-full">

            <div className="max-w-4xl">

              <span className="inline-flex px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white">
                ✈ Premium Flight Booking
              </span>

              <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight">
                Fly
                <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Anywhere
                </span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl">
                Compare prices from top airlines,
                discover amazing destinations and
                book your next journey in seconds.
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



      {/* Popular Routes */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">

          <span className="inline-flex px-5 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold">
            Trending Destinations
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-slate-900">
            Popular Flight
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              Routes Worldwide
            </span>
          </h2>

          <p className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto">
            Fly to the world's most loved destinations with
            exclusive fares and premium airline partners.
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

      {/* Stats */}

      <section className="bg-slate-900 text-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-10 text-center">

            <div>
              <h3 className="text-5xl font-black text-cyan-400">
                500+
              </h3>
              <p>Airlines</p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-cyan-400">
                120+
              </h3>
              <p>Countries</p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-cyan-400">
                1M+
              </h3>
              <p>Happy Travelers</p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-cyan-400">
                24/7
              </h3>
              <p>Support</p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}