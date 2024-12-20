import LeftSideNav from "../../Shared/Lefsidenav/LeftSideNav";
import RightSideNav from "../../Shared/Lefsidenav/RightSideNav/RightSideNav";
import Header from "./Header";
import Navbar from "./Navbar";
import Marquee from "react-fast-marquee";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex bg-[#F3F3F3] h-20 p-4">
        <button className="btn btn-secondary rounded-none w-28 h-12 font-medium text-xl ">Latest</button>
        <Marquee className="font-semibold text-lg font-black">
  I can be a React component, multiple React components, or just some text.
</Marquee>
      </div>
      <Navbar></Navbar>
      
      {/* layout div/main div */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
            <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2">
            <h1 className="text-5xl">news comingg sooon</h1>
        </div>
        <div>
            <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
