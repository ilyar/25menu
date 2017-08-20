modules.define('icon',
  ['i-bem-dom', 'BEMHTML'],
  function(provide, bemDom, BEMHTML) {

provide(bemDom.declBlock(this.name, {
  onSetMod:{
    js: {
      inited: function() {

      }
    }
  }
}));

});
