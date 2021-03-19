import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  pagination: {
    listStyle: 'none',
    padding: 0,
    margin: '15px 0 0 0',
    display: 'flex',
  },
  item: {
    margin: '15px 5px',
    '&:active': {
      background: '#b3ffb3',
    },
  },
  link: {
    textDecoration: 'none',
    color: '#009900',
    cursor: 'pointer',
  },
})

function PaginationComp({ postsPerPage, totalPosts, paginate }) {
  const classes = useStyles()
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <div>
      <nav>
        <ul className={classes.pagination}>
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={classes.item}
              onClick={() => paginate(number)}
            >
              <button href='#' className={classes.link}>
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
export default PaginationComp
