import React, { PropTypes } from 'react'
import ReactDatepicker from 'react-datepicker'
import styled from 'styled-components'
import 'react-datepicker/dist/react-datepicker.min.css'
import { Label, Info, Error, Wrapper } from '../themes/default'

const StyledPicker = styled(ReactDatepicker)`
  border: 1px solid ${props => props.theme.gray};
  border-radius: ${props => props.theme.radius};
  height: ${props => props.theme.height};
  padding: ${props => props.theme.padding};
  width: 100%;

  &:focus {
    border-color: ${props => props.error ? props.theme.danger : props.theme.primary};
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
  .react-datepicker__input-container {
    height: height;
    width: 100%;
  }
  .react-datepicker__current-month {
    font-weight: inherit;
  }

  .react-datepicker__header {
    background: color-default;
  }

  .react-datepicker__triangle {
    border-bottom-color: color-default !important;
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
        <StyledPicker placeholderText={placeholder || 'Select Date'} {...this.props} selected={currentValue} onChange={this.handleChange.bind(this)} onFocus={this.handleFocus.bind(this)} onBlur={this.handleBlur.bind(this)} value={currentValue} styleName={errorMessage ? 'datepicker-error' : 'datepicker'} className={className} />
        { !errorMessage && info && <Info>{info}</Info> }
        { errorMessage && <Error>{errorMessage}</Error> }
      </Wrapper>
    )
  }
}

export default Datepicker
