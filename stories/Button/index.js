import React, { PropTypes} from 'react';
import styles from './styles';
import cssModules from 'react-css-modules';
import cx from 'classnames';

class Button extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger']),
    children: PropTypes.node,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    icon: PropTypes.string,
    className: PropTypes.string,
    submit: PropTypes.bool
  }
  render() {
    const { onClick, type, children, disabled, block, icon, submit, className } = this.props;
    return (
      <button type={submit ? 'submit' : 'button'} styleName={cx(type || 'container', { disabled, block })} onClick={(e) => !disabled && onClick ? onClick(e) : null} className={className}>
        { icon && <i className={icon} styleName='icon' />}
        <span styleName='label'>
          { children || 'Done' }
        </span>
      </button>
    );
  }
}

export default cssModules(styles, {
  allowMultiple: true
})(Button);
