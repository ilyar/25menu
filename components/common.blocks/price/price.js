modules.define('price',
  ['i-bem-dom', 'page', 'select'],
  function(provide, bemDom, Page, Select) {

provide(bemDom.declBlock(this.name, {
  onSetMod:{
    js: {
      inited: function() {
        this.__modifiers = this.findParentBlock(Page).findChildBlock(Select);
        console.log(this.__modifiers.getVal());
      }
    }
  }


}));

});
