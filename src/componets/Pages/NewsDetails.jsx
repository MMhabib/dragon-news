import { useLoaderData, useParams } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import RightSideNav from "../../Shared/Lefsidenav/RightSideNav/RightSideNav";

const NewsDetails = () => {
    const news = useLoaderData();
    
    const { category_id } = useParams();
    console.log(category_id, news);
    const   sNews=news.find(sNews=>sNews.category_id==category_id)
    console.log(sNews);

    return (
        <div>
            <Header />
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
                <div className="md:col-span-5 border-2">
                   
                </div>
                <div className="md:col-span-2">
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;
