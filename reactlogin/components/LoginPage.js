import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class LoginPage extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.titleWrapper}>
                <Text style={styles.title}>AnyWay</Text>
                </View>
                <View>
                <Text style={styles.subtitle}>Power by React Native</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#27ae60',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold'
    },
    // subtitle: {
    //     color: 'white',
    //     fontWeight: 300,
    //     paddingBottom: 20
    // },
    titleWrapper: {
        justifyContent: 'center',
        flex: 1
    }

});

export default LoginPage;