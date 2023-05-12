import Image from 'next/image';
import React, { useState } from 'react';
import tvshowImg from '../public/assets/projects/Screenshot 2023-05-10 at 1.44.56 PM.png';
import carImg from '../public/assets/projects/Screenshot 2023-05-11 at 5.38.16 PM.png';
import transImg from '../public/assets/projects/Screenshot 2023-05-12 at 11.09.53 AM.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
    return ( 
        <div id='projects' className='w-full bg-blue-200'>
            <div className='max-w-[1240px] mx-auto px-2 py-16 '>
                <p className='text-5xl text-center tracking-wide uppercase text-[#5651e5] mt-20'>My Projects </p>

                <div className='grid md:grid-cols-2 gap-8 mt-10'>
                    <ProjectItem
                    title='Tv Shows App'
                    backgroundImg={tvshowImg}
                    projectUrl='/property'
                    tech='React JS'
                    />
                    <ProjectItem
                    title='Cars Catalogue'
                    backgroundImg={carImg}
                    projectUrl='/crypto'
                    tech='React JS'
        
                    />
                    <ProjectItem
                    title='Personal Budgetting'
                    backgroundImg={transImg}
                    projectUrl='/netflix'
                    tech='React JS'
        
                    />
                   

                </div>
            </div>
        </div>
      
    );
};

export default Projects;