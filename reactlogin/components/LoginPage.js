import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

class LoginPage extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                {/* <Text style={styles.title}>AnyWay</Text> */}
                    <Image
                        style={styles.logo}
                        source={require('../source/Image/anyway.png')}
                    />
                    <Text style={styles.title}>this is subtitle</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
                <View>
                <Text style={styles.subtitle}>Power by React Native</Text>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#27ae60',
        flex: 1
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: '#FFF',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.8
    },
    subtitle: {
        padding: 5,
        backgroundColor: '#DB0A5B',
        textAlign: 'center',
        fontStyle: 'italic'
        
    }

});

export default LoginPage;