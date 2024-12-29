import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  //console.log("env-service-id", import.meta.env.VITE_SERVICE_ID);
  //console.log("env-template-id", import.meta.env.VITE_TEMPLATE_ID);
  //console.log("env-public-key", import.meta.env.VITE_PUBLIC_KEY);

  const sendEmail = (e) => {
    e.preventDefault();

    // Get the form elements
    const firstName = formRef.current.first_name.value;
    const lastName = formRef.current.last_name.value;

    // Create a combined name for the EmailJS template
    const fullFormData = {
      from_name: `${firstName} ${lastName}`,
      from_email: formRef.current.from_email.value,
      message: formRef.current.message.value
    };

    console.log('sending email...');
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        fullFormData,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log('email successfully sent:', result.text);
          setIsSubmitted(true);
          formRef.current.reset();
        },
        (error) => {
          console.error('error sending email:', error.text);
          alert('Failed to send the email. Please try again.');
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-zinc-100 dark:bg-gradient-to-tr from-zinc-900 to-black text-white flex flex-col items-center justify-center p-8"

    >

      <h2 className="text-4xl font-bold mb-6 mt-12 text-center text-black dark:text-white">Get in Touch</h2>
      <p className="text-lg text-black dark:text-white mb-8">
        Feel free to reach out for work opportunites, collaborations, or just a friendly chat!
      </p>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="w-full max-w-2xl bg-white dark:bg-zinc-900  z-20 p-6 rounded-lg shadow-2xl space-y-4 border border-zinc-100 dark:border-black"
      >
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="first_name" className="block text-sm font-medium text-black dark:text-white">
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              className="mt-1 block w-full bg-zinc-100 text-black dark:bg-black opacity-100 rounded-sm dark:text-white border border-zinc-200 dark:border-none focus:border-blue-500 focus:ring-blue-500"
              placeholder="First name"
              required
            />
          </div>
          <div>
            <label htmlFor="last_name" className="block text-sm font-medium text-black dark:text-white">
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              className="mt-1 block w-full text-black bg-zinc-100 dark:bg-black opacity-100 rounded-sm dark:text-white border border-zinc-200 dark:border-none focus:border-blue-500 focus:ring-blue-500"
              placeholder="Last name"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-black dark:text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="from_email"
            className="mt-1 block w-full rounded-sm bg-zinc-100  dark:bg-black dark:text-gray-300 opacity-100 text-black border border-zinc-200 dark:border-none focus:border-blue-500 focus:ring-blue-500"
            placeholder="Your email"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-black dark:text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 block w-full rounded-sm bg-zinc-100 dark:bg-black opacity-100 text-black dark:text-gray-300 border border-zinc-200 dark:border-none focus:border-blue-500 focus:ring-blue-500"
            placeholder="Your message"
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-purple-900 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded-md transition"
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
