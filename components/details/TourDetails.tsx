import { bookingsData } from "@/data/bookings";
import { notFound } from "next/navigation";

export default function TourDetails({
  id,
}: {
  id: string;
}) {
  const tour = bookingsData.find(
    (item) => item.id === id
  );

  if (!tour) return notFound();

  return (
    <div className="max-w-7xl mx-auto py-10">

      <img
        src={tour.image}
        alt={tour.title}
        className="w-full h-[500px] object-cover rounded-3xl"
      />

      <h1 className="text-5xl font-bold mt-8">
        {tour.title}
      </h1>

      <p>{tour.location}</p>

      <h2 className="text-3xl font-bold mt-4">
        {tour.price}
      </h2>

      <p className="mt-4">
        {tour.description}
      </p>

    </div>
  );
}