import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Dropzone from './index'

storiesOf('Dropzone', module)
  .add('default', () => <Dropzone label="Upload Logo" />)
