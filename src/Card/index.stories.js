import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Card from './index'


storiesOf('Card', module)
  .add('default', () => <Card><span>Lorem ipsum dolor sit amet</span></Card>)
  .add('block', () => <Card block><span>Lorem ipsum dolor sit amet</span></Card>)
  .add('with custom padding', () => <Card padding={'20px 20px 30px'}><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></Card>)
