import * as React from 'react';
import { IAppProps } from "../../types";
import styled from 'styled-components';
// material
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const Title = styled.h1`
  ${props => props.theme.media.tablet} {
    color: ${props => props.theme.colors.red}
  }
`;

const AMTIS: React.FC<IAppProps> = props => {
    return (
        <>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              <Typography color="textPrimary">› AMTIS</Typography>
            </Breadcrumbs>
            FLIKR
        </>
    );
};

export default AMTIS;