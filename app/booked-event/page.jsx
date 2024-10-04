"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function BookedEvents() {
  const [bookedEvents, setBookedEvents] = useState([]);

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem("bookedEvents") || "[]");
    setBookedEvents(events);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900">
      <section className="max-w-6xl mx-auto py-16 px-6">
        <motion.h1 
          className="font-bold text-4xl mb-8 text-center text-indigo-800 dark:text-indigo-200"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Booked Events
        </motion.h1>

        {bookedEvents.length === 0 ? (
          <motion.p 
            className="text-neutral-600 dark:text-neutral-300 text-center text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            No booked events available
          </motion.p>
        ) : (
          <motion.div 
            className="overflow-x-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <table className="w-full bg-white dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden transform perspective-1000">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="font-bold text-lg py-4 px-6 text-left">Event Name</th>
                  <th className="font-bold text-lg py-4 px-6 text-left">Event Date</th>
                  <th className="font-bold text-lg py-4 px-6 text-left">Event Location</th>
                  <th className="font-bold text-lg py-4 px-6 text-left">Event Organizer</th>
                </tr>
              </thead>

              <tbody>
                {bookedEvents.map((event, index) => (
                  <motion.tr 
                    key={event.id} 
                    className={`${index % 2 === 0 ? 'bg-indigo-50 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'} hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors duration-200`}
                    variants={itemVariants}
                  >
                    <td className="py-4 px-6 border-b border-indigo-200 dark:border-gray-600">{event.name}</td>
                    <td className="py-4 px-6 border-b border-indigo-200 dark:border-gray-600">{event.date}</td>
                    <td className="py-4 px-6 border-b border-indigo-200 dark:border-gray-600">{event.location}</td>
                    <td className="py-4 px-6 border-b border-indigo-200 dark:border-gray-600">{event.organizer}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}
      </section>
    </div>
  );
}