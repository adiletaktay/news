import { Link } from "react-router-dom"

export const NewsBlock = ({url, urlToImage, title, description, publishedAt, author}) => {
    return (
        <div className="news-block">
            <Link className="news-block__main" to={url} target="_blank">
                <img className='news-block__img' src={urlToImage} alt='news'></img>
                <h2 className='news-block__title'>{title}</h2>
            </Link>
            <div className='news-block__subtitle'>{description}</div>
            <div className='news-block__extra'>
                <div className='news-block__date'>
                    {new Date(publishedAt).toLocaleDateString()}
                </div>
                <div className='news-block__author'>{author}</div>
            </div>
        </div>
    )
}