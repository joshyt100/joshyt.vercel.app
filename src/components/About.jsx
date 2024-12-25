import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { useEffect } from 'react';
import 'react-vertical-timeline-component/style.min.css';

const About = ({ theme }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="bg-zinc-200 dark:bg-zinc-900 min-h-screen flex justify-center">
      {/* Main Container: limits maximum width and manages column layout */}
      <div className="max-w-6xl w-full flex flex-col lg:flex-row lg:gap-10 items-start">
        {/* Left Section: About Me */}
        <div className="w-full lg:w-full 2xl:w-1/3 dark:bg-black dark:text-white mt-10 lg:mt-20 2xl:mt-28 bg-white p-8 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">
          <h2 className="text-3xl font-bold mb-6 dark:text-white text-black">About Me</h2>
          <p className="text-gray-600 leading-relaxed text-base dark:text-gray-300">
            Hello! I’m a Computer Science student at Michigan State University, where I’ve explored a variety of tools and technologies through both coursework and real-world projects. My past experiences in software development have allowed me to write clean, efficient code and collaborate with different teams—an aspect I genuinely enjoy.

            What really draws me into this field is the chance to explore new frameworks and discover creative ways to tackle challenges. I love the process of turning an abstract idea into a concrete solution that people can use and appreciate. It’s incredibly satisfying to see how thoughtful coding and design can simplify tasks and make someone’s day a bit easier.

            Ultimately, my goal is to keep growing my skill set and work on projects that make a meaningful difference. I’m excited to continue learning, experimenting, and pushing the boundaries of what’s possible in tech.
          </p>
        </div>

        {/* Right Section: Timeline */}
        <div className="w-full lg:w-2/3  lg:mt-20 2xl:mt-28">
          <h2 className="text-3xl font-bold mt-10 lg:mt-0 mb-6 text-center md:text-left text-black dark:text-white">
            Work Experience
          </h2>

          <VerticalTimeline layout="1-column-left">
            {/* Timeline Item 1 */}
            <VerticalTimelineElement
              date="May 2024 – August 2024"
              dateClassName="text-gray-900 dark:text-white"
              contentStyle={{ background: theme === 'dark' ? 'black' : 'white', boxShadow: 'none' }}
              contentArrowStyle={{ borderRight: '7px solid transparent' }}
              iconStyle={{
                background: '#5D3FD3',
                color: '#fff',
                width: '30px',
                height: '30px',
              }}
            >
              <h3 className="text-md dark:text-white font-semibold">Software Engineer Intern</h3>
              <h4 className="text-sm text-gray-700 dark:text-gray-100">Gordon Food Service, Grand Rapids, MI</h4>
              <ul className="list-disc ml-5 mt-1 text-gray-600 dark:text-gray-300 text-sm">
                <li>Utilized SAP platform to make production software changes with ABAP and SAP Middleware</li>
                <li>Worked with functional and technical consultants to develop software solutions according to set guidelines</li>
              </ul>
            </VerticalTimelineElement>

            {/* Timeline Item 2 */}
            <VerticalTimelineElement
              date="January 2024 – April 2024"
              dateClassName="text-gray-900 dark:text-white"
              contentStyle={{ background: theme === 'dark' ? 'black' : 'white', boxShadow: 'none' }}
              contentArrowStyle={{ borderRight: '7px solid transparent' }}
              iconStyle={{
                background: '#5D3FD3',
                color: '#fff',
                width: '30px',
                height: '30px',
              }}
            >
              <h3 className="text-md font-semibold dark:text-white">Web Developer</h3>
              <h4 className="text-sm text-gray-700 dark:text-gray-100">ASMSU, East Lansing, MI</h4>
              <ul className="list-disc ml-5 mt-1 text-gray-600 dark:text-gray-300 text-sm">
                <li>Utilized WordPress for website development and maintenance.</li>
                <li>Streamlined plugin usage, reducing costs while maintaining functionality.</li>
              </ul>
            </VerticalTimelineElement>

            {/* Timeline Item 3 */}
            <VerticalTimelineElement
              date="October 2023 – December 2023"
              dateClassName="text-gray-900 dark:text-white"
              contentStyle={{ background: theme === 'dark' ? 'black' : 'white', boxShadow: 'none' }}
              contentArrowStyle={{ borderRight: '7px solid transparent' }}
              iconStyle={{
                background: '#5D3FD3',
                color: '#fff',
                width: '30px',
                height: '30px',
              }}
            >
              <h3 className="text-md font-semibold dark:text-white">Software Developer Intern</h3>
              <h4 className="text-sm text-gray-700 dark:text-gray-100">Mykamanda LLC, Remote</h4>
              <ul className="list-disc ml-5 mt-1 text-gray-600 dark:text-gray-300 text-sm">
                <li>Built backend features for a legal CRM using Node.js, Express.js, and MongoDB.</li>
                <li>Designed and implemented RESTful API endpoints and tested with Postman.</li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default About;

