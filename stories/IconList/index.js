// @flow
import React, { PropTypes } from 'react';
import styles from './styles/iconlist.css';
import cssModules from 'react-css-modules';

type State = { active: ?string };

@cssModules(styles)
class IconList extends React.Component {
  state: State
  constructor (props) {
    super(props);
    this.state = {
      active: props.active
    };
  }
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      id: PropTypes.string,
      icon: PropTypes.string
    })).isRequired,
    onIconClick: PropTypes.func
  }

  handleIconClick (item) {
    this.setState({
      active: item.id
    });
    if (typeof this.props.onIconClick === 'function') {
      this.props.onIconClick(item);
    }
  }

  render () {
    const { data } = this.props;
    const { active } = this.state;
    return (
      <div styleName='container'>
        {
          data.map((item) => {
            const isActive = item.id === active;
            return (
              <div styleName={isActive ? 'item-active' : 'item'} key={item.id} onClick={() => this.handleIconClick(item)}>
                <i className={item.icon} styleName='icon' />
                <span styleName='label'>{item.label}</span>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default IconList;
