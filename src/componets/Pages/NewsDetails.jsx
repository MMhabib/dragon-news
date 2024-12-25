import { useParams } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";


const NewsDetails = () => {
    const{id}=useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <p>kire ane ki</p>
            {
            <p>{id}</p>
            }
        </div>
    );
};

export default NewsDetails;