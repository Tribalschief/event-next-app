"use client";

import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from 'uuid';
import { motion } from "framer-motion";
import { Calendar, MapPin, User, FileText, Plus } from "lucide-react";

export default function NewEvent() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventOrganizer, setEventOrganizer] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      if (!eventName) {
        toast.error("Event name is required");
      } else if (!eventDate) {
        toast.error("Event date is required");
      } else if (!eventDescription) {
        toast.error("Event description is required");
      } else if (!eventLocation) {
        toast.error("Event location is required");
      } else if (!eventOrganizer) {
        toast.error("Event organizer is required");
      } else {
        const newEvent = {
          id: uuidv4(),
          name: eventName,
          date: eventDate,
          description: eventDescription,
          location: eventLocation,
          organizer: eventOrganizer,
        };

        const events = JSON.parse(localStorage.getItem("events") || "[]");
        events.push(newEvent);
        localStorage.setItem("events", JSON.stringify(events));

        setEventName("");
        setEventDate("");
        setEventDescription("");
        setEventLocation("");
        setEventOrganizer("");

        toast.success("New event added!");
      }
    } catch (error) {
      toast.error("An error occurred while adding the event");
    }
  }

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <ToastContainer theme="colored" autoClose={2000} />

      <section className="flex items-center justify-center py-10 px-6 lg:py-20 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 min-h-screen">
        <motion.div 
          className="w-full max-w-2xl bg-white dark:bg-gray-700 shadow-2xl rounded-lg p-8 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
          initial="hidden"
          animate="visible"
          variants={formVariants}
        >
          <motion.h1 variants={itemVariants} className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Create New Event
          </motion.h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div variants={itemVariants}>
                <label htmlFor="event-name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Event Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="event-name"
                    id="event-name"
                    required
                    placeholder="What is the name of the event?"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400"
                  />
                  <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="event-date" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Event Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="event-date"
                    id="event-date"
                    required
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400"
                  />
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <label htmlFor="event-description" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Event Description
              </label>
              <textarea
                name="event-description"
                id="event-description"
                rows={6}
                required
                placeholder="Give a short description about the event"
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400"
              ></textarea>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              <motion.div variants={itemVariants}>
                <label htmlFor="event-location" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Event Location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="event-location"
                    id="event-location"
                    required
                    placeholder="What is the location of the event?"
                    value={eventLocation}
                    onChange={(e) => setEventLocation(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400"
                  />
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="event-organizer" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Event Organizer
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="event-organizer"
                    id="event-organizer"
                    required
                    placeholder="Who is the primary organizer of the event?"
                    value={eventOrganizer}
                    onChange={(e) => setEventOrganizer(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400"
                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </motion.div>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="mr-2" size={20} />
              Create new event
            </motion.button>
          </form>
        </motion.div>
      </section>
    </>
  );
}