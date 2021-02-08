import * as React from 'react';
import { IAppProps } from "../../types";
import styled from 'styled-components';
import { Grid, Paper, makeStyles, Container } from '@material-ui/core';
import { Logo } from '../../assets/index';

// components
import Section from './components/Section';
import Card from './components/Card';

// fortawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  control: {
    padding: theme.spacing(2),
  },
  grid: {
    height: "100%"
  },
  breadcrumbs: {
    background: '#f2f2f2',
    padding: '15px 10px',
    borderRadius: "5px",

  }
}));

const HeaderContainer = styled.div`
  width: 100%;
  height: calc(100vh - 92px);
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const Text = styled.h1`
  margin: 0;
  font-size: 3rem;
`;

const Subtext = styled.h3`
  margin-top: 0;
  font-size: 4rem;
`;

const LogoContainer = styled.img.attrs(() => ({
  src: Logo,
  alt: ''
}))`
  margin-left: 100px;
  flex: 1;
  display: none;
  ${props => props.theme.media.tablet} {
    display: block;
}
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContentRow = styled(Row)`
  height: 100%
`;

const ScrollDownRow = styled(Row)`
  padding: 30px 0;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const ScrollBtn = styled.a.attrs((props) => ({
  href: props.href || "#"
}))`
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-bottom: 30px;
`;

const Feedback = styled.div`
  background: red;
`;

const FeedbackLinkText = styled.a.attrs((props) => ({
  href: props.href || "#"
}))`
  margin-top: 10px;
  color: #000;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledGrid = styled(Grid)`
  padding: 20px 0;
`;

const Home: React.FC<IAppProps> = () => {
  const classes = useStyles();
  const posts = [{}, {}, {}, {}, {}, {}, {}, {}]
  return (
    <>
      <HeaderContainer>
        {/* мотивационен надпис на бял фон, минималистично */}
        <Header>
          <ContentRow>
            <Column>
              <Text>
                Добре дошъл,
                {/* Не бъди изкуствен */}
              </Text>
              <Subtext>
                Мотивиращ текст...тук.
                {/* Създавай изкуство */}
              </Subtext>
            </Column>
          </ContentRow>
          <ScrollDownRow>
            <ScrollBtn>
              Scroll Down
            </ScrollBtn>
          </ScrollDownRow>
        </Header>
      </HeaderContainer>
      {/* <Breadcrumbs separator="›" aria-label="breadcrumb" className={classes.breadcrumbs}>
        <Typography color="textPrimary">› Home</Typography>
      </Breadcrumbs> */}
      <Grid container spacing={2}>
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Blog posts</Paper>
        </Grid> */}
        {/* hand shaking for scroll left/right */}
      </Grid>
      <Section
        title="Инстаграм"
        subtitle="">
        <CardsContainer>
          {posts.map((post: any, index: any) => (
            <Card
              instagram
              key={index}
              imageURL="POST URL"
              title="POST NAME"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              likesCount={20}
              hashtag="#POST"
              postURL="POST URL" />
          ))}
        </CardsContainer>
      </Section>
      <Section
        title="#BLOG posts"
        subtitle="">
        <CardsContainer>
          {posts.map((post: any, index: any) => (
            <Card
              key={index}
              imageURL="POST URL"
              title="POST NAME"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              likesCount={20}
              hashtag="#POST"
              postURL="POST URL" />
          ))}
        </CardsContainer>
      </Section>
      <Section
        id="feedback"
        title="Feedback"
        subtitle="appreciate">
        <StyledGrid container spacing={2} >
          <Grid item container direction="column" alignItems="center" justify="center" xs={6} md={3}>
            <FontAwesomeIcon icon={faPaperPlane} size="5x" />
            <FeedbackLinkText>
              {/* direct */}
              @email
            </FeedbackLinkText>
          </Grid>
          <Grid item container direction="column" alignItems="center" justify="center" xs={6} md={3}>
            <FontAwesomeIcon icon={faLinkedinIn} size="5x" />
            <FeedbackLinkText>Connect me on @LinkedIn</FeedbackLinkText>
          </Grid>
          <Grid item container direction="column" alignItems="center" justify="center" xs={6} md={3}>
            <FontAwesomeIcon icon={faFacebook} size="5x" />
            <FeedbackLinkText>Add me on @Facebook</FeedbackLinkText>
          </Grid>
          <Grid item container direction="column" alignItems="center" justify="center" xs={6} md={3}>
            <FontAwesomeIcon icon={faInstagram} size="5x" />
            <FeedbackLinkText>Follow me on @Instagram</FeedbackLinkText>
          </Grid>
        </StyledGrid>
      </Section>
    </>

  );
};

export default Home;