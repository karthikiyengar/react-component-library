import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './Button/index.js';
import Dropdown from './Dropdown/index.js';
import './globals.css';
import './icons.css';
import Chance from 'chance';
import { createStore, combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { Provider } from 'react-redux';
import { Field, reduxForm } from 'redux-form';


const store = createStore(combineReducers({ form }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const gen = new Chance();
const options = Array(5).fill(null).map(item => {
  return {
    label: gen.name(),
    value: gen.guid()
  };
});
console.log(options);
storiesOf('Dropdown', module)
  .addDecorator((getStory) => (
    <Provider store={store}>
      { getStory() }
    </Provider>
  ))
  .add('default', () => {
    const DropdownWrapper = React.createClass({
      getInitialState() {
        return {
          value: options[0].value
        };
      },
      render() {
        return <Dropdown options={options} onChange={(args) => {
          this.props.onChange(args);
          this.setState({
            value: args ? args.value : null
          });
        }} value={this.state.value} />;
      }
    });
    return <DropdownWrapper onChange={action('changed')} />;
  })
  .add('redux-form-dropdown', () => {
    let DropdownWrapper = React.createClass({
      render() {
        return <Field component={Dropdown} name='fullName' options={options} onChange={action('changed')} />;
      }
    });
    DropdownWrapper = reduxForm({ form: 'dropdown' })(DropdownWrapper);
    return <DropdownWrapper />;
  });

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
