modules.define('card',
  ['i-bem-dom', 'BEMHTML', 'price'],
  function(provide, bemDom, BEMHTML, Price) {

provide(bemDom.declBlock(this.name, {
  onSetMod:{
    js: {
      inited: function() {
        this._domEvents('price_block').on('click', ( event ) => {
          var priceBtn = event.bemTarget.findMixedBlock(Price);
          event.stopPropagation();
          priceBtn.setMod('pressed');
        })
      }
    }
  }
}));

});
