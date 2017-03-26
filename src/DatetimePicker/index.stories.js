import React from 'react'
import moment from 'moment'
import { storiesOf, action } from '@kadira/storybook'
import Datepicker from './index'

storiesOf('DatetimePicker', module)
  .add('default', () => <Datepicker onChange={action('changed')} />)
  .add('with selected', () => <Datepicker value={moment()} onChange={action('changed')} />)
  .add('with redux form selected', () => <Datepicker input={{ value: moment(), onChange: f => f, onFocus: f => f, onBlur: f => f }} />)
  .add('with redux form error', () => <Datepicker input={{ value: moment(), onChange: f => f, onFocus: f => f, onBlur: f => f }} meta={{ error: 'Date is mandatory', invalid: true, touched: true }} />)
  .add('with error', () => <Datepicker error="Please pick a date" />)
