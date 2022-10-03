import styled from 'styled-components'

const size = {
  mobile: '767px',
}

const device = {
  mobile: `(max-width:${size.mobile})`,
}

export const Header = styled.div`
  height: 50px;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 0 16rem;
  @media ${device.mobile} {
    padding: 0 2rem;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 980px;
  padding: 0 16rem;
  @media ${device.mobile} {
    padding: 0 2rem;
    max-width: 320px;
  }
`

export const ContainerSelect = styled.div`
  background-color: rgb(43, 43, 43);
  display: flex;
  flex-direction: column;
`

export const Logo = styled.div`
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMTYuOSA0MS4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMTYuOSA0MS4yOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxnIGlkPSJHcm91cF8xMDFfMV8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTAuMykiPgoJPGcgaWQ9Ikdyb3VwXzk0XzFfIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNC4wMjcgMS4xMTgpIj4KCQk8cGF0aCBpZD0iUGF0aF85Ml8xXyIgY2xhc3M9InN0MCIgZD0iTTIuMyw0MC4zYy0wLjYsMC0xLjItMC4yLTEuNi0wLjZjLTAuNS0wLjQtMC43LTEtMC43LTEuNlYwaDEuMnYzOGMwLDAuMywwLjEsMC42LDAuMiwwLjgKCQkJYzAuMiwwLjIsMC41LDAuMywwLjgsMC4zTDIuMyw0MC4zTDIuMyw0MC4zeiIvPgoJPC9nPgoJPGcgaWQ9Ikdyb3VwXzk1XzFfIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjUwNyA5LjMpIj4KCQk8cGF0aCBpZD0iUGF0aF85M18xXyIgY2xhc3M9InN0MCIgZD0iTTE1LjIsMTIuNWwtNC00LjFMNywxMi41bC03LTdWMGg1LjVsNS42LDUuNkwxNi43LDBoNS41djUuNUwxNS4yLDEyLjV6IE0xLjIsNUw3LDEwLjkKCQkJTDEwLjksN0w1LDEuMkgxLjJWNXogTTExLjMsN2wzLjksMy45TDIxLDVWMS4yaC0zLjlMMTEuMyw3eiIvPgoJPC9nPgoJPGcgaWQ9Ikdyb3VwXzk2XzFfIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjY3NiAxNC4yMSkiPgoJCTxwYXRoIGlkPSJQYXRoXzk0XzFfIiBjbGFzcz0ic3QwIiBkPSJNMTMuNCwxMi45bC0yLjMtMi4zbC0xLjIsMS4ybC0xLjItMS4ybC0yLjMsMi4zTDAsN1YwLjFsOC44LDguOEwxMCw3LjdsMS4yLDEuMmwyLjQtMi40CgkJCWwwLjgsMC44TDEyLDkuN2wxLjUsMS41bDUuMy00LjdWMi45TDE4LDMuNmwtMC44LTAuOEwyMCwwdjYuOUwxMy40LDEyLjl6IE0xLjIsNi42bDUuMyw0LjdMOCw5LjhMMS4yLDIuOVY2LjZ6IE05LjYsOS43bDAuNCwwLjQKCQkJbDAuNC0wLjRMOS45LDkuNEw5LjYsOS43eiIvPgoJPC9nPgoJPGcgaWQ9Ikdyb3VwXzk3XzFfIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMC41MiAwLjMpIj4KCQk8cGF0aCBpZD0iUGF0aF85NV8xXyIgY2xhc3M9InN0MCIgZD0iTTQuMiwxMi45TDAsOC42VjQuMUw0LjEsMGw0LjEsNC4xdjQuNkw0LjIsMTIuOXogTTEuMiw4LjJsMywzbDIuOC0zVjQuNmwtMi45LTNsLTIuOSwzVjguMnoKCQkJIi8+Cgk8L2c+Cgk8ZyBpZD0iR3JvdXBfOThfMV8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgNS43OTQpIj4KCQk8cGF0aCBpZD0iUGF0aF85Nl8xXyIgY2xhc3M9InN0MCIgZD0iTTE0LjYsMzEuNmMtNC40LDAtNy45LTEuMy0xMC41LTMuOUMwLDIzLjYsMCwxNy44LDAsMTcuNVYwaDEwLjV2MS4ySDEuMnYxNi40CgkJCWMwLjEsMi4zLDAuNiw0LjUsMS42LDYuNkM1LDI4LjMsOSwzMC40LDE0LjYsMzAuNGM0LjEsMCw3LjQtMS4yLDkuNy0zLjVjMy43LTMuNywzLjctOS40LDMuNy05LjRWMS4yaC05LjRWMGgxMC41djE3LjUKCQkJYzAsMC4yLDAsNi4xLTQuMSwxMC4yQzIyLjYsMzAuMywxOSwzMS42LDE0LjYsMzEuNnoiLz4KCTwvZz4KCTxnIGlkPSJHcm91cF85OV8xXyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMy42MjQgOS40MTcpIj4KCQk8cGF0aCBpZD0iUGF0aF85N18xXyIgY2xhc3M9InN0MCIgZD0iTTExLDExLjhMMCwwLjlMMC45LDBsMTAsMTAuMkwyMSwwbDEsMC45TDExLDExLjh6Ii8+Cgk8L2c+Cgk8cGF0aCBpZD0iUGF0aF85OF8xXyIgY2xhc3M9InN0MCIgZD0iTTQ3LjksMjkuMmg5LjN2LTAuNkg1NmMtMS41LDAtMS44LTAuNi0xLjgtMS44VjExLjZjMC0xLjMsMS4yLTEuOCwyLjktMS44VjkuM2gtOC4ydjAuNmwwLDAKCQljMiwwLDIuMywwLjUsMi4zLDEuOHY3SDQwLjl2LTdjMC0xLjIsMC41LTEuOCwyLjMtMS44VjkuM0gzNXYwLjZjMS44LDAuMSwyLjIsMC40LDIuMywxLjh2MTUuMmMtMC4xLDEuMy0xLDEuOC0yLjksMS44bDAsMHYwLjYKCQloOC44di0wLjZoLTAuNmMtMS42LDAtMS44LTAuOS0xLjgtMS44di03aDEwLjV2N2MwLDEuMy0wLjgsMS44LTIuOSwxLjhoLTAuNkw0Ny45LDI5LjJ6Ii8+Cgk8cGF0aCBpZD0iUGF0aF85OV8xXyIgY2xhc3M9InN0MCIgZD0iTTExNi45LDkuM0g5OS40TDk4LjgsMTRoMC42YzAuMS0yLjgsMS41LTMuNSwyLjktMy41aDQuMXYxNS44YzAsMS4yLTAuNSwxLjgtMS44LDEuOGgtMS4yCgkJdjEuMmg5LjlWMjhoLTEuMmMtMS4zLDAtMi4zLTAuMi0yLjMtMS4yVjEwLjVoNC4xYzEuNCwwLDIuMiwwLjcsMi4zLDMuNWgwLjZMMTE2LjksOS4zTDExNi45LDkuM3oiLz4KCTxwYXRoIGlkPSJQYXRoXzEwMF8xXyIgY2xhc3M9InN0MCIgZD0iTTg4LjgsMjYuOFYxMS42YzAtMS4zLDAuNy0xLjgsMi43LTEuOGgxLjJWOS4zSDgzdjAuNmwwLDBjMS45LDAsMi45LDAuNCwyLjksMS44djE1LjIKCQljMCwxLjQtMS4xLDEuOC0yLjMsMS44SDgzdjAuNmgxNGwxLjItMy41aC0wLjZjLTEuMSwxLjktMC45LDIuMy0yLjksMi4zaC00LjFDODkuNywyOCw4OC44LDI3LjYsODguOCwyNi44Ii8+Cgk8cGF0aCBpZD0iUGF0aF8xMDFfMV8iIGNsYXNzPSJzdDAiIGQ9Ik04MC43LDkuOVY5LjNoLTd2MC42YzIuMSwwLDIuMywwLjgsMi4zLDEuOHYxMC41YzAsNC44LTIuMyw1LjgtNS4zLDUuOAoJCWMtMy41LDAtNi40LTIuOC02LjQtNi40YzAsMCwwLDAsMC0wLjF2LTkuNGMwLTEuOCwwLjMtMi4zLDIuMS0yLjNINjdWOS4zaC04djAuNmMyLjIsMCwxLjgsMC42LDEuOCwxLjh2OS45YzAsNiw2LDcuNiw5LjEsNy42CgkJYzUuOCwwLDguNC0zLjksOC40LTcuNnYtOS45Qzc4LjMsMTAuNSw3OC42LDkuOSw4MC43LDkuOSIvPgoJPGcgaWQ9Ikdyb3VwXzEwMF8xXyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS44NDQgMjAuNzU1KSI+CgkJPHBhdGggaWQ9IlBhdGhfMTAyXzFfIiBjbGFzcz0ic3QwIiBkPSJNMTIuNSwxMS4zSDkuN2wtMC45LTAuOWwtMC45LDAuOUg1bC01LTVWMGw4LjgsOC4yTDE3LjUsMHY2LjNMMTIuNSwxMS4zeiBNMTAuMiwxMC4ySDEyCgkJCWw0LjMtNC4zdi0zbC03LDYuNUwxMC4yLDEwLjJ6IE01LjUsMTAuMmgxLjlsMC44LTAuOGwtNy02LjV2M0w1LjUsMTAuMnoiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K');
  height: 50px;
  width: 80px;
  background-position: center;
  background-repeat: no-repeat;
`
export const Heading = styled.h4`
  color: ${(props) => (props.secondary ? '#FFFFFF' : '#000000')};
  text-transform: capitalize;
`

