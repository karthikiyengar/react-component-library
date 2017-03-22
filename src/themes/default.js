import styled, { injectGlobal } from 'styled-components'

injectGlobal`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    font-family: sans-serif;
  }
`

const theme = {
  primary: '#0078E7',
  secondary: '#42B8DD',
  default: '#e6e6e6',
  white: '#ffffff',
  success: '#1CB841',
  danger: '#CA3C3C',
  gray: '#cccccc',
  lightgray: '#f9f9f9',
  height: '35px',
  padding: '10px',
  radius: '4px',
}

export const Label = styled.div`
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  text-transform: capitalize;
`

export const Error = styled.div`
  color: ${props => props.theme.danger}
  font-size: 12px;
  margin-top: 5px;
`

export const Info = styled.div`
  font-size: 12px;
  margin-top: 5px;
`

export default theme
