import React, {Componet} from 'react';
import { View, Text, StyleSheet} from 'react-native';

class BemVindo extends Componet {

    render(){
        return(
            <View>
                <Text style={styles.tit}>{this.props.titSaudacao}</Text>
            </View>
        )
    }
}

export default BemVindo;

const styles = StyleSheet.create({
    tit:{
        color: '#51A7FF',
        fontSize: 25,
        fontWeight: 500,
        marginBottom: 20
    }
})