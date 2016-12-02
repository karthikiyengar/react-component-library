import React, { PropTypes } from 'react';
import styles from './styles';
import CSSModules from 'react-css-modules';

@CSSModules(styles)
class ImageList extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      image: PropTypes.string
    })).isRequired,
    onItemClick: PropTypes.func,
    boldOnActive: PropTypes.bool,
    vertical: PropTypes.bool,
    imageHeight: PropTypes.number
  }

  static defaultProps = {
    boldOnActive: true
  };

  constructor(props) {
    super(props);
    this.state = {
      active: props.active
    };
  }

  handleIconClick(item) {
    this.setState({
      active: item.id
    });
    if (typeof this.props.onItemClick === 'function') {
      this.props.onItemClick(item);
    }
  }

  render() {
    const { data, boldOnActive, vertical, imageHeight } = this.props;
    console.log(boldOnActive);
    const { active } = this.state;
    const getLabelClass = (id) => id === active && boldOnActive ? 'label-active' : 'label';
    return (
      <div styleName={vertical ? 'container-vertical' : 'container'}>
        {
          data.map(item => (
            <div styleName='item' key={item.id} onClick={() => this.handleIconClick(item)}>
              <img src={item.image} role='presentation' styleName='image' style={{ height: imageHeight, width: 'auto' }} />
              <span styleName={getLabelClass(item.id)}>{item.label}</span>
            </div>
          ))
        }
      </div>
    );
  }
}

export default ImageList;
