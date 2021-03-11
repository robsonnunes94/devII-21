import React, { Componet } from 'react';
import {StyleSheet, View} from 'react-native';

class ImagemSaudacao extends Componet{
    render(){
        let imagem = 'C:\Users\robson\Desktop\Aviso zoom.jpg'
        return(
            <View style={StyleSheet.container}>
                <Image>
                    source={{uri:imagem}}
                    style={{width: this.props.largura, height: this.props.altura}}
                    
                </Image>
                <Text style={StyleSheet.imgTit}>this.props.nomeImagem</Text>
            </View>
        )
    }
}

export default ImagemSaudacao;

const styles = StyleSheet.create({
    container:{
        margin:20,
        justifyContent: 'center',
        textAlign : 'center'
    },
    imgTit:{
        margin:20,
        fontSize: 16
    }
})