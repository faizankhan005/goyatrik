"use client";
import { bookingsData } from "@/data/bookings";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import {
  Plane,
  Calendar,
  Users,
  MapPin,
  Star,
  Wifi,
  Snowflake,
  ShieldCheck,
  ArrowRight,
  ArrowUp,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Ticket,
  TrendingUp,
  CheckCircle,
  Clock,
  Hotel,
  Train,
  Bus,
  Headphones,
  MessageCircle,
  Globe,
  Mail,
  Phone,
  Send,
} from "lucide-react";

const MotionLink = motion(Link);

/* ------------------------------------------------------------------ */
/* Animation variants                                                  */
/* ------------------------------------------------------------------ */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0 },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

/* ------------------------------------------------------------------ */
/* Static data                                                         */
/* ------------------------------------------------------------------ */

const services = [
  {
    title: "Tours Packages",
    desc: "Explore destinations",
    route: "/tours",
    icon: MapPin,
  },
  {
    title: "Flights Booking",
    desc: "Book domestic and international flights",
    route: "/flights",
    icon: Plane,
  },
  {
    title: "Hotels Booking",
    desc: "Find luxury stays",
    route: "/hotels",
    icon: Hotel,
  },
  {
    title: "Trains Booking",
    desc: "Book train tickets",
    route: "/trains",
    icon: Train,
  },
  {
    title: "Buses Booking",
    desc: "Comfortable bus journeys",
    route: "/buses",
    icon: Bus,
  },
  {
    title: "Secure Booking",
    desc: "100% safe payments with instant confirmation",
    route: "/bookings",
    icon: ShieldCheck,
  },
];

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

const trendingRoutes = [
  "Delhi → Mumbai",
  "Delhi → Kolkata",
  "Delhi → Chennai",
  "Bangalore → Hyderabad",
  "Mumbai → Goa",
  "Jaipur → Delhi",
];

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

