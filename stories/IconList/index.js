import React, { PropTypes } from 'react';
import styles from './styles';
import cssModules from 'react-css-modules';

class IconList extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      id: PropTypes.string,
      icon: PropTypes.string
    })).isRequired,
    onItemClick: PropTypes.func,
    disableActiveStyle: PropTypes.bool
  }
  static defaultProps = {
    data: [],
    disableActiveStyle: false
  }

  handleIconClick(item) {
    if (typeof this.props.onItemClick === 'function') {
      this.props.onItemClick(item);
    }
  }

  render() {
    const { data, active, disableActiveStyle, vertical, iconSize } = this.props;
    const inlineStyle = iconSize ? { fontSize: iconSize } : {};
    return (
      <div styleName={vertical ? 'container-vertical' : 'container'}>
        {
          data.map((item) => {
            const isActive = item.id === active;
            return (
              <div styleName={isActive && !disableActiveStyle ? 'item-active' : 'item'} key={item.id} onClick={() => this.handleIconClick(item)}>
                <i className={item.icon} styleName='icon' style={inlineStyle} />
                <span styleName='label'>{item.label}</span>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default cssModules(styles)(IconList);
