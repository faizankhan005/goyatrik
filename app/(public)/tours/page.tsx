"use client";
import { bookingsData } from "@/data/bookings";
import Link from "next/link";
import { MapPin, Clock, Star, ArrowRight } from "lucide-react";

const tours = [
  {
    id: 1,
    title: "Maldives Paradise",
    location: "Maldives",
    duration: "5 Days / 4 Nights",
    price: "₹4,999",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: 2,
    title: "Swiss Alps Escape",
    location: "Switzerland",
    duration: "7 Days / 6 Nights",
    price: "₹9,999",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    id: 3,
    title: "Dubai Luxury Tour",
    location: "Dubai",
    duration: "4 Days / 3 Nights",
    price: "₹9,999",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
  },
];

export default function ToursPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}

      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          alt="Travel"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center px-6">
          <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl text-white border border-white/20">
            Premium Travel Collection
          </span>

          <h1 className="mt-6 text-6xl md:text-8xl font-black text-white">
            Explore
            <span className="block text-cyan-400">
              Extraordinary Tours
            </span>
          </h1>

          <p className="mt-6 text-xl text-slate-200 max-w-3xl mx-auto">
            Discover breathtaking destinations and unforgettable experiences.
          </p>
          <div className="flex flex-wrap gap-4  mt-10 justify-center">
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
      </section>

      {/* Tours */}

      <section className="text-black max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-slate-900">
            Popular Tours
          </h2>

          <p className="mt-4 text-slate-500">
            Handpicked luxury travel experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-7">
                <h3 className="text-2xl font-bold text-slate-900">
                  {tour.title}
                </h3>

                <div className="mt-4 flex items-center gap-2 text-slate-600">
                  <MapPin size={18} />
                  {tour.location}
                </div>

                <div className="mt-2 flex items-center gap-2 text-slate-600">
                  <Clock size={18} />
                  {tour.duration}
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <Star
                    size={18}
                    className="fill-yellow-500 text-yellow-500"
                  />
                  <span>4.9 Rating</span>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-3xl font-black text-blue-600">
                    {tour.price}
                  </span>

                  <button
                    onClick={() =>
                      window.dispatchEvent(
                        new CustomEvent("openTravelChat")
                      )
                    }
                    className=" w-full bg-white text-slate-900 py-4 rounded-2xl font-bold  hover:text-black transition-all duration-300"
                  >
                    Exploare Now
                  </button>
                </div>
              </div>
            </div>
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
            Travel comfortably with India's most trusted Tours operators.
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

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">
          <div>
            <h3 className="text-5xl font-black text-cyan-400">
              50+
            </h3>
            <p className="mt-2">Destinations</p>
          </div>

          <div>
            <h3 className="text-5xl font-black text-cyan-400">
              10K+
            </h3>
            <p className="mt-2">Happy Travelers</p>
          </div>

          <div>
            <h3 className="text-5xl font-black text-cyan-400">
              4.9
            </h3>
            <p className="mt-2">Average Rating</p>
          </div>

          <div>
            <h3 className="text-5xl font-black text-cyan-400">
              24/7
            </h3>
            <p className="mt-2">Support</p>
          </div>
        </div>
      </section>
    </main>
  );
}