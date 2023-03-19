import React, { useState } from 'react';
import { getDistricts, getUnions, getUpazillas } from '../utils/getHandler';

const SelectList = ({divisions}) => {
  const [districts,setDistricts] = useState([])
  const [upazillas,setUpazillas] = useState([])
  const [unions,setUnions] = useState([])

    return (
        <div className='w-full md:w-4/12 space-y-2 pt-5 order-last'>
                  <div className='flex justify-between w-full space-x-2'>
                    <select onChange={(e)=>getDistricts(e.target.value,setDistricts,setUpazillas,setUnions)} className='w-1/2 p-2 rounded bg-white/25'>
                      <option>Select Division</option>
                      {divisions && divisions.map((division)=><option 
                          key={division.id} 
                          value={division.id}>
                            {division.name}
                        </option>)}
                    </select>
                    <select onChange={(e)=>getDistricts(e.target.value,setDistricts,setUpazillas,setUnions)} className='w-1/2 p-2 rounded bg-white/25'>
                      <option>বিভাগ নির্বাচন করুন</option>
                      {divisions && divisions.map((division)=><option 
                          key={division.id} 
                          value={division.id}>
                            {division.bn_name}
                        </option>)}
                    </select>
                  </div>

                  {districts.length > 0 && <div className='flex justify-between w-full space-x-2'>
                    <select onChange={(e)=>getUpazillas(e.target.value,setUpazillas,setUnions)} className='w-1/2 p-2 rounded bg-white/25'>
                      <option>Select District</option>
                      {districts && districts.map((division)=><option 
                          key={division.id} 
                          value={division.id}>
                            {division.name}
                        </option>)}
                    </select>
                    <select onChange={(e)=>getUpazillas(e.target.value,setUpazillas,setUnions)} className='w-1/2 p-2 rounded bg-white/25'>
                      <option>জেলা নির্বাচন করুন</option>
                      {districts && districts.map((division)=><option 
                          key={division.id} 
                          value={division.id}>
                            {division.bn_name}
                        </option>)}
                    </select>
                  </div>}

                  {upazillas.length > 0 && <div className='flex justify-between w-full space-x-2'>
                    <select onChange={(e)=>getUnions(e.target.value,setUnions)} className='w-1/2 p-2 rounded bg-white/25'>
                      <option>Select Upazilla</option>
                      {upazillas && upazillas.map((division)=><option 
                          key={division.id} 
                          value={division.id}>
                            {division.name}
                        </option>)}
                    </select>
                    <select onChange={(e)=>getUnions(e.target.value,setUnions)} className='w-1/2 p-2 rounded bg-white/25'>
                      <option>উপজেলা নির্বাচন করুন</option>
                      {upazillas && upazillas.map((division)=><option 
                          key={division.id} 
                          value={division.id}>
                            {division.bn_name}
                        </option>)}
                    </select>
                  </div>}

                  {unions.length > 0 && <div className='flex justify-between w-full space-x-2'>
                    <select className='w-1/2 p-2 rounded bg-white/25'>
                      {unions && unions.map((division)=><option 
                          key={division.id} 
                          value={division.id}>
                            {division.name}
                        </option>)}
                    </select>
                    <select className='w-1/2 p-2 rounded bg-white/25'>
                      {unions && unions.map((division)=><option 
                          key={division.id} 
                          value={division.id}>
                            {division.bn_name}
                        </option>)}
                    </select>
                  </div>}

                  {districts.length > 0 && <div className='flex justify-end'>
                        <button className='py-2 px-6 rounded-md bg-red-500 text-white' onClick={()=>{setDistricts([]);setUpazillas([]);setUnions([])}}>Reset</button>
                  </div>}
              </div>
    );
};

export default SelectList;