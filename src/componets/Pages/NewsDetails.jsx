import { useLoaderData, useParams } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import RightSideNav from "../../Shared/Lefsidenav/RightSideNav/RightSideNav";

const NewsDetails = () => {
    const news = useLoaderData();
    
   const {id}=useParams();
//    console.log(id,news);
   const detail=news.find(detail=> detail._id===id);
   console.log(detail);

    return (
        <div>
            <Header />
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
                <div className=" card w-[820px] h-fit md:col-span-5 border-2">
                   
                    <div className="m-5">
                        <img className="w-[789px] h-[411px]" src={detail.image_url} alt="" />
                        <h1 className="font-bold text-2xl mt-4">{detail.title}</h1>
                        <p className="text-lg mt-4">{detail.details}</p>
                    </div>
                   
                </div>
                <div className="md:col-span-2 ml-6">
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;
