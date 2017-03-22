import React, { PropTypes } from 'react'
import styled from 'styled-components'


const StyledCard = styled.div`
  background: color-light;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, .06);
  display: ${props => props.block ? 'block' : 'inline-block'};
  width: ${props => props.block ? '100%' : 'auto'};
  padding: ${props => props.padding ? props.padding : '25px'};
  transition: all 450ms ease-in-out;

  &:hover {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, .15);
  }
`

function Card(props) {
  return (
    <StyledCard>
      { props.children }
    </StyledCard>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  block: PropTypes.bool,
  className: PropTypes.string,
}

export default Card
