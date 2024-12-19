import React from 'react'
import { star, starFill, starHalfFill } from '../assets'

const Reviews = () => {
  return (
    <div className="flex items-center gap-2 py-2 md:py-4 lg:py-3 xl:py-5">
        <div className="flex items-center gap-1">
            <img src={starFill} alt="star-fill"/>
            <img src={starFill} alt="star-fill"/>
            <img src={starFill} alt="star-fill"/>
            <img src={starHalfFill} alt="star-fill"/>
            <img src={star} alt="star-fill"/>
        </div>
        <p className="text-[#8091A7] text-sm pt-1">(2 Reviews)</p>
    </div>
  )
}

export default Reviews