modules.define('basket',
  ['i-bem-dom', 'BEMHTML'],
  function(provide, bemDom, BEMHTML) {

provide(bemDom.declBlock(this.name, {
  onSetMod:{
    js: {
      inited: function() {
          this._domEvents().on('click', function() {
            this.toggleMod('type', 'opened', 'closed')
        })
      }
    }
  }
}));

});

