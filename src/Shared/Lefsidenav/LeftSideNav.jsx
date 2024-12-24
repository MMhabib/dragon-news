import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
const[categories,setCategories]=useState([])
useEffect(()=>{
    fetch('categories.json')
    .then(res=>res.json())
    .then(data=>setCategories(data))
},[])

    return (
        <div>
            <h2 className="text-3xl">All catergory</h2>
            <div >
                <h1 className='text-center font-semibold text-xl bg-[#E7E7E7] min-w-64 h-16 flex items-center justify-center mt-4 rounded-md'>National News</h1>

                {
                    categories.map(category=><Link className='block ml-16 text-xl mt-8 text-[#9F9F9F] font-medium' key={category.id}>{category.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;