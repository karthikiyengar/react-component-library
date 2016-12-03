import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './Button';
import Dropdown from './Dropdown';
import TextField from './TextField';
import ImageList from './ImageList';
import IconList from './IconList';
import Chance from 'chance';
import { createStore, combineReducers } from 'redux';
import { Field, reduxForm, reducer as form } from 'redux-form';
import { Provider } from 'react-redux';
import './globals.css';
import './icons.css';

const store = createStore(combineReducers({ form }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const chance = new Chance();

const images = Array(5).fill(null).map(item => ({
  id: chance.guid(),
  label: chance.city(),
  image: `https://unsplash.it/200?random&${chance.word()}`
}));

const options = Array(5).fill(null).map(item => ({
  label: chance.name(),
  value: chance.guid()
}));

const icons = Array(5).fill(null).map(item => ({
  id: chance.guid(),
  label: chance.sentence({words: 2}),
  icon: chance.pickone(['icon-printer', 'icon-download', 'icon-search', 'icon-check', 'icon-coin'])
}));

const DefaultTextField = React.createClass({
  getInitialState() {
    return {
      value: ''
    };
  },
  render() {
    const { onChange, ...rest } = this.props;
    return <TextField onChange={(value) => {
      onChange ? onChange(value) : null;
      this.setState({
        value
      });
    }} value={this.state.value} {...rest} placeholder='Enter Name' />;
  }
});

const DefaultDropdown = React.createClass({
  getInitialState() {
    return {
      value: options[0].value
    };
  },
  render() {
    const { onChange, ...rest } = this.props;
    return <Dropdown options={options} onChange={(args) => {
      onChange ? onChange(args) : null;
      this.setState({
        value: args ? args.value : null
      });
    }} value={this.state.value} {...rest} />;
  }
});

let TextFieldWrapper = React.createClass({
  render() {
    return <Field component={TextField} name='fullName' options={options} onChange={action('changed')} label='Full Name' info='This field is used to enter your full name' placeholder='Enter Name' />;
  }
});

storiesOf('IconList', module)
  .add('default', () => <IconList data={icons} onItemClick={action('clicked')} />)
  .add('with active', () => <IconList data={icons} onItemClick={action('clicked')} active={icons[1].id} />)
  .add('with active and active style disabled', () => <IconList data={icons} onItemClick={action('clicked')} active={icons[1].id} disableActiveStyle />)
  .add('vertical', () => <IconList data={icons} onItemClick={action('clicked')} vertical />);

storiesOf('ImageList', module)
  .add('default', () => <ImageList data={images} onItemClick={action('clicked')} />)
  .add('with active', () => <ImageList data={images} onItemClick={action('clicked')} active={images[4].id} />)
  .add('with active and active style disabled', () => <ImageList data={images} onItemClick={action('clicked')} active={images[2].id} disableActiveStyle />)
  .add('vertical', () => <ImageList data={images} onItemClick={action('clicked')} vertical />)
  .add('custom image height', () => <ImageList data={images} onItemClick={action('clicked')} imageHeight={40} />);

storiesOf('Button', module)
  .add('default', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('disabled', () => <Button onClick={action('clicked')} disabled>Hello Button</Button>)
  .add('block', () => <Button onClick={action('clicked')} block>Hello Button</Button>)
  .add('with icon', () => <Button onClick={action('clicked')} icon='icon-library'>Hello Button</Button>)
  .add('primary', () => <Button type='primary' onClick={action('clicked')}>Hello Button</Button>)
  .add('secondary', () => <Button type='secondary' onClick={action('clicked')}>Hello Button</Button>)
  .add('success', () => <Button type='success' onClick={action('clicked')}>Hello Button</Button>)
  .add('danger', () => <Button type='danger' onClick={action('clicked')}>Hello Button</Button>);

storiesOf('TextField', module)
  .addDecorator((getStory) => (
    <Provider store={store}>
      { getStory() }
    </Provider>
  ))
  .add('default', () => {
    return <DefaultTextField onChange={action('changed')} />;
  })
  .add('default with error', () => {
    return <DefaultTextField onChange={action('changed')} error='Some error message which is critical' label='Full Name' info='Your name right here' />;
  })
  .add('redux-form textfield', () => {
    TextFieldWrapper = reduxForm({ form: 'textfield' })(TextFieldWrapper);
    return <TextFieldWrapper />;
  })
  .add('redux-form textfield with error', () => {
    const validate = (values) => ({ fullName: !values.fullName || values.fullName.length < 10 ? 'Name needs to be 10 characters' : false });
    TextFieldWrapper = reduxForm({ form: 'dropdown', validate })(TextFieldWrapper);
    return <TextFieldWrapper />;
  });

storiesOf('Dropdown', module)
  .addDecorator((getStory) => (
    <Provider store={store}>
      { getStory() }
    </Provider>
  ))
  .add('default', () => {
    return <DefaultDropdown onChange={action('changed')} />;
  })
  .add('default with error', () => {
    return <DefaultDropdown onChange={action('changed')} error='Some error message which is critical' label='Full Name' info='Your name right here' />;
  })
  .add('redux-form dropdown', () => {
    let DropdownWrapper = React.createClass({
      render() {
        return <Field component={Dropdown} name='fullName' options={options} onChange={action('changed')} label='Full Name' info='This field is used to enter your full name' />;
      }
    });
    DropdownWrapper = reduxForm({ form: 'dropdown' })(DropdownWrapper);
    return <DropdownWrapper />;
  })
  .add('redux-form dropdown with error', () => {
    let DropdownWrapper = React.createClass({
      render() {
        return <Field component={Dropdown} name='fullName' options={options} onChange={action('changed')} label='Full Name' info='This field is used to enter your full name' />;
      }
    });
    const validate = (values) => ({ fullName: !values.fullName ? 'Value is incorrect' : false });
    DropdownWrapper = reduxForm({ form: 'dropdown', validate })(DropdownWrapper);
    return <DropdownWrapper />;
  });
