
import React, { useState } from 'react'
import JobList from "../data.json"

const Jobs = () => {
    const [Filter, setFilter] = useState({
        active:false,
        Role:[],
    })
    const handle_filter = (e)=>{
        const value = e
        setFilter((prev)=>({
            ...prev,
            active:true,
            Role:value
        }))
        // setFilter({
        //     active:true,
        //     [Role]:value,
        // })
    }
    console.log(Filter)
  return (
    <div className='flex flex-col gap-5 lg:w-[75%] m-auto py-5 w-[95%]' >
        {
            Filter.active&&
            <div className='bg-white p-6 px-4 relative -top-16 w-full' >
                <span className='bg-bg2 p-0 text-pimary items-center font-bold flex gap-3 w-fit ' >
                    <span className='pl-4' >{Filter.Role}</span>
                    <span className='p-4 bg-pimary text-bg2 cursor-pointer' onClick={()=>setFilter({active:false, Role:""})} >X</span>
                </span>
            </div>
        }
      {
        JobList.map((i)=>(
            <>
                {
                    Filter.active?
                    i.role===Filter.Role||i.level===Filter.Role?
                    <div key={i.id} className='flex flex-col lg:flex-row p-4 bg-white shadow-sm rounded-md hover:border-l-4 border-l-bg3 justify-between lg:items-center gap-4' >
                        <div className='flex flex-col lg:flex-row gap-4 lg:items-center' >
                            <img src={i.logo} alt="job_logo" className='lg:size-16 size-14' />
                            <div className='flex flex-col gap-1' >
                                <div className='flex flex-row gap-2 items-center' >
                                    <span className='text-xl text-bg3' >{i.company}</span>
                                    {
                                        i.new&&
                                        <span className='bg-bg3 uppercase py-1 font-bold text-white flex items-center justify-center rounded-full px-5' >New</span>
                                    }
                                    {
                                        i.featured&&
                                        <span className='bg-bg4 uppercase py-1 font-bold text-white flex items-center justify-center rounded-full px-5' >Featured</span>
                                    }
                                </div>
                                <span className='text-2xl font-bold' >{i.position}</span>
                                <div className='flex flex-row text-slate-500 gap-2 pb-3 lg:border-none border-b-2' >
                                    <span className='text-lg' >{i.postedAt}</span>
                                    <span className='text-lg'>{i.contract}</span>
                                    <span className='text-lg'>{i.location}</span>
                                </div>
                            </div>
                        </div>
                        <div className='lg:flex grid grid-flow-row-dense grid-cols-3 lg:flex-row  gap-3' >
                            <span onClick={()=>handle_filter(i.role)} className='p-2 cursor-pointer bg-bg2 text-bg3 rounded-md'>{i.role}</span>
                            <span className='p-2 bg-bg2 cursor-pointer text-bg3 rounded-md' onClick={()=>handle_filter(i.level)}>{i.level}</span>
                            {i.languages.map((l)=>(
                                <span key={()=>Math.random()} className='p-2 bg-bg2 cursor-pointer text-bg3 rounded-md'>{l}</span>
                            ))}
                            {
                                i.tools&&
                                i.tools.map((t)=>(
                                    <span key={()=>Math.random()} className='p-2 bg-bg2 cursor-pointer text-bg3 rounded-md'>{t}</span>
                                ))
                            }
                        </div>
                    </div>:<></>
            :
            <div key={i.id} className='flex flex-col lg:flex-row p-4 bg-white shadow-sm rounded-md hover:border-l-4 border-l-bg3 justify-between lg:items-center gap-4' >
                <div className='flex flex-col lg:flex-row gap-4 lg:items-center' >
                    <img src={i.logo} alt="job_logo" className='lg:size-16 size-14' />
                    <div className='flex flex-col gap-1' >
                        <div className='flex flex-row gap-2 items-center' >
                            <span className='text-xl text-bg3' >{i.company}</span>
                            {
                                i.new&&
                                <span className='bg-bg3 uppercase py-1 font-bold text-white flex items-center justify-center rounded-full px-5' >New</span>
                            }
                            {
                                i.featured&&
                                <span className='bg-bg4 uppercase py-1 font-bold text-white flex items-center justify-center rounded-full px-5' >Featured</span>
                            }
                        </div>
                        <span className='text-2xl font-bold' >{i.position}</span>
                        <div className='flex flex-row text-slate-500 gap-2 pb-3 lg:border-none border-b-2' >
                            <span className='text-lg' >{i.postedAt}</span>
                            <span className='text-lg'>{i.contract}</span>
                            <span className='text-lg'>{i.location}</span>
                        </div>
                    </div>
                </div>
                <div className='lg:flex grid grid-flow-row-dense grid-cols-3 lg:flex-row  gap-3' >
                    <span onClick={()=>handle_filter(i.role)} className='p-2 cursor-pointer bg-bg2 text-bg3 rounded-md'>{i.role}</span>
                    <span className='p-2 cursor-pointer bg-bg2 text-bg3 rounded-md' onClick={()=>handle_filter(i.level)}>{i.level}</span>
                    {i.languages.map((l)=>(
                        <span key={()=>Math.random()} className='p-2 cursor-pointer bg-bg2 text-bg3 rounded-md'>{l}</span>
                    ))}
                    {
                        i.tools&&
                        i.tools.map((t)=>(
                            <span key={()=>Math.random()} className='p-2 cursor-pointer bg-bg2 text-bg3 rounded-md'>{t}</span>
                        ))
                    }
                </div>
            </div>
                }
            </>
        ))
      }
    </div>
  )
}

export default Jobs
