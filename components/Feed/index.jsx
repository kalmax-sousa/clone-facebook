import React from 'react';
import { ScrollView, View } from 'react-native';
import {Entypo} from '@expo/vector-icons';
import { Container, Header, Photo, Post, Row, Time, User } from './styles';
import Avatar from '../Avatar';

const Feed = () => {
  return (
    <>
      <Container>
        <Header>
            <Row>
                <Avatar 
                    source={require('../../assets/user3.png')}
                />
                <View style={{padding: 10}}>
                    <User>Kalmax dos Santos</User>
                    <Row>
                        <Time>35m</Time>
                        <Entypo 
                            name="dot-single"
                            size={14}
                            color="#747476"
                        />
                        <Entypo 
                            name="globo"
                            size={12}
                            color="#747476"
                        />  
                    </Row>
                </View>
            </Row>
            <Entypo 
                name="dots-three-horizontal"
                size={15}
                color="#222121"
            /> 
        </Header>

        <Post>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Post>
        <Photo source={require('../../assets/post1.jpg')}/>
      </Container>
    </>
  );
}

export default Feed;