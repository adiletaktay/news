import { Link } from "react-router-dom"
import defaultImage from './assets/default-image.jpg'

export const NewsBlock = ({url, urlToImage, title, description, publishedAt, author}) => {

    const addDefaultImg = event => {
        event.target.src = defaultImage
     }

    return (
        <div className="news-block">
            <Link className="news-block__main" to={url} target="_blank">
                <img className='news-block__img' src={urlToImage} onError={addDefaultImg} alt='news'></img>
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