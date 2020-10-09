import * as React from 'react';
import { IAppProps } from "../../types";
import styled from 'styled-components';
// material
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Grid, Paper, makeStyles } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

import { MeImg } from '../../assets/index';

const SKELETON_TITLE_HEIGHT = 40;
const SKELETON_TEXT_HEIGHT = 20;
const AMTIS_URL = "https://az-moga.bg";
const SMULE_URL = "https://smule.com";

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
  fullWidthSkeleton: {
    width: '100%'
  },
  halfWidthSkeleton: {
    width: '50%'
  },
  socialsContainer: {
    marginLeft: '5px',
    '& > span:not(:last-child)': {
      marginRight: '5px'
    }
  }
}));

const CVWrapper = styled.div`
  padding-top: 16px;
`;

// const ProfileImg = styled.img.attrs(() => ({
//   src: MeImg,
//   alt: "Me"
// }))`
//   width: 120px;
// `;

const ProfileImg = styled.div`
  width: 120px;
  height: 120px;
  background-image: url(${MeImg});
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;
`;

const URL = styled.a.attrs((props: {href: string}) => ({
  href: props.href || '#',
  target: '_blank',
  rel: 'noopener noreferrer'
}))`
  color: #000;
`;

const Name = styled.h1`
  margin-bottom: 5px;
`;

const SubDescription = styled.span`

`;
const CV: React.FC<IAppProps> = props => {
  const classes = useStyles();
  return (
    <>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Typography color="textPrimary">› Resume/АЗът</Typography>
      </Breadcrumbs>
      <Grid container spacing={2}>
        <Grid container item alignItems="center" justify="center" direction="column" xs={12}>
          {MeImg ? <ProfileImg /> : <Skeleton variant="circle" width={120} height={120} />}
          {true ? <Name>Aleksa Tachev</Name> : <Skeleton variant="text" width={200} height={20} />}
          {true ? <SubDescription>Team member & Mentor & Ambassador | ›&nbsp;<URL href={AMTIS_URL}>az-moga.bg</URL></SubDescription> : <Skeleton variant="text" width={120} height={20} />}
          {true ? <SubDescription>Web Engineer | ›&nbsp;<URL href={SMULE_URL}>smule.com</URL></SubDescription> : <Skeleton variant="text" width={120} height={20} />}
        </Grid>
        <Grid container item alignItems="center" justify="center" xs={12} className={classes.socialsContainer}>
          <Skeleton variant="circle" width={35} height={35} />
          <Skeleton variant="circle" width={35} height={35} />
          <Skeleton variant="circle" width={35} height={35} />
          <Skeleton variant="circle" width={35} height={35} />
        </Grid>
        <Grid container item direction="column" xs={12}>
          {/* DOWNLOAD */}
          <Skeleton variant="text" width={130} height={65} />
        </Grid>
        <Grid container item direction="column" xs={12}>
          {/* <Skeleton variant="text" width={500} height={SKELETON_TITLE_HEIGHT} /> */}
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.fullWidthSkeleton} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.fullWidthSkeleton} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.fullWidthSkeleton} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.fullWidthSkeleton} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.halfWidthSkeleton} />
        </Grid>
        <Grid container item direction="column" xs={12}>
          <Skeleton variant="text" width={500} height={SKELETON_TITLE_HEIGHT} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.fullWidthSkeleton} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.fullWidthSkeleton} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.fullWidthSkeleton} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.fullWidthSkeleton} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.halfWidthSkeleton} />
        </Grid>
        <Grid container item direction="column" xs={12}>
          <Skeleton variant="text" width={500} height={SKELETON_TITLE_HEIGHT} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.fullWidthSkeleton} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.fullWidthSkeleton} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.fullWidthSkeleton} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.fullWidthSkeleton} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.halfWidthSkeleton} />
        </Grid>
        <Grid container item direction="column" xs={12}>
          <Skeleton variant="text" width={500} height={SKELETON_TITLE_HEIGHT} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.fullWidthSkeleton} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.fullWidthSkeleton} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.fullWidthSkeleton} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.fullWidthSkeleton} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.halfWidthSkeleton} />
        </Grid>
        <Grid container item direction="column" xs={12}>
          <Skeleton variant="text" width={500} height={SKELETON_TITLE_HEIGHT} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.fullWidthSkeleton} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.fullWidthSkeleton} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.fullWidthSkeleton} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.fullWidthSkeleton} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.halfWidthSkeleton} />
        </Grid>
        <Grid container item direction="column" xs={12}>
          <Skeleton variant="text" width={500} height={SKELETON_TITLE_HEIGHT} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.fullWidthSkeleton} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.fullWidthSkeleton} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.fullWidthSkeleton} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.fullWidthSkeleton} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.halfWidthSkeleton} />
        </Grid>
        <Grid container item direction="column" xs={12}>
          <Skeleton variant="text" width={500} height={SKELETON_TITLE_HEIGHT} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.fullWidthSkeleton} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.fullWidthSkeleton} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.fullWidthSkeleton} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.fullWidthSkeleton} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.halfWidthSkeleton} />
        </Grid>
        <Grid container item direction="column" xs={12}>
          <Skeleton variant="text" width={500} height={SKELETON_TITLE_HEIGHT} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.fullWidthSkeleton} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.fullWidthSkeleton} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.fullWidthSkeleton} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.fullWidthSkeleton} />
          <Skeleton variant="text" height={SKELETON_TEXT_HEIGHT} className={classes.halfWidthSkeleton} />
        </Grid>
      </Grid>
    </>
  );
};

export default CV;