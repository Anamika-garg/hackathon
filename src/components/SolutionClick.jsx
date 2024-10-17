import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from "../../data"

const SolutionClick = () => {
    const { device , id } = useParams();

    const deviceIssues = data.find(item => item.name === device)?.issues || [];
    
    const deviceIssue = deviceIssues.find(item => item.id === parseInt(id))

    return (
        <>
            <div className='container m-auto w-[84vw] min-h-[100vh] relative gap-[20px] flex flex-col items-center text-left'>
                <h1 className='text-6xl w-[80%] font-bold mt-[99px]'>{deviceIssue.title}</h1>
                <div className="hr-line h-[2px] w-[80%] relative bg-[#ddd] mt-[30px]"></div>
                <iframe width="80%" src={deviceIssue.youtubeUrl} title="YouTube video player" frameborder="0" className='min-h-[80vh] mb-9' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </>
    )
}

export default SolutionClick