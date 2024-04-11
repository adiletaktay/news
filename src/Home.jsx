import React from 'react'
import { NewsBlock } from './NewsBlock'
import { Search } from './Search';
import { Pagination } from './Pagination';
import defaultImage from './assets/default-image.jpg'

export const  Home = () => {
    const [newspaper, setNewspaper] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [currentPage, setCurrentPage] = React.useState(1);
    const pageCount = React.useRef(1);

    React.useEffect(() => {
      const uniqueId = () => String(
        Date.now().toString(32) +
          Math.random().toString(16)
      ).replace(/\./g, '');
      let url = `https://newsapi.org/v2/top-headlines?page=${currentPage}&country=us&apiKey=5ec33b15b5654516b7daa7b59f2c8399&pageSize=6`;
      url += searchValue ? `&q=${searchValue}` : '';
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = function() {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.response);
          const articles = response.articles.map(a => ({...a, urlToImage: a.urlToImage || defaultImage,  id: uniqueId()}));
          setNewspaper(articles);
          pageCount.current = Math.ceil(response.totalResults / 6);
        }
      };
      xhr.send();
    }, [searchValue, currentPage]);

    return (
        <>
            <Search setSearchValue={setSearchValue} setCurrentPage={setCurrentPage} />
            <div className='content'>
                { newspaper.length ? 
                    newspaper.map(obj =>
                    <NewsBlock key={obj.id} {...obj} />)
                    : <div className='not-found'> 
                    <h1>
                        <span>😕</span>
                        <br />
                        Nothing found
                    </h1>
                </div>
                }
            </div>
            <Pagination currentPage={currentPage} pageCount={pageCount.current} onChangePage={number => setCurrentPage(number)}/>
        </>
    )
}