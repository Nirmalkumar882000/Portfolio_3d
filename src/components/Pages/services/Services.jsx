import React from 'react'
import ServiceBox from './ServiceBox'
import Heading from './Heading'

const Services = () => {
  return (
    <div className='h-full p-10 bg-white page-shadow'>
      {/* Heading */}
      <Heading
      title="Services"
      subtitle="Loream ipsum dolor sit amet loream ipsum dolor sit amet"/>
      <div className=''>
        <ServiceBox/>
      </div>
    </div>
  )
}

export default Services
