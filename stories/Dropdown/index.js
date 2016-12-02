import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import Select from 'react-select';
import '!style!css!react-select/dist/react-select.css';
import styles from './styles';
import config from './../config.css';

@CSSModules({...config, ...styles})
class Dropdown extends React.Component {
  static propTypes = {
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    label: PropTypes.string,
    info: PropTypes.string,
    input: PropTypes.object, // passed in by redux-form
    className: PropTypes.string
  }
  handleChange(args) {
    const { onChange, input } = this.props;
    if (onChange) onChange(args);
    if (input) input.onChange(args ? args[this.props.valueKey || 'value'] : null);
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
    const { error, value, input, className, label, info, meta } = this.props;
    const reduxFormError = (meta) => (meta && meta.invalid && meta.touched) ? meta.error : null;
    const currentValue = input ? input.value : value;
    const errorMessage = input ? reduxFormError(meta) : error;
    return (
      <div styleName='container' className={className} >
        { label && <span styleName='label'>{label}</span> }
        <div styleName='select'>
          <Select clearable={false} searchable={false} {...this.props} className={errorMessage ? 'Select-error' : null} onChange={this.handleChange.bind(this)} onFocus={this.handleFocus.bind(this)} onBlur={this.handleBlur.bind(this)} value={currentValue} />
        </div>
        { !errorMessage && info && <span styleName='info'>{info}</span> }
        { errorMessage && <span styleName='error'>{errorMessage}</span> }
      </div>
    );
  }
}

export default Dropdown;
