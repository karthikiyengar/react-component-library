import React, { PropTypes } from 'react'
import ReactDropzone from 'react-dropzone'
import styled from 'styled-components'
import { Label, Info, Error } from '../themes/default'

const StyledDropzone = styled(ReactDropzone)`
  border: 1px dashed ${props => props.error ? props.theme.danger : props.theme.primary};
  border-radius: ${props => props.theme.radius};
  padding: ${props => props.theme.padding};
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`

class Dropzone extends React.Component {
  static propTypes = {
    onDrop: PropTypes.func,
  }
  constructor(props) {
    super(props)
    this.state = {
      file: null,
    }
  }
  handleDrop(files) {
    this.setState({
      file: files[0].name,
    })
    if (this.props.input) {
      this.props.input.onChange(files)
    }
    this.props.onDrop ? this.props.onDrop(files) : null
  }
  render() {
    const { placeholder, className, label, error, info } = this.props
    const { input, meta, ...rest } = this.props; // eslint-disable-line
    const reduxFormError = (meta) => (meta && meta.invalid && meta.touched) ? meta.error : null
    const errorMessage = input ? reduxFormError(meta) : error
    return (
      <div styleName="container" className={className}>
        { label && <Label>{label}</Label> }
        <StyledDropzone {...rest} className={`dropzone ${errorMessage ? 'dropzone-error' : ''}`} onDrop={this.handleDrop.bind(this)}>
          { this.state.file ? this.state.file : placeholder || 'Drop files or click here to upload' }
        </StyledDropzone>
        { !errorMessage && info && <Info>{info}</Info> }
        { errorMessage && <Error>{errorMessage}</Error> }
      </div>
    )
  }
}

export default Dropzone
