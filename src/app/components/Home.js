import React from "react";
import UsersList from '../loginList/userList';
import _ from 'lodash';
import { browserHistory } from "react-router";

export class Home extends React.Component {
    getInitialstate() {
        return {
            isValid: false,
            count : 0
        };
    }

    checkLogin() {
      console.log("users -----", UsersList);
      console.log("users -----", UsersList.Users);
      console.log("came here11", this);
      var textValue = this.refs.textValue.value;
      var passValue = this.refs.passValue.value;
      console.log("came here", this.refs.textValue.value);
      console.log("came here", this.refs.passValue.value);
      var index = _.findIndex(UsersList.Users, function (user){
        if (user.userID==textValue)
          return user.password == passValue
      })
      console.log("index-----", index);

      if(index == -1) {
         this.setState({ isValid : false, count: "sdgdj" });
      } else {
          browserHistory.push("/home-single/11");
      }
    }

    showError(state) {
       if (!_.get(state, 'isValid', false) && _.get(state, 'count', 0) != 0) {
          return (
            <p> Wrong Login credentials </p>
          );
       }
    }

    render() {
        console.log("this.state----", this.state);
        return (
            <div>
                {this.showError(this.state)}
                <input type='text'  ref="textValue" />
                <input type='password'  ref="passValue" />
                <button onClick={this.checkLogin.bind(this)} >Login</button>
            </div>
        );
    }
}
