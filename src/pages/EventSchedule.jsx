import React, { useState, useEffect } from "react";

const EventSchedule = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Cricket Finals",
      time: "2024-11-27T10:00:00",
      location: "Sports Ground",
      type: "Sports",
      description: "The final match of the cricket tournament.",
      status: "Upcoming",
    },
    {
      id: 2,
      name: "Dance Competition",
      time: "2024-11-27T12:30:00",
      location: "Auditorium",
      type: "Cultural",
      description: "Showcasing the best dance talent.",
      status: "Upcoming",
    },
    {
      id: 3,
      name: "Tech Talk: AI in 2024",
      time: "2024-11-27T14:00:00",
      location: "Conference Hall",
      type: "Technical",
      description: "A talk by industry experts on AI advancements.",
      status: "Upcoming",
    },
  ]);

  const [filter, setFilter] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    // Update the status of events based on the current time
    const updateEventStatus = () => {
      const now = new Date().getTime();
      setEvents((prevEvents) =>
        prevEvents.map((event) => {
          const eventTime = new Date(event.time).getTime();
          return {
            ...event,
            status:
              eventTime > now ? "Upcoming" : eventTime + 7200000 > now ? "Ongoing" : "Completed",
          };
        })
      );
    };

    const interval = setInterval(updateEventStatus, 1000);
    updateEventStatus();
    return () => clearInterval(interval);
  }, []);

  const filteredEvents = filter === "All" ? events : events.filter((event) => event.type === filter);

  const handleAddToCalendar = (event) => {
    const calendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.name
    )}&dates=${new Date(event.time).toISOString().replace(/-|:|\.\d+/g, "")}/${
      new Date(new Date(event.time).getTime() + 7200000).toISOString().replace(/-|:|\.\d+/g, "")
    }&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(
      event.location
    )}`;
    window.open(calendarLink, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-10">
      <h1 className="text-5xl font-bold mb-8">Event Schedule</h1>

      {/* Filter Section */}
      <div className="mb-6 flex gap-4">
        {["All", "Sports", "Cultural", "Technical"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-lg ${
              filter === category ? "bg-white text-black" : "bg-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Event Cards */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <h2 className="text-xl font-semibold">{event.name}</h2>
            <p className="text-sm text-gray-600">{new Date(event.time).toLocaleString()}</p>
            <p className="mt-2">{event.location}</p>
            <p className={`mt-2 font-semibold ${event.status === "Ongoing" ? "text-green-500" : ""}`}>
              {event.status}
            </p>
            <button
              onClick={() => setSelectedEvent(event)}
              className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg"
            >
              View Details
            </button>
            <button
              onClick={() => handleAddToCalendar(event)}
              className="mt-2 bg-indigo-600 text-white py-2 px-4 rounded-lg"
            >
              Add to Calendar
            </button>
          </div>
        ))}
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white text-black p-8 rounded-lg max-w-md">
            <h2 className="text-2xl font-bold">{selectedEvent.name}</h2>
            <p className="text-gray-600">{new Date(selectedEvent.time).toLocaleString()}</p>
            <p className="mt-2">{selectedEvent.location}</p>
            <p className="mt-2">{selectedEvent.description}</p>
            <button
              onClick={() => setSelectedEvent(null)}
              className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventSchedule;
