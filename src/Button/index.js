import React, { PropTypes } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  align-items: center;
  background: ${props => props.nature ? props.theme[props.nature] : props.theme.default};
  color: ${props => props.nature ? props.theme.white : 'initial'};
  border-radius: ${props => props.theme.radius};;
  border: 0;
  display: inline-flex;
  height: ${props => props.theme.height};
  justify-content: center;
  outline: none;
  padding: 0 20px;
  user-select: none;
  white-space: nowrap;
  width: ${props => props.block ? '100%' : 'auto'};

  &:hover {
    background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0.1));
    cursor: pointer;
  }

  &:active {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15) inset, 0 0 6px rgba(0, 0, 0, 0.2) inset;
  }

  &:disabled {
    background: {props => props.theme.lightgray};
    cursor: not-allowed;
    opacity: 0.4;
    
    &:hover {
      background-image: none;
      cursor: not-allowed;
    }
  }
`

const Icon = styled.img`
  height: 15px;
  width: 15px;
  margin-right: 8px;
`

class Button extends React.Component {
  static propTypes = {
    block: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node,
    icon: PropTypes.string,
    nature: PropTypes.oneOf(['primary', 'secondary', 'danger', 'success']),
    type: PropTypes.oneOf(['submit', 'button']),
  }
  render() {
    return (
      <StyledButton {...this.props} onClick={(e) => !this.props.disabled && this.props.onClick ? this.props.onClick(e) : null}>
        {this.props.icon && <Icon src={this.props.icon} />}
        <span>
          {this.props.children || 'Done'}
        </span>
      </StyledButton>
    )
  }
}

export default Button
