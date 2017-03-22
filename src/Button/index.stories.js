import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Button from './index'
import icon from '../icon.svg'

storiesOf('Button', module)
  .add('default', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('disabled', () => <Button onClick={action('clicked')} disabled>Hello Button</Button>)
  .add('block', () => <Button onClick={action('clicked')} block>Hello Button</Button>)
  .add('with icon', () => <Button onClick={action('clicked')} icon={icon}>Hello Button</Button>)
  .add('primary', () => <Button nature="primary" onClick={action('clicked')}>Hello Button</Button>)
  .add('secondary', () => <Button nature="secondary" onClick={action('clicked')}>Hello Button</Button>)
  .add('success', () => <Button nature="success" onClick={action('clicked')}>Hello Button</Button>)
  .add('danger', () => <Button nature="danger" onClick={action('clicked')}>Hello Button</Button>)
