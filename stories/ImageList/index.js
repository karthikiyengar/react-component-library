import React, { PropTypes } from 'react';
import styles from './styles';
import cssModules from 'react-css-modules';

class ImageList extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      image: PropTypes.string
    })).isRequired,
    onItemClick: PropTypes.func,
    disableActiveStyle: PropTypes.bool,
    vertical: PropTypes.bool,
    imageHeight: PropTypes.number,
    active: PropTypes.string
  }

  static defaultProps = {
    data: [],
    disableActiveStyle: false
  };

  handleIconClick(item) {
    if (typeof this.props.onItemClick === 'function') {
      this.props.onItemClick(item);
    }
  }

  render() {
    const { data, disableActiveStyle, vertical, imageHeight, active } = this.props;
    const inlineStyle = imageHeight ? { height: imageHeight, width: imageHeight } : {};
    return (
      <div styleName={vertical ? 'container-vertical' : 'container'}>
        {
          data.map(item => (
            <div styleName={item.id === active && !disableActiveStyle ? 'item-active' : 'item'} key={item.id} onClick={() => this.handleIconClick(item)}>
              <img src={item.image} role='presentation' styleName='image' style={inlineStyle} />
              <span styleName='label'>{item.label}</span>
            </div>
          ))
        }
      </div>
    );
  }
}

export default cssModules(styles)(ImageList);
