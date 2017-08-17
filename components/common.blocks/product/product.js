modules.define('product',
  ['i-bem-dom', 'BEMHTML', 'close-btn'],
  function(provide, bemDom, BEMHTML, Close) {

provide(bemDom.declBlock(this.name, {
  onSetMod:{
    js: {
      inited: function() {
        this._domEvents('close').on('click', ( event ) => {
          this.setMod('hide');
        })
      }
    }
  }
}));

});
