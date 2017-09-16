modules.define('price',
  ['i-bem-dom', 'BEMHTML', 'page', 'order'],
  function(provide, bemDom, BEMHTML, Page, Order) {

provide(bemDom.declBlock(this.name, {
  onSetMod:{
    js: {
      inited: function() {
        this._render();
        var add = this._elem('plus');
        var remove = this._elem('minus');
        this.order = this.findParentBlock(Page).findChildBlock(Order);

        this._domEvents(add).on('click', (event) => {
          this.params.quantity += 1;
          this.order._add( this.params.id, this.params.quantity )
          this._render();
        })
        this._domEvents(remove).on('click', (event) => {
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
