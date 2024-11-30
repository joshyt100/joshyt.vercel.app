import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('sending email...');

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('email successfully sent:', result.text);
          setIsSubmitted(true); // show success message
          formRef.current.reset(); // reset form after submission
        },
        (error) => {
          console.error('error sending email:', error.text);
          alert('failed to send the email. please try again.');
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8"
    >
      {/* Back Arrow */}
      <div className="absolute top-20 left-10">
        <button
          onClick={() => navigate('/')}
          className="text-white text-4xl font-bold hover:text-gray-400"
        >
          ←
        </button>
      </div>

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
            placeholder="Your name"
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
            placeholder="Your email"
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
            placeholder="Your message"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-sky-700 hover:bg-sky-800 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            Send Message
          </button>
        </div>
      </form>
      {isSubmitted && (
        <p className="text-blue-500 mt-4 text-center">Message sent successfully!</p>
      )}
    </section>
  );
};

export default Contact;

