import React from 'react'
import bgImg from "./assets/brown-wooden-flooring.jpg"
import MyBook from './components/MyBook';
import Background from './Background';

const App = () => {

  const BgTextureStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh ",
    width: "100%",
  };




  return (
    <>
    <Background/>
    <div  className='flex justify-center w-full h-full mt-28 '>
   <MyBook/>
    </div>
    </>
  )
}

export default App







 

  


