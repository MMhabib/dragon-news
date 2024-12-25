import { useParams } from "react-router-dom";


const NewsDetails = () => {
    const{id}=useParams();
    return (
        <div>
            <p>kire ane ki</p>
            {
            <p>{id}</p>
            }
        </div>
    );
};

export default NewsDetails;