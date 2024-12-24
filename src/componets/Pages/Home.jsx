import { useEffect, useState } from "react";
import LeftSideNav from "../../Shared/Lefsidenav/LeftSideNav";
import RightSideNav from "../../Shared/Lefsidenav/RightSideNav/RightSideNav";
import Header from "./Header";
import Navbar from "./Navbar";
import Marquee from "react-fast-marquee";
import News from "./News";
const Home = () => {

const [newses,setNewses]=useState([]);
useEffect(()=>{
  fetch('news.json')
  .then(res=>res.json())
  .then(data=>setNewses(data))
},[])



  return (
    <div>
      <Header></Header>
      <div className="flex bg-[#F3F3F3] h-20 mb-4 ">
        <button className="btn btn-secondary rounded-none w-28 h-12 font-medium text-xl m-4 mr-0">Latest</button>
        <Marquee className="font-semibold text-lg">
  I can be a React component, multiple React components, or just some text.
</Marquee>
      </div>
      <Navbar></Navbar>
      
      {/* layout div/main div */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-2">
        <div>
            <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2">
            <h1 className="text-xl font-semibold">news comingg sooon</h1>
            {
              newses.map(news=><News key={news._id} news={news}></News>)
        
            }
        </div>
        <div>
            <RightSideNav></RightSideNav>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
