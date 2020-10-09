import * as React from 'react';
import styled from 'styled-components';

const SubtitleContainer = styled.h3`
  margin: 0;
  font-weight: 500;
`;

const SectionTitle: React.FC<any> = props => {
    return (
        <SubtitleContainer>
            {props.children}
        </SubtitleContainer>
    );
};

export default SectionTitle;