import React from "react";
import Image from "next/image";

// components/Home.tsx

const Homepage = () => {
  return (
    <section><div className="text-white">
      <h1>CodebytheSoul</h1>
      <p>Self-taught full-stack web developer with a passion for creating visually stunning, user-friendly, and engaging websites. Proven ability to design, develop, and deploy complex web applications using a variety of programming languages and frameworks, including JavaScript, React, Node.js, Python, and Django. Expertise in visual design, structural design, systems integration, and data management. Committed to continuous learning and staying ahead of the curve in web development.</p>
    </div>

    <div>
            <button className='text-white'><span className=''>Contact Me</span></button>
            <button className='text-white'><span className=''>My CV</span></button>
          </div>
    
  
    <div>
    <Image src='/images/pic5.jpg' 
            alt='image'
            width={300} 
            height={500}
          />
    </div>


    </section>
  );
};

export default Homepage;
