import * as React from 'react';
import { IAppProps } from "../../types";
import styled from 'styled-components';

// material
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const Contact: React.FC<IAppProps> = props => {
  return (
    <>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Typography color="textPrimary">› Contact</Typography>
      </Breadcrumbs>
    </>
  );
};

export default Contact;