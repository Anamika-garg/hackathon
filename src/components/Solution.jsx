import React from 'react'
import img from '/sol-img.webp'
const Solution = () => {
    return (
        <>
            <div className='container m-auto w-[84vw] min-h-[100vh] bg-red-600 relative flex flex-col items-center'>
                <div className="product-div w-[100%] flex items-center justify-around mt-[90px] relative min-h-[70vh] bg-blue-400 rounded-md">
                    <img src={img} alt="" />
                    <h1>Galaxy M35 5G (6GB Memory)</h1>
                </div>
            </div>
        </>
    )
}

export default Solution