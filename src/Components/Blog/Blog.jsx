import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BlogItems from './BlogItems'
import { useSelector } from 'react-redux'


const Blog = () => {
    const [blogs, setBlogs] = useState([])

    const fetchData = () => {
        axios.get('https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/')
            .then(res => setBlogs(res.data))
            .catch((err) => console.log(err.message))
    }
    const getViews = useSelector((state) => state?.blog)
    let view;

    const getViewsCount = (id) => {
        if (getViews.length === 0) {
            view = []
        } else {
            view = getViews.find((data) => data.id && data.id === id);
        }
        console.log(view, "view");
    }


    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
            <div className="flex flex-wrap justify-between w-[95%] mx-auto my-[116px] max-w-[1280px] ">
                {
                    blogs.map((data, index) => {
                        getViewsCount(data.id)
                        return (
                            <>
                                <BlogItems view={view} data={data} key={index} />
                            </>
                        )
                    })
                }



            </div>

        </>
    )
}

export default Blog