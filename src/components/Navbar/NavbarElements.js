import styled from 'styled-components';
import {Link as LinkRouter} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';

export const Nav = styled.nav`
  top: 0;
  position: fixed;
  background: black;
  height: 80px;
  //margin-top: -80px;
  display: flex;
  justify-content: center;
  font-size: 1em;
  //
  //@media screen and (max-width: 960px) {
  //  transition: 0.8s all ease;
  //}
  // height: ${ (scrollDirection) => ((scrollDirection === "down") ? 0 : 80)};

`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const NavMenu = styled.ul`
  width: 100%;
  height: 100%;
  margin: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  //align-items: center;
  list-style: none;
  text-align: center;
  justify-content: space-between;
`;

export const NavItem = styled.li`
  height: 100%;    
  display: flex;
  align-items: center;
`;

export const NavLinks = styled(LinkScroll)`
  color: white;
  display: flex;
  align-items: center;

  height: calc(100% - 3*2px);
  cursor: pointer;

  :hover, .active {
    border-bottom: 6px solid red;
  }
`;

export const NavBlog = styled(LinkScroll)`
  display: flex;
  align-items: center;

  height: calc(80% - 3*2px);
  cursor: pointer;
  
  background: aqua;
  width: calc(max(100vw / 20, 90px));
  border-radius: 10px;
  justify-content: center;
  
  margin-right: -90px;

  :hover, .active {
    color: blue;
  }

`;
//
// export const MyHr = styled.hr`
//     height:100%; /* you might need some positioning for this to work, see other questions about 100% height */
//     width:0px;
//     border:1px solid white;
//     margin: 0;
//
//     margin-right: 90px;
//
// `;
//
// export const BlogArea = styled.div`
//
//   align-self: flex-end;
//
//   height: 100%;
//   display: flex;
//   align-items: center;
//
//   padding: 0;
//   height: 100%;
//   display: flex;
//   flex-direction: row;
//   //align-items: center;
//   text-align: center;
//   justify-content: space-evenly;
//
// `;
