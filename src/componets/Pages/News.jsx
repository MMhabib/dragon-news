
import { Link } from 'react-router-dom';
const News = ({ news }) => {

  const { author ,total_view,title,details ,image_url,rating,_id,category_id
    
  } = news;
  return (
    <div className="card border-2  bg-base-100 w-full rounded-md  mt-6 ">
      <div className="flex bg-[#F3F3F3] rounded-t-md h-20 p-4">
        <img className="h-10 rounded-badge mr-2" src={author.img} alt="" />
        <div>
        <p>{author.name}</p>
        <p>{author.published_date}</p>
        </div>
      </div>
      
      <figure className="p-4">
        <img
          src={image_url}
          
        />
      </figure>
      <div className="card-body">
        {
        details.length>200?
        <p>{details.slice(0,200)}<Link  className='text-red-700 ml-2 ' to={`/news/${category_id} ` }>Read more</Link> </p>
        :<p>{details}</p>
    
        }
        
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default News;
