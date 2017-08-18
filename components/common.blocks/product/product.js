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
          priceBtn.setMod('pressed');
        })
      }
    }
  }
}));

});
