import React from 'react'

const Hero = () => {
  return (
    <>
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/61fa856f-eabc-473a-aa9a-c743c3b4f598/AR-es-20221017-popsignuptwoweeks-perspective_alpha_website_large.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-3xl">
            <h1 className="mb-5 text-5xl font-bold text-white">Peliculas y series ilimitadas y mucho más</h1>
            <p className="mb-5 text-white text-2xl">Disfruta donde quieras. Cancela donde quieras.</p>
            <button className="btn btn-error bg-red-700 text-white	">Ver Peliculas</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero