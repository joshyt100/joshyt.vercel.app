import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Sending email...");
    //console.log("SERVICE_ID:", import.meta.env.VITE_SERVICE_ID);
    //console.log("TEMPLATE_ID:", import.meta.env.VITE_TEMPLATE_ID);
    //console.log("PUBLIC_KEY:", process.env.REACT_APP_PUBLIC_KEY);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('Email successfully sent:', result.text);
          setIsSubmitted(true); // Show success message
          formRef.current.reset(); // Reset form after submission
        },
        (error) => {
          console.error('Error sending email:', error.text);
          alert("Failed to send the email. Please try again.");
        }
      );
  };



  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8"
    >
      <h2 className="text-4xl font-bold mb-6 text-center">Get in Touch</h2>
      <p className="text-lg text-gray-300 text-center mb-8">
        Feel free to reach out for collaborations or just a friendly chat!
      </p>
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg space-y-4"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="from_name"
            className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-gray-300 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="from_email"
            className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-gray-300 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Your Email"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-gray-300 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            Send Message
          </button>
        </div>
      </form>
      {isSubmitted && (
        <p className="text-green-500 mt-4 text-center">Message sent successfully!</p>
      )}
    </section>
  );
};

export default Contact;

