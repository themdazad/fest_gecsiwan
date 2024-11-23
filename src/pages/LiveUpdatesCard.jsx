import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const EngineeringHubPage = () => {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [luckyMessage, setLuckyMessage] = useState("");
  const [rating, setRating] = useState(null);

  const jokes = [
    "Why don't engineers trust atoms? Because they make up everything!",
    "Why did the computer go to the doctor? It had a virus!",
    "What’s a software engineer’s favorite hangout? The ‘Java’ café!",
    "If you think math is hard, try programming!",
    "Why did the developer go broke? Because he used up all his cache!",
  ];

  const fallbackUpdates = [
    { id: 1, message: "Engineering students are busy exploring!" },
    { id: 2, message: "The robotics workshop is happening now!" },
    { id: 3, message: "Project Expo on AI & ML today!" },
    { id: 4, message: "Don't miss the coding competition at 4 PM." },
    { id: 5, message: "Join the engineering talk on Sustainable Tech." },
  ];

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const response = await axios.get("");
        const fetchedUpdates = response.data.map((item, index) => ({
          id: index + 1,
          message: item.title,
        }));
        setUpdates(fetchedUpdates);
      } catch (error) {
        console.error("Error fetching updates. Falling back to defaults.", error);
        setUpdates(fallbackUpdates);
      } finally {
        setLoading(false);
      }
    };

    fetchUpdates();
    const interval = setInterval(fetchUpdates, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setLuckyMessage(`Hello ${name}! ${jokes[randomIndex]}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-blue-900 to-purple-700 text-white min-h-screen"
    >
        <br /><br />
      {/* Header Section */}
      <header className="text-center py-10 bg-indigo-600 shadow-md">
        <h1 className="text-5xl font-extrabold mb-4">Engineering Hub</h1>
        <p className="text-xl italic">Explore | Innovate | Connect</p>
      </header>

      {/* User Input Section */}
      <section className="py-10 text-center">
        <h2 className="text-3xl font-bold mb-6">What's Your Name?</h2>
        <form onSubmit={handleNameSubmit} className="mb-6">
          <input
            type="text"
            placeholder="Enter your name"
            className="px-4 py-2 rounded-md text-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            type="submit"
            className="ml-4 px-6 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-white"
          >
            Submit
          </button>
        </form>

        {luckyMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-6 text-xl italic"
          >
            {luckyMessage}
          </motion.div>
        )}
      </section>

      {/* Live Updates Section */}
      <section className="py-10">
        <h2 className="text-4xl font-bold text-center mb-6">Live Updates</h2>
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="text-center">Loading updates...</div>
          ) : (
            updates.map((update) => (
              <motion.div
                key={update.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white text-black p-6 rounded-md shadow-md mb-4"
              >
                <h3 className="text-lg font-semibold">Update {update.id}</h3>
                <p>{update.message}</p>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* Engineering Jokes Section */}
      <section className="py-10 bg-indigo-800">
        <h2 className="text-4xl font-bold text-center mb-6">Engineering Talk's</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {jokes.map((joke, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white text-black p-6 rounded-md shadow-md"
            >
              <p>{joke}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-10 text-center">
        <h2 className="text-4xl font-bold mb-6">Rate Our Website</h2>
        <form action="https://forms.gle/oVjut9v1A4VrMRa16" method="POST" target="_blank">
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            placeholder="Rate (1 to 5)"
            className="px-4 py-2 rounded-md text-black"
            required
          />
          <button
            type="submit"
            className="ml-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white"
          >
            Submit Rating
          </button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="bg-black py-10 text-center">
        <p>© 2024 Engineering Hub. All Rights Reserved.</p>
      </footer>
    </motion.div>
  );
};

export default EngineeringHubPage;
