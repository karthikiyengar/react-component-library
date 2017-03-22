import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { Label, Info, Error } from '../themes/default'

const StyledTextArea = styled.textarea`
  border: 1px solid ${props => props.error ? props.theme.danger : props.theme.gray};
  border-radius: ${props => props.theme.radius};
  height: ${props => props.theme.height * 2};
  padding: ${props => props.theme.padding};

  &:focus {
    border-color: ${props => props.error ? props.theme.error : props.theme.primary};
    outline: none;
  }
`

class TextArea extends React.Component {
  static propTypes = {
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    label: PropTypes.string,
    info: PropTypes.string,
    input: PropTypes.object, // passed in by redux-form
    className: PropTypes.string,
    placeholder: PropTypes.string,
  }
  handleChange = (e) => {
    const { onChange, input } = this.props
    if (onChange) onChange(e.target.value)
    if (input) input.onChange(e.target.value)
  }
  handleFocus = (e) => {
    const { onFocus, input } = this.props
    if (onFocus) onFocus(e)
    if (input) input.onFocus(e)
  }
  handleBlur = (e) => {
    const { onBlur, input } = this.props
    if (onBlur) onBlur(e)
    if (input) input.onBlur(input.value)
  }
  render() {
    const { error, value, placeholder, input, className, label, info, meta } = this.props
    const reduxFormError = (meta) => (meta && meta.invalid && meta.touched) ? meta.error : null
    const currentValue = input ? input.value : value
    const errorMessage = input ? reduxFormError(meta) : error
    return (
      <div styleName="container" className={className}>
        { label && <Label>{label}</Label> }
        <StyledTextArea
          placeholder={placeholder}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          value={currentValue}
          error={!!errorMessage}
        />
        { !errorMessage && info && <Info>{info}</Info> }
        { errorMessage && <Error>{error}</Error> }
      </div>
    )
  }
}

export default TextArea
