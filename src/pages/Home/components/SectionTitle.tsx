import * as React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.h1`
  margin: 0;
  font-size: 3.6rem;
`;

const SectionHeader: React.FC<any> = props => {
    return (
        <TitleContainer>
            {props.children}
        </TitleContainer>
    );
};

export default SectionHeader;