import React from 'react';
import { View } from 'react-native';
import {Entypo, AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import { BottonDivider, Button, Container, Footer, FooterCount, FooterMenu, Header, Icon, IconCount, Photo, Post, Row, Separator, TextButton, TextCount, Time, User } from './styles';
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
                            name="globe"
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

        <Footer>
            <FooterCount>
                <Row>
                    <IconCount>
                        <AntDesign 
                            name="like1"
                            size={12}
                            color="#ffffff"
                        />
                    </IconCount>
                    <TextCount>128</TextCount>
                </Row>
                <TextCount>24 comentários</TextCount>
            </FooterCount>

            <Separator />

            <FooterMenu>
                <Button>
                    <Icon>
                        <AntDesign 
                            name="like2"
                            size={20}
                            color="#424040"
                        />
                    </Icon>
                    <TextButton>Curtir</TextButton>
                </Button>

                <Button>
                    <Icon>
                        <MaterialCommunityIcons 
                            name="comment-outline"
                            size={20}
                            color="#424040"
                        />
                    </Icon>
                    <TextButton>Comentar</TextButton>
                </Button>

                <Button>
                    <Icon>
                        <MaterialCommunityIcons 
                            name="share-outline"
                            size={20}
                            color="#424040"
                        />
                    </Icon>
                    <TextButton>Compartilhar</TextButton>
                </Button>
            </FooterMenu>
        </Footer>
        <BottonDivider />
      </Container>

      <Container>
        <Header>
            <Row>
                <Avatar 
                    source={require('../../assets/user1.jpg')}
                />
                <View style={{padding: 10}}>
                    <User>Juliana Souza</User>
                    <Row>
                        <Time>4d</Time>
                        <Entypo 
                            name="dot-single"
                            size={14}
                            color="#747476"
                        />
                        <Entypo 
                            name="globe"
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus perspiciatis eveniet quo, atque beatae debitis provident nihil a harum dignissimos alias, vero ab tempore minima laudantium at saepe nisi totam.
        </Post>
        <Photo source={require('../../assets/post2.jpg')}/>

        <Footer>
            <FooterCount>
                <Row>
                    <IconCount>
                        <AntDesign 
                            name="like1"
                            size={12}
                            color="#ffffff"
                        />
                    </IconCount>
                    <TextCount>204</TextCount>
                </Row>
                <TextCount>45 comentários</TextCount>
            </FooterCount>

            <Separator />

            <FooterMenu>
                <Button>
                    <Icon>
                        <AntDesign 
                            name="like2"
                            size={20}
                            color="#424040"
                        />
                    </Icon>
                    <TextButton>Curtir</TextButton>
                </Button>

                <Button>
                    <Icon>
                        <MaterialCommunityIcons 
                            name="comment-outline"
                            size={20}
                            color="#424040"
                        />
                    </Icon>
                    <TextButton>Comentar</TextButton>
                </Button>

                <Button>
                    <Icon>
                        <MaterialCommunityIcons 
                            name="share-outline"
                            size={20}
                            color="#424040"
                        />
                    </Icon>
                    <TextButton>Compartilhar</TextButton>
                </Button>
            </FooterMenu>
        </Footer>
        <BottonDivider />
      </Container>
    </>
  );
}

export default Feed;