import React from 'react'
import Ex42 from './Gallery'

const ex = {
  title: 'Ex42',
  component: Ex42,
}

const Template = (args) => <Ex42 {...args} />

export const Gallery = Template.bind({})
Gallery.args = {
  // height: '400px',
  // width: '600px',
}

export default ex
