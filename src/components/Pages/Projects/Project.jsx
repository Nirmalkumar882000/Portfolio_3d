import React from 'react'
import Heading from '../services/Heading'
import ProjectBox from './ProjectBox'

const Project = ({ProjectData}) => {
  return (
    <div className='h-full p-10 bg-white page-shadow'>
        {/* Heading */}
        <Heading
        title="Projects"
        subtitle="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet."
        />
        {/* Project section */}
        <div className=''>
            <ProjectBox ProjectData={ProjectData}/>
        </div>

    </div>
  )
}

export default Project
