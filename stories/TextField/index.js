import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles';
import config from './../config.css';

@CSSModules({...config, ...styles})
export default class TextField extends React.Component {
  static propTypes = {
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    label: PropTypes.string,
    info: PropTypes.string,
    input: PropTypes.object, // passed in by redux-form
    className: PropTypes.string,
    placeholder: PropTypes.string,
    isPassword: PropTypes.bool
  }
  handleChange(e) {
    const { onChange, input } = this.props;
    if (onChange) onChange(e.target.value);
    if (input) input.onChange(e.target.value);
  }
  handleFocus(e) {
    const { onFocus, input } = this.props;
    if (onFocus) onFocus(e);
    if (input) input.onFocus(e);
  }
  handleBlur(e) {
    const { onBlur, input } = this.props;
    if (onBlur) onBlur(e);
    if (input) input.onBlur(input.value);
  }
  render() {
    const { error, value, placeholder, input, className, label, info, meta, isPassword } = this.props;
    const reduxFormError = (meta) => (meta && meta.invalid && meta.touched) ? meta.error : null;
    const currentValue = input ? input.value : value;
    const errorMessage = input ? reduxFormError(meta) : error;
    return (
      <div styleName='container' className={className}>
        { label && <span styleName='label'>{label}</span> }
        <input type={isPassword ? 'password' : 'text'} placeholder={placeholder} styleName={errorMessage ? 'input-error' : 'input'} onChange={this.handleChange.bind(this)} onFocus={this.handleFocus.bind(this)} onBlur={this.handleBlur.bind(this)} value={currentValue} />
        { !errorMessage && info && <span styleName='info'>{info}</span> }
        { errorMessage && <span styleName='error'>{errorMessage}</span> }
      </div>
    );
  }
}
