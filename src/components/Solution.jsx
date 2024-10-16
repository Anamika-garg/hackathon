import React from 'react'
import img from '/sol-img.webp'
import { data } from '../../data'
import SolutionCard from './SolutionCard'
const Solution = () => {
    return (
        <>
            <div className='container m-auto w-[84vw] min-h-[100vh] relative flex flex-col items-center'>
                <div className="product-div w-[100%] flex items-center gap-[30px] justify-center mt-[90px] relative min-h-[70vh] rounded-md">
                    <div className="img-div flex relative justify-end h=[55vh] w-[30%]">
                        <img src={img} alt="" className='relative h-[100%] w-[100%]' />
                    </div>
                    <div className="text-div w-[60%] p-5 gap-[20px] min-h-[50vh] relative flex justify-center flex-col">
                        <h1 className='text-6xl font-bold'>Galaxy M35 5G (6GB Memory)</h1>
                        <div className="text-[16px] underline font-bold cursor-pointer">Warranty Information</div>

                        <div className="common-topics flex flex-col justify-center h-[180px] w-[60%]">
                            <h1 className='text-xl text-black font-semibold'>Common Topics</h1>
                            <ul>
                                <li className='sol-list'>Organise pictures and videos in Samsung galaxy devices</li>
                                <li className='sol-list'>Extract text from a video in Samsung galaxy devices</li>
                                <li className='sol-list'>‘Protect battery’ feature in Samsung Galaxy phones</li>
                                <li className='sol-list'>How to enable & customise the Samsung Keyboard toolbar</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="solution w-[100%] min-h-[100vh] items-center flex flex-col">
                    <h1 className='text-5xl font-bold mt-3 mb-8'>Solution & tips</h1>
                    <div className="solution-outer flex flex-col min-h-[80vh] w-[100%] items-center gap-8">

                       {
                        data.map((e)=>{
                            return <SolutionCard/>
                        })
                       }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Solution