export const Title = styled.h1`
  color: #000000;
  text-transform: capitalize;
  font-family: 'PT Serif', serif;
`

export const SelectList = styled.select`
  height: 50px;
  width: 30%;
  @media ${device.mobile} {
    width: calc(100% - 20px);
  }
  border-radius: 4px;
  padding: 0 20px;
  option {
  }
`

export const WrapperInner = styled.div`
  width: 100%;
  background-color: rgb(255, 250, 231);
`
export const Card = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 4px;
  @media ${device.mobile} {
    flex-direction: column;
  }
`

export const CardLeft = styled.div`
  flex-direction: column;
  border: solid 2px transparent;
  border-left-color: rgb(240, 115, 32);
  background-color: #ffffff;
  width: 60%;
  padding: 40px 10px;
  @media ${device.mobile} {
    width: unset;
    border-left-color: transparent;
    border-top-color: rgb(240, 115, 32);
  }
`

export const CardRight = styled.div`
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.05);

  width: 40%;
  padding: 20px;
  @media ${device.mobile} {
    width: unset;
    padding: 0 20px;
  }
`

export const BorderTop = styled.p`
  border: 2px solid transparent;
  font-weight: ${(props) => (props.secondary ? 'normal' : 'bold')};
  border-top-color: ${(props) =>
    props.secondary ? 'rgba(0,0,0,.05)' : '#000000'};
  line-height: 1.3;
`

export const Button = styled.button`
  border-radius: 19px;
  background-color: transparent;
  border: 2px solid rgba(0, 0, 0, 0.05);
  height: 40px;
  width: 100px;
  margin: 0 auto;
  color: rgba(0, 0, 0, 0.6);
`

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`
export const BreadCrumb = styled.div`
  padding: 2rem 0 0 16rem;
  @media ${device.mobile} {
    padding: 2rem 0 0 2rem;
  }
  a {
    text-decoration: none;
    color:rgb(43,43,43);
  }
`
