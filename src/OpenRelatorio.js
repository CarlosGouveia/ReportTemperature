import React, { Component } from "react";

import { StyleSheet, View, Dimensions } from 'react-native';

import Pdf from 'react-native-pdf';

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

// import styles from "./styles";

export default class OpenRelatorio extends Component {

    static navigationOptions = {
        headerTintColor: '#fff',
        headerTransparent: 'true',
    }




    render() {

        const source = {
            uri:'file:///sdcard/Download/relatorio.pdf',
            // cache:true,
        };

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

                    <Button block light style={styles.marginBtn1}>
                        <Text>Abrir relatório</Text>
                    </Button>

                    <View style={styles.containerPDF}>
                        <Pdf
                            source={source}
                            onLoadComplete={(numberOfPages, filePath) => {
                                console.log(`number of pages: ${numberOfPages}`);
                            }}
                            onPageChanged={(page, numberOfPages) => {
                                console.log(`current page: ${page}`);
                            }}
                            onError={(error) => {
                                console.log(error);
                            }}
                            style={styles.pdf}
                        />
                    </View>

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
const styles = StyleSheet.create({

    containerPDF: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },

    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
    },

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
        marginTop: 10,
        marginBottom: 10,
    },

    marginBtn2: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#f46242',
    },

    customContainer: {
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#d6d8d8',
    },

});

