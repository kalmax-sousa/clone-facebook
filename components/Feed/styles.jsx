import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    align-items: center;
    flex-direction: row;
    height: 50px;
    justify-content: space-between;
    margin-top: 6px;
    padding: 0 11px;
`;

export const Row = styled.View`
    align-items: center;
    flex-direction: row;
`;

export const User = styled.Text`
    color: #222121;
    font-size: 15px;
    font-weight: bold;
`;

export const Time = styled.Text`
    color: #747474;
    font-size: 12px;
`;

export const Post = styled.Text`
    color: #222121;
    font-size: 13px;
    line-height: 16px;
    padding: 0 11px;
`;

export const Photo = styled.Image`
    height: 300px;
    margin-top: 9px;
    width: 100%;
`;

export const Footer = styled.View`
    padding: 0 11px;
`;

export const FooterCount = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 9px 0;
`;

export const IconCount = styled.View`
    align-items: center;
    background: #1878f3;
    border-radius: 10px;
    height: 20px;
    justify-content: center;
    margin-right: 6px;
    width: 20px;
`;

export const TextCount = styled.Text`
    color: #424040;
    font-size: 11px;
`;

export const Separator = styled.View`
    background: #f9f9f9;
    height: 1px;
    width: 100%;
`;

export const FooterMenu = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 9px 0;
`;

export const Button = styled.TouchableOpacity`
    align-items: center;
    flex-direction: row;
`;

export const Icon = styled.View`
    margin-right: 6px;
`;

export const TextButton = styled.Text`
  color: #424040;
  font-size: 12px;
`;

export const BottonDivider = styled.View`
    background: #f0f2f5;
    height: 9px;
    width: 100%;
`;