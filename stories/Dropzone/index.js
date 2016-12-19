import React, { PropTypes } from 'react';
import styles from './styles';
import config from './../config.css';
import CSSModules from 'react-css-modules';
import ReactDropzone from 'react-dropzone';

@CSSModules({...config, ...styles})
class Dropzone extends React.Component {
  static propTypes = {
    onDrop: PropTypes.func
  }
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
  }
  handleDrop(files) {
    this.setState({
      file: files[0].name
    });
    if (this.props.input) {
      this.props.input.onChange(files);
    }
    this.props.onDrop ? this.props.onDrop(files) : null;
  }
  render() {
    const { placeholder, className, label } = this.props;
    return (
      <div styleName='container' className={className}>
        { label && <span styleName='label'>{label}</span> }
        <ReactDropzone {...this.props} className='dropzone' onDrop={this.handleDrop.bind(this)}>
          { this.state.file ? this.state.file : placeholder || 'Drop files or click here to upload' }
        </ReactDropzone>
      </div>
    );
  }
}

export default Dropzone;