const heroSlides = [
  { image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", caption: "Swiss Alps" },
  { image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b", caption: "Golden Hour Peaks" },
  { image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e", caption: "Misty Mountains" },
  { image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", caption: "Paris, France" },
  { image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", caption: "Coastal Escape" },
  { image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", caption: "Maldives" },
  { image: "https://images.unsplash.com/photo-1519046904884-53103b34b206", caption: "Bangkok Nights" },
  { image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e", caption: "Singapore Skyline" },
  { image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e", caption: "Northern Lights" },
  { image: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66", caption: "Island Sunset" },
];

const worldwideFlights = [
  {
    from: "Delhi",
    to: "Dubai",
    price: "₹18,999",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
  },
  {
    from: "Delhi",
    to: "Bangkok",
    price: "₹14,999",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
  },
  {
    from: "Delhi",
    to: "Singapore",
    price: "₹16,999",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
  },
  {
    from: "Delhi",
    to: "Bali",
    price: "₹19,999",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
  },
  {
    from: "Delhi",
    to: "Maldives",
    price: "₹22,999",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    from: "Delhi",
    to: "Paris",
    price: "₹28,999",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
];

/* ------------------------------------------------------------------ */
/* Component                                                            */
/* ------------------------------------------------------------------ */

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  // Hero autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Smooth scrolling site-wide + always start fresh at top on load/refresh
  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  // Scroll-to-top button visibility
  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToSlide = (index: number) => setCurrentImage(index);
  const prevSlide = () =>
    setCurrentImage((prev) =>
      prev === 0 ? heroSlides.length - 1 : prev - 1
    );
  const nextSlide = () =>
    setCurrentImage((prev) =>
      prev === heroSlides.length - 1 ? 0 : prev + 1
    );

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = `Hello GoYatrik

Name: ${contactName}
Email: ${contactEmail}
Message: ${contactMessage}`;
    window.open(
      `https://wa.me/918535042494?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const openChat = () => window.dispatchEvent(new CustomEvent("openTravelChat"));

  const tours = [
    {
      id: 1,
      title: "Maldives Paradise",
      location: "Maldives",
      duration: "5 Days / 4 Nights",
      price: "₹4,999",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      id: 2,
      title: "Swiss Alps Escape",
      location: "Switzerland",
      duration: "7 Days / 6 Nights",
      price: "₹9,999",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    {
      id: 3,
      title: "Dubai Luxury Tour",
      location: "Dubai",
      duration: "4 Days / 3 Nights",
      price: "₹9,999",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    },
  ];

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


  const domesticRoutes = [
    { from: "Delhi", to: "Manali", price: "₹6,999", image: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg" },
    { from: "Delhi", to: "Kashmir", price: "₹9,999", image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg" },
    { from: "Delhi", to: "Shimla", price: "₹5,499", image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg" },
    { from: "Delhi", to: "Goa", price: "₹7,999", image: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg" },
    { from: "Delhi", to: "Kerala", price: "₹8,999", image: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg" },
    { from: "Delhi", to: "Jaipur", price: "₹4,999", image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg" },
    { from: "Delhi", to: "Udaipur", price: "₹5,999", image: "https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg" },
    { from: "Delhi", to: "Leh Ladakh", price: "₹12,999", image: "https://images.pexels.com/photos/5205097/pexels-photo-5205097.jpeg" },
    { from: "Delhi", to: "Rishikesh", price: "₹4,499", image: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg" },
    { from: "Delhi", to: "Andaman & Nicobar", price: "₹15,999", image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg" },
    { from: "Delhi", to: "Darjeeling", price: "₹6,499", image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg" },
    { from: "Delhi", to: "Agra", price: "₹3,999", image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ${currentImage === index ? "opacity-100" : "opacity-0"
              }`}
          >
            <img
              src={slide.image}
              alt={slide.caption}
              className={`h-full w-full object-cover transition-transform duration-[6000ms] ease-out ${currentImage === index ? "scale-110" : "scale-100"
                }`}
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <span className="inline-block rounded-full border border-cyan-400 bg-cyan-500/20 px-5 py-2 font-medium text-cyan-300">
                ✈ Discover Amazing Destinations
              </span>

              <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-8xl">
                Explore The
                <span className="block text-cyan-400">World With Us</span>
              </h1>

              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/90">
                Book Flights, Hotels, Trains, Buses and unforgettable Tour
                Packages across the globe. Experience travel like never
                before.
              </p>

              <AnimatePresence mode="wait">
                <motion.p
                  key={currentImage}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="mt-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-cyan-300"
                >
                  <MapPin size={16} />
                  Now viewing — {heroSlides[currentImage].caption}
                </motion.p>
              </AnimatePresence>

              <div className="mt-10 flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={openChat}
                  className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-xl transition hover:bg-blue-700"
                >
                  Start Planning
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={openChat}
                  className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  Explore Tours
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Prev / Next arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/25"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/25"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.image}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${currentImage === index
                ? "w-8 bg-cyan-400"
                : "w-2 bg-white/50 hover:bg-white/80"
                }`}
            />
          ))}
        </div>
      </section>

      {/* TRENDING ROUTES TICKER */}
      <div className="overflow-hidden bg-slate-900 py-3">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
        >
          {[...trendingRoutes, ...trendingRoutes].map((route, i) => (
            <span
              key={i}
              className="flex items-center gap-2 text-sm font-semibold text-cyan-300"
            >
              <Plane size={14} />
              {route}
            </span>
          ))}
        </motion.div>
      </div>

      {/* BOOKING LIST */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="rounded-full bg-blue-50 px-5 py-2 font-semibold text-blue-600">
            Your Trips
          </span>
          <h2 className="mt-6 text-5xl font-black text-slate-900 md:text-6xl">
            TOURS &amp; TRAVEL BOOKINGS
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              BookNow
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-8 text-black lg:grid-cols-3">
          {bookings.map((booking, index) => (
            <motion.div
              key={booking.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-[32px] bg-white shadow-xl transition duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={booking.image}
                  alt={booking.to}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
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
                <div className="flex items-center justify-between">
                  <span
                    className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold ${booking.status === "Confirmed"
                      ? "bg-green-100 text-green-600"
                      : booking.status === "Upcoming"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-gray-100 text-gray-600"
                      }`}
                  >
                    {booking.status === "Completed" ? (
                      <CheckCircle size={16} />
                    ) : (
                      <Clock size={16} />
                    )}
                    {booking.status}
                  </span>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <h3 className="text-3xl font-black">{booking.from}</h3>
                  <div className="flex flex-1 items-center gap-2">
                    <div className="h-[2px] flex-1 bg-slate-300" />
                    <Plane className="text-blue-600" />
                    <div className="h-[2px] flex-1 bg-slate-300" />
                  </div>
                  <h3 className="text-3xl font-black">{booking.to}</h3>
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

                <div className="mt-8 flex items-center justify-between">
                  <h4 className="text-3xl font-black">
                    {booking.price}
                  </h4>

                  <Link
                    href={`/tours/${booking.id}`}
                    className="rounded-2xl bg-slate-900 px-5 py-4 text-white transition hover:bg-cyan-500"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* POPULAR TOUR ROUTES */}

      <section className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex rounded-full bg-blue-50 px-5 py-2 font-semibold text-blue-600">
            Trending Routes
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900 md:text-6xl">
            Popular Tours
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              Routes
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500">
            Travel comfortably with India's most trusted Tours operators.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {bookingsData.map((route, index) => (
            <motion.div
              key={route.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{
                duration: 0.5,
                delay: (index % 3) * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group relative h-[500px] overflow-hidden rounded-[32px] shadow-2xl"
            >
              <img
                src={route.image}
                alt={route.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">

                <div className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl">
                  Premium Tour
                </div>

                <h3 className="text-center text-4xl font-black">
                  {route.title}
                </h3>

                <p className="mt-3 text-center text-white/80">
                  {route.location}
                </p>

                <p className="mt-6 text-center text-white/80">
                  Starting From
                </p>

                <h4 className="mt-2 text-center text-5xl font-black">
                  {route.price}
                </h4>

                <Link
                  href={`/tours/${route.id}`}
                  className="mt-8 block w-full rounded-2xl bg-white py-4 text-center font-bold text-slate-900 transition-all duration-300 hover:bg-blue-600 hover:text-white"
                >
                  View Details
                </Link>

              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* WORLDWIDE FLIGHTS */}

      <section className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex rounded-full bg-blue-50 px-5 py-2 font-semibold text-blue-600">
            Trending Destinations
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900 md:text-6xl">
            Popular Flight
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              Routes Worldwide
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500">
            Fly to the world's most loved destinations with exclusive
            fares and premium airline partners.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">

          {bookingsData.map((route, index) => (
            <motion.div
              key={route.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{
                duration: 0.5,
                delay: (index % 3) * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group relative h-[500px] overflow-hidden rounded-[32px] shadow-2xl"
            >
              {/* Background Image */}

              <img
                src={route.image}
                alt={route.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Content */}

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">

                <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl">
                  Premium Route
                </div>

                <h3 className="text-4xl font-black">
                  Delhi
                </h3>

                <div className="my-4 flex items-center gap-3">
                  <div className="h-[2px] flex-1 bg-white/40" />

                  <div className="rounded-full bg-white/20 p-3 backdrop-blur-xl">
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

                <h4 className="mt-1 text-5xl font-black">
                  {route.price}
                </h4>

                <Link
                  href={`/tours/${route.id}`}
                  className="mt-8 block w-full rounded-2xl bg-white py-4 text-center font-bold text-slate-900 transition-all duration-300 hover:bg-blue-600 hover:text-white"
                >
                  View Details
                </Link>

              </div>
            </motion.div>
          ))}

        </div>
      </section>
      {/* HOTELS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
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
            Handpicked luxury accommodations trusted by thousands of
            travelers.
          </p>
        </motion.div>

        <div className="grid gap-10 text-black md:grid-cols-2 lg:grid-cols-3">
          {hotels.map((hotel, index) => (
            <motion.div
              key={hotel.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[32px] bg-white shadow-xl transition-all duration-500 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  loading="lazy"
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
                    <Star size={16} className="fill-yellow-500 text-yellow-500" />
                    <span className="font-semibold">{hotel.rating}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-slate-600">
                  <MapPin size={18} />
                  {hotel.location}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={openChat}
                  className="mt-8 w-full rounded-2xl bg-white py-4 font-bold text-slate-900 transition-all duration-300 hover:bg-blue-600 hover:text-white"
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TOURS */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-black">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex rounded-full bg-blue-50 px-5 py-2 font-semibold text-blue-600">
            Trending Routes
          </span>
          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Popular Tours
          </h2>
          <p className="mt-4 text-slate-500">
            Handpicked luxury travel experiences.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-3">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl"
            >
              <img
                src={tour.image}
                alt={tour.title}
                loading="lazy"
                className="h-72 w-full object-cover"
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
                  <Star size={18} className="fill-yellow-500 text-yellow-500" />
                  <span>4.9 Rating</span>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="text-3xl font-black text-blue-600">
                    {tour.price}
                  </span>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={openChat}
                    className="rounded-2xl bg-slate-900 px-5 py-3 font-bold text-white transition hover:bg-cyan-500"
                  >
                    Explore Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* POPULAR TRAINS */}
      <section className="mx-auto max-w-7xl px-6 py-16 text-black">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex rounded-full bg-blue-50 px-5 py-2 font-semibold text-blue-600">
            Trending Routes
          </span>
          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Popular Trains
          </h2>
          <p className="mt-4 text-slate-500">
            Handpicked luxury travel experiences.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {popularTrains.map((train, index) => (
            <motion.div
              key={train.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-3xl bg-white shadow transition hover:shadow-2xl"
            >
              <img
                src={train.image}
                alt={train.name}
                loading="lazy"
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">{train.name}</h3>
                <p className="mt-3 text-gray-500">{train.desc}</p>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={openChat}
                  className="mt-8 w-full rounded-2xl bg-white py-4 font-bold text-slate-900 transition-all duration-300 hover:bg-blue-600 hover:text-white"
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-8 text-black">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-8 text-4xl font-bold"
        >
          Why Choose Us?
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-4">
          {[
            { icon: Ticket, color: "text-purple-600", title: "Instant Booking" },
            { icon: Clock3, color: "text-blue-600", title: "Live Status" },
            { icon: ShieldCheck, color: "text-green-600", title: "Secure Payments" },
            { icon: Star, color: "text-yellow-500", title: "Top Rated Service" },
          ].map((f, index) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl bg-white p-6 shadow-sm"
              >
                <Icon className={`mb-4 ${f.color}`} size={36} />
                <h3 className="text-lg font-bold">{f.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* OFFER BANNER */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="rounded-[40px] bg-gradient-to-r from-purple-600 to-indigo-700 p-10 text-white"
        >
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h2 className="text-4xl font-bold">Get Up To 25% OFF</h2>
              <p className="mt-3 text-purple-100">
                On train bookings this month.
              </p>
            </div>
            <TrendingUp size={70} />
          </div>
        </motion.div>
      </section>

      {/* CTA (image banner) */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[40px]"
        >
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=2000&q=80"
            alt="Train Banner"
            loading="lazy"
            className="h-[350px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h2 className="text-5xl font-bold text-white">
              Ready For Your Next Journey?
            </h2>
            <p className="mt-4 text-gray-200">
              Travel smarter with Goyatrik Travel
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={openChat}
              className="mt-6 rounded-2xl bg-white px-8 py-4 font-bold text-purple-700 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              Book Now →
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center text-5xl font-black text-white"
          >
            What We Offer
          </motion.h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <MotionLink
                  href={service.route}
                  key={service.title}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group rounded-[30px] border border-white/10 bg-white/10 p-8 text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10"
                >
                  <Icon
                    size={42}
                    className="text-cyan-400 transition-transform group-hover:scale-110"
                  />
                  <h3 className="mt-6 text-2xl font-black">{service.title}</h3>
                  <p className="mt-4 leading-relaxed text-slate-300">
                    {service.desc}
                  </p>
                </MotionLink>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CONTACT */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black py-28">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-10 right-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 font-semibold text-cyan-400">
              Premium Support
            </span>
            <h2 className="mt-6 text-5xl font-black text-white md:text-6xl">
              Why Contact
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
                GoYatrik
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
              Get expert travel assistance, instant support, and personalized
              guidance from our travel specialists.
            </p>
          </motion.div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Headphones,
                border: "hover:border-cyan-400/50",
                bg: "bg-cyan-500/10",
                iconColor: "text-cyan-400",
                border2: "border-cyan-400/20",
                title: "24/7 Support",
                desc: "Dedicated travel experts available anytime to help with bookings, cancellations, and trip planning.",
              },
              {
                icon: MessageCircle,
                border: "hover:border-blue-400/50",
                bg: "bg-blue-500/10",
                iconColor: "text-blue-400",
                border2: "border-blue-400/20",
                title: "Fast Responses",
                desc: "Receive quick answers and instant assistance for all your travel-related questions.",
              },
              {
                icon: Globe,
                border: "hover:border-emerald-400/50",
                bg: "bg-emerald-500/10",
                iconColor: "text-emerald-400",
                border2: "border-emerald-400/20",
                title: "Global Coverage",
                desc: "Travel assistance and booking support for destinations across India and around the world.",
              },
            ].map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className={`group rounded-[32px] border border-white/10 bg-white/5 p-8 text-white backdrop-blur-xl transition-all duration-500 hover:bg-white/10 ${card.border}`}
                >
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl border ${card.border2} ${card.bg}`}
                  >
                    <Icon size={34} className={`${card.iconColor} transition group-hover:scale-110`} />
                  </div>
                  <h3 className="mt-8 text-3xl font-black">{card.title}</h3>
                  <p className="mt-4 leading-relaxed text-slate-300">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-center text-5xl font-black text-white">
              Premium Amenities
            </h2>
            <p className="mt-4 text-center text-lg text-slate-300">
              Enjoy world-class comfort and safety on every journey
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Wifi, ring: "bg-blue-500/20", color: "text-cyan-400", title: "Free WiFi", desc: "Stay connected throughout your journey." },
              { icon: Snowflake, ring: "bg-cyan-500/20", color: "text-cyan-300", title: "AC Coaches", desc: "Premium air-conditioned luxury buses." },
              { icon: ShieldCheck, ring: "bg-green-500/20", color: "text-green-400", title: "Safe Travel", desc: "Verified operators and secure journeys." },
              { icon: Clock, ring: "bg-orange-500/20", color: "text-orange-400", title: "On Time", desc: "Reliable schedules with timely departures." },
            ].map((a, index) => {
              const Icon = a.icon;
              return (
                <motion.div
                  key={a.title}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="flex flex-col items-center rounded-[30px] border border-slate-700 bg-slate-800 p-10 text-center transition-all duration-300"
                >
                  <div className={`mb-6 flex h-20 w-20 items-center justify-center rounded-full ${a.ring}`}>
                    <Icon size={42} className={a.color} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{a.title}</h3>
                  <p className="mt-3 text-slate-300">{a.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative mx-6 h-[210px] overflow-hidden rounded-[1px] bg-slate-900 md:mx-0">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="absolute bottom-12 left-1/2 z-20 w-full -translate-x-1/2 px-6 md:px-0"
        >
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
            <div className="grid grid-cols-3 gap-6 text-center text-white">
              <div>
                <h3 className="text-3xl font-bold md:text-4xl">50K+</h3>
                <p className="mt-1 text-white/80">Happy Travelers</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold md:text-4xl">120+</h3>
                <p className="mt-1 text-white/80">Destinations</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold md:text-4xl">24/7</h3>
                <p className="mt-1 text-white/80">Support</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[45px] border border-slate-100 bg-white p-12 shadow-2xl md:p-16"
          >
            <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />
            <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="relative">
              <span className="rounded-full bg-blue-100 px-5 py-2 font-bold text-blue-600">
                About Us
              </span>
              <h2 className="mt-6 text-5xl font-black text-slate-900 md:text-6xl">
                About
                <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                  GoYatrik
                </span>
              </h2>
              <p className="mt-8 max-w-4xl text-lg leading-relaxed text-slate-600 md:text-xl">
                GoYatrik is a next-generation travel platform designed to
                simplify travel planning, bookings, and destination
                discovery. We combine technology, convenience, and premium
                travel experiences into one seamless platform.
              </p>
              <p className="mt-6 max-w-4xl text-lg leading-relaxed text-slate-600 md:text-xl">
                Whether you&apos;re booking flights, planning a family
                vacation, exploring international destinations, or searching
                for luxury stays, GoYatrik helps you discover, compare and
                book everything in one place.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="rounded-full bg-cyan-100 px-5 py-2 font-bold text-cyan-700">
              Our Purpose
            </span>
            <h2 className="mt-6 text-5xl font-black text-slate-900 md:text-6xl">
              Mission &amp;
              <span className="text-cyan-500"> Vision</span>
            </h2>
          </motion.div>

          <div className="grid gap-10 md:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[40px] bg-gradient-to-br from-blue-600 via-cyan-600 to-sky-500 p-10 text-white shadow-2xl transition-all duration-500"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
                  🚀
                </div>
                <h3 className="mt-8 text-4xl font-black">Mission</h3>
                <p className="mt-6 text-lg leading-relaxed text-white/90">
                  To make travel planning easy, affordable, secure, and
                  accessible through innovative technology and exceptional
                  customer experiences.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[40px] bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 p-10 text-white shadow-2xl transition-all duration-500"
            >
              <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
                  🌍
                </div>
                <h3 className="mt-8 text-4xl font-black">Vision</h3>
                <p className="mt-6 text-lg leading-relaxed text-white/90">
                  To become a globally trusted travel platform connecting
                  millions of travelers with unforgettable journeys, premium
                  experiences, and world-class services.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OFFICE HOURS */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-white p-10 shadow-2xl md:p-14"
          >
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />

            <div className="relative flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                <Clock size={40} />
              </div>
              <div>
                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Working Hours
                </p>
                <h2 className="text-4xl font-black text-slate-900 md:text-5xl">
                  Office Hours
                </h2>
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
                <h3 className="text-xl font-black text-slate-900">
                  Monday - Friday
                </h3>
                <p className="mt-3 text-slate-600">9:00 AM – 6:00 PM</p>
              </div>
              <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
                <h3 className="text-xl font-black text-slate-900">Saturday</h3>
                <p className="mt-3 text-slate-600">10:00 AM – 4:00 PM</p>
              </div>
              <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
                <h3 className="text-xl font-black text-slate-900">Sunday</h3>
                <p className="mt-3 text-slate-600">Emergency Support Only</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="rounded-full bg-blue-100 px-5 py-2 font-bold text-blue-600">
              FAQs
            </span>
            <h2 className="mt-6 text-5xl font-black text-slate-900 md:text-6xl">
              Frequently Asked
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </motion.div>

          <div className="mt-16 space-y-6">
            {[
              {
                q: "How can I book a flight?",
                a: "Visit our Flights page and search your preferred destination, compare fares and complete your booking in minutes.",
              },
              {
                q: "Is customer support available 24/7?",
                a: "Yes. Our dedicated travel experts are available 24/7 to assist with bookings, modifications and travel inquiries.",
              },
              {
                q: "Can I book international trips?",
                a: "Absolutely. GoYatrik offers both domestic and international travel packages, flights and hotel reservations.",
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.q}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-[30px] bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                <h3 className="text-2xl font-black text-slate-900">{faq.q}</h3>
                <p className="mt-4 leading-relaxed text-slate-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-slate-50 py-24 text-black">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="rounded-full bg-cyan-100 px-4 py-2 font-semibold text-cyan-600">
              Contact Us
            </span>
            <h2 className="mt-6 text-5xl font-black text-slate-900">
              Get In Touch
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Our travel experts are ready to help you plan your perfect
              trip.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="rounded-[30px] bg-white p-8 shadow-xl lg:col-span-2"
            >
              <h3 className="text-3xl font-black text-slate-900">
                Send A Message
              </h3>

              <form className="mt-8 space-y-5" onSubmit={handleContactSubmit}>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-cyan-400"
                />

                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-cyan-400"
                />

                <textarea
                  rows={5}
                  required
                  placeholder="Your Message"
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-cyan-400"
                />

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="flex items-center gap-2 rounded-2xl bg-green-600 px-8 py-4 font-bold text-white hover:bg-green-700"
                >
                  WhatsApp Us
                  <Send size={18} />
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5"
            >
              <a
                href="mailto:as4325210@gmail.com"
                className="block rounded-[25px] bg-white p-6 shadow-lg transition hover:-translate-y-1"
              >
                <Mail className="text-blue-600" />
                <h3 className="mt-4 text-xl font-bold">Email</h3>
                <p className="mt-2 text-slate-500">as4325210@gmail.com</p>
              </a>

              <a
                href="tel:+918535042494"
                className="block rounded-[25px] bg-white p-6 shadow-lg transition hover:-translate-y-1"
              >
                <Phone className="text-green-600" />
                <h3 className="mt-4 text-xl font-bold">Phone</h3>
                <p className="mt-2 text-slate-500">+91 85350 42494</p>
              </a>

              <div className="rounded-[25px] bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white">
                <Clock />
                <h3 className="mt-4 text-xl font-bold">24/7 Support</h3>
                <p className="mt-2 text-white/90">
                  Always available for travel assistance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[50px] bg-gradient-to-r from-blue-700 via-cyan-600 to-emerald-500 p-14 text-center text-white shadow-2xl md:p-20"
          >
            <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-white/10 blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/10 blur-[120px]" />

            <div className="relative">
              <span className="rounded-full bg-white/20 px-5 py-2 font-semibold backdrop-blur-md">
                ✈ GoYatrik Premium Travel
              </span>

              <h2 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
                Ready For Your
                <span className="block">Next Adventure?</span>
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-xl text-white/90">
                Discover breathtaking destinations, exclusive deals, luxury
                stays and unforgettable experiences with GoYatrik.
              </p>

              <div className="mt-12 flex flex-wrap justify-center gap-5">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={openChat}
                  className="group flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-slate-900 transition-all duration-300 hover:bg-cyan-400 hover:text-white"
                >
                  Plan My Trip
                  <ArrowRight
                    size={20}
                    className="transition group-hover:translate-x-1"
                  />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={scrollToTop}
                  className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-bold backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-slate-900"
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SCROLL TO TOP */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 left-6 z-[9998] rounded-full bg-slate-900 p-4 text-white shadow-xl transition hover:bg-cyan-500"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}