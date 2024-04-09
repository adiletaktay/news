import React from 'react'
import './App.scss'
import { NewsBlock } from './NewsBlock'

function App() {
  const [newspaper, setNewspaper] = React.useState([]);

  React.useEffect(() => {
    const uniqueId = () => String(
      Date.now().toString(32) +
        Math.random().toString(16)
    ).replace(/\./g, '');
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c8a67f82461f465aa0a54b7e2ff314e6&pageSize=6';
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
  }, []);

  return (
    <>
      <div className='container'>
        <header>
          <h1 className="header-title">NEWS</h1>
        </header>
        <div className='content'>
          {
            newspaper.map(obj =>
              <NewsBlock key={obj.id} {...obj} />)
          }
        </div>
      </div>
    </>
  )
}

export default App
