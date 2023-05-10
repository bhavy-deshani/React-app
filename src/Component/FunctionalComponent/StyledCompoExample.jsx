import React from 'react'
import styled, { keyframes } from 'styled-components';
import CardData from '../ClassComponent/CardData';
import PropsClassComponent from '../ClassComponent/PropsClassComponent';

const StyledCompoExample = () => {
  const Header = styled.header`
  height: 70px;
  background-color: #2c3e50;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

const Nav = styled.nav`
  height: 50px;
  background-color: #3498db;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  padding: 10px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #2980b9;
  }
`;

const Content = styled.div`
  padding: 20px;
`;



  return (
    <>
        <Header>My Website</Header>
      <Nav>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Contact</NavLink>
      </Nav>
      <Content>
        <h1>Welcome to my website</h1>
        <p>This is some sample content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet lacinia nulla ac fringilla. Etiam nec dolor tortor. Sed et urna sit amet sapien gravida molestie in eu justo. Pellentesque vitae ex nisi. Vivamus fermentum urna vitae augue ultricies, ut sodales urna consequat.</p>
      </Content>

      <div className=" col-10 mx-auto">
                    <div className="row gy-4">
                        {
                            CardData.map((val, ind) => {
                                return (<PropsClassComponent key={ind} imgSrc={val.imgSrc} prodTitle={val.prodTitle} />)
                            })
                        }
                    </div>
                </div>
    </>
  )
}

export default StyledCompoExample
