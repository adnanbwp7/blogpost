import React from 'react'
import Car from '../../assets/Car.png'
import { AiOutlineEye } from 'react-icons/ai'
import { HiArrowLongRight } from "react-icons/hi2";



const FeaturedBlog = () => {
    return (
        <>
            <div className="w-full flex bg-[#F5F5F5]">
                <div className="flex px-[25px] flex-col sm:flex-row md:px-[43px] py-[20px]  md:py-[35px] w-[95%] max-w-[1280px] bg-white mx-auto my-[116px]">
                    <div className="flex w-full sm:w-2/6 mx-auto sm:mr-[20px] ">
                        <img src={Car} alt="" width="100%" srcSet={Car} />
                    </div>
                    <div className="flex w-full sm:w-4/6 flex-col">
                        <div className="flex w-full  first-letter:flex-row   items-center justify-between ">
                            <div className="flex flex-col md:flex-row w-full  sm:w-3/4 lg:w-1/2 justify-between text-[#939191] ">
                                <p>Posted on October 6th 2021</p>
                                <p className='flex items-center '><AiOutlineEye /> &nbsp; 563 views</p>
                            </div>
                            <div className='flex text-[16px] text-center text-[#FF6433]'>
                                FEATURED
                            </div>
                        </div>
                        <div className="text-[#1E1B1B] font-bold text-[28px] my-[20px] sm:text-[40px] leading-[140%] ">Should I Buy a New Car or Lease a New Car in 2021?</div>
                        <div className="text-[#1E1B1B] font-semibold text-[14px] sm:text-[16px]  mb-[90px] leading-[140%] ">
                            We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.
                        </div>
                        <button className="flex w-fit text-[#1E1B1B] font-semibold items-center text-[14px] sm:text-[18px] ">
                            Read More <HiArrowLongRight className='ml-[15px] text-[30px]  sm:text-[40px] font-light' />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedBlog