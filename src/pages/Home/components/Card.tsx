import * as React from 'react';
import styled from 'styled-components';
import { MeImg, Post } from '../../../assets/index';

const CardContainer = styled.div`
    padding: 5px;
    margin-left: 10px;
    // &:not(:first-child) {
    //     margin-left: 10px;
    // }
`;

const CardHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 7px 0;
`;

const CardAvatar = styled.div`
    width: 40px;
    height: 40px;
    background-image: url(${MeImg});
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;
`;

const CardHeaderTitle = styled.span`
    font-size: 17px;
    margin-left: 10px;
    font-weight: 500;
`;

const CardImage = styled.div`
    width: 300px;
    height: 300px;
    background-image: url(${Post});
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;
    border-radius: 5px;
    overflow: hidden;
    :hover {
        > div {
            display: none;
        }
    }
`;

const ProfileName = styled.h3`
    margin-top: 10px;
    margin-bottom: 0;
`;

const ProfileDescription = styled.p`

`;

const ProfileStatistics = styled.div`
    display: flex;
    margin-top: 10px;
`;

const CardOverlay = styled.div`
    width: 100%;
    height: 100%;
    background: red;
    opacity: .4;
    position: relative;
    display: none;
    ${props => props.theme.media.tablet} {
        display: block;
    }
`;

const CardHashtag = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 26px;
    font-weight: bold;
`;

const CardContent = styled.div`

`;

const VisitProfile = styled.a.attrs((props) => ({
    href: props.href || "#",
    target: "_blank"
}))``;

const ProfileLikes = styled.div`
    color: #e46067;
    margin-right: 5px;
`;

// todo refactor card to become generic

const Card = (props: any) => {
    return (
        <CardContainer>
            {props.instagram &&
                <CardHeader>
                    <CardAvatar />
                    <CardHeaderTitle>
                        aleksatachev
                    </CardHeaderTitle>
                </CardHeader>
            }
            <CardImage>
                {props.instagram &&
                    <CardOverlay>
                        <CardHashtag>
                            {props.hashtag}
                        </CardHashtag>
                    </CardOverlay>
                }
            </CardImage>
            <CardContent>
                {props.instagram ? (
                    <>
                        <ProfileStatistics>
                            <ProfileLikes>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                            </ProfileLikes>
                            {props.likesCount}
                        </ProfileStatistics>
                        <ProfileName>
                            {props.title}
                        </ProfileName>
                        <ProfileDescription>
                            {props.description}
                        </ProfileDescription>
                        <VisitProfile href="/">
                            › Visit post
                        </VisitProfile>
                    </>
                ) : (
                    <>
                        <CardHeader>
                            <CardAvatar />
                            <CardHeaderTitle>
                                aleksatachev
                            </CardHeaderTitle>
                        </CardHeader>
                        <ProfileName>
                            {props.title}
                        </ProfileName>
                        <ProfileDescription>
                            {props.description}
                        </ProfileDescription>
                        <VisitProfile href="/">
                            › Visit post
                        </VisitProfile>
                    </>
                )}
            </CardContent>
            {/* {props.imageURL}
            {props.postURL}
            {props.children} */}
        </CardContainer>
    )
}

export default Card;