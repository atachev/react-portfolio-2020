import * as React from "react";
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { IAppProps } from "./types";
// import PersistentDrawerLeft from "./components/Drawer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//pages
import Home from './pages/Home/Home';
import Contact from "./pages/Contact/Contact";
import AMTIS from "./pages/AMTIS/AMTIS";
import CV from "./pages/CV/CV";
import Motivation from "./pages/Motivation/Motivation";
import Blog from "./pages/Blog/Blog";
import Portfolio from "./pages/Portfolio/Portfolio";
// const Home = React.lazy(() => import('./pages/Home/Home'));

import Container from '@material-ui/core/Container';
import Navigation from './components/Navigation';

const LinkWrapper = styled(Link)`
    padding: 0 5px;
`;

const Padding = styled.div`
    padding: 8px;
`;

// const ContainerWrapper = styled(Container) `
//     height: calc(100% -  56px);
//     ${props => props.theme.media.tablet} {
//         height: calc(100% - 64px);
//     }
// `;
const App: React.FC<IAppProps> = props => {
    return (
        <Router>
            {/* <Navbar /> */}
            <Navigation />
            {/* <>
                <LinkWrapper to="/">Home</LinkWrapper>|
                <LinkWrapper to="/amtis">AMTIS</LinkWrapper>|
                <LinkWrapper to="/cv">CV</LinkWrapper>|
                <LinkWrapper to="/motivation">Motivation</LinkWrapper>|
                <LinkWrapper to="/contact">Contact</LinkWrapper>|
                <LinkWrapper to="/blog">Blog</LinkWrapper>|
            </> */}
            <Container>
                {/* <PersistentDrawerLeft> */}
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/amtis" exact component={AMTIS} />
                        <Route path="/cv" exact component={CV} />
                        <Route path="/motivation" exact component={Motivation} />
                        <Route path="/contact" exact component={Contact} />
                        <Route path="/blog" exact component={Blog} />
                        <Route path="/portfolio" exact component={Portfolio} />
                    </Switch>
                {/* </PersistentDrawerLeft> */}
            </Container>
            <Footer />
        </Router>
    );
}

export default App;