modules.define('items',
  ['i-bem-dom', 'BEMHTML', 'card', 'product', 'close-btn', 'header', 'page', 'sidebar', 'button', 'slider'],
  function(provide, bemDom, BEMHTML, Card, Product, Close, Header, Page, Sidebar, Button, Slider) {

provide(bemDom.declBlock(this.name, {
  onSetMod:{
    js: {
      inited: function() {

        this._domEvents('card').on('click', ( event ) => {
          this.allCards = event.bemTarget.findParentElem('card-group').findChildElems('card');
          this.chosenCard = event.bemTarget.findMixedBlock(Card);
          this.chosenItem = event.bemTarget;
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
          this.domElem.scrollTop(this.chosenCard.domElem[0].offsetTop + (this.findChildElem('popup') !== null ? 200 : 500) );
        }),

        this._domEvents('control_left').on('click', () => {
          let previous = this.chosenCard.params.index - 1;
          if ( previous < 2 ) {
            this._hideProduct();
            this.chosenCard.setMod('checked', false);
          }
          this._hideProduct();
          this.chosenCard.setMod('checked', false);
          this._showProduct(this.allCards.get(previous - 2).findMixedBlock(Card))
          this.chosenCard = this.allCards.get(previous - 2).findMixedBlock(Card);
          this.domElem.scrollTop(this.chosenCard.domElem[0].offsetTop + (this.findChildElem('popup') !== null ? 200 : 500) );
          this.allCards.get(previous - 2).findMixedBlock(Card).setMod('checked');
        }),

        this._domEvents('control_right').on('click', () => {
          let next = this.chosenCard.params.index + 1;
          if ( next > this.allCards.size() + 1) {
            this._hideProduct();
            this.chosenCard.setMod('checked', false);
          }
          this._hideProduct();
          this.chosenCard.setMod('checked', false);
          this._showProduct(this.allCards.get(next - 2).findMixedBlock(Card))
          this.chosenCard = this.allCards.get(next - 2).findMixedBlock(Card);
          this.domElem.scrollTop(this.chosenCard.domElem[0].offsetTop + (this.findChildElem('popup') !== null ? 200 : 500) );
          this.allCards.get(next - 2).findMixedBlock(Card).setMod('checked');
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
    let cardPerRow = window.innerWidth < 1280 ? 3 : 4;
    this.cardsArray = this.allCards.size() + 1;
    let insertIndex = (Math.ceil(card.params.index / cardPerRow)) * cardPerRow;
    let row = Math.ceil( this.cardsArray / cardPerRow );
    let isFinalRow = row === Math.ceil( card.params.index / cardPerRow );
    let place =  this.chosenItem.findParentElem('card-group').hasMod('special') ? this.findChildBlock(Slider).findChildElem('view').domElem :
                (isFinalRow ? this.allCards.get(this.cardsArray - 2).domElem : this.allCards.get(insertIndex - 2 ).domElem);
    bemDom.after(
        place,
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
            modifiers: card.params.product.modifiers,
            code: card.params.product.code,
            type: card.params.product.type,
            product_id: card.params.product.product_id
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


