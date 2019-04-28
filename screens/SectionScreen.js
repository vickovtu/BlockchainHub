import React from 'react';
import styled from 'styled-components';
import {Button} from 'react-native'
import {Icon} from 'expo';

class SectionScreen extends React.Component {
    static navigationOptions = {
        header: null
    }


    render() {
        const {navigation} = this.props;
        const itemId = navigation.getParam('card')
        console.log("SectionScreen", itemId)
        return (
            <Container>

                <Info>
                    <Subtitle>{itemId.title} :</Subtitle>
                    {itemId.info.map((info, index) => <Text key={index}><Icon.Ionicons name='ios-checkmark' size={20} color='blue' style={{paddingRight:20}}
                    />{info}</Text>)}
                </Info>
                <Button title="Close" onPress={() => {
                    this.props.navigation.goBack();
                }}
                />

            </Container>
        )

    }
}

export default SectionScreen;

const Info = styled.View`
    align-items:flex-start;
`;

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items:center;
    background: #20B2AA;
`;
const Subtitle = styled.Text`
    color: #b8bece;
    font-weight: 600;
    font-size: 20px;
    margin-left: 20px;
    margin-top: 20px;
    text-transform: uppercase;
`;

const Text = styled.Text`
    color: white;
    font-size: 15px;
    margin: 10px;
    text-align: justify;
`;


{/*<Button title="Close" onPress={()=>{*/
}
{/*    this.props.navigation.goBack();*/
}
{/*}} />*/
}