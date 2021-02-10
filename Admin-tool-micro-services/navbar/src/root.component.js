import React from 'react'
import styled from 'styled-components';
import { links } from './routes.js'
import { Link } from '@reach/router'

const RootStyle = styled.div`
background-color: var(--primary);
display: flex;
align-items: center;
`;
const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  marginLeft: '16px',
  marginRight: '16px',
}

const TitleStyle = styled.div`
  font-size: 24px;
  margin-left: 16px;
`;

export default class Root extends React.Component {

  state = {
    hasError: false
  }

  componentDidCatch (error, info) {
    this.setState({hasError: true})
  }

  render () {
    return (
      <div>
        {
          this.state.hasError ? (
            <RootStyle className='navBarHeight'>
              Error
            </RootStyle>
          ) : (
            <RootStyle className='navBarHeight'>
              <TitleStyle>Admin micro-services</TitleStyle>
              {
                links.map((link) => {
                  return (
                      <Link style={linkStyle}
                        key={link.href}
                        to={link.href}
                    >
                      {link.name}
                      </Link>
                    
                    
                  )
                })
              }
            </RootStyle>
          )
        }
      </div>
    )
  }
}
