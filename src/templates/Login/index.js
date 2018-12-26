import React, {Component} from "react";
import {Text, View, TouchableOpacity} from "react-native";
import Config from "react-native-config";
import {Button} from "react-native-elements";

import Toolbar from "../../components/Toolbar";

import styles from "./styles";

class Login extends Component<{}> {

    render() {
        return (
            <View style={styles.appContainer}>
                <Toolbar title={Config.APP_TYPE === "corporate" ? "HAIS" : "mooON"} />
                <View style={styles.loginWrapper}>
                    {(Config.APP_TYPE === "corporate") && <Text style={styles.welcomeText}>Welcome Back!</Text>}
                    {this.props.loginForm}
                    <TouchableOpacity style={styles.forgotPassButton}>
                        <Text style={styles.forgotPassword}>Forgot?</Text>
                    </TouchableOpacity>
                    <Button
                        raised
                        title="Sign In"
                        backgroundColor="#3AB2E4"
                        containerViewStyle={styles.loginButtonStyle}
                        textStyle={styles.loginTextStyle}
                        onPress={this.props.onLogin} />
                    {(Config.APP_TYPE === "corporate") && (
                        <Button
                            raised
                            title="Sign In with Google"
                            backgroundColor="#ffffff"
                            containerViewStyle={styles.loginButtonStyle}
                            textStyle={styles.googleTextStyle} />)
                    }
                    {(Config.APP_TYPE !== "corporate") && (
                        <View style={styles.signUpText}>
                            <Text style={styles.newMemberText}>New Member?</Text>
                            <TouchableOpacity><Text style={styles.signupButtonText}>Sign Up</Text></TouchableOpacity>
                        </View>)
                    }
                </View>
                <Text style={styles.copyrightText}>Copyright © 2018 Stellapps</Text>
            </View>
        );
    }
}

export default Login;
