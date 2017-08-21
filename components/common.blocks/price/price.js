modules.define('price',
  ['i-bem-dom', 'BEMHTML'],
  function(provide, bemDom, BEMHTML) {

provide(bemDom.declBlock(this.name, {
  onSetMod:{
    js: {
      inited: function() {
        this._render();
        var add = this._elem('plus');
        var remove = this._elem('minus');
        this._domEvents(add).on('click', () => {
          this.params.quantity += 1;
          this._render();
        })
        this._domEvents(remove).on('click', () => {
          this.params.quantity -= 1;
          this._render();
        })
      }
    }
  },

  _render(){
      bemDom.update(
        this._elem('quantity').domElem,
        this.params.quantity
      );
  }

}));

});
