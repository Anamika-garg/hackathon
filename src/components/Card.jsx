import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({img , content}) => {
    return (
        <Link to={`/issue/${content}`} className="card-div py-7 flex flex-col card-bg items-center transition-all justify-center gap-[16px] h-[200px] w-[200px] rounded-lg hover:bg-[#ddd]">
            <img src={img} alt={`${{img}}`} className='h-[100px] w-[100px]' />
            <p className='text-[1.3rem]'>{content}</p>
        </Link>

    )
}

export default Card