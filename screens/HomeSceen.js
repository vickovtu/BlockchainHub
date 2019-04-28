import React from 'react';
import {ScrollView, SafeAreaView, TouchableOpacity, Animated, Easing, StatusBar} from 'react-native';
import styled from 'styled-components'
import Card from "../components/Card";
import Logo from "../components/Logo";
import Course from "../components/course";
import Menu from "../components/menu";
import {connect} from 'react-redux';
import {logos, cards, courses} from '../constans/constans'


function mapStateToProps(state) {
    return {action: state.action}
}

function mapDispatchToProps(dispatch) {
    return {
        openMenu: () => dispatch({
            type: 'OPEN_MENU'
        })
    }
}


class HomeScreen extends React.Component {

    static navigationOptions = {
        header: null
    }

    state = {
        scale: new Animated.Value(1),
        opacity: new Animated.Value(1),
    };

    componentDidMount() {
        StatusBar.setBarStyle("dark-content", true);
    }

    componentDidUpdate() {
        this.toggleMenu()
    }

    toggleMenu = () => {
        if (this.props.action == 'openMenu') {
            Animated.timing(this.state.scale, {
                toValue: 0.9,
                duration: 300,
                easing: Easing.in()
            }).start();
            Animated.spring(this.state.opacity, {
                toValue: 0.5
            }).start();

            StatusBar.setBarStyle("light-content", true);
        }
        if (this.props.action == 'closeMenu') {
            Animated.timing(this.state.scale, {
                toValue: 1,
                duration: 300,
                easing: Easing.in()
            }).start();
            Animated.spring(this.state.opacity, {
                toValue: 1
            }).start();

            StatusBar.setBarStyle("dark-content", true);
        }
    };

    render() {
        return (
            <RootView>
                <Menu/>
                <AnimatedContainer
                    style={{
                        transform: [{scale: this.state.scale}],
                        opacity: this.state.opacity
                    }}>
                    <SafeAreaView>
                        <ScrollView style={{height: "100%"}}>
                            <TitleBar>
                                <TouchableOpacity
                                    onPress={this.props.openMenu}
                                    style={{height: 60}}
                                >
                                    <Avatar source={require("../assets/logo/logo-blockchainhubacademy.png")}/>
                                </TouchableOpacity>
                            </TitleBar>
                            <Subtitle>our partners</Subtitle>
                            <ScrollView style={{flexDirection: "row", padding: 20, paddingLeft: 12, paddingTop: 30}}
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                            >
                                {logos.map((logo, index) => (
                                    <Logo key={index}
                                          image={logo.image}
                                          text={logo.text}
                                    />
                                ))}
                            </ScrollView>
                            <Subtitle>Continue Learning</Subtitle>
                            <ScrollView
                                horizontal={true}
                                style={{paddingBottom: 30}}
                                showHorizontalScrollIndicator={false}>
                                {cards.map((card, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={()=>{this.props.navigation.push("Section", {card})}}
                                    >
                                        <Card
                                              title={card.title}
                                              image={card.image}
                                              caption={card.caption}
                                              logo={card.logo}
                                              subtitle={card.subtitle}
                                        />
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                            <Subtitle>courses timetable</Subtitle>
                            {courses.map((course, index) => (
                                <Course
                                    key={index}
                                    image={course.image}
                                    title={course.title}
                                    subtitle={course.subtitle}
                                    logo={course.logo}
                                    author={course.author}
                                    avatar={course.avatar}
                                    caption={course.caption}
                                />

                            ))}

                        </ScrollView>
                    </SafeAreaView>
                </AnimatedContainer>
            </RootView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const RootView = styled.View`
    background: black;
    flex: 1
`;
const Subtitle = styled.Text`
    color: #b8bece;
    font-weight: 600;
    font-size: 15px;
    margin-left: 20px;
    margin-top: 20px;
    text-transform: uppercase;
`;
const Avatar = styled.Image`
    height: 100%;
`;

const Container = styled.View`
    flex: 1;
    backgroundColor: #f0f3f5;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);
const TitleBar = styled.View`
    width: 100%;
    margin-top: 50px;
    padding-left: 80px;
`;
