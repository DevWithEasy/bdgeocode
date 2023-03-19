import React from 'react';

const SelectBn = (props) => {
    const {divisions,getDistricts,setDistricts} = props
    return (
        <select 
            onChange={(e)=>getDistricts(e.target.value,setDistricts)} 
            className='w-1/2 p-2 rounded'>
            {divisions && divisions.map((division)=><option 
                key={division.id} 
                value={division.id}>
                {division.bn_name}
            </option>)}
        </select>
    );
};

export default SelectBn;