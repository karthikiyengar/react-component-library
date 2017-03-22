import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Chance from 'chance'
import ImageList from './index'

const chance = new Chance()
const images = Array(5).fill(null).map(item => ({
  id: chance.guid(),
  label: chance.city(),
  image: `https://unsplash.it/200?random&${chance.word()}`,
}))

storiesOf('ImageList', module)
  .add('default', () => <ImageList data={images} onItemClick={action('clicked')} />)
  .add('with active', () => <ImageList data={images} onItemClick={action('clicked')} active={images[4].id} />)
  .add('with active and active style disabled', () => <ImageList data={images} onItemClick={action('clicked')} active={images[2].id} disableActiveStyle />)
  .add('vertical', () => <ImageList data={images} onItemClick={action('clicked')} vertical />)
  .add('custom image height', () => <ImageList data={images} onItemClick={action('clicked')} height={50} width={50} />)

