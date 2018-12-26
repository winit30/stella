import React, {Component} from "react";
import {Router, Scene} from "react-native-router-flux";

import LoginContainer from "../LoginContainer";

export default class Routes extends Component<{}> {

		render() {
				const {isLoggedin} = this.props;
				return(
						<Router>
								<Scene>
										<Scene key="auth" hideNavBar={true} initial={!isLoggedin}>
												<Scene key="login" component={LoginContainer} title="Login" />
										</Scene>
								</Scene>
						</Router>
				);
		}
}
