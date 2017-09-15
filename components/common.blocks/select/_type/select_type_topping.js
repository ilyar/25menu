modules.define('select',

function(provide, Select) {

provide(Select.declMod({ modName: 'type', modVal: 'topping' }, {
  onSetMod: {
    js: {
      inited: function() {
        this.__base.apply(this, arguments);

        let icon = this._elem('icon-add');
        // debugger;
        // let current = this.getVal ();
        // console.log(icon.domElem)
        console.log(current)
        // this._onToppingChoose();
        // this._events().on('click', this._updateAddButton);
      }
    }
  },

  _onToppingChoose : function() {
    var value = this.hasMod('mode', 'check') ? [] : '';
    this.setVal( value );
    console.log(this.getVal)
  },

  _updateAddButton : function() {
    console.log( !!this.getVal.length );
    this._elem('icon-add').toggleMod('ed', true, !!this.getVal.length );
  }
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
