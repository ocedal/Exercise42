import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '200px 200px 200px',
    gridAutoFlow: 'row dense',
    boxSizing: 'border-box',
    fontSize: '0',
  },
}))

function Posts({ posts, loading }) {
  const classes = useStyles()
  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    <div className={classes.root}>
      {posts.map((image) => (
        <div
          key={image.src}
          style={{
            gridColumnEnd: `span ${image.width / 200}`,
            gridRowEnd: `span ${image.height / 200}`,
          }}
        >
          <img src={image.src} alt={image.src} />
        </div>
      ))}
    </div>
  )
}

export default Posts
