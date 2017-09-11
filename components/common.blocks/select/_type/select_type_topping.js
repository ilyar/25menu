modules.define('select',

function(provide, Select) {

provide(Select.declMod({ modName: 'type', modVal: 'topping' }, {
  onSetMod: {
    js: {
      inited: function() {
        this.__base.apply(this, arguments);
        let icon = this._elem('icon-add');
        console.log( 'inited' );

        // this.onToppingChoose;
        this._events().on('change', this._updateAddButton, this);
      }
    }
  },

  _onToppingChoose : function() {
    this.setVal( this.hasMod('mode', 'check') ? [] : '' );
  },

  _updateAddButton : function() {
    console.log( '!!!!!!!!!!!!!!!!!!!!!!' );
    console.log( !!this.getVal().length );
    this._elem('icon-add').toggleMod('ed', true, !!this.getVal().length );
  }
},{
  lazyInit: false
}));

});




// this.hasMod('mode', 'check') ? !!this.getVal().length : !!this.getVal());


//   onSetMod: {
//     js: {
//       inited: function() {
//         this.__base.apply(this, arguments);

//         this._events().on('change', this._updateClear, this);
//         this._updateClear();
//       }
//     }
//   },

//   _onClearClick : function() {
//     this
//       .setVal( this.hasMod('mode', 'check') ? [] : '' )
//       .setMod('focused');
//   },

//   _updateClear : function() {
//     this._elem('clear').toggleMod('visible', true, this.hasMod('mode', 'check') ? !!this.getVal().length : !!this.getVal());
//   }
// },{
//   onInit : function() {
//     this._domEvents('clear').on('pointerclick', function() {
//       this._onClearClick();
//     });

//     return this.__base.apply(this, arguments);
//   }
