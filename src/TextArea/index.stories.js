import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import TextArea from './index'

storiesOf('TextArea', module)
  .add('default', () => <TextArea placeholder="Enter some text here" />)
