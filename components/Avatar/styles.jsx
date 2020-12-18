import styled from 'styled-components/native';

export const Container = styled.View`
    height: 40px;
    position: relative;
    width: 40px;
    background-color: orange;
`;

export const User = styled.Image`
    border-radius: 20px;
    height: 40px;
    width: 40px;
`;

export const UserActive = styled.View`
    background: #4bcb1f;
    border-color: #ffffff;
    border-radius: 8px;
    border-width: 2px;
    bottom: -2;
    height: 15px;
    position: absolute;
    right: -2;
    width: 15px;
`;