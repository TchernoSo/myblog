import React from "react";
import Image from "next/image";
import Style from "../components-style/style";

// components/Home.tsx

const Homepage = () => {
  return (
    <main>
      <div className="text-white min-h-screen flex flex-col items-cente ">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-sky-500 py-4 text-5xl">CodebytheSoul</h1>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-3">
            <p className="text-justify">
              Self-taught full-stack web developer with a passion for creating
              visually stunning, user-friendly, and engaging websites,
              using a variety of programming languages and frameworks, including
              JavaScript, React, Node.js, Python and many others. Expertise in
              visual design, structural design, systems integration, and data
              management.
            </p>
            <div className="m-4">
              <button className='hover:animate-bounce px-1 py-1/2 mb-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-600 via-pink-500 to-amber-400'><span className='block bg-transparent hover:bg-slate-800 rounded-full px-5 py-2 text-white'>Contact Me</span></button>
              <button className='hover:animate-bounce px-1 py-1/2 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-violet-700 via-pink-500 to-amber-400'><span className='block bg-transparent hover:bg-slate-800 rounded-full px-5 py-2 text-white'>My CV</span></button>
            </div>
          </div>
            <div className="w-full md:w-1/2 flex justify-end">
              <Image src="/images/pic5.jpg" alt="image" width={400} height={0} />
            </div>
        </div>
      </div>
      </main>

  );
};

export default Homepage;
