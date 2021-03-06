var React = require('react');
var SessionStore = require('../store/session_store.js');
var ApiUtil = require('../util/api_util');
var Modal = require('react-modal');
var Link = require('react-router').Link;
var NotificationIndex = require('./notification_index.jsx');

var SessionButtons = React.createClass ({

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState: function () {
		return {
			currentUser: null,
      modalOpen: false
		};
	},

  openModal: function () {
    this.setState({ modalOpen: true });
  },

  closeModal: function () {
    this.setState({ modalOpen: false });
  },

  logOut: function () {
    ApiUtil.logOut();
    this.context.router.push("/login");
  },

	componentDidMount: function () {
		this.sessionStoreToken = SessionStore.addListener(this.handleChange);
		this.handleChange();
	},

	componentWillUnmount: function () {
		this.sessionStoreToken.remove();
	},

	handleChange: function () {
		if (SessionStore.isLoggedIn()) {
      this.setState({ currentUser: SessionStore.currentUser() });
		}
	},

	render: function () {
    var surprise = <section className="surprise">
      <h1>Congratulations, you have discovered the extra-special bonus content!!!!!</h1>
      <div className="surprise-pic"></div>
      <h2>(It's a cat.)</h2>
      <h3>(Meow.)</h3>
    </section>;

    var styles = {
      content: {backgroundColor: "#e4f0f6"}
    };
		
		var logout;
    var loggedInAs;
    if (this.state.currentUser) {
      logout =
				<li
					className="logout-button"
					onClick={this.logOut}>
					Logout
				</li>;
      loggedInAs = <li className="user-name" onDoubleClick={this.openModal}><Link to={"users/" + this.state.currentUser.id}>{this.state.currentUser.user_name}</Link>
        <Modal className="modal" isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={styles}>
          {surprise}
        </Modal>
      </li>;
    }

		return(
			<ul className="session-buttons group">
				<NotificationIndex />
        {loggedInAs}
				{logout}
			</ul>
		);
	}
});

module.exports = SessionButtons;
