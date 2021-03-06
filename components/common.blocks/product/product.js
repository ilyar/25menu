modules.define('product',
  ['i-bem-dom', 'BEMHTML', 'close-btn', 'price'],
  function(provide, bemDom, BEMHTML, Close, Price) {

provide(bemDom.declBlock(this.name, {
  onSetMod:{
    js: {
      inited: function() {
        this._domEvents('close').on('click', ( event ) => {
          this.setMod('hide');
        })
        this._domEvents('price-block').on('click', ( event ) => {
          let priceBtn = event.bemTarget.findMixedBlock(Price);
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

