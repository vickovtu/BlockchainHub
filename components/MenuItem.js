import React from 'react';
import styled from 'styled-components'

const MenuItem = props =>(
    <Container>
        <IconView source={props.icon}/>
        <Content>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
        </Content>
    </Container>
);

export default MenuItem
const Container = styled.View`
    flex-direction: row;
    margin: 15px 0;
    
`;

const IconView = styled.Image`
    width: 32px;
    height: 32px;
    justify-content: center;
    align-items: center;
`;

const Content = styled.View`
    padding-left: 20px;
    
`;

const Title = styled.Text`
    color: #3c4560;
    font-size: 24px;
    font-weight: 600;
`;

const Text = styled.Text`
    color: #3c4560;
    font-weight:600;
    opacity: 0.6;
    margin-top: 5px;
`;
