import React from 'react'
import { configure, addDecorator } from '@kadira/storybook'
import { ThemeProvider } from 'styled-components'

import theme from '../src/themes/default';

const req = require.context('../src', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(story => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module)
