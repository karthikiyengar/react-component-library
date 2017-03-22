import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { Label, Info, Error, Wrapper } from '../themes/default'

const StyledTextField = styled.input`
  border: 1px;
  border-style: solid;
  border-color: ${props => props.error ? props.theme.danger : props.theme.gray};
  border-radius: ${props => props.theme.radius};
  height: ${props => props.theme.height};
  padding: ${props => props.theme.padding};

  &:focus {
    border-color: ${props => props.error ? props.theme.danger : props.theme.primary};
    outline: none;
  }

  &:disabled {
    background: ${props => props.theme.disabled};
  }
`

class TextField extends React.Component {
  static propTypes = {
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    label: PropTypes.string,
    info: PropTypes.string,
    input: PropTypes.object, // passed in by redux-form
    className: PropTypes.string,
    placeholder: PropTypes.string,
    password: PropTypes.bool,
    disabled: PropTypes.bool,
  }
  handleChange(e) {
    const { onChange, input } = this.props
    if (onChange) onChange(e.target.value)
    if (input) input.onChange(e.target.value)
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
    const { error, value, placeholder, input, className, label, info, meta, isPassword, disabled } = this.props
    const reduxFormError = (meta) => (meta && meta.invalid && meta.touched) ? meta.error : null
    const currentValue = input ? input.value : value
    const errorMessage = input ? reduxFormError(meta) : error
    return (
      <Wrapper className={className}>
        { label && <Label>{label}</Label> }
        <StyledTextField
          type={isPassword ? 'password' : 'text'}
          placeholder={placeholder}
          onChange={this.handleChange.bind(this)}
          onFocus={this.handleFocus.bind(this)}
          onBlur={this.handleBlur.bind(this)}
          value={currentValue}
          disabled={disabled}
          error={!!errorMessage}
        />
        { !errorMessage && info && <Info>{info}</Info> }
        { errorMessage && <Error>{errorMessage}</Error> }
      </Wrapper>
    )
  }
}

export default TextField
