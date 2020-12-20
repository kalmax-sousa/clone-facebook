import styled from 'styled-components/native';

export const Container = styled.View`
    height: 40px;
    position: relative;
    width: 40px;
`;

export const User = styled.Image`
    border-color: #1777f2;
    border-radius: 20px;
    border-width: ${props => (props.story ? "3px" : 0)};
    height: 40px;
    width: 40px;

`;

export const UserActive = styled.View`
    background: #4bcb1f;
    border-color: #ffffff;
    border-radius: 8px;
    border-width: 2px;
    bottom: -2px;
    height: 15px;
    position: absolute;
    right: -2px;
    width: 15px;
`;