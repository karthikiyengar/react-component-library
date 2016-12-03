import React, { PropTypes } from 'react';
import styles from './styles';
import cssModules from 'react-css-modules';

@cssModules(styles)
class Card extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }
  render() {
    const { padding } = this.props;
    const inlineStyle = padding ? { padding } : {};
    return (
      <div styleName='container' style={inlineStyle}>
        { this.props.children }
      </div>
    );
  }
}

export default Card;
