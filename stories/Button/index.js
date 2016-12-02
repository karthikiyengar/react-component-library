import React, { PropTypes} from 'react';
import styles from './styles/button.css';
import CSSModules from 'react-css-modules';
import cx from 'classnames';

@CSSModules(styles, {
  allowMultiple: true
})
class Button extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger']),
    children: PropTypes.node,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    icon: PropTypes.string
  }
  render() {
    const { onClick, type, children, disabled, block, icon } = this.props;
    return (
      <div styleName={cx(type || 'container', { disabled, block })} onClick={(e) => !disabled && onClick ? onClick(e) : null}>
        { icon && <i className={icon} styleName='icon' />}
        <span styleName='label'>
          { children || 'Done' }
        </span>
      </div>
    );
  }
}

export default Button;
