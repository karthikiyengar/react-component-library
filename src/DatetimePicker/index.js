import React, { PropTypes } from 'react'
import ReactDatetime from 'react-datetime'
import styled, { injectGlobal } from 'styled-components'
import { Label, Info, Error, Wrapper } from '../themes/default'
import vendorCss from './vendor'

injectGlobal`${vendorCss}`

const StyledPicker = styled(ReactDatetime)`
  input {
    border: 1px solid ${props => props.error ? props.theme.danger : props.theme.gray};
    border-radius: ${props => props.theme.radius};
    height: ${props => props.theme.height};
    padding: ${props => props.theme.padding};
    width: 100%;
  }

  .rdtPicker {
    padding: 0;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
    margin-top: 3px;
  }

  th, td {
    border: 0;
    padding: 0;
    margin: 0;
  }
  thead {
    background: ${props => props.theme.lightgray}
  }
  &:focus {
    border-color: ${props => props.error ? props.theme.danger : props.theme.primary};
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`

class Datepicker extends React.Component {
  static propTypes = {
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    label: PropTypes.string,
    info: PropTypes.string,
    input: PropTypes.object, // passed in by redux-form
    className: PropTypes.string,
    placeholder: PropTypes.string,
  }
  handleChange(args) {
    const { onChange, input } = this.props
    if (onChange) onChange(args)
    if (input) input.onChange(args)
  }
  handleFocus(e) {
    const { onFocus, input } = this.props
    if (onFocus) onFocus(e)
    if (input) input.onFocus(e)
  }
  handleBlur(e) {
    const { onBlur, input } = this.props
    if (onBlur) onBlur(e)
    if (input) input.onBlur(input.value)
  }
  render() {
    const { error, value, input, className, label, info, meta, placeholder } = this.props
    const reduxFormError = (meta) => (meta && meta.invalid && meta.touched) ? meta.error : null
    const currentValue = input ? input.value : value
    const errorMessage = input ? reduxFormError(meta) : error
    return (
      <Wrapper className={className} >
        { label && <Label>{label}</Label> }
        <StyledPicker 
          inputProps={{
            placeholder: placeholder || 'Select Date'
          }} 
          {...this.props} 
          selected={currentValue} 
          onChange={this.handleChange.bind(this)} 
          onFocus={this.handleFocus.bind(this)} 
          onBlur={this.handleBlur.bind(this)} 
          value={currentValue} 
          error={!!errorMessage} />
        { !errorMessage && info && <Info>{info}</Info> }
        { errorMessage && <Error>{errorMessage}</Error> }
      </Wrapper>
    )
  }
}

export default Datepicker
