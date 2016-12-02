import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import Select from 'react-select';
import '!style!css!react-select/dist/react-select.css';
import styles from './styles/dropdown.css';
import config from './../config.css';

@CSSModules({...config, ...styles})
class Dropdown extends React.Component {
  static propTypes = {
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    label: PropTypes.string,
    reduxForm: PropTypes.bool,
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
    const { error, value, input } = this.props;
    const currentValue = input ? input.value : value;
    return (
      <div styleName='container'>
        <Select {...this.props} className={error ? 'Select-error' : null} onChange={this.handleChange.bind(this)} onFocus={this.handleFocus.bind(this)} onBlur={this.handleBlur.bind(this)} value={currentValue} />
      </div>
    );
  }
}

export default Dropdown;
