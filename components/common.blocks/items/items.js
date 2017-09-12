modules.define('items',
  ['i-bem-dom', 'BEMHTML', 'card', 'product', 'close-btn', 'header', 'page', 'sidebar', 'button'],
  function(provide, bemDom, BEMHTML, Card, Product, Close, Header, Page, Sidebar, Button) {

provide(bemDom.declBlock(this.name, {
  onSetMod:{
    js: {
      inited: function() {


        // let leftControl = this.findChildElem('control_left');
        // // .on('click', ( event ) => {
        //   console.log(leftControl)
        //   // this._showProduct()
        // // }),

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

        this._domEvents('product_close').on('click', ( event ) => {
          this.chosenCard.setMod('checked', false);
          this._hideProduct();
        }),

        this._domEvents().on('scroll', () => {
          this._showSideLogo();
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
            ingridients: card.params.product.ingridients,
            modifiers: card.params.product.modifiers
          }
          ]
        }));
      return this;
  },

  _hideProduct: function() {
      bemDom.destruct(this.findChildElem('popup').domElem);
  },

  _showSideLogo: function() {
    var scrolled = this.domElem.scrollTop();
    var hiddenLogo = this.findParentBlock(Page).findChildBlock(Sidebar).findChildElem('scroll-area');
    if ( scrolled > 220 ) {
      hiddenLogo.setMod('hide', false)
    } else {
      hiddenLogo.setMod('hide', true)
    }
  }

}));

});


