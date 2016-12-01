import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import Select from 'react-select';
import '!style!css!react-select/dist/react-select.css';
import styles from './styles/dropdown.css';
import config from './../config.css';

@CSSModules({...config, ...styles})
class Dropdown extends React.Component {
  static propTypes = {
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
  }
  render() {
    const { error, label } = this.props;
    return (
      <div styleName='container'>
        <Select {...this.props} className={error ? 'Select-error' : null} />
      </div>
    );
  }
}

export default Dropdown;
