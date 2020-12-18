import React from 'react';
import {ScrollView} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import { Container, Card, CardStory, CardUser, CardFooter, Text, BottonDivider } from './styles';
import Avatar from '../Avatar';

const Story = () => {
  return(
    <>
      <Container>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{padding: 11}}
        >
            <Card>
                <CardStory source={require('../../assets/user3.jpg')}/>
                <CardUser>
                    <AntDesign 
                        name="plus"
                        size={24}
                        color="#1777f2"
                    />
                </CardUser>
                <CardFooter>
                    <Text>Adicionar Story</Text>
                </CardFooter>
            </Card>

            <Card>
                <CardStory  source={require('../../assets/story1.jpg')}/>
                <CardUser>
                    <Avatar 
                        source={require('../../assets/user1.jpg')}
                        story={true}
                    />
                </CardUser>
                <CardFooter>
                    <Text>Juliana Souza</Text>
                </CardFooter>
            </Card>

            <Card>
                <CardStory  source={require('../../assets/story2.jpg')}/>
                <CardUser>
                    <Avatar 
                        source={require('../../assets/user2.jpg')}
                        story={true}
                    />
                </CardUser>
                <CardFooter>
                    <Text>Fernanda Almeida</Text>
                </CardFooter>
            </Card>

            <Card>
                <CardStory  source={require('../../assets/story3.jpg')}/>
                <CardUser>
                    <Avatar 
                        source={require('../../assets/user4.jpg')}
                        story={true}
                    />
                </CardUser>
                <CardFooter>
                    <Text>Rafaela Dias</Text>
                </CardFooter>
            </Card>

            <Card>
                <CardStory  source={require('../../assets/story4.jpg')}/>
                <CardUser>
                    <Avatar 
                        source={require('../../assets/user5.jpg')}
                        story={false}
                    />
                </CardUser>
                <CardFooter>
                    <Text>Beemo</Text>
                </CardFooter>
            </Card>
            
        </ScrollView>
      </Container>

      <BottonDivider />
    </>
  );
}

export default Story;