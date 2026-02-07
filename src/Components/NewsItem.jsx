import React from "react";

const NewsItem=(props)=>{
    let { title, description, image, newsURL,author,isDark } = props;
    return (
      <div className={isDark?"card border border-gray-700 rounded-lg w-90":"card  border border-cyan-100 w-90 "}>
        <img src={image?image:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ijOIlXrA2X8E/v0/1200x675.png"} className="border border-black rounded-lg" />
        <div className="text">
          <h5 className="font-bold px-1">{title}</h5>
          <p className="py-3 px-2">{description?description:"Read article for more"}...</p>
          <p className="py-2 px-1 font-light">BY- {author?author:"Unknown"}</p>
          <a href={newsURL} target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-400 p-2 mx-3 my-1 rounded-full">Read More</button>
          </a>
        </div>
      </div>
    );
  }
export default NewsItem;
