import React from 'react'

const SolutionClick = () => {
    return (
        <>
            <div className='container m-auto w-[84vw] min-h-[100vh] relative gap-[20px] flex flex-col items-center text-left'>
                <h1 className='text-6xl w-[80%] font-bold mt-[99px]'>How to resolve slow charging issue in your Mobile</h1>
                <div className="hr-line h-[2px] w-[80%] relative bg-[#ddd] mt-[30px]"></div>
                <iframe width="80%" src="https://www.youtube.com/embed/Oh7RMg5322w?si=86_PjurS1sOEnFnh" title="YouTube video player" frameborder="0" className='min-h-[80vh] mb-9' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </>
    )
}

export default SolutionClick