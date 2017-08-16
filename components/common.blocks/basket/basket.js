modules.define('basket',
  ['i-bem-dom', 'BEMHTML', 'form'],
  function(provide, bemDom, BEMHTML, Form) {

provide(bemDom.declBlock(this.name, {
  onSetMod: {
    js: {
      inited: function() {
        this._domEvents().on('click', function() {
          console.log ('hello!')
          this.setMod('type', this.hasMod('type', 'open') ? 'closed' : 'open');
        })
      }
    }
  }
}));

});
