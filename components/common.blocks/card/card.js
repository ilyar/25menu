modules.define('card',
  ['i-bem-dom', 'BEMHTML', 'price', 'selector'],
  function(provide, bemDom, BEMHTML, Price, Select) {

provide(bemDom.declBlock(this.name, {
  onSetMod:{
    js: {
      inited: function() {

        this._domEvents(Select).on('click', (event) => {
          event.stopPropagation();
        })

        this._domEvents('price_block').on('click', ( event ) => {
          var priceBtn = event.bemTarget.findMixedBlock(Price);
          event.stopPropagation();
          priceBtn.setMod('pressed');
          if (priceBtn.params.quantity < 1 ) {
            priceBtn.params.quantity = 1;
            priceBtn.setMod('pressed', false);
            priceBtn._render();
          }
        })
      }
    }
  },

  _render(){
      bemDom.update(
        priceBtn._elem('quantity').domElem,
        priceBtn.params.quantity
      );
  }

}));

});
