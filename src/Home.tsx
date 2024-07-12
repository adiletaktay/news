import React from "react"
import { NewsBlock } from "./NewsBlock"
import { Search } from "./Search"
import { Pagination } from "./Pagination"
import defaultImage from "./assets/default-image.jpg"

interface Article {
  url: string
  urlToImage: string
  title: string
  description: string
  publishedAt: string
  author: string
  id: string
}

export const Home: React.FC = () => {
  const [newspaper, setNewspaper] = React.useState<Article[]>([])
  const [searchValue, setSearchValue] = React.useState<string>("")
  const [currentPage, setCurrentPage] = React.useState<number>(1)
  const [loading, setLoading] = React.useState<boolean>(false)
  const pageCount = React.useRef<number>(1)

  React.useEffect(() => {
    setLoading(true)
    const uniqueId = () => String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, "")
    let url = `https://newsapi.org/v2/top-headlines?page=${currentPage}&country=us&apiKey=5ec33b15b5654516b7daa7b59f2c8399&pageSize=6`
    url += searchValue ? `&q=${searchValue}` : ""
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.onload = function () {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.response)
        const articles: Article[] = response.articles.map((a: any) => ({
          ...a,
          urlToImage: a.urlToImage || defaultImage,
          id: uniqueId(),
        }))
        setNewspaper(articles)
        pageCount.current = Math.ceil(response.totalResults / 6)
      }
      setLoading(false)
    }
    xhr.send()
  }, [searchValue, currentPage])

  return (
    <>
      <Search setSearchValue={setSearchValue} setCurrentPage={setCurrentPage} />
      <div className="content">
        {loading ? (
          ""
        ) : newspaper.length ? (
          newspaper.map(obj => <NewsBlock key={obj.id} {...obj} />)
        ) : (
          <div className="not-found">
            <h1>
              <span>😕</span>
              <br />
              Nothing found
            </h1>
          </div>
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        pageCount={pageCount.current}
        onChangePage={number => setCurrentPage(number)}
      />
    </>
  )
}
