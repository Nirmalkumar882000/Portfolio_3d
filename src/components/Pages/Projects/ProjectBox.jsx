import React from 'react'
import Tilt from 'react-parallax-tilt';

const ProjectBox = ({ProjectData}) => {
  return (
    <Tilt>

    
    <div>
    <div className="grid grid-cols-2 gap-4 mt-10 sm:mt-5 sm:grid-cols-1">
      {ProjectData.map((project, index) => {
        return (
          <div key={index} className="h-[160px] rounded-xl sm:ml-12 sm:flex sm:gap-8 ">
            <img
              src={project.image}
              alt=""
              className="object-cover w-full h-full sm:w-[40%] sm:h-[50%] rounded-xl"
            />
            {/* details section */}
            <div className="pt-3 sm:pt-0">
              <h1 className="text-xl font-semibold sm:uppercase sm:text-xl">{project.name}</h1>
              <p className="font-bold text-gray-500 line-clamp-2">
                {project.description}
              </p>
              <a
                href={project.previewLink}
                target="_blank"
                className="mt-3 primary-btn"
              >
                View project
              </a>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  </Tilt>
  )
}

export default ProjectBox
