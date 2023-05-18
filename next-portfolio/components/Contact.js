import Image from 'next/image';
import React, { useState } from 'react';
import Hero from '../components/Hero'

const contact = () => {
    return (
        <>
        <div id='projects' className='mb-20'></div>
        <section id="contact" class="relative py-20 md:py-32 overflow-hiddenbg-center bg-cover customThree-img mb-20 ">
            <div class="relative container px-4 mx-auto">
                <div class="max-w-2xl mx-auto mb-18 text-center">
                <h1 class="font-heading text-5xl xs:text-6xl font-bold text-gray-900 ">
                    <span>CONTACT ME</span>
                </h1>
                <p class="text-lg text-gray-500 font-semibold mt-5 mb-20"> Please don't hesitate to reach out through any of the contacts listed below. I'm more than happy to answer your questions, and discuss any potential opportunities. </p>
                </div>

                <div class="flex flex-wrap justify-center -mx-4">

                    <div class="w-full md:w-1/2 lg:w-auto px-4 xl:px-10 mb-10 md:mb-10">
                        <div class="max-w-sm mx-auto h-full py-8 px-6 bg-white border border-gray-200 rounded-5xl">
                        <div class="max-w-2xs mx-auto text-center">
                            <img class="block mx-auto mb-3" src="https://img.icons8.com/?size=512&id=12580&format=png" alt="" width="40"/>
                            <h5 class="text-2xl font-bold text-gray-900 mb-3">Email</h5>
                            <span class="block text-sm text-orange-900 mb-8">parisialexander@gmail.com</span>
                        </div>
                        </div>
                    </div>
                    
                    <div class="w-full md:w-1/2 lg:w-auto px-4 xl:px-10 mb-10 md:mb-10">
                        <div class="max-w-sm mx-auto h-full py-8 px-6 bg-white border border-gray-200 rounded-5xl">
                        <div class="max-w-2xs mx-auto text-center">
                        <img class="block mx-auto mb-3" src="https://img.icons8.com/?size=512&id=9660&format=png" alt="" width="40"/>
                            <h5 class="text-2xl font-bold text-gray-900 mb-3">Text or Call</h5>
                            <span class="block text-sm text-orange-900 mb-8">+1 (510)-506-0437</span>
                        </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-auto px-4 xl:px-10 mb-10 md:mb-10">
                        <div class="max-w-sm mx-auto h-full py-8 px-6 bg-white border border-gray-200 rounded-5xl">
                        <div class="max-w-2xs mx-auto text-center">
                            <img class="block mx-auto mb-3" src="https://img.icons8.com/?size=512&id=447&format=png" alt="" width="40"/>
                            <h5 class="text-2xl font-bold text-gray-900 mb-3">Linkedin</h5>
                            <a href="https://www.linkedin.com/in/alexparisi-se/"class="block text-sm text-orange-900 mb-8">https://www.linkedin.com/in/alexparisi-se/</a>
                        </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 lg:w-auto px-4 xl:px-10 mb-10 md:mb-10">
                        <div class="max-w-sm mx-auto h-full py-8 px-6 bg-white border border-gray-200 rounded-5xl">
                        <div class="max-w-2xs mx-auto text-center">
                            <img class="block mx-auto mb-3" src="https://img.icons8.com/?size=512&id=12599&format=png" alt="" width ="40"/>
                            <h5 class="text-2xl font-bold text-gray-900 mb-3">GitHub</h5>
                            <a href="https://github.com/AlexParis31"class="block text-sm text-orange-900 mb-8">https://github.com/AlexParis31</a>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
            </section>
            </>
    );
};

export default contact;