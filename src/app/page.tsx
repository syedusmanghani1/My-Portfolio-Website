"use client";
import Image from 'next/image';
import { useState } from 'react';





export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); // Replace with your form submission logic
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' }); // Reset form after submission

    // Hide the message after 12 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 12000);
  };

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center h-screen bg-gradient-to-r from-pink-700 to-violet-700 p-4"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Hi, I am Syed Usman Ghani</h1>
        <p className="text-lg md:text-xl font-light mb-6">
          A passionate web developer who loves building amazing web experiences.
        </p>
        <a
          href="#projects"
          className="px-6 py-3 md:px-8 md:py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-200"
        >
          View Projects
        </a>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 sm:px-8 bg-gradient-to-r from-blue-500 to-teal-500 text-black"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
        <p className="text-lg w-full max-w-3xl mx-auto mt-6 text-center">
          I’m a web developer with a strong grasp of front-end and back-end technologies. My passion is creating engaging, user-friendly websites that are both visually appealing and functionally robust.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-r from-red-950 to-black">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Skills</h2>
  <div className="flex flex-wrap justify-center gap-8">
    {['HTML', 'CSS', 'JavaScript', 'React & Next.js', 'Node.js & Express', 'Git & GitHub'].map((skill, index) => {
      // Calculate the progress width, starting from 100% and decreasing
      const progressWidth = `${100 - index * 15}%`; // Adjust the decrement value as needed
      return (
        <div key={index} className="bg-gray-600 p-4 rounded-lg text-center shadow-lg w-48">
          <p className="text-xl font-semibold">{skill}</p>
          {/* Progress bar with dynamic width */}
          <div className="mt-2 bg-gray-400 rounded-full h-2" style={{ width: progressWidth }} />
        </div>
      );
    })}
  </div>
</section>


      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-700">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">Projects</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {['Project 1', 'Project 2'].map((project, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl md:text-2xl mb-4">{project}</h3>
              <Image
               width={1300}
               height={1300}
              className="rounded-2xl w-full max-w-xs" src={`/img${index + 1}.png`} alt={project} />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-4 bg-gradient-to-r from-yellow-500 to-gray-900">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        {submitted && <p className="text-green-500 text-center mb-4">Your message has been sent!</p>}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded-lg p-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-2 text-black">Name</label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="text-black w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-yellow-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-black">Email</label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="text-black w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-yellow-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold mb-2 text-black">Message</label>
            <textarea
              id="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="text-black w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-yellow-300"
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-yellow-500 text-white font-bold py-2 rounded-lg hover:bg-yellow-400 transition duration-300">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}
