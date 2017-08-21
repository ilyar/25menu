modules.define('items',
  ['i-bem-dom', 'BEMHTML', 'card'],
  function(provide, bemDom, BEMHTML, Card) {

provide(bemDom.declBlock(this.name, {
  onSetMod:{
    js: {
      inited: function() {
        this._domEvents('card').on('click', ( event ) => {
          var chosenCard = event.bemTarget.findMixedBlock(Card);
          var otherCards = this.findChildBlocks(Card);
          if (chosenCard.hasMod('checked')) {
              chosenCard.setMod('checked', false);
          } else {
            otherCards.setMod('checked', false);
            chosenCard.setMod('checked');
          }
        })
      }
    }
  }
}));

});
