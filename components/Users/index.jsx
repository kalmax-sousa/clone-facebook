import React from 'react';
import { ScrollView } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { BottonDivider, Container, Room, Text, User } from './styles';
import Avatar from '../Avatar';


const Users = () => {
  return(
    <>
      <Container>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{padding: 11}}
          >
              <Room>
                <MaterialCommunityIcons
                  name="video-plus"
                  size={26}
                  color="#e141fc"
                />
                <Text>Criar Sala</Text>
              </Room>

              <User>
                <Avatar 
                  source={require('../../assets/user1.jpg')}
                  online={true}
                />
              </User>

              <User>
                <Avatar 
                  source={require('../../assets/user2.jpg')}
                  online={true}
                />
              </User>

              <User>
                <Avatar 
                  source={require('../../assets/user4.jpg')}
                  online={true}
                />
              </User>

              <User>
                <Avatar 
                  source={require('../../assets/user5.jpg')}
                  online={true}
                />
              </User>

              <User>
                <Avatar 
                  source={require('../../assets/user1.jpg')}
                  online={false}
                />
              </User>

              <User>
                <Avatar 
                  source={require('../../assets/user2.jpg')}
                  online={false}
                />
              </User>
          </ScrollView>
      </Container>

      <BottonDivider />
    </>
  );
}

export default Users;