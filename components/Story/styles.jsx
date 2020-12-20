import styled from 'styled-components/native';

export const Container = styled.View`
    align-items: center;
    flex-direction: row;
    height: 192px;
    width: 100%;
`;

export const Card = styled.View`
    height: 170px;
    margin-right: 8px;
    position: relative;
    width: 106px;
`;

export const CardStory = styled.Image`
    border-radius: 12px;
    height: 170px;
    width: 100%;
`;

export const CardUser = styled.View`
    align-items: center;
    background: #ffffff;
    border-radius: 20px;
    height: 39px;
    justify-content: center;
    left: 8px;
    position: absolute;
    top: 8px;
    width: 39px;
`;

export const CardFooter = styled.View`
    bottom: 12px;
    left: 9px;
    position: absolute;
    width: 100%;
`;

export const Text = styled.Text`
    color: #ffffff;
    font-size: 13px;
    font-weight: bold;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, .3);
`;

export const BottonDivider = styled.View`
    background: #f0f2f5;
    height: 9px;
    width: 100%;
`;