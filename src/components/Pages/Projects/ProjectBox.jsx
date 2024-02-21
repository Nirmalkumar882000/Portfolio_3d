import React from 'react'
import Tilt from 'react-parallax-tilt';

const ProjectBox = ({ProjectData}) => {
  return (
    <Tilt>

    
    <div>
    <div className="grid grid-cols-2 gap-4 mt-10">
      {ProjectData.map((project, index) => {
        return (
          <div key={index} className="h-[160px] rounded-xl">
            <img
              src={project.image}
              alt=""
              className="object-cover w-full h-full rounded-xl"
            />
            {/* details section */}
            <div className="pt-3">
              <h1 className="text-2xl font-semibold">{project.name}</h1>
              <p className="text-gray-500 line-clamp-2">
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
