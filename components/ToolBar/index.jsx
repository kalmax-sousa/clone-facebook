import React from 'react';
import { Container, Row, Input, Divider, Menu, MenuText, Separator, BottonDivider } from './styles';
import Avatar from '../Avatar';
import {Ionicons, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'

const userAvatar = require('../../assets/user3.png')

const ToolBar = () => {
    return(
        <>
            <Container>
                <Row>
                    <Avatar source={userAvatar}/>
                    <Input placeholder="O que você está pensando" />
                </Row>
                
                <Divider />
                
                <Row>
                    <Menu>
                        <Ionicons name="ios-videocam" size={22} color='#f44'/>
                        <MenuText>Ao Vivo</MenuText>
                    </Menu>
                    <Separator />

                    <Menu>
                        <MaterialIcons name="photo-size-select-actual" size={20} color='#4caf50'/>
                        <MenuText>Foto</MenuText>
                    </Menu>
                    <Separator />

                    <Menu>
                        <MaterialCommunityIcons name="video-plus" size={22} color='#e141fc'/>
                        <MenuText>Sala</MenuText>
                    </Menu>
                    <Separator />
                </Row>
            </Container>

            <BottonDivider />
        </>

    );
}

export default ToolBar;