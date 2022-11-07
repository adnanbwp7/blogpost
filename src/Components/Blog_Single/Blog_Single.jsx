import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { AiOutlineEye } from 'react-icons/ai'
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from 'redux';
import { visitCount, visitStatus } from '../State/Actions/BlogVisit_Actions';

const Blog_Single = () => {
    let params = useParams();
    const dispatch = useDispatch()
    const [blogs, setBlogs] = useState([])

    const getBlog = (id) => {
        axios.get(`https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/${id} `)
            .then(res => {
                dispatch(visitStatus(res.data.id))
                setBlogs(res.data)
            })
            .catch((err) => console.log(err.message))
    }

    const getViews = useSelector((state) => state?.blog)
    const views = getViews.find((data) => data?.id === params?.id);
    console.log(views?.views);

    useEffect(() => {
        getBlog(parseInt(params.id));
    }, [])

    return (
        <>
            <div className="flex w-[95%] flex-col max-w-[1280px] mx-auto">
                <div className="flex max-w-[900px] mx-auto flex-col ">
                    <div className="flex flex-row flex-wrap w-full py-[20px] justify-between text-[#939191] ">
                        <p>Posted on October 6th 2021</p>
                        <p className='flex items-center '><AiOutlineEye /> &nbsp; {views?.views} views</p>
                    </div>
                    <div
                        className="text-[#1E1B1B] font-bold text-[24px] mb-[16px] sm:text-[48px] leading-[150%] ">
                        {blogs.Title}
                    </div>
                    <div
                        className="text-[#1E1B1B] font-semibold text-[14px] sm:text-[16px] leading-[175%] ">
                        {blogs.Subtitle}
                    </div>
                </div>
                <div className='w-full my-16 '>
                    <img src={blogs.Image} width="100%" className='h-[520px] ' alt="img" srcSet={blogs.Image} />
                </div>

                <div className="flex max-w-[900px] mx-auto flex-col mb-24 ">
                    <div
                        className="text-[#1E1B1B] font-semibold max-w-[900px] mx-auto text-[14px] sm:text-[16px] leading-[175%] ">
                        {blogs.Article}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog_Single