import React, { Component } from "react";

import { 
    StyleSheet,
    View,
    Dimensions,
    FlatList,
} from 'react-native';


import {
    Container,
    Header,
    Title,
    Text,
    Button,
    Icon,
    Footer,
    FooterTab,
    Right,
    Body,
} from "native-base";

import RNFetchBlob from 'rn-fetch-blob';

export default class ListRelatorio extends Component {

    static navigationOptions = {
        headerTintColor: '#fff',
        headerTransparent: 'true',
    }
    constructor(props){
        super(props);
    }
    
    onLearnMore = (item) => {
        this.props.navigation.navigate('OpenRelatorio', item);
    };
    
    render() {
        let { navigate } = this.props.navigation
        
        var arquivos = []
        const PATH_TO_LIST = 'file:///sdcard/Download/ReportTemperature/Relatorios/'
        
        RNFetchBlob.fs.ls(PATH_TO_LIST)
            .then((files) => {
                console.log(files)
                for(var file in files) {

                    var caminho = `${PATH_TO_LIST}${files[file]}`
                    
                    var quebra = files[file].split("_");
                    
                    var data = quebra[1].replace(/-/g,"/");

                    var hora = quebra[2].replace(/-/g,":");
                    // var hora = list_hora[0].replace(/-/g,":");

                    var iden = quebra[3].split(".");
                    var identificacao = iden[0]; 

                    arq = {
                        indentificacao: identificacao,
                        data: data,
                        hora: hora,
                        uri: caminho
                    }
                    arquivos.push(arq);
                } 
                arquivos.sort(function (a, b) {
                    if (a.hora > b.hora) {return -1;}
                    if (a.hora < b.hora) {return 1;}
                    return 0;
                });     
            })
        
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

                    <View style={styles.customContainer} >

                        <FlatList
                            style={styles.customFlatList}
                            data={arquivos}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) =>
                                <View style={styles.flatview}>
                                    <View style={styles.customHeaderList}>
                                        <Icon
                                            active name="paper"
                                            style={styles.customHeaderIcon}>
                                        </Icon>
                                        <Text style={styles.identificacao}>{item.indentificacao}</Text>
                                        <Right>
                                            <Icon
                                                name="arrow-forward"
                                                style={styles.customIconList}
                                                onPress={() => this.onLearnMore(item.uri)}>
                                            </Icon>
                                        </Right>
                                    </View>
                                    <View style={styles.customHeaderList}>
                                        <Text style={styles.data}>{item.data}</Text>
                                        <Text style={styles.divisor}>  |  </Text>
                                        <Text style={styles.hora}>{item.hora}</Text>
                                    </View>
                                </View>
                            }
                            keyExtractor={item => item.uri}
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
        padding: 10,
        backgroundColor: '#d6d8d8',
    },
    customHeaderList: {
        flexDirection: 'row',
    },

    customHeaderIcon: {
        color: '#747777',
        paddingRight: 10,
        paddingLeft: 10,
    },

    flatview: {
        justifyContent: 'center',
        paddingTop: 15,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 10,
    },
    customFlatList: {
        flex: 1,
        width: Dimensions.get('window').width,
        paddingLeft: 20,
        paddingRight: 20,
    },
    customIconList: {
        paddingRight: 10,
        color: '#747777',
    },
    identificacao: {
        fontFamily: 'Verdana',
        fontSize: 18,
        color: '#747777',
    },
    data: {
        color: '#f46242',
        paddingLeft: 45,
    },
    hora: {
        color: '#f46242',
    },
    divisor: {
        color: '#747777',
        paddingLeft: 20,
        paddingRight: 20,
    },

});

