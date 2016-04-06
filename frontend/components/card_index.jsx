var React = require('react');
var CardStore = require('../store/card_store.js');
var CardActions = require('../actions/card_actions.js');
var CardIndexItem = require('./card_index_item.jsx');
var ApiUtil = require('../util/api_util.js');

var CardIndex = React.createClass({

  getInitialState: function () {
    return { cards: this.getStateFromStore() };
  },

  getStateFromStore: function () {
    return CardStore.all();
  },


  setNewState: function () {
      this.setState( { cards: this.getStateFromStore() });
  },

  componentDidMount: function () {
    this.listener = CardStore.addListener(this.setNewState);
    ApiUtil.fetchAllCards(this.props.boardId, this.props.listId);
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  render: function () {
    if (!this.state.cards) {
      return (
        <div></div>
      );
    }

    var cardItems = this.state.cards.map(function (card) {
      return <CardIndexItem key={card.id} card={card}/>;
    });

    return (
      <ul className="card-index group">
          {cardItems}
			</ul>
	  );
  }


});

module.exports = CardIndex;

// <NewCardButton listId={this.props.listId}/>
