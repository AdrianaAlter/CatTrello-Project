var React = require('react');
var Header = require('./header');
var BoardIndex = require('./board_index');
var SessionStore = require('../store/session_store.js');
var ApiUtil = require('../util/api_util');

var App = React.createClass({

  // contextTypes: {
  //   router: React.PropTypes.object.isRequired
  // },
	//
  // getInitialState: function () {
  //   return {
  //     currentUser: null
  //   };
  // },
	//
  // componentDidMount: function () {
  //   this.sessionStoreToken = SessionStore.addListener(this.handleChange);
  //   this.handleChange();
  // },
	//
  // componentWillUnmount: function () {
  //   this.sessionStoreToken.remove();
  // },
	//
  // handleChange: function () {
  //   if (SessionStore.isLoggedIn()) {
  //     this.setState({ currentUser: SessionStore.currentUser() });
  //   }
  //   else {
  //     this.context.router.push("/login");
  //   }
  // },

  render: function () {

    // var button;
    // var loggedInAs;
		//
    // if (this.state.currentUser) {
    //   button =
		// 		<button
		// 			className="logout-button"
		// 			onClick={ApiUtil.logOut}>
		// 			Logout
		// 		</button>;
    //   loggedInAs = <h1 className="user-name">{this.state.currentUser.name}</h1>;
    // }

    return(
      <div id="app">
        <Header />
          {this.props.children}
      </div>
    );
  }
});


module.exports = App;
