"use client";

import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem("events") || "[]");
    setEventList(events);
  }, []);

  const bookedEvents = JSON.parse(localStorage.getItem("bookedEvents")) || [];

  const handleBookEvent = (event) => {
    if (
      bookedEvents.find((e) => e.name === event.name && e.date === event.date)
    ) {
      toast.error("Event already booked!", { autoClose: 2000 });
      return;
    }

    const updateBookedEvents = [...bookedEvents, event];
    localStorage.setItem("bookedEvents", JSON.stringify(updateBookedEvents));
    toast.success("Event booked successfully!", { autoClose: 2000 });
  };

  return (
    <>
      <ToastContainer theme="colored" autoClose={2000} />

      <section className="px-6 max-w-6xl mx-auto py-10">
        <h1 className="font-bold text-4xl text-center mb-8 text-neutral-800 dark:text-neutral-100">
          Upcoming Events
        </h1>

        {eventList.length === 0 ? (
          <p className="text-neutral-600 dark:text-neutral-300 text-center text-lg">
            No events found. Check back later for exciting events!
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {eventList.map((event) => (
              <div
                key={event.id}
                className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-700 space-y-4 bg-white dark:bg-neutral-800 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
              >
                <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-100">
                  {event.name}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                  {event.date}
                </p>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                  {event.description}
                </p>

                <ul className="flex flex-wrap items-center justify-between gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                  <li>
                    <strong className="text-neutral-700 dark:text-neutral-200">Location:</strong>{" "}
                    {event.location}
                  </li>
                  <li>
                    <strong className="text-neutral-700 dark:text-neutral-200">Organizer:</strong>{" "}
                    {event.organizer}
                  </li>
                </ul>

                <button
                  onClick={() => handleBookEvent(event)}
                  className="w-full py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-sm text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  aria-label={`Book ${event.name}`}
                >
                  Book now
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}