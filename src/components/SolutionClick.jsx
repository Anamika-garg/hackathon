import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { data } from '../../data';

const SolutionClick = () => {
    const [displayData, setDisplayData] = useState('');
    
    const { id } = useParams();
    const { device } = useParams();
    useEffect(()=>{
       
        const timer = setTimeout(() => {
            data.map((e)=>{
                if(e.name == device){
                    e.issues.map((p)=>{
                        if(p.id == id){
                            setDisplayData(p)
                        }
                    })
                }
            })
          }, 1000);
        
          return () => clearTimeout(timer);
    },[])
    return (
        <>
        {
            displayData ? <div className='container m-auto w-[84vw] min-h-[100vh] relative gap-[20px] flex flex-col items-center text-left'>
            <h1 className='text-6xl w-[80%] font-bold mt-[99px]'>{displayData?.title}</h1>
            <div className="hr-line h-[2px] w-[80%] relative bg-[#ddd] mt-[30px]"></div>
            <iframe width="80%" src= {`${displayData?.youtubeUrl}`} title="YouTube video player" className='min-h-[80vh] mb-9' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </div> : <div className='container m-auto w-[84vw] min-h-[100vh] relative gap-[20px] flex justify-center flex-col items-center text-left'>Loading....</div>
        }
           
        </>
    )
}

export default SolutionClick