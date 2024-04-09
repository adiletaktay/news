export const NewsBlock = ({urlToImage, title, description, publishedAt, author}) => {
    return (
        <div className="news-block">
            <img className='news-block__img' src={urlToImage} alt='news'></img>
            <h2 className='news-block__title'>{title}</h2>
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