import React, { Component } from "react";

import { StyleSheet, View, Dimensions } from 'react-native';

import Pdf from 'react-native-pdf';

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

export default class OpenRelatorio extends Component {

    static navigationOptions = {
        headerTintColor: '#fff',
        headerTransparent: 'true',
    }

    constructor(props){
        super(props);
    }

    render() {

        const source = {
            uri:this.props.navigation.state.params
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

    customContainer: {
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#d6d8d8',
    },
});

