"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

import {
  Users,
  Plane,
  Ticket,
  Wallet,
  TrendingUp,
  MapPin,
  Calendar,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";


export default function AdminPage() {


  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState<any>(null);



  useEffect(() => {


    const checkAdmin = async () => {


      const {
        data: {
          user
        }
      } = await supabase.auth.getUser();



      if (!user) {

        router.replace("/login");
        return;

      }





      const {
        data: profile
      } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();





      if (profile?.role !== "admin") {

        router.replace("/");
        return;

      }



      setAdmin(profile);
      setLoading(false);


    };



    checkAdmin();



  }, [router]);






  if (loading) {

    return (

      <div className="min-h-screen flex items-center justify-center bg-slate-50">

        <h1 className="text-2xl font-bold text-slate-900">
          Checking Admin Access...
        </h1>

      </div>

    )

  }





  const stats = [


    {
      title: "Total Users",
      value: "25,430",
      icon: Users,
      color: "bg-blue-100 text-blue-600"
    },


    {
      title: "Total Bookings",
      value: "8,420",
      icon: Ticket,
      color: "bg-green-100 text-green-600"
    },


    {
      title: "Revenue",
      value: "₹45.8L",
      icon: Wallet,
      color: "bg-orange-100 text-orange-600"
    },


    {
      title: "Active Trips",
      value: "340",
      icon: Plane,
      color: "bg-purple-100 text-purple-600"
    }


  ];





  const bookings = [

    {
      user: "Rahul Sharma",
      route: "Delhi → Dubai",
      date: "25 Aug 2026",
      amount: "₹25,999"
    },


    {
      user: "Aman Singh",
      route: "Mumbai → Singapore",
      date: "12 Sep 2026",
      amount: "₹18,999"
    },


    {
      user: "Faizan Khan",
      route: "Delhi → London",
      date: "05 Oct 2026",
      amount: "₹1,34,997"
    }


  ];







  return (

    <div className="min-h-screen bg-slate-50">


      <div className="max-w-7xl mx-auto px-6 py-16">



        {/* HEADER */}


        <div className="rounded-[40px] bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-600 p-10 text-white shadow-2xl">


          <div className="flex flex-col md:flex-row justify-between gap-8">


            <div>


              <div className="flex items-center gap-4">


                <div className="p-5 bg-white/20 rounded-full backdrop-blur">

                  <ShieldCheck size={40} />

                </div>


                <div>

                  <h1 className="text-5xl font-black">

                    Admin Dashboard

                  </h1>


                  <p className="mt-3 text-white/80 text-lg">

                    Manage GoYatrik travel platform

                  </p>


                </div>


              </div>


            </div>





            <div className="bg-white/20 rounded-3xl px-8 py-6">


              <p className="text-white/70">

                Administrator

              </p>


              <h2 className="text-2xl font-black">

                {admin?.full_name || "Admin"}

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
                  className="bg-white rounded-[35px] p-8 shadow-lg hover:-translate-y-2 transition"
                >


                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${item.color}`}>

                    <Icon size={32} />

                  </div>


                  <p className="mt-6 text-slate-500 font-semibold">

                    {item.title}

                  </p>


                  <h2 className="text-5xl font-black text-slate-900 mt-2">

                    {item.value}

                  </h2>



                </div>

              )

            })


          }


        </div>









        {/* ANALYTICS */}



        <div className="grid lg:grid-cols-3 gap-8 mt-12">





          <div className="lg:col-span-2 bg-white rounded-[35px] p-8 shadow-xl">


            <div className="flex justify-between">


              <h2 className="text-3xl font-black text-slate-900">

                Recent Bookings

              </h2>


              <button className="text-blue-600 font-bold flex gap-2 items-center">

                View All

                <ArrowRight size={18} />

              </button>


            </div>





            <div className="mt-8 space-y-5">


              {

                bookings.map((item, index) => (


                  <div
                    key={index}
                    className="border rounded-3xl p-6 flex justify-between"
                  >


                    <div>


                      <h3 className="text-xl font-bold text-slate-900">

                        {item.user}

                      </h3>


                      <p className="text-black/50 mt-2">

                        {item.route}

                      </p>



                      <div className="flex gap-2 items-center mt-3 text-black/50">

                        <Calendar size={18} />

                        {item.date}

                      </div>


                    </div>





                    <div className="text-right">


                      <h3 className="text-black text-2xl font-black">

                        {item.amount}

                      </h3>


                      <span className="text-green-600 font-bold">

                        Confirmed

                      </span>


                    </div>



                  </div>


                ))


              }


            </div>


          </div>









          {/* SIDE */}



          <div className="space-y-8">



            <div className="bg-white rounded-[35px] p-8 shadow-xl">


              <h2 className="text-black text-3xl font-black">

                Quick Manage

              </h2>



              <div className="mt-6 space-y-4">



                <button className="w-full bg-blue-600 text-white p-5 rounded-2xl flex justify-between font-bold">

                  Manage Users

                  <Users />

                </button>




                <button className="w-full bg-slate-900 text-white p-5 rounded-2xl flex justify-between font-bold">

                  Manage Flights

                  <Plane />

                </button>



                <button className="w-full bg-green-600 text-white p-5 rounded-2xl flex justify-between font-bold">

                  Revenue Reports

                  <TrendingUp />

                </button>



              </div>


            </div>







            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-[35px] p-8 text-white">


              <MapPin size={35} />


              <h2 className="text-3xl font-black mt-5">

                Global Reach

              </h2>


              <p className="mt-3 text-white/80">

                Users travelling worldwide

              </p>


              <h3 className="text-5xl font-black mt-6">

                120+

              </h3>


              <p>

                Countries

              </p>


            </div>





          </div>





        </div>





      </div>

    </div>


  )

}