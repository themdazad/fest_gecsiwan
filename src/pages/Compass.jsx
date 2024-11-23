import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import EventSchedule from "./EventSchedule";
import LiveUpdatesCard from "./LiveUpdatesCard";



const Compass = () => {
  const [timeLeft, setTimeLeft] = useState("");
  const [pollResult, setPollResult] = useState({
    Cricket: 35,
    Football: 45,
    Dance: 20,
  });

  useEffect(() => {
    const countdownDate = new Date("2024-11-27T10:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance <= 0) {
        setTimeLeft("00:00:00:00");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timer);
  }, []);

  const handleVote = (event) => {
    setPollResult((prev) => ({
      ...prev,
      [event]: prev[event] + 1,
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="min-h-screen flex flex-col items-center text-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-10 space-y-10"
    >
        <br />
      <h1 className="text-5xl font-bold mb-4">Compass</h1>
      <p className="text-lg max-w-4xl mx-auto">
        Navigate through all events, polls, and schedules with ease. Stay updated and engaged!
      </p>

      {/* Countdown Timer */}
      <div className="bg-black p-8 rounded-lg shadow-2xl transform transition-all hover:scale-105">
        <h2 className="text-3xl font-semibold mb-4">Event Countdown</h2>
        <p className="text-2xl font-mono">{timeLeft}</p>
      </div>

      {/* Feature Cards */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full mt-10">
        <Link
          to="/event-schedule"
          className="bg-white text-black p-8 rounded-lg shadow-lg hover:scale-105 transition-all"
        >
          <span className="text-5xl">📅</span>
          <h3 className="mt-2 text-2xl">Event Schedule</h3>
          <a
            href="/KRIDITUM.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 underline mt-2 block"
          >
            View or Download Schedule
          </a>
        </Link>
        <Link
          to="/gallery"
          className="bg-white text-black p-8 rounded-lg shadow-lg hover:scale-105 transition-all"
        >
          <span className="text-5xl">🌟</span>
          <h3 className="mt-2 text-2xl">Highlights</h3>
        </Link>
        <Link
          to="/about"
          className="bg-white text-black p-8 rounded-lg shadow-lg hover:scale-105 transition-all"
        >
          <span className="text-5xl">ℹ️</span>
          <h3 className="mt-2 text-2xl">About Us</h3>
        </Link>
        <Link
          to="/liveupdates-card"
          className="bg-white text-black p-8 rounded-lg shadow-lg hover:scale-105 transition-all"
        >
          <span className="text-5xl">📣</span>
          <h3 className="mt-2 text-2xl">Live Updates</h3>
        </Link>
      </div>

      {/* Poll Section */}
      <div className="bg-black p-8 rounded-lg shadow-lg transform transition-all hover:scale-105">
        <h2 className="text-3xl font-semibold mb-4">Vote for Your Favorite Event</h2>
        <div className="grid gap-4 grid-cols-3">
          {Object.keys(pollResult).map((event) => (
            <button
              key={event}
              onClick={() => handleVote(event)}
              className="bg-purple-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-purple-800"
            >
              {event} ({pollResult[event]} votes)
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Compass;
