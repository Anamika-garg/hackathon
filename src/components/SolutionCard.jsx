import React from 'react'
import { Link } from 'react-router-dom'

const SolutionCard = ({title , type , description,device, id}) => {
    return (
        <>
            <Link to={`/issue/${device}/${id}`} className="solution-div min-h-[150px] gap-[5px] p-8 rounded-lg w-[80%] flex flex-col justify-center">
                <div className="topic font-extralight">{type}</div>
                <h1 className='text-xl font-semibold'>{title}</h1>
                <p>{description}</p>
            </Link>
        </>
    )
}

export default SolutionCard