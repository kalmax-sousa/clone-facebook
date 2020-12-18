import styled from 'styled-components/native';

export const Container = styled.View`
    align-items: center;
    flex-direction: row;
    height: 58px;
    width: 100%;
`;

export const Room = styled.TouchableOpacity`
    align-items: center;
    border-color: #82b1ff;
    border-radius: 20px;
    border-width: 1px;
    justify-content: center;
    height: 40px;
    margin-right: 12px;
    padding: 0 15px;
    width: 115px;
`;

export const Text = styled.Text`
    color: #1777f2;
    font-size: 15.5px;
    padding-left: 6px;
`;

export const User = styled.View`
    margin-right: 13px;
`;

export const BottonDivider = styled.View`
    background: #f0f2f5;
    height: 9px;
    width: 100%;
`;