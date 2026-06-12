import React, { useState } from "react";

import { Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const sendEmail = (e) => {
    e.preventDefault();

    const newErrors = {
      name: !name.trim(),
      email: !email.trim(),
      message: !message.trim(),
    };

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      console.log({
        name,
        email,
        message,
      });

      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section id="contact" className="px-6 mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-medium">
            Contact Me
          </h1>

          <p className="mt-3 text-gray-500 text-lg">
            Got a project waiting to be realized? Let&apos;s collaborate and
            build something.
          </p>
        </div>

        <Box
          component="form"
          onSubmit={sendEmail}
          className="
            rounded-3xl
            border
            border-gray-200
            bg-white
            p-8
            shadow-sm
          "
        >
          <div className="grid gap-6 md:grid-cols-2">
            <TextField
              fullWidth
              label="Your Name"
              placeholder="What's your name?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={errors.name}
              helperText={errors.name ? "Please enter your name" : ""}
            />

            <TextField
              fullWidth
              label="Email / Phone"
              placeholder="How can I reach you?"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
              helperText={errors.email ? "Please enter contact details" : ""}
            />
          </div>

          <div className="mt-6">
            <TextField
              fullWidth
              multiline
              rows={8}
              label="Message"
              placeholder="Tell me about your idea..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={errors.message}
              helperText={errors.message ? "Please enter a message" : ""}
            />
          </div>

          <div className="mt-8">
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              sx={{
                borderRadius: "999px",
                px: 4,
                py: 1.4,
                textTransform: "none",
                fontSize: "16px",
              }}
            >
              Send Message
            </Button>
          </div>
        </Box>
      </div>
    </section>
  );
}

export default Contact;
