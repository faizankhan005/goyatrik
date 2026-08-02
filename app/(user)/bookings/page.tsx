"use client";

import { useEffect, useState } from "react";
import {
  Plane,
  Calendar,
  Users,
  MapPin,
  ArrowRight,
  CheckCircle,
  Clock,
} from "lucide-react";
import Link from "next/link";

const bookingImages = [
  // Manali
  "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",

  // Kashmir
  "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg",

  // Shimla
  "https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg",
];


export default function BookingsPage() {

  const [currentImage, setCurrentImage] = useState(0);


  useEffect(() => {

    const slider = setInterval(() => {

      setCurrentImage(
        (prev) => (prev + 1) % bookingImages.length
      );

    }, 5000);


    return () => clearInterval(slider);

  }, []);



const bookings = [
  {
    id: "manali",
    from: "Delhi",
    to: "Manali",
    date: "25 August 2026",
    passengers: "1 Travelers",
    price: "₹9,999",
    status: "Upcoming",
    image: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg",
  },

  {
    id: "kashmir",
    from: "Delhi",
    to: "Kashmir",
    date: "12 September 2026",
    passengers: "1 Traveler",
    price: "₹14,999",
    status: "Upcoming",
    image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg",
  },

  {
    id: "shimla",
    from: "Delhi",
    to: "Shimla",
    date: "05 October 2026",
    passengers: "1 Traveler",
    price: "₹9,999",
    status: "Upcoming",
    image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
  },

  {
    id: "goa",
    from: "Delhi",
    to: "Goa",
    date: "10 October 2026",
    passengers: "1 Traveler",
    price: "₹10,499",
    status: "Upcoming",
    image: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg",
  },

  {
    id: "kerala",
    from: "Delhi",
    to: "Kerala",
    date: "15 October 2026",
    passengers: "1 Traveler",
    price: "₹16,999",
    status: "Upcoming",
    image: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg",
  },

  {
    id: "udaipur",
    from: "Delhi",
    to: "Udaipur",
    date: "20 October 2026",
    passengers: "1 Traveler",
    price: "₹9,999",
    status: "Upcoming",
    image: "https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg",
  },

  {
    id: "jaipur",
    from: "Delhi",
    to: "Jaipur",
    date: "25 October 2026",
    passengers: "2 Travelers",
    price: "₹7,499",
    status: "Upcoming",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg",
  },

  {
    id: "leh-ladakh",
    from: "Delhi",
    to: "Leh Ladakh",
    date: "02 November 2026",
    passengers: "1 Traveler",
    price: "₹24,999",
    status: "Upcoming",
    image: "https://images.pexels.com/photos/5205097/pexels-photo-5205097.jpeg",
  },

  {
    id: "rishikesh",
    from: "Delhi",
    to: "Rishikesh",
    date: "08 November 2026",
    passengers: "4 Travelers",
    price: "₹9,499",
    status: "Upcoming",
    image: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg",
  },

  {
    id: "andaman-nicobar",
    from: "Delhi",
    to: "Andaman & Nicobar",
    date: "15 November 2026",
    passengers: "1 Traveler",
    price: "₹15,999",
    status: "Upcoming",
    image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg",
  },

  {
    id: "darjeeling",
    from: "Delhi",
    to: "Darjeeling",
    date: "22 November 2026",
    passengers: "1 Traveler",
    price: "₹14,499",
    status: "Upcoming",
    image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
  },

  {
    id: "agra",
    from: "Delhi",
    to: "Agra",
    date: "30 November 2026",
    passengers: "1 Traveler",
    price: "₹5,999",
    status: "Upcoming",
    image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg",
  },
];



  return (

    <div className="bg-slate-50">


      {/* HERO */}

      <section className="relative min-h-[75vh] overflow-hidden">


        {
          bookingImages.map((img, index) => (

            <img
              key={index}
              src={img}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[2500ms]
${currentImage === index ? "opacity-100" : "opacity-0"}
`}
            />

          ))
        }
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex min-h-[75vh] items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-4xl">
              <span className="inline-flex px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white">
                ✈ My Travel Dashboard
              </span>
              <h1 className="mt-8 text-5xl md:text-7xl font-black text-white leading-tight">
                Manage Your
                <span className="block bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  Bookings
                </span>
              </h1>
              <p className="mt-6 text-xl text-slate-200 max-w-2xl">

                Track your flights, manage upcoming trips,
                view travel history and enjoy a seamless journey.

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
      {/* BOOKING LIST */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="px-5 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold">
            Your Trips
          </span>
          <h2 className="mt-6 text-5xl md:text-6xl font-black text-slate-900">
            TOURS & TRAVEL BOOKINGS
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              BookNow
            </span>
          </h2>
        </div>
        <div className="text-black grid lg:grid-cols-3 gap-8">
          
          {
            bookings.map((booking, index) => (
              <div
                key={index}
                
                className="group bg-white rounded-[32px] overflow-hidden shadow-xl hover:-translate-y-3 transition duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={booking.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-5 left-5 text-white">
                    <div className="flex items-center gap-2">
                      <MapPin size={18} />
                      {booking.from}
                    </div>
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex justify-between items-center">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2
${booking.status === "Confirmed"
                          ?
                          "bg-green-100 text-green-600"
                          :
                          booking.status === "Upcoming"
                            ?
                            "bg-blue-100 text-blue-600"
                            :
                            "bg-gray-100 text-gray-600"
                        }
`}
                    >
                      {
                        booking.status === "Completed"
                          ?
                          <CheckCircle size={16} />
                          :
                          <Clock size={16} />
                      }
                      {booking.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-8">
                    <div>
                      <h3 className="text-3xl font-black">
                        {booking.from}
                      </h3>
                    </div>
                    <div className="flex-1 flex items-center gap-2">
                      <div className="h-[2px] bg-slate-300 flex-1" />
                      <Plane className="text-blue-600" />
                      <div className="h-[2px] bg-slate-300 flex-1" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black">
                        {booking.to}
                      </h3>
                    </div>
                  </div>
                  <div className="mt-8 space-y-4 text-slate-600">
                    <div className="flex items-center gap-3">
                      <Calendar size={20} />
                      {booking.date}
                    </div>
                    <div className="flex items-center gap-3">
                      <Users size={20} />
                      {booking.passengers}
                    </div>
                  </div>
                  <div className="mt-8 flex justify-between items-center">
                    <h4 className="text-3xl font-black">
                      {booking.price}
                    </h4>
                    <Link
                      href={`/bookings/${booking.id}`}
                      className="bg-slate-900 text-white px-5 py-3 rounded-2xl"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </section>
      {/* STATS */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 text-center">
            <div>
              <h3 className="text-5xl font-black text-cyan-400">
                50K+
              </h3>
              <p>
                Bookings Managed
              </p>
            </div>
            <div>
              <h3 className="text-5xl font-black text-cyan-400">
                120+
              </h3>
              <p>
                Countries
              </p>
            </div>
            <div>
              <h3 className="text-5xl font-black text-cyan-400">
                1M+
              </h3>
              <p>
                Travelers
              </p>
            </div>
            <div>
              <h3 className="text-5xl font-black text-cyan-400">
                24/7
              </h3>
              <p>
                Support
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}