import React, { useState, useEffect } from "react";
// import {Nav, NavbarContainer, NavMenu, NavLinks, NavItem, NavBlog, MyHr, BlogArea} from "./NavbarElements";
import './styles.css';
import {Link as LinkScroll} from 'react-scroll';


const Navbar = () => {
    // const b = (a === "down") ? 0 : 100;
    // useEffect(() => {}, [a,b])
    const [scrollDirection, scrollPos] = useScrollDirection();

    return (
    <div id={'Nav'} className={`${ ((scrollDirection === "down") || (scrollPos > 0)) ? "hide" : "show"}`} >
        <div id={'NavbarContainer'} >
            <div id={'NavMenu'}>
                <div className={'NavItem'}>
                    <LinkScroll className={'NavLinks'} to={"AboutMe"}>About Me</LinkScroll>
                </div>

                <div className={'NavItem'}>
                    <LinkScroll className={'NavLinks'} to={"work_experience"}>Work Experience</LinkScroll>
                </div>

                <div className={'NavItem'}>
                    <LinkScroll className={'NavLinks'} to={"projects"}>Projects</LinkScroll>
                </div>

                <div className={'NavItem'}>
                    <LinkScroll className={'NavLinks'} to={"contact"}>Contact</LinkScroll>
                </div>


                {/*<NavItem>*/}
                {/*    <BlogArea>*/}
                {/*        <MyHr></MyHr>*/}
                <a className={'NavBlog'} href={"blog"}>Blog</a>
                    {/*</BlogArea>*/}
                {/*</NavItem>*/}

            </div>
        </div>
    </div>
    );
}

function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState('up');
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;

        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? "down" : "up";
            if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
            console.log(direction);
            console.log(scrollPos);

            setScrollPos(window.scrollY);
        };
        window.addEventListener("scroll", updateScrollDirection); // add event listener
        return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
        }
    }, [scrollDirection]);

    return [scrollDirection, scrollPos];
};

export default Navbar;
