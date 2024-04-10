import React from 'react'
import { NewsBlock } from './NewsBlock'
import { Search } from './Search';

export const  Home = () => {
    const [newspaper, setNewspaper] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    
    React.useEffect(() => {
      const uniqueId = () => String(
        Date.now().toString(32) +
          Math.random().toString(16)
      ).replace(/\./g, '');
      let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c8a67f82461f465aa0a54b7e2ff314e6&pageSize=6';
      url += searchValue ? `&q=${searchValue}` : '';
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = function() {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.response);
          const articles = response.articles.map(a => ({...a, id: uniqueId()}));
          setNewspaper(articles);
        }
      };
      xhr.send();
    }, [searchValue]);

    return (
        <>
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            <div className='content'>
                {
                newspaper.map(obj =>
                <NewsBlock key={obj.id} {...obj} />)
            }
            </div>
        </>
    )
}