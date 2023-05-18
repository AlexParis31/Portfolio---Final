import Image from 'next/image';
import React, { useState } from 'react';

const Aboutt = () => {
    return (
    <div id="about"> 
        <div className='p-5 text-white z-[2] bg-center bg-cover customThree-img '>
            <div class="py-16  ">  
                <div class="container bg-cover bg-center customTwo-img p-5 mx-auto mt-8 px-6 text-gray-600 md:px-12 xl:px-6 ">
                <h2 class="font-Montserrat text-center text-7xl xs:text-6xl text-black mt-20 mb-5" >Hello! I'm Alex, </h2>
                <h2 className='text-4xl text-center font-Montaga tracking-wide text-black mb-10 '>A passionate and versatile software engineer.</h2>
                    <div class="space-y-6 md:space-y-0 md:flex justify-center md:gap-6 lg:items-center lg:gap-12">

                        <div class="md:5/12 lg:w-4/12">
                            <img src="https://i.ibb.co/syBWGsS/Screen-Shot-2023-03-01-at-5-19-11-PM-2.png" alt="image" loading="lazy"  />
                        </div>

                        <div class="md:7/12 lg:w-5/12">
                            <p class="mt-6 font-bold text-gray-600 md:text-2xl"> </p>

                            <p class="mt-6 text-[#000000c6] md:text-2xl">Born and raised in beautiful Italy, I later pursued my undergraduate degree in the United States, where I honed my skills and developed a deep passion for technology. My international background has taught me how to quickly adapt to new environments, embrace different perspectives, and work effectively with individuals from various backgrounds.</p>

                            <p class="mt-6 text-[#000000c6] md:text-2xl">I am a collaborative team player who thrives in an environment that fosters creativity and encourages continuous growth. One of my greatest strengths is my ability to learn new technologies and concepts rapidly. </p>

                            {/* <p class="mt-6 text-[#000000] md:text-xl">Born as a dual American-Italian citizen and having lived, studied, and worked in a multitude of places in both countries, I have developed a high level of adaptability. I integrate easily into new environments and appreciate diverse persepectives which makes me a very collaborative team player; I enjoy challenges and novelty and have an insiatable curiosity and deep passion for expanding my knowledge and technolgical skills </p>

                            <p class="mt-6 text-black md:text-xl"> I am a collaborative team player who thrives in an environment that fosters creativity and encourages continuous growth. One of my greatest strengths is my ability to learn new technologies and concepts rapidly. With an insatiable curiosity and a deep passion for expanding my knowledge, I am always eager to dive into new technologies, frameworks, and programming languages. </p> */}

                            

                                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
    );
};

export default Aboutt;

{/* <div class="py-16 bg-white">  
                <div class="container m-10 px-6 text-gray-600 md:px-12 xl:px-6">
                    <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 justify-center">
                        <div class="md:5/12 lg:w-4/10">
                            <img src="https://i.ibb.co/16FXwc0/Screenshot-2023-05-10-at-11-48-04-AM.png" alt="image" loading="lazy" class="rounded-full w-96 h-96 mx-auto"/>
                        </div>
                        <div class="md:7/12 lg:w-6/12">
                            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">About Me</h2>
                            <p class="mt-6 text-gray-600">As a dedicated and enthusiastic software engineer, I am fueled by the challenge of deciphering the logic behind coding. I find immense satisfaction in continually expanding my knowledge and skills, constantly seeking out new technologies and methodologies to enhance my expertise. With a high level of motivation and the ability to perform under pressure, I thrive in dynamic environments. Collaborating with like-minded professionals, I aim to deliver innovative and impactful solutions. Let's embark on a journey of continuous growth and create remarkable software together</p>
                        </div>
                    </div>
                </div>
            </div> */}
            
            {/* <div class="flex bg-neutral-100 p-20">
                    <div class="mb-auto mt-auto max-w-lg">
                    <h1 class="text-3xl uppercase text-center">About Me</h1>
                    <div className='flex'>
                        <div>
                            <p class="font-semibold mb-4 mt-4">Alex Parisi - Software Engineer</p>
                            <p>As a dedicated and enthusiastic software engineer, I am fueled by the challenge of deciphering the logic behind coding. I find immense satisfaction in continually expanding my knowledge and skills, constantly seeking out new technologies and methodologies to enhance my expertise. With a high level of motivation and the ability to perform under pressure, I thrive in dynamic environments. Collaborating with like-minded professionals, I aim to deliver innovative and impactful solutions. Let's embark on a journey of continuous growth and create remarkable software together.</p>
                            <button class="bg-black rounded-md py-3 px-7 mt-6 text-white">Email Me</button>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/Q6CDpf7/Screen-Shot-2023-03-01-at-5-19-54-PM.png" alt="photo of me" width="900" height="260"/>
                        </div>
                    </div>
                    </div>
                </div> */}

{/* <div class="container mx-auto ">
                <div class="grid grid-cols-1 md:grid-cols-2 h-screen">
                <div class="max-h-96 md:h-screen">
                    <img class="w-screen h-screen object-cover object-top" src="https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                </div>
                <div class="flex bg-gray-100 p-10">
                    <div class="mb-auto mt-auto max-w-lg">
                    <h1 class="text-3xl uppercase">Jun Santilla</h1>
                    <p class="font-semibold mb-5">Web Developer</p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                    <button class="bg-black rounded-md py-3 px-7 mt-6 text-white">Email Me</button>
                    </div>
                </div>
                </div>
            </div> */}