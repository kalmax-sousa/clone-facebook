import styled from 'styled-components/native';

export const Container = styled.View`
    align-items: center;
    flex-direction: row;
    height: 60px;
    justify-content: space-between;
    padding: 0 11px;
    width: 100%;
`;

export const Text = styled.Text`
    color: #3a86e9;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: -0.3px;
`;

export const Row = styled.View`
    flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
    align-items: center;
    background: #eeeeee;
    border-radius: 21px;
    height: 42px;
    justify-content: center;
    margin-left: 16px;
    width: 42px;
`;
