import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native';

class LoginForm extends Component {
    render() {
        return (
            <View behavior="padding" style={styles.container}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                <TextInput
                    underlineColorAndroid='transparent'
                    placeholder="username or Email"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType='next'
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                />
                <TextInput
                    underlineColorAndroid='transparent'
                    placeholder="password"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType='go'
                    secureTextEntry
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                />

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.3)',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }


});

export default LoginForm;