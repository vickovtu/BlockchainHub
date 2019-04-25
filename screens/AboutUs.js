import React from 'react';
import styled from 'styled-components';
import {Button} from 'react-native'

class AboutUs extends React.Component {
    static navigationOptions = {
        header: null
    }


    render() {
        return (
            <Container>
                <Subtitle>About</Subtitle>
                <Text>Blockchain technology is one of the biggest new developments to have hit and revolutionize many
                    industries over the last few years. And still, companies lack professional blockchain experts and
                    developers with an outstanding level of training. Blockchain Association of Ukraine brought together
                    industry leaders to bridge the gap and provide practical 'job focused' project-based learning
                    system. The course is specifically tailored for software engineers who want to develop technical
                    expertise in Blockchain and work on emerging technologies. We are launching the course soon on the
                    base of the most innovative technical universities in Ukraine, UNIT Factory.</Text>
            </Container>
        )

    }
}

export default AboutUs;

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items:center;
    background: #20B2AA;
`;
const Subtitle = styled.Text`
    color: #b8bece;
    font-weight: 600;
    font-size: 15px;
    margin-left: 20px;
    margin-top: 20px;
    text-transform: uppercase;
`;

const Text = styled.Text`
    color: white;
    font-size: 12px;
    margin: 15px;
    text-align: justify;
`;