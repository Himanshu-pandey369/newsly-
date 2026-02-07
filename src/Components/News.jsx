import React from "react";
import NewsItem from "./NewsItem";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const { category, apikey, pageSize, isDark } = props;
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const CapitalizerFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async (pageNum = 1) => {
    let url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apikey}&page=${pageNum}&pageSize=${pageSize}`;
    setloading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setloading(false);
    setpage(pageNum);
  };

  useEffect(() => {
    updateNews(1);
  }, [category]);

  const fetchMoreData = async () => {
    let nextPage = page + 1;
    let url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apikey}&page=${nextPage}&pageSize=${pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setpage(nextPage);
  };

  return (
    <div className="news m-2">
      <h1 className="text-3xl font-bold text-center md:py-15 w-full">
        Newsly - Top {CapitalizerFirstLetter(category)} Headline
      </h1>
      {loading && <Spinner isDark={isDark} />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner isDark={isDark} />}
      >
        <div className="justify-center flex-wrap md:mx-30 my-5 flex gap-20">
          {articles.map((element) => (
            <NewsItem
              isDark={isDark}
              key={element.url}
              title={element.title}
              description={element.description}
              image={element.urlToImage}
              newsURL={element.url}
              author={element.author}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  category: "business",
  pageSize: 8,
};

News.propTypes = {
  category: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
