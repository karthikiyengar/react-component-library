import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { Label } from '../themes/default'

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: ${props => props.vertical ? 'column' : 'row'}
  flex-wrap: wrap;
`

const Item = styled.div`
  align-items: center;
  display: flex;
  margin-right: 15px;
  padding: 5px;
  color: ${props => props.active ? props.theme.primary : 'inherit'};
  font-weight: ${props => props.active ? 'bold' : 'inherit'};

  &:hover {
    color: ${props => props.theme.primary};
    cursor: pointer;
  }
  &:last-child {
    margin-right: 0;
  }
`

const Image = styled.img`
  border-radius: 50%;
  height: ${props => props.height ? props.height : '25px'};
  margin-right: 10px;
  user-select: none;
  height: ${props => props.width ? props.width : '25px'};
`

class ImageList extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      image: PropTypes.string,
    })).isRequired,
    onItemClick: PropTypes.func,
    disableActiveStyle: PropTypes.bool,
    vertical: PropTypes.bool,
    height: PropTypes.string,
    width: PropTypes.string,
    active: PropTypes.string,
  }

  static defaultProps = {
    data: [],
    disableActiveStyle: false,
  };

  handleIconClick(item) {
    if (typeof this.props.onItemClick === 'function') {
      this.props.onItemClick(item)
    }
  }

  render() {
    const { data, disableActiveStyle, vertical, height, width, active } = this.props
    return (
      <Wrapper vertical={vertical}>
        {
          data.map(item => (
            <Item active={item.id === active && !disableActiveStyle} key={item.id} onClick={() => this.handleIconClick(item)}>
              <Image src={item.image} role="presentation" height={height} width={width} />
              <Label>{item.label}</Label>
            </Item>
          ))
        }
      </Wrapper>
    )
  }
}

export default ImageList
