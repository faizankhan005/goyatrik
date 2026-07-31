"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

import {
  Plane,
  MapPin,
  Calendar,
  Wallet,
  Heart,
  Ticket,
  ArrowRight,
  User,
} from "lucide-react";


export default function DashboardPage() {

  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const getUser = async () => {

      const {
        data: {
          user
        }
      } = await supabase.auth.getUser();


      if (!user) {

        router.replace("/login");
        return;

      }

      setUser(user);
      setLoading(false);

    };


    getUser();

  }, [router]);



  if (loading) {

    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">

        <h1 className="text-2xl font-bold text-slate-900">
          Loading Dashboard...
        </h1>

      </div>
    )

  }



  const stats = [

    {
      title: "Total Trips",
      value: "12",
      icon: Plane
    },

    {
      title: "Upcoming Trips",
      value: "3",
      icon: Calendar
    },

    {
      title: "Completed",
      value: "9",
      icon: Ticket
    },

    {
      title: "Total Spent",
      value: "₹2.4L",
      icon: Wallet
    }

  ];



  const bookings = [

    {
      place: "Dubai",
      date: "25 August 2026",
      price: "₹25,998",
      status: "Confirmed"
    },

    {
      place: "Singapore",
      date: "12 September 2026",
      price: "₹18,999",
      status: "Upcoming"
    },

    {
      place: "London",
      date: "05 October 2026",
      price: "₹1,34,997",
      status: "Completed"
    }

  ];



  return (

    <div className="min-h-screen bg-slate-50">

      <div className="max-w-7xl mx-auto px-6 py-16">


        {/* HEADER */}

        <div className="rounded-[35px] bg-gradient-to-r from-blue-600 to-cyan-500 p-10 text-white shadow-xl">


          <div className="flex flex-col md:flex-row justify-between items-center gap-8">


            <div className="flex items-center gap-5">


              <div className="p-5 rounded-full bg-white/20">

                <User size={35} />

              </div>


              <div>

                <h1 className="text-4xl md:text-5xl font-black">

                  Hello,{" "}
                  {user?.user_metadata?.full_name ||
                    user?.email?.split("@")[0] ||
                    "Traveler"}

                </h1>


                <p className="mt-3 text-white/90 text-lg">

                  Welcome back to GoYatrik Dashboard

                </p>


              </div>


            </div>



            <div className="bg-white/20 rounded-3xl px-8 py-6">

              <p className="text-white/80">

                Traveler Level

              </p>

              <h2 className="text-3xl font-black">

                Explorer ⭐

              </h2>

            </div>


          </div>


        </div>





        {/* STATS */}


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">


          {
            stats.map((item, index) => {

              const Icon = item.icon;


              return (

                <div
                  key={index}
                  className="bg-white rounded-[30px] p-8 shadow-lg"
                >


                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">

                    <Icon size={30} />

                  </div>



                  <h3 className="mt-6 text-slate-600 font-semibold">

                    {item.title}

                  </h3>



                  <h2 className="text-5xl font-black text-slate-900 mt-3">

                    {item.value}

                  </h2>



                </div>

              )

            })

          }


        </div>






        {/* MAIN */}


        <div className="grid lg:grid-cols-3 gap-8 mt-12">



          {/* BOOKINGS */}


          <div className="lg:col-span-2 bg-white rounded-[35px] p-8 shadow-xl">


            <div className="flex justify-between items-center">


              <h2 className="text-3xl font-black text-slate-900">

                Recent Bookings

              </h2>


              <button
                onClick={() => router.push("/bookings")}
                className="flex gap-2 items-center text-blue-600 font-bold"
              >

                View All

                <ArrowRight size={18} />

              </button>


            </div>



            <div className="mt-8 space-y-5">


              {
                bookings.map((item, index) => (


                  <div
                    key={index}
                    className="border border-slate-200 rounded-3xl p-6 flex justify-between hover:bg-slate-50"
                  >


                    <div>

                      <h3 className="text-2xl font-bold text-slate-900">

                        {item.place}

                      </h3>


                      <div className="flex gap-2 items-center mt-3 text-slate-500">

                        <Calendar size={18} />

                        {item.date}

                      </div>


                    </div>



                    <div className="text-right">


                      <h3 className="text-2xl font-black text-slate-900">

                        {item.price}

                      </h3>


                      <p className="text-green-600 font-bold mt-2">

                        {item.status}

                      </p>


                    </div>



                  </div>


                ))

              }


            </div>


          </div>







          {/* ACTIONS */}


          <div className="space-y-8">


            <div className="bg-white rounded-[35px] p-8 shadow-xl">


              <h2 className="text-3xl font-black text-slate-900">

                Quick Actions

              </h2>



              <div className="mt-6 space-y-4">


                <button
                  onClick={() => router.push("/flights")}
                  className="w-full bg-blue-600 text-white p-5 rounded-2xl flex justify-between font-bold"
                >

                  Book Flight

                  <Plane />

                </button>



                <button
                  onClick={() => router.push("/bookings")}
                  className="w-full bg-slate-900 text-white p-5 rounded-2xl flex justify-between font-bold"
                >

                  My Tickets

                  <Ticket />

                </button>



                <button
                  className="w-full bg-pink-100 text-pink-600 p-5 rounded-2xl flex justify-between font-bold"
                >

                  Saved Places

                  <Heart />

                </button>



              </div>


            </div>





            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-[35px] p-8 text-white">


              <MapPin size={35} />


              <h2 className="text-3xl font-black mt-5">

                Dream Destination

              </h2>


              <p className="mt-3 text-white/70">

                Your saved travel destinations

              </p>


              <h3 className="text-5xl font-black text-cyan-400 mt-6">

                8

              </h3>


            </div>


          </div>



        </div>



      </div>

    </div>

  )

}