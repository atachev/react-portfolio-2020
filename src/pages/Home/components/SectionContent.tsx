import * as React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  margin: 0;
  padding-top: 16px;
`;

const SectionContent: React.FC<any> = props => {
    return (
        <ContentContainer>
            {props.children}
        </ContentContainer>
    );
};

export default SectionContent;