import React, { useState } from "react";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";

export default function Contacting({ open, setOpen }) {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      await axios.post("https://formspree.io/f/xqajvnll", inputs);

      setStatus({ submitting: false, submitted: true, error: null });
      setInputs({ name: "", email: "", message: "" });

      // optional auto-close after success
      setTimeout(() => setOpen(false), 1500);
    } catch (err) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Something went wrong. Try again.",
      });
    }
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="bg-[#0d0d0d] border border-white/10 p-6 rounded-2xl w-[90%] max-w-md shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Contact Me
              </h2>

              {/* FORM */}
              <div className="flex flex-col space-y-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  value={inputs.name}
                  onChange={handleChange}
                  className="px-4 py-2 rounded-lg bg-black/30 border border-white/10 text-white outline-none"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={inputs.email}
                  onChange={handleChange}
                  className="px-4 py-2 rounded-lg bg-black/30 border border-white/10 text-white outline-none"
                />

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  value={inputs.message}
                  onChange={handleChange}
                  className="px-4 py-2 rounded-lg bg-black/30 border border-white/10 text-white outline-none"
                />

                <button
                  onClick={handleSubmit}
                  disabled={status.submitting}
                  className="
                    bg-gradient-to-r from-purple-500 to-blue-500
                    text-white py-2 rounded-lg shadow-lg
                    hover:scale-[1.03] transition-all duration-300
                  "
                >
                  {status.submitting
                    ? "Sending..."
                    : status.submitted
                    ? "Sent ✔"
                    : "Send Message"}
                </button>

                {status.error && (
                  <p className="text-red-400 text-sm">{status.error}</p>
                )}
                {status.submitted && (
                  <p className="text-green-400 text-sm">
                    Message sent successfully!
                  </p>
                )}
              </div>

              {/* CLOSE */}
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 bg-black text-white rounded-md border border-white/10"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
