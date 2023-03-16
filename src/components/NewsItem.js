import React,{useEffect, useState} from 'react'
import News from './News'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component';



export default function NewsItem(props) {
    const [article, setArticle] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [totalResults, setTotalResults] = useState(0);

    // const handle = () => {
    //     return props.category.charAt(0).toUpperCase() + props.category.slice(1);
    // }

    document.title = `NewsDekho - ${props.category.charAt(0).toUpperCase() + props.category.slice(1)}`

    const update = async() => {
        props.setProgress(10)
        let x = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=831e42f4826f44588cd108ff6799932d&page=${page}&pageSize=10`
        let data = await fetch(x);
        props.setProgress(50)
        let dataJSON = await data.json();
        props.setProgress(70)
        setArticle(dataJSON.articles)
        setTotalResults(dataJSON.totalResults)
        setLoading(false)
        props.setProgress(100)
    }

    useEffect(()=>{
        update();
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async() =>{
        let x = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=831e42f4826f44588cd108ff6799932d&page=${page+1}&pageSize=10`
        setPage(page+1)
        let data = await fetch(x);
        let dataJSON = await data.json();
        setArticle(article.concat(dataJSON.articles))
        setTotalResults(dataJSON.totalResults)
    }

        return (
            <>
            <div className='container my-3'>
                <h1 style={{marginTop : "5rem"}}>News Dekho - Latest News</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={article.length}
                    next={fetchMoreData}
                    hasMore={article.length!==totalResults}
                    loader={<Spinner/>}
                >
                {article.map((element,index) => {
                    return <div className="my-3" key={index}>
                        <News url={element.url} title={element.title} description={element.description} imgUrl={element.urlToImage} publish={element.publishedAt} author={element.author} />
                    </div>
                })


                }
                </InfiniteScroll>
                
            </div>
            </>
        )
    }

