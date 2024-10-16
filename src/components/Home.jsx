import React from 'react'
import img from '/img.webp'
import { CiSearch } from "react-icons/ci";
import laptop from '/laptop.webp';
import {data} from '../../data'
import Card from './Card';
const Home = () => {
    return (
        <div className='container m-auto w-[84vw] min-h-[100vh] relative flex flex-col items-center'>
            <div className="img-div w-[100%] flex items-center justify-center mt-[90px] relative h-[360px] bg-img rounded-md">
                <h1 className='text-5xl text-white font-bold text-center'>Get the Latest Drivers, Manuals,Firmware and <br /> Software.</h1>
            </div>
            <div className="content-div mt-[30px] min-h-[70vh] w-[100%] flex flex-col gap-[30px]">
                <h1 className='font-bold text-5xl text-center mt-4'>Select your product type</h1>

                <div className="input-div w-[100%] min-h-[10vh] flex items-center flex-wrap justify-center gap-[25px]">
                    <label htmlFor="problem" className='relative left-[60px]'><CiSearch className='h-[25px] w-[25px]'/></label>
                    <input type="text" name='problem' className='w-[450px] h-[50px] rounded-full px-[46px] bg-gray-300'/>
                    <div className="text-[16px] underline font-black cursor-pointer">How to find model code</div>
                </div>
                <div className="mt-[20px] card-con w-[100%] relative min-h-[30vh] gap-[10px] flex-wrap flex items-center justify-center">

                    {data.map((e)=>{
                        return <Card key={e.id} content={e.content} img={e.img}/>
                    })}
                    
                </div>
            </div>
        </div>
    )
}

export default Home