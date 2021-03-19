import React, { useState, useEffect } from 'react'
import Posts from './components/Posts'
import PaginationComp from './components/Pagination'
import FormComp from './components/Form'

export default function Ex42() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(5)

  useEffect(() => {
    setLoading(true)
    var xhttp = new XMLHttpRequest()
    xhttp.open('GET', 'pages.json', true)
    xhttp.onload = function () {
      if (this.status === 200) {
        let response = JSON.parse(this.responseText)
        let imgArr = response.Page.images
        setPosts(imgArr)
      }
    }
    xhttp.send()
    setLoading(false)
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const numOfImages = (num) => {
    setCurrentPage(1)
    setPostsPerPage(num)
  }

  return (
    <div>
      <Posts posts={currentPosts} loading={loading}></Posts>
      <FormComp val={postsPerPage} numOfImages={numOfImages} />
      <PaginationComp
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  )
}
