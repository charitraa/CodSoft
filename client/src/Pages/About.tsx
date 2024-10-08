import React from 'react';
import member from '../assets/WhatsApp Image 2024-08-28 at 2.52.16 PM.jpeg'; // Importing image

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 font-sans">
      {/* Main heading */}
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>

      {/* Our Mission Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg mb-4">
          Our mission is to empower individuals with knowledge, inspire creativity, and connect like-minded people through insightful content. We believe in the power of information and aim to make a positive impact in the lives of our readers.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-lg mb-4">
          Founded in 2024, our blog started as a small project among friends passionate about Tech. Over time, we’ve grown into a platform where writers, experts, and enthusiasts share their knowledge and experiences with a broader audience.
        </p>
        <p className="text-lg mb-4">
          From humble beginnings, we’ve expanded our content to cover a wide range of topics, all aimed at providing value and fostering a community of curious and engaged readers.
        </p>
      </section>

      {/* Meet the Team Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
        <p className="text-lg mb-4">
          Our team is a diverse group of individuals with a shared passion for Tech. Each team member brings unique skills and perspectives, contributing to the rich variety of content we offer.
        </p>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={member}
                alt="Charitra Shrestha"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Charitra Shrestha</h3>
              <p className="text-gray-700 mb-4">Admin</p>
            </div>
          </div>
          {/* You can repeat the above block for other team members */}
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
        <p className="text-lg mb-4">
          Our blog features a wide range of content, including:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">In-depth articles on technology, programming, and industry trends</li>
          <li className="mb-2">How-to guides and tutorials for developers and tech enthusiasts</li>
          <li className="mb-2">Opinion pieces and editorials on emerging tech topics</li>
          <li className="mb-2">Interviews with industry experts and influencers</li>
          <li className="mb-2">Community discussions and reader-submitted content</li>
        </ul>
      </section>

      {/* Our Values Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <p className="text-lg mb-4">
          We adhere to a set of core values that guide our work:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">Integrity: We prioritize honesty and transparency in all our content.</li>
          <li className="mb-2">Quality: We are committed to providing well-researched and well-written articles.</li>
          <li className="mb-2">Community: We value the contributions and engagement of our readers.</li>
          <li className="mb-2">Innovation: We continually seek to improve and expand our content offerings.</li>
        </ul>
      </section>

      {/* Join Us Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Join Us</h2>
        <p className="text-lg mb-4">
          Interested in contributing to our blog? We’re always looking for passionate writers and experts to join our team. Whether you have a single article idea or want to become a regular contributor, we’d love to hear from you.
        </p>
        <p className="text-lg mb-4">
          Contact us at{' '}
          <a href="mailto:stharabi9862187405@gmail.com" className="text-blue-400">
            stharabi9862187405@gmail.com
          </a>{' '}
          to learn more about how you can get involved.
        </p>
      </section>

      {/* Stay Connected Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Stay Connected</h2>
        <p className="text-lg mb-4">
          Follow us on social media to stay updated on the latest articles, news, and events. Join our community and be part of the conversation!
        </p>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/stharabi.charitra/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            Facebook
          </a>
          <a
            href="https://x.com/ROYALXGAMER9"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/_charitraa_/"
            target="_blank"
            rel="noreferrer"
            className="text-pink-600 hover:underline"
          >
            Instagram
          </a>
          {/* Add other social media links */}
        </div>
      </section>
    </div>
  );
};

export default About;
