import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Chance from 'chance'
import Dropdown from './index'

const chance = new Chance()

const options = Array(5).fill(null).map(() => ({
  label: chance.name(),
  id: chance.guid(),
}))


storiesOf('Dropdown', module)
  .add('default', () => {
    return <Dropdown onChange={action('changed')} options={options} />
  })
  .add('default with error', () => {
    return <Dropdown onChange={action('changed')} error="Some error message which is critical" label="Full Name" info="Your name right here" options={options} />
  })
