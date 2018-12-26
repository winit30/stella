import {connect} from "react-redux";
import {compose} from "redux";
import React, {Component} from "react";
import {View, Text, Button} from "react-native";
import Config from "react-native-config";
import {reduxForm, Field} from "redux-form";
// import validator from "validator";

import InputText from "../../components/InputText";
import Login from "../../templates/Login";
// import {navigateTo} from "../../utils/utility";

import styles from "./styles";

class LoginContainer extends Component<{}> {

    onSubmit = (values) => {
        console.log(values)
    }

    renderTextInput = (field) => {
        const {meta: {touched, error}, label, secureTextEntry, maxLength, keyboardType, placeholder, input: {onChange, ...restInput}} = field;
        return (
            <View>
                <InputText
                    onChangeText={onChange}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    label={label}
                    {...restInput} />
                <Text style={styles.errorText}>{touched ? error : ""}</Text>
            </View>
        );
    }

    renderLoginForm = () => {
        return (
            <View>
                <Field
                    name="email"
                    label={Config.APP_TYPE === "corporate" ? "Registered HAIS Email ID" : "Registered mooON Mobile Number"}
                    component={this.renderTextInput} />
                <Field
                    name="password"
                    secureTextEntry={true}
                    label={Config.APP_TYPE === "corporate" ? "HAIS Password" : "mooON Password"}
                    component={this.renderTextInput} />
            </View>);
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <View style={styles.appContainer}>
                <Login loginForm={this.renderLoginForm()} onLogin={handleSubmit(this.onSubmit)} />
            </View>
        );
    }
}

const validate = (values) => {
    const errors = {};
    if (!values.email) {
        errors.email = "Email is required";
    }
    if (!values.password) {
        errors.password = "Locality is required";
    }
    return errors;
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({form: "login", validate})
)(LoginContainer);
