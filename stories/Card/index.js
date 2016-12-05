import React, { PropTypes } from 'react';
import styles from './styles';
import cssModules from 'react-css-modules';

@cssModules(styles)
class Card extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
    padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    block: PropTypes.bool
  }
  render() {
    const { padding, block } = this.props;
    const inlineStyle = padding ? { padding } : {};
    return (
      <div styleName={block ? 'container-block' : 'container'} style={inlineStyle}>
        { this.props.children }
      </div>
    );
  }
}

export default Card;
