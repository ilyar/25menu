modules.define('items',
  ['i-bem-dom', 'BEMHTML', 'card', 'product', 'close-btn'],
  function(provide, bemDom, BEMHTML, Card, Product, Close) {

provide(bemDom.declBlock(this.name, {
  onSetMod:{
    js: {
      inited: function() {
        this._domEvents('card').on('click', ( event ) => {
          this.allCards = event.bemTarget.findParentElem('card-group').findChildElems('card');
          this.chosenCard = event.bemTarget.findMixedBlock(Card);
          var otherCards = this.findChildBlocks(Card);

          if (this.findChildElem('popup') !== null) {
            this._hideProduct();
          }

          if (this.chosenCard.hasMod('checked')) {
              this.chosenCard.setMod('checked', false);
              this._hideProduct();
          } else {
              otherCards.setMod('checked', false);
              this.chosenCard.setMod('checked');
              this._showProduct(this.chosenCard);
          }
        }),
        //  Refactor (move inside block:product)
        this._domEvents(Close).on('click', ( event ) => {
          this.chosenCard.setMod('checked', false);
          this._hideProduct();
        })


      }
    }
  },

  _showProduct: function( card ) {
    let cardPerRow = 4;
    let insertIndex = (Math.ceil(card.params.index / cardPerRow)) * cardPerRow;
    let row = Math.ceil( this.allCards.size() / cardPerRow );
    let isFinalRow = row == Math.ceil( card.params.index / cardPerRow );
    bemDom.after(
       isFinalRow ? this.allCards.get( this.allCards.size() - 1 ).domElem : this.allCards.get(insertIndex - 1).domElem,
        BEMHTML.apply(
        {
          block: 'items',
          elem: 'popup',
          content: [
          {
            block : 'product',
            name: card.params.product.name,
            weight: card.params.product.weight,
            price: card.params.product.price,
            description: card.params.product.description,
            image: card.params.product.image,
            energy: card.params.product.energy,
            fat: card.params.product.fat,
            fiber: card.params.product.fiber,
            hydrates: card.params.product.hydrates,
          }
          ]
        }));
      return this;
  },

  _hideProduct: function() {
      bemDom.destruct(this.findChildElem('popup').domElem);
  }

}));

});


