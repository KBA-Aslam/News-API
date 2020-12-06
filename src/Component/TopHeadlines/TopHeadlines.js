import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadlines = () => {
    const [articles, setArticles] = useState([]);
    useEffect( ()=> {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=418b211d83834fceab04d76c68d08319';
        fetch(url)
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    } ,[])

    return (
        <div>
            <h1>Top Headlines: {articles.length}</h1>
            {
            articles.map(article => <News article ={article}></News>)
            }
        </div>
    );
};

export default TopHeadlines;