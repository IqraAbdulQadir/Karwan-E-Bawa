"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  // States for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [destination, setDestination] = useState("");
  const [people, setPeople] = useState("");
  const [hotel, setHotel] = useState("");
  const [message, setMessage] = useState("");

  // States for form feedback
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // Formspree Submit Handler
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    const formData = {
      firstName,
      lastName,
      phone,
      email,
      destination,
      people,
      hotel,
      message,
    };

    try {
      const response = await fetch("https://formspree.io/f/xpwvllen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setLoading(false);

        // Reset form fields
        setFirstName("");
        setLastName("");
        setPhone("");
        setEmail("");
        setDestination("");
        setPeople("");
        setHotel("");
        setMessage("");
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-black text-white py-20 px-4">
      {/* FORM WRAPPER */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-white/5 border border-yellow-500/40 rounded-2xl md:rounded-3xl p-8 md:p-10 shadow-xl shadow-yellow-500/10"
      >
        {/* ---------- TOP TITLE ---------- */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-yellow-500"
          >
            Send Us Your Query
          </motion.h2>

          {/* animated underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="h-[3px] bg-yellow-500 mx-auto mt-2 rounded-full"
          ></motion.div>
        </div>

        {/* ---------- SUCCESS MESSAGE ---------- */}
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-xl bg-green-500/20 border border-green-500 text-green-400 text-center"
          >
            ✓ Your message has been sent successfully!
          </motion.div>
        )}

        {/* ---------- ERROR MESSAGE ---------- */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-xl bg-red-500/20 border border-red-500 text-red-400 text-center"
          >
            ⚠ Something went wrong. Please try again.
          </motion.div>
        )}

        {/* ---------- FORM ---------- */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="First Name"
              value={firstName}
              onChange={setFirstName}
              required={true}
            />
            <InputField
              label="Last Name"
              value={lastName}
              onChange={setLastName}
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Phone Number"
              value={phone}
              onChange={setPhone}
              required={true}
            />
            <InputField
              label="Email"
              value={email}
              onChange={setEmail}
              required={true}
            />
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Destination"
              value={destination}
              onChange={setDestination}
            />
            <InputField
              label="Number of People"
              value={people}
              onChange={setPeople}
            />
          </div>

          {/* Hotel Dropdown */}
          <div>
            <label
              htmlFor="hotel-preference"
              className="block text-sm mb-1 text-white/80"
            >
              Hotel Preference
            </label>

            <select
              id="hotel-preference"
              className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-2 text-white focus:border-yellow-500 outline-none transition"
              value={hotel}
              onChange={(e) => setHotel(e.target.value)}
            >
              <option value="" className="text-black">
                Select Star Rating
              </option>
              <option className="text-black" value="3">
                3 Star
              </option>
              <option className="text-black" value="4">
                4 Star
              </option>
              <option className="text-black" value="5">
                5 Star
              </option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-1 text-white/80">
              Message *
            </label>
            <textarea
              id="message"
              placeholder="Write your message here..."
              className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 h-32 text-white focus:border-yellow-500 outline-none transition"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-xl shadow-lg shadow-yellow-500/20 hover:bg-yellow-400 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

/* -------------------- INPUT FIELD COMPONENT -------------------- */

function InputField({
  label,
  value,
  onChange,
  required,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
  required?: boolean;
}) {
  const id = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div>
      <label htmlFor={id} className="block text-sm mb-1 text-white/80">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-2 text-white focus:border-yellow-500 outline-none transition"
        required={required}
      />
    </div>
  );
}
