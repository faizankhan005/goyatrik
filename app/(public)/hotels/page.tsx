"use client";
import { bookingsData } from "@/data/bookings";
import Link from "next/link";
import {
  MapPin,
  Star,
  ArrowRight,
  Search,
} from "lucide-react";

const hotels = [
  {
    id: 1,
    name: "Taj Palace",
    location: "New Delhi",
    price: "₹8,999",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200",
  },
  {
    id: 2,
    name: "The Oberoi",
    location: "Mumbai",
    price: "₹12,999",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200",
  },
  {
    id: 3,
    name: "Leela Palace",
    location: "Bangalore",
    price: "₹10,999",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200",
  },

];

export default function HotelsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}

      <section className="relative h-[75vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1800"
          alt="Luxury Hotel"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <div>
            <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-white backdrop-blur-xl">
              Luxury Hotel Collection
            </span>

            <h1 className="mt-6 text-6xl font-black text-white md:text-8xl">
              Find Your
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Perfect Stay
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-200">
              Discover premium hotels, luxury resorts,
              villas and unforgettable stays around the
              world.
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

        </div>
      </section>


      {/* Hotels */}

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <span className="rounded-full bg-blue-50 px-5 py-2 font-semibold text-blue-600">
            Premium Collection
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Most Loved
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Luxury Hotels
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-500">
            Handpicked luxury accommodations trusted by
            thousands of travelers.
          </p>
        </div>

        <div className="text-black grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="group overflow-hidden rounded-[32px] bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 font-bold text-blue-600 shadow-lg">
                  {hotel.price}
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {hotel.name}
                  </h3>

                  <div className="flex items-center gap-1 rounded-full bg-yellow-50 px-3 py-1">
                    <Star
                      size={16}
                      className="fill-yellow-500 text-yellow-500"
                    />
                    <span className="font-semibold">
                      {hotel.rating}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-slate-600">
                  <MapPin size={18} />
                  {hotel.location}
                </div>

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
            </div>
          ))}
        </div>
      </section>

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

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 rounded-[40px] bg-gradient-to-r from-slate-900 to-slate-800 p-12 text-center text-white md:grid-cols-4">
            <div>
              <h3 className="text-5xl font-black text-cyan-400">
                50K+
              </h3>
              <p className="mt-2 text-slate-300">
                Hotels
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-cyan-400">
                100+
              </h3>
              <p className="mt-2 text-slate-300">
                Countries
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-cyan-400">
                4.9
              </h3>
              <p className="mt-2 text-slate-300">
                Rating
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-cyan-400">
                24/7
              </h3>
              <p className="mt-2 text-slate-300">
                Support
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}