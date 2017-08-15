modules.define('basket',
  ['i-bem-dom', 'BEMHTML', 'form'],
  function(provide, bemDom, BEMHTML, Form) {

provide(bemDom.declBlock(this.name, {
  onSetMod: {
    js: {
      inited: function() {
        this._form = this.findChildBlock(Form)
        this._domEvents().on('click', function() {
          this.setMod('type', this.hasMod('type', 'open') ? 'closed' : 'open');
        })
      }
    },
    type: {
      open: function() {
        console.log('I\'m open');
      },
      closed: function() {
        console.log('I\'m close');

        let goods = [],
          order = this.params[0].order;

          console.log( this.params )

        for ( let good in order ) {
          order[ good ].mods = { type: 'shortview' };
          order[ good ].mix =  { block: 'basket', elem: 'item-shortview' };
          goods.push( order[ good ] );
        }

        console.log( goods );
        bemDom.update(this._elem('basket').domElem, BEMHTML.apply( goods ));
      }
    }
  }
}));

});
