import * as React from 'react';
import { IAppProps } from "../types";
import styled from 'styled-components';
// material
import { Grid, Container, makeStyles } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const useStyles = makeStyles((theme) => ({
  justifyXsCenter: {
    justifyContent: 'center'
  }
}));

const FooterContainer = styled.div`
  background: #f8f7f9;
  padding: 20px 0;
`;

const Copyrights = styled.div`
  text-align: center;
  ${props => props.theme.media.tablet} {
    text-align: left;
  }
`;

const Socials = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    ${props => props.theme.media.tablet} {
      justify-content: flex-end;
    }
`;

const SocialsText = styled.span`
    text-decoration: underline;
    margin-right: 10px;
`;

const SocialIcon = styled.a.attrs((props) => ({
  href: props.href || "#",
  target: "_blank"
}))`
  color: #000;
  padding: 0 7px;
`;

const ContainerWrapper = styled(Container)`
    display: flex !important;
    align-items: center;
`;

const Footer: React.FC<IAppProps> = props => {
  const classes = useStyles();
  return (
    <FooterContainer>
      <ContainerWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Copyrights>
              Aleksa Tachev | &copy; 2020 all rights RESERVED
            </Copyrights>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Socials>
              <SocialsText>Find me on</SocialsText>
              <SocialIcon><FontAwesomeIcon icon={faLinkedinIn} /></SocialIcon>
              <SocialIcon><FontAwesomeIcon icon={faFacebook} /></SocialIcon>
              <SocialIcon><FontAwesomeIcon icon={faInstagram} /></SocialIcon>
            </Socials>
          </Grid>
        </Grid>
      </ContainerWrapper>
    </FooterContainer>
  );
};

export default Footer;