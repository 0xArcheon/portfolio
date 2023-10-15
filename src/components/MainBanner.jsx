import React from 'react'

function MainBanner() {
  return (
    <div className='flex space justify-around p-20 font-slimjoe text-xl font-extrabold text-text'>
        <div className='w-1/2'>
            <div className="intro text-3xl mb-10">
            <span className="p-2" >Hi,</span><br />
            <span className="p-2">
            I am <span className='font-bigjohn text-5xl'>Amlan</span>
            </span>
            </div>
            <span className="tagline text-2xl font-baumans">
            As a Software Application Support Engineer, I extend my passion
             for crafting web solutions,
             bridging the gap between technical troubleshooting and the development of web experiences
            </span>
        </div>
        <div className="photo w-1/3">
            <img src="../public/graphic.jpg" alt="" />
        </div>
    </div>
  )
}

export default MainBanner