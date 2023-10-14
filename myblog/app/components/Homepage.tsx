import React from "react";
import Image from "next/image";
import Style from "../components-style/style";

// components/Home.tsx

const Homepage = () => {
  return (
    <Style>
      {/* <div className="text-white min-h-screen flex flex-col items-center">
        <h1 className="my-4">CodebytheSoul</h1>
        <div className="flex flex-col md:flex-row">
          <p className="w-full md:w-1/2">Self-taught full-stack web developer with a passion for creating visually stunning, user-friendly, and engaging websites. Proven ability to design, develop, and deploy complex web applications using a variety of programming languages and frameworks, including JavaScript, React, Node.js, Python, and Django. Expertise in visual design, structural design, systems integration, and data management. Committed to continuous learning and staying ahead of the curve in web development.</p>
    
        </div>
    
          <div className="w-full md:w-1/2 flex justify-end">
            <Image src='/images/pic5.jpg' 
              alt='image'
              width={250} 
              height={0}
              className="max-w-xs md:max-w-full "
            />
          </div>
    
            <button className='text-white'><span className=''>Contact Me</span></button>
            <button className='text-white'><span className=''>My CV</span></button>
        </div>
         */}
      <div className="text-white min-h-screen flex flex-col items-center">
      <h1 className="my-4">CodebytheSoul</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
        <p>Self-taught full-stack web developer with a passion for creating visually stunning, user-friendly, and engaging websites. Proven ability to design, develop, and deploy complex web applications using a variety of programming languages and frameworks, including JavaScript, React, Node.js, Python, and Django. Expertise in visual design, structural design, systems integration, and data management. Committed to continuous learning and staying ahead of the curve in web development.</p>
        <div>
            <button className='text-white'><span className=''>Contact Me</span></button>
            <button className='text-white'><span className=''>My CV</span></button>
        </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-end">
        <Image src='/images/pic5.jpg' 
              alt='image'
              width={400} 
              height={0}
            />
        </div>
      </div>
    </div>
    </Style>
  );
};

export default Homepage;
