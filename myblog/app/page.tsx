import React from "react";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Style from "./components-style/style";

export default function Home() {
  return (
    <Style>
    <main>
    <div className="font-semibold">
      <Navbar/>
      <Homepage/>
    </div>
    </main>
    </Style>
    // <main className='flex min-h-screen flex-col bg-black'>
    //   <Navbar/>
    //   <div className="container mt-24 mx-auto px-80 py-2">
    //     <Main />
    //   </div>
    // </main>
  )
}
