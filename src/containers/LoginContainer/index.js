import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View} from "react-native";

const styles = {
  appContainer: {
    flex: 1
  }
}

class LoginContainer extends Component<{}> {

    render() {
        return (
            <View style={styles.appContainer}>
                <Text>Login</Text>
            </View>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
