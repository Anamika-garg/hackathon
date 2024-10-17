import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import {data} from '../../data'
import Card from './Card';
import axios from 'axios';
const Home = () => {
    const [inputData , setInputData] = useState('');
    const searchInput = async() =>{
        const res = await axios.post('' , {inputData});
        const data = await res.json();

        setInputData('');
    }
    return (
        <div className='container m-auto w-[84vw] min-h-[100vh] relative flex flex-col items-center'>
            <div className="img-div w-[100%] flex items-center justify-center mt-[90px] relative h-[360px] bg-img rounded-md">
                <h1 className='text-5xl text-white font-bold text-center'>Get the Latest Drivers, Manuals,Firmware and <br /> Software.</h1>
            </div>
            <div className="content-div mt-[30px] min-h-[70vh] w-[100%] flex flex-col gap-[30px]">
                <h1 className='font-bold text-5xl text-center mt-4'>Select your product type</h1>

                <div className="input-div w-[100%] min-h-[10vh] flex flex-col items-center flex-wrap justify-center gap-[25px]">
                <div className="input-div w-[100%] flex items-center flex-wrap justify-center gap-[25px]">
                    <label htmlFor="problem" className='relative left-[60px]'><CiSearch className='h-[25px] w-[25px]'/></label>
                    <input type="text" placeholder='Search your Issue' name='problem' className='w-[450px] h-[50px] rounded-full px-[46px] bg-gray-300' value={inputData} onChange={(e)=> setInputData(e.target.value)}/>
                    <button className='bg-slate-300 hover:bg-slate-400 transition-all p-3 w-[100px] rounded-md' onClick={searchInput}>Search</button>
                    </div>
                    <div className="text-[16px] underline font-black cursor-pointer">Or Find Manually</div>
                </div>
                <div className="mt-[20px] card-con w-[100%] relative min-h-[30vh] gap-[10px] flex-wrap flex items-center justify-center">

                    {data.map((e)=>{
                        return <Card key={e.name} content={e.name} img={`/${e.name}.webp`}/>
                    })}
                    
                </div>
            </div>
        </div>
    )
}

export default Home