import React from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from "react-redux";

const BlogItems = (props) => {

    const { Title, Subtitle, Image, id } = props.data
    return (
        <>
            <Link to={`/blog/${id}`} className="flex flex-col w-[90%] sm:w-[32%] sm:min-w-[320px] mx-auto max-w-[405px] mb-[64px] ">
                <div className='w-full'>
                    <img src={Image} width="100%" className='h-[265px] ' alt="img" srcSet={Image} />
                </div>
                <div className="flex flex-row flex-wrap w-full py-[20px] justify-between text-[#939191] ">
                    <p>Posted on October 6th 2021</p>
                    <p className='flex items-center '><AiOutlineEye /> &nbsp; {props.view ? props.view.views : 0} views</p>
                </div>
                <div
                    className="text-[#1E1B1B] font-bold text-[24px] mb-[16px] sm:text-[32px] leading-[150%] ">
                    {Title}
                </div>
                <div
                    className="text-[#1E1B1B] font-semibold text-[14px] sm:text-[16px] leading-[175%] ">
                    {Subtitle}
                </div>

            </Link>
        </>
    )
}

export default BlogItems