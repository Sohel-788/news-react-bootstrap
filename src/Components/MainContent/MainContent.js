import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import News from '../News/News';
const MainContent = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        const url = 'https://newsapi.org/v2/everything?q=Apple&from=2021-10-20&sortBy=popularity&apiKey=e892ab7de87f4bc9a1d2e35c9c17e50e';
        fetch(url)
            .then(res => res.json())
            .then(data => setNews(data.articles))
    }, [])
    return (
        <div className='text-center'>
            {
            news.length ===0 ?
            <Spinner animation="border"  />
            :
            <Row xs={1} md={2} className="g-4">
            {
                news.map(nw=> <News nw={nw}></News>)
            }
            </Row>
            

        }
        </div>

    );
};

export default MainContent;