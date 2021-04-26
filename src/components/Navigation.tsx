import * as React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import { Logo } from '../assets/index';
import { Link } from "react-router-dom";
import { AmtisLogo } from "../../src/icons/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const NavigationContainer = styled.div`
    height: 76px;
    ${props => props.theme.media.tablet} {
        height: 92px;
    }
`;

const ContainerWrapper = styled(Container)`
    height: 100%;
    display: flex !important;
    align-items: center;
`;
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    // justify-content: center;
    // width: 50px;
    height: 100%;
`;

const LogoImg = styled.img.attrs(() => ({
    src: Logo
}))`
    height: 40px;
`;

const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const Links = styled.nav`
    flex: 1;
    margin-left: 30px;
    & > :first-child {
        padding-left: 0;
    }
    display: none;
    ${props => props.theme.media.tablet} {
        display: block;
    }
`;

const LinkTo = styled(Link).attrs((props) => ({
    to: props.href || "#"
}))`
    padding: 0 8px;
    color: #000;
    text-decoration: none;
    display: inline-grid;
    &:hover {
        text-decoration: underline;
    }
`;

const Socials = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const SocialsText = styled.span`
    // text-decoration: underline;
    margin-right: 10px;
`;

const SocialIcon = styled.a.attrs((props) => ({
    href: props.href || "#",
    target: "_blank"
}))`
    color: #000;
    padding: 0 7px;
`;

const HamburgerMenu = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #fff;
    ${props => props.theme.media.tablet} {
        display: none;
    }
`;

const HamburgerLinks = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    & > a {
        padding: 10px 20px;
    }
`;

const HamburgerOpenMenuBtn = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    margin-right: 10px;
    & > svg {
        transform: scale(2);
    }
    ${props => props.theme.media.tablet} {
        display: none;
    }
`;

const HamburgerCloseMenuBtn = styled.button`
    outline: none;
    border: none;
    margin: 20px 0 0 20px;
    cursor: pointer;
    & > svg {
        transform: scale(2);
    }
    ${props => props.theme.media.tablet} {
        display: none;
    }
`;

const Feedback = styled.div`
    margin: 0 20px;
`;

const FeedbackLink = styled.a.attrs((props) => ({
    href: "#feedback"
}))`
    background: #000;
    color: #fff;
    padding: 7px 15px;
    border-radius: 2px;
`;

const NavLinkContainer = styled.span`
    display: inline-flex;
    align-items: center;
`;

const NavLinkLogo = styled.img.attrs((props) => ({
    src: AmtisLogo,
}))`
    width: 20px;
    margin-right: 7px;
`;

const Navigation = () => {
    const [isOpen, setMenuState] = React.useState(false);

    const openNavigation = () => {
        console.log("opened");
        setMenuState(true);
    };
    const closeNavigation = () => {
        console.log("closed");
        setMenuState(false);
    };

    const renderLinks = (onClick?: any) => {
        return (
            <>
                {/* Можеш ли? */}
                <LinkTo href="/amtis" onClick={onClick}>
                    <NavLinkContainer>
                        <NavLinkLogo />
                        АМТИС
                    </NavLinkContainer>
                </LinkTo>
                <LinkTo href="/portfolio" onClick={onClick}>Работно</LinkTo>
                <LinkTo href="/cv" onClick={onClick}>АЗът</LinkTo>
                <LinkTo href="/motivation" onClick={onClick}>Муза{/*Мотивация/та/ (ми)*/}</LinkTo>
                <LinkTo href="/blog" onClick={onClick}>Мисли</LinkTo> {/*Мислено е */}
                <LinkTo href="/contact" onClick={onClick}>Пиши ми</LinkTo>
                {/* страница за многозначни думи/изрази */}
                {/* <LinkTo href="/blog" onClick={onClick}>Смислици</LinkTo> */}
            </>
        );
    };
    return (
        <NavigationContainer>
            <ContainerWrapper>
                <HamburgerOpenMenuBtn onClick={openNavigation}>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
                </HamburgerOpenMenuBtn>
                <LinkTo href="/">
                    <LogoContainer>
                        <LogoImg />
                    </LogoContainer>
                </LinkTo>
                <LinksContainer>
                    <Links>
                        {renderLinks()}
                    </Links>
                    {isOpen && <HamburgerMenu>
                        <HamburgerCloseMenuBtn onClick={closeNavigation}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" className="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                        </HamburgerCloseMenuBtn>
                        <HamburgerLinks>
                            {renderLinks(closeNavigation)}
                        </HamburgerLinks>
                    </HamburgerMenu>}
                    <Socials>
                        <SocialsText>Find me on</SocialsText>
                        <SocialIcon><FontAwesomeIcon icon={faLinkedinIn} /></SocialIcon>
                        <SocialIcon><FontAwesomeIcon icon={faFacebook} /></SocialIcon>
                        <SocialIcon><FontAwesomeIcon icon={faInstagram} /></SocialIcon>
                    </Socials>
                    <Feedback>
                        <FeedbackLink>
                            Give me your feedback!
                        </FeedbackLink>
                    </Feedback>
                </LinksContainer>
            </ContainerWrapper>
        </NavigationContainer>
    );
};

export default Navigation;