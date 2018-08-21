import React, { Component } from "react";

import { StyleSheet, View } from 'react-native';

import { createStackNavigator } from 'react-navigation';

import {
    Container,
    Header,
    Title,
    Content,
    Text,
    Button,
    Icon,
    Footer,
    FooterTab,
    Left,
    Right,
    Body,
} from "native-base";

import ConectaDispositivo from 'ReportTemperature_v1/src/ConectaDispositivo.js';
import GetRelatorio from 'ReportTemperature_v1/src/GetRelatorio.js';
import OpenRelatorio from 'ReportTemperature_v1/src/OpenRelatorio.js';

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
                        <Title style={styles.customTitle}>Tempe+</Title>
                        <Icon name="pulse" style={styles.colorIcon} />
                        <Icon name="pulse" style={styles.colorIcon} />
                    </Body>
                    
                </Header>

                 <Container style={styles.customContainer}>
                        
                    <Button block light style={styles.marginBtn1} onPress = {() => navigate('ConectaDispositivo')}>
                        <Text>Conectar a um dispositivo</Text>
                    </Button>

                    <Button block info style={styles.marginBtn2} onPress = {() => navigate('GetRelatorio')}>
                        <Text>Obter relatorios</Text>
                    </Button>

                    <Button block light style={styles.marginBtn1} onPress = {() => navigate('OpenRelatorio')}>
                        <Text>Abrir relatorios</Text>
                    </Button>
                 
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
        Home               : App ,
        ConectaDispositivo : ConectaDispositivo,
        GetRelatorio       : GetRelatorio,
        OpenRelatorio      : OpenRelatorio,
    },
    
    {
        headerMode : 'screen',
    })

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
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#f46242',
    },

    customContainer: {
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        backgroundColor: '#d6d8d8',
    },

});
