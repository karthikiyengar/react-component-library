import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './Button/index.js';
import Dropdown from './Dropdown/index.js';
import './globals.css';
import './icons.css';

const options = [{
  label: 'Option',
  value: 'option'
}];

storiesOf('Dropdown', module)
  .add('default', () => (
    <Dropdown options={options} />
  ));

storiesOf('Button', module)
  .add('default', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('default-disabled', () => (
    <Button onClick={action('clicked')} disabled>Hello Button</Button>
  ))
  .add('default-block', () => (
    <div>
      <Button onClick={action('clicked')} block>Hello Button</Button>
    </div>
  ))
  .add('default-with-icon', () => (
    <div>
      <Button onClick={action('clicked')} icon='icon-library'>Hello Button</Button>
    </div>
  ))
  .add('primary', () => (
    <Button type='primary' onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('secondary', () => (
    <Button type='secondary' onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('success', () => (
    <Button type='success' onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('danger', () => (
    <Button type='danger' onClick={action('clicked')}>Hello Button</Button>
  ));
