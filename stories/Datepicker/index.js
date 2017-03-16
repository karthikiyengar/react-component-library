import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import Picker from 'react-datepicker';
import '!style!css!react-datepicker/dist/react-datepicker.min.css';
import styles from './styles';
import config from './../config.css';

class Datepicker extends React.Component {
  static propTypes = {
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    label: PropTypes.string,
    info: PropTypes.string,
    input: PropTypes.object, // passed in by redux-form
    className: PropTypes.string,
    placeholder: PropTypes.string
  }
  handleChange(args) {
    const { onChange, input } = this.props;
    if (onChange) onChange(args);
    if (input) input.onChange(args);
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
    const { error, value, input, className, label, info, meta, placeholder } = this.props;
    const reduxFormError = (meta) => (meta && meta.invalid && meta.touched) ? meta.error : null;
    const currentValue = input ? input.value : value;
    const errorMessage = input ? reduxFormError(meta) : error;
    return (
      <div styleName='container' className={className} >
        { label && <span styleName='label'>{label}</span> }
        <div>
          <Picker placeholderText={placeholder || 'Select Date'} {...this.props} selected={currentValue} onChange={this.handleChange.bind(this)} onFocus={this.handleFocus.bind(this)} onBlur={this.handleBlur.bind(this)} value={currentValue} styleName={errorMessage ? 'datepicker-error' : 'datepicker'} className={className} />
        </div>
        { !errorMessage && info && <span styleName='info'>{info}</span> }
        { errorMessage && <span styleName='error'>{errorMessage}</span> }
      </div>
    );
  }
}

export default cssModules({...config, ...styles})(Datepicker);
