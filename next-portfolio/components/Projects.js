import Image from 'next/image';
import React, { useState } from 'react';
import tvshowImg from '../public/assets/projects/Screenshot 2023-05-10 at 1.44.56 PM.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
    return ( 
        <div id='projects' className='w-full bg-blue-200'>
            <div className='max-w-[1240px] mx-auto px-2 py-16 '>
                <p className='text-5xl text-center tracking-wide uppercase text-[#5651e5] mt-20'> Projects </p>

                <div className='grid md:grid-cols-2 gap-8 mt-10'>
                    <ProjectItem
                    title='Property Finder'
                    backgroundImg={tvshowImg}
                    projectUrl='/property'
                    tech='React JS'
                    />
                    <ProjectItem
                    title='Crypto App'
                    backgroundImg={tvshowImg}
                    projectUrl='/crypto'
                    tech='React JS'
        
                    />
                    <ProjectItem
                    title='Netflix App'
                    backgroundImg={tvshowImg}
                    projectUrl='/netflix'
                    tech='React JS'
        
                    />
                    <ProjectItem
                    title='Twitch UI'
                    backgroundImg={tvshowImg}
                    projectUrl='/twitch'
                    tech='Next JS'
        
                    />

                </div>
            </div>
        </div>
      
    );
};

export default Projects;