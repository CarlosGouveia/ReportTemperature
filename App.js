import React, { Component } from "react";

import { StyleSheet, ImageBackground } from 'react-native';

import { createStackNavigator } from 'react-navigation';

import {
    Container,
    Header,
    Title,
    Text,
    Button,
    Icon,
    Footer,
    FooterTab,
    Body,
} from "native-base";

import OpenRelatorio from 'ReportTemperature_v1/src/OpenRelatorio.js';
import ListRelatorio from 'ReportTemperature_v1/src/ListRelatorio.js';

class App extends Component {

    static navigationOptions = {
        headerTransparent: 'true',
    }

    render() {

        let { navigate } = this.props.navigation

        return (
            <Container>
                <Header style={styles.customHeader} androidStatusBarColor='#404242'>

                    <Body style={styles.customBody}>
                        <Icon name="pulse" style={styles.colorIcon} />
                        <Title style={styles.customTitle}>Report-Temperature</Title>
                        <Icon name="pulse" style={styles.colorIcon} />
                    </Body>

                </Header>

                <Container style={styles.customContainer}>

                    <ImageBackground
                        source={require('./Data/img/coffe.jpg')}
                        imageStyle={{ resizeMode: 'stretch' }}
                        style={styles.customBackgroundImg}
                    >
                        <Button block light style={styles.marginBtn2} onPress={() => navigate('ListRelatorio')}>
                            <Text style={styles.customText}>Abrir relatórios</Text>
                        </Button>
                    </ImageBackground>

                </Container>

                <Footer>
                    <FooterTab>
                        <Button active full style={styles.customFooter}>
                            <Text>Copyright © 2018 Carlos Gouveia</Text>
                        </Button>
                    </FooterTab>
                </Footer>

            </Container>
        );
    }
}

const StackApp = createStackNavigator({
    Home: App,
    ListRelatorio: ListRelatorio,
    OpenRelatorio: OpenRelatorio,
    },

    {
        headerMode: 'screen',
    }
)

export default StackApp

const styles = StyleSheet.create({

    customHeader: {
        backgroundColor: '#747777',
    },

    customBody: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#747777',
    },

    customFooter: {
        backgroundColor: '#747777',
    },

    colorIcon: {
        color: '#f46242',
    },

    customText: {
        color: '#fff',
    },

    customTitle: {
        color: '#fff',
        fontSize: 25,
    },

    marginBtn1: {
        marginTop: 20,
        marginBottom: 20,
    },

    marginBtn2: {
        marginTop: 290,
        backgroundColor: 'rgba(244,98,66,1.0)',
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 15,
    },

    customContainer: {
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d6d8d8',
    },
    customBackgroundImg: {
        width: '100%',
        height: '100%',
        paddingTop: 80,
    },

});
