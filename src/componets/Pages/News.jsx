const News = ({ news }) => {
  const { author } = news;
  return (
    <div className="card border-2  bg-base-100 w-full rounded-md  mt-8 ">
      <div className="flex bg-[#F3F3F3] rounded-t-md h-20 p-4">
        <img className="h-10 rounded-badge mr-2" src={author.img} alt="" />
        <div>
        <p>{author.name}</p>
        <p>{author.published_date}</p>
        </div>
      </div>
      
      <figure className="p-4">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default News;
