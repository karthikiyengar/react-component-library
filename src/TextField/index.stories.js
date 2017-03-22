import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import TextField from './index'

storiesOf('TextField', module)
  .add('default', () => {
    return <TextField onChange={action('changed')} />
  })
  .add('default with error', () => {
    return <TextField onChange={action('changed')} error="Some error message which is critical" label="Full Name" info="Your name right here" />
  })
