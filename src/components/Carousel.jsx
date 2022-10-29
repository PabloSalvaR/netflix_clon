import React from 'react'

const Carousel = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://occ-0-590-3212.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABS6v2gvwesuRN6c28ZykPq_fpmnQCJwELBU-kAmEcuC9HhWX-DfuDbtA-bfo-IrfgNtxl0qwJJlhI6DENsGFXknKkjhxPGTV-qhp.jpg?r=608" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <img src="https://occ-0-1700-114.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABQm_jNTIP_EG_W-Dq8lqHqdmvtfQkuOLKqIDXFCDjOOJFQ-pmxc9kAePDJrq0zyWjloKidKg-R7jQnvHQcR4oqGqLasAC66mQJnk_SyLqdSw0QYnAzJoszL6mlC0WGflLTviY_28SG_gDr-6n4kejdpEAO59gA3BVxxEVdT1VcA5yBLdRzToKQ.png?r=23b" alt="" className='carousel__img' />
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
      </div> 
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://occ-0-590-3212.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABS6v2gvwesuRN6c28ZykPq_fpmnQCJwELBU-kAmEcuC9HhWX-DfuDbtA-bfo-IrfgNtxl0qwJJlhI6DENsGFXknKkjhxPGTV-qhp.jpg?r=608" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <img src="https://occ-0-1700-114.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABQm_jNTIP_EG_W-Dq8lqHqdmvtfQkuOLKqIDXFCDjOOJFQ-pmxc9kAePDJrq0zyWjloKidKg-R7jQnvHQcR4oqGqLasAC66mQJnk_SyLqdSw0QYnAzJoszL6mlC0WGflLTviY_28SG_gDr-6n4kejdpEAO59gA3BVxxEVdT1VcA5yBLdRzToKQ.png?r=23b" alt="" className='carousel__img' />
          <a href="#slide1" className="btn btn-circle">❮</a> 
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://occ-0-590-3212.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABS6v2gvwesuRN6c28ZykPq_fpmnQCJwELBU-kAmEcuC9HhWX-DfuDbtA-bfo-IrfgNtxl0qwJJlhI6DENsGFXknKkjhxPGTV-qhp.jpg?r=608" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <img src="https://occ-0-1700-114.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABQm_jNTIP_EG_W-Dq8lqHqdmvtfQkuOLKqIDXFCDjOOJFQ-pmxc9kAePDJrq0zyWjloKidKg-R7jQnvHQcR4oqGqLasAC66mQJnk_SyLqdSw0QYnAzJoszL6mlC0WGflLTviY_28SG_gDr-6n4kejdpEAO59gA3BVxxEVdT1VcA5yBLdRzToKQ.png?r=23b" alt="" className='carousel__img' />
          <a href="#slide2" className="btn btn-circle">❮</a> 
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://occ-0-590-3212.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABS6v2gvwesuRN6c28ZykPq_fpmnQCJwELBU-kAmEcuC9HhWX-DfuDbtA-bfo-IrfgNtxl0qwJJlhI6DENsGFXknKkjhxPGTV-qhp.jpg?r=608" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <img src="https://occ-0-1700-114.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABQm_jNTIP_EG_W-Dq8lqHqdmvtfQkuOLKqIDXFCDjOOJFQ-pmxc9kAePDJrq0zyWjloKidKg-R7jQnvHQcR4oqGqLasAC66mQJnk_SyLqdSw0QYnAzJoszL6mlC0WGflLTviY_28SG_gDr-6n4kejdpEAO59gA3BVxxEVdT1VcA5yBLdRzToKQ.png?r=23b" alt="" className='carousel__img' />
          <a href="#slide3" className="btn btn-circle">❮</a> 
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Carousel