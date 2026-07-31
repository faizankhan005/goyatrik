"use client";

import { bookingsData } from "@/data/bookings";
import { useParams } from "next/navigation";

import {
  MapPin,
  Star,
  Clock,
  Users,
  Calendar,
  CheckCircle,
  Download,
} from "lucide-react";

export default function BookingPage() {
  const params = useParams();

  const booking = bookingsData.find(
    (item) => item.id === params.id
  );

  if (!booking) {
    return (
      <div className="h-screen flex items-center justify-center text-4xl font-black">
        Package Not Found
      </div>
    );
  }

  const whatsappLink = `https://wa.me/918535042494?text=${encodeURIComponent(
    `Hello GoYatrik,

I want to book this package.

Package: ${booking.title}
Location: ${booking.location}
Price: ${booking.price}
Duration: ${booking.duration}

Please share complete details.`
  )}`;

  return (
    <div className="text-black bg-slate-50 min-h-screen">

      {/* HERO */}

      <section className="relative h-screen overflow-hidden">

        <img
          src={booking.image}
          alt={booking.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-end">

          <div className="max-w-7xl mx-auto px-6 pb-20 text-white w-full">

            <span className="bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-2 rounded-full">
              Premium Tour Package
            </span>

            <h1 className="mt-6 text-6xl md:text-8xl font-black">
              {booking.title}
            </h1>

            <div className="flex flex-wrap gap-6 mt-8">

              <div className="flex items-center gap-2">
                <MapPin size={20} />
                {booking.location}
              </div>

              <div className="flex items-center gap-2">
                <Star size={20} />
                {booking.rating}
              </div>

              <div className="flex items-center gap-2">
                <Clock size={20} />
                {booking.duration}
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CONTENT */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT */}

          <div className="lg:col-span-2 space-y-8">

            {/* Gallery */}

            {booking.gallery?.length > 0 && (
              <div className="bg-white rounded-[35px] p-10 shadow-lg">

                <h2 className="text-4xl font-black text-slate-900">
                  Gallery
                </h2>

                <div className="grid md:grid-cols-2 gap-4 mt-8">

                  {booking.gallery.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt=""
                      className="h-72 w-full rounded-3xl object-cover hover:scale-105 transition"
                    />
                  ))}

                </div>

              </div>
            )}

            {/* Overview */}

            <div className="bg-white rounded-[35px] p-10 shadow-lg">

              <h2 className="text-4xl font-black text-slate-900">
                Overview
              </h2>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                {booking.description}
              </p>

            </div>

            {/* Highlights */}

            {booking.highlights?.length > 0 && (
              <div className="bg-white rounded-[35px] p-10 shadow-lg">

                <h2 className="text-4xl font-black text-slate-900">
                  Package Highlights
                </h2>

                <div className="grid md:grid-cols-2 gap-4 mt-8">

                  {booking.highlights.map((item) => (
                    <div
                      key={item}
                      className="bg-blue-50 p-5 rounded-2xl"
                    >
                      <CheckCircle
                        className="text-green-600 mb-3"
                      />
                      {item}
                    </div>
                  ))}

                </div>

              </div>
            )}

            {/* Places */}

            {booking.places?.length > 0 && (
              <div className="bg-white rounded-[35px] p-10 shadow-lg">

                <h2 className="text-4xl font-black text-slate-900">
                  Famous Places To Visit
                </h2>

                <div className="grid md:grid-cols-2 gap-4 mt-8">

                  {booking.places.map((place) => (
                    <div
                      key={place}
                      className="bg-slate-100 p-5 rounded-2xl"
                    >
                      📍 {place}
                    </div>
                  ))}

                </div>

              </div>
            )}

            {/* Restaurants */}

            {booking.restaurants?.length > 0 && (
              <div className="bg-white rounded-[35px] p-10 shadow-lg">

                <h2 className="text-4xl font-black text-slate-900">
                  Best Restaurants
                </h2>

                <div className="grid md:grid-cols-2 gap-4 mt-8">

                  {booking.restaurants.map((restaurant) => (
                    <div
                      key={restaurant}
                      className="bg-orange-50 p-5 rounded-2xl"
                    >
                      🍽️ {restaurant}
                    </div>
                  ))}

                </div>

              </div>
            )}

            {/* Itinerary */}

            {booking.itinerary?.length > 0 && (
              <div className="bg-white rounded-[35px] p-10 shadow-lg">

                <h2 className="text-4xl font-black text-slate-900">
                  Day Wise Itinerary
                </h2>

                <div className="mt-10 space-y-8">

                  {booking.itinerary.map((day, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-blue-600 pl-6"
                    >
                      <h3 className="font-black text-xl">
                        {day.day}
                      </h3>

                      <p className="mt-2 text-slate-600">
                        {day.title}
                      </p>
                    </div>
                  ))}

                </div>

              </div>
            )}

            {/* Included & Excluded */}

            <div className="grid md:grid-cols-2 gap-8">

              <div className="bg-white rounded-[35px] p-10 shadow-lg">

                <h2 className="text-3xl font-black">
                  Included
                </h2>

                <div className="space-y-4 mt-8">

                  {booking.includes?.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="text-green-600" />
                      {item}
                    </div>
                  ))}

                </div>

              </div>

              <div className="bg-white rounded-[35px] p-10 shadow-lg">

                <h2 className="text-3xl font-black">
                  Excluded
                </h2>

                <div className="space-y-4 mt-8">

                  {booking.excluded?.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      ❌ {item}
                    </div>
                  ))}

                </div>

              </div>

            </div>

            {/* Reviews */}

            <div className="bg-white rounded-[35px] p-10 shadow-lg">

              <h2 className="text-4xl font-black">
                Traveler Reviews
              </h2>

              <div className="space-y-4 mt-8">

                <div className="bg-slate-100 p-6 rounded-2xl">
                  ⭐⭐⭐⭐⭐ Amazing experience and hotels.
                </div>

                <div className="bg-slate-100 p-6 rounded-2xl">
                  ⭐⭐⭐⭐⭐ Excellent sightseeing package.
                </div>

              </div>

            </div>

          </div>

          {/* SIDEBAR */}

          <div>

            <div className="sticky top-24 bg-white rounded-[35px] overflow-hidden shadow-xl">

              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white">

                <h3 className="text-5xl font-black">
                  {booking.price}
                </h3>

                <p className="mt-2">
                  Starting Price
                </p>

              </div>

              <div className="p-8">

                <div className="space-y-5">

                  <div className="flex items-center gap-3">
                    <Users size={18} />
                    Family Friendly
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar size={18} />
                    Flexible Dates
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock size={18} />
                    {booking.duration}
                  </div>

                </div>

                <a
                  href={booking.brochure || "#"}
                  download
                  className="w-full mt-8 flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-2xl font-bold"
                >
                  <Download size={18} />
                  Download Brochure
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-4 flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-2xl font-bold"
                >
                  Book On WhatsApp
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}