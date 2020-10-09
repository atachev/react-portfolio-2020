import * as React from 'react';
import styled from 'styled-components';

import SectionHeader from './SectionTitle';
import SectionSubtitle from './SectionSubtitle';
import SectionContent from './SectionContent';

const SectionContainer = styled.div`
  padding: 15px 0;
`;

const Section: React.FC<any> = props => {
    return (
        <SectionContainer id={props.id}>
            <SectionHeader>
                {props.title}
            </SectionHeader>
            <SectionSubtitle>
                {props.subtitle}
            </SectionSubtitle>
            <SectionContent>
                {props.children}
            </SectionContent>
        </SectionContainer>
    );
};

export default Section;