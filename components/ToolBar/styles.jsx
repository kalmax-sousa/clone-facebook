import styled from 'styled-components/native';

export const Container = styled.View`
    height: 92px;
    width: 100%;
`;

export const Row = styled.View`
    align-items: center;
    background: #ffffff;
    flex-direction: row;
    padding: 0 11px;
    width: 100%;
`;

export const Input = styled.TextInput`
    height: 50px;
    padding: 0 8px;
    width: 100%;
`;

export const Divider = styled.View`
    background: #f0f0f0;
    height: 0.5px;
    width: 100%;
`;

export const Menu = styled.View`
    align-items: center;
    flex: 1;
    flex-direction: row;
    height: 42px;
    justify-content: center;
`;

export const MenuText = styled.Text`
    font-size: 12px;
    font-weight: 500;
    padding-left: 11px;
`;

export const Separator = styled.View`
    background: #f0f0f0;
    height: 26px;
    width: 1px;
`;

export const BottonDivider = styled.View`
    background: #f0f2f5;
    height: 9px;
    width: 100%;
`;