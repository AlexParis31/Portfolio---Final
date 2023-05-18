import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
// import useDownloader from "react-use-downloader";
import Html from '../public/assets/skills/Html.png';
import Css from '../public/assets/skills/Css.png';
import Reactt from '../public/assets/skills/React.png';
import Python from '../public/assets/skills/Python.png';
import Javascript from '../public/assets/skills/Javascript.png';
import MongoDB from '../public/assets/skills/MongoDB.png';
import PostgreSQL from '../public/assets/skills/PostgreSQL.png';
import Github from '../public/assets/skills/Github.png';




const Skills = () => {

  return (
    <>
    <div id='skills' className='mb-20'></div>
    <div className='p-2 bg-center bg-cover customThree-img '>
      
      <div  className='max-w-[1240px] mx-auto flex flex-col justify-center '>

      
        <p className='font-heading text-center text-5xl xs:text-6xl font-bold text-gray-900 mt-20 mb-20'> MY SKILLS </p>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 '>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>

            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              
              <div className='m-auto'>
                <Image src={Html} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>

            </div>

          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Css} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Javascript} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Reactt} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Python} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Python</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={MongoDB} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={PostgreSQL} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>PostgreSQL</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Github} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>GitHub</h3>
              </div>
            </div>
          </div>
        </div>


        <div>

        <p class="text-lg text-gray-500 font-semibold mt-10 mb-10"> You can find more of my coding skills on my resume at the following link: </p>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded'>
        <a href="https://docs.google.com/document/d/1U3n4RzfGv_trqsryxOv0YCBIn4yWzHqepFt7sPb8aXs/edit" target="_blank"> 
            Alex's Resume
            </a>
        </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Skills;








// import Image from 'next/image';
// import React, { useState } from 'react';
// import Hero from '../components/Hero'

// const contact = () => {
//     return (
//         <section id="skills" class="relative py-20 md:py-32 overflow-hidden">
//             <div class="relative container px-4 mx-auto">
//                 <div class="max-w-2xl mx-auto mb-18 text-center">
//                 <h1 class="font-heading text-5xl xs:text-6xl font-bold text-gray-900 mb-4">
//                     <span>Contact Me</span>
//                 </h1>
//                 <p class="text-lg text-gray-500 font-semibold mt-5 mb-20"> Please don't hesitate to reach out through any of the contacts listed below. I'm more than happy to answer your questions, and discuss any potential opportunities. </p>
//                 </div>

//                 <div class="flex flex-wrap justify-center -mx-4">

//                     <div class="w-full md:w-1/2 lg:w-auto px-4 xl:px-10 mb-10 md:mb-10">
//                         <div class="max-w-sm mx-auto h-full py-8 px-6 bg-white border border-gray-200 rounded-5xl">
//                         <div class="max-w-2xs mx-auto text-center">
//                             <img class="block mx-auto mb-3" src="https://img.icons8.com/?size=512&id=12580&format=png" alt="" width="40"/>
//                             <h5 class="text-2xl font-bold text-gray-900 mb-3">Email</h5>
//                             <span class="block text-sm text-orange-900 mb-8">parisialexander@gmail.com</span>
//                         </div>
//                         </div>
//                     </div>
                    
//                     <div class="w-full md:w-1/2 lg:w-auto px-4 xl:px-10 mb-10 md:mb-10">
//                         <div class="max-w-sm mx-auto h-full py-8 px-6 bg-white border border-gray-200 rounded-5xl">
//                         <div class="max-w-2xs mx-auto text-center">
//                         <img class="block mx-auto mb-3" src="https://img.icons8.com/?size=512&id=9660&format=png" alt="" width="40"/>
//                             <h5 class="text-2xl font-bold text-gray-900 mb-3">Text or Call</h5>
//                             <span class="block text-sm text-orange-900 mb-8">+1 (510)-506-0437</span>
//                         </div>
//                         </div>
//                     </div>

//                     <div class="w-full md:w-1/2 lg:w-auto px-4 xl:px-10 mb-10 md:mb-10">
//                         <div class="max-w-sm mx-auto h-full py-8 px-6 bg-white border border-gray-200 rounded-5xl">
//                         <div class="max-w-2xs mx-auto text-center">
//                             <img class="block mx-auto mb-3" src="https://img.icons8.com/?size=512&id=447&format=png" alt="" width="40"/>
//                             <h5 class="text-2xl font-bold text-gray-900 mb-3">Linkedin</h5>
//                             <a href="https://www.linkedin.com/in/alexparisi-se/"class="block text-sm text-orange-900 mb-8">https://www.linkedin.com/in/alexparisi-se/</a>
//                         </div>
//                         </div>
//                     </div>

//                     <div class="w-full md:w-1/2 lg:w-auto px-4 xl:px-10 mb-10 md:mb-10">
//                         <div class="max-w-sm mx-auto h-full py-8 px-6 bg-white border border-gray-200 rounded-5xl">
//                         <div class="max-w-2xs mx-auto text-center">
//                             <img class="block mx-auto mb-3" src="https://img.icons8.com/?size=512&id=12599&format=png" alt="" width ="40"/>
//                             <h5 class="text-2xl font-bold text-gray-900 mb-3">GitHub</h5>
//                             <a href="https://github.com/AlexParis31"class="block text-sm text-orange-900 mb-8">https://github.com/AlexParis31</a>
//                         </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//             </section>
//     );
// };

// export default contact;