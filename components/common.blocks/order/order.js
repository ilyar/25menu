modules.define('order',
['i-bem-dom', 'jquery'],

function(provide, bemDom, $) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
              this._events().on('change', this._onChange);
              this._add( 313132, 2, { bambaleilo: 'weeee' } );
              console.log( this._get() );
              // debugger;
            }
        }
    },

    // Запросить только товары
    _get: function() {
      return window.localStorage.getItem( 'order' );
    },

    // Запросить итоговую стоимость, вес и пр.
    _status: function() {
      let currentOrder = JSON.parse( this._get() );
      let orderStatus = {
        price: 0,
        weight: 0
      };
      Object.keys( currentOrder ).map( key => {
        if ( currentOrder[ key ].hasOwnProperty( price ) ) {
          orderStatus.price += currentOrder[ key ].price;
        }
        if ( currentOrder[ key ].hasOwnProperty( weight ) ) {
          orderStatus.weight += currentOrder[ key ].weight;
        }
      } );

      return orderStatus;
    },

    // добавить товар
    _add: function( id, count = 1, options ) {
      // var currentOrder = this._get();
      $.post( '/api/order/add', {
        id: id,
        count: count,
        toppings: options
      } ).done( request => {
        let newGood = JSON.parse( request );
        let currentOrder = this._get().hello = newGood;
        this._onChange( JSON.stringify( currentOrder ) );
      } )


    },

    // Изменить товар с конкретным id
    _change: function( id, count = 1 ) {
      this._onChange( newOrder );
    },

    // Удалить товар из корзины
    _remove: function( id, count = 1 ) {
      this._onChange( newOrder );
    },

    // Обновить корзину полностью (array)
    _set: function( newOrder ) {

      this._onChange( newOrder );
    },

    // Полностью очистить корзину
    _clean: function() {

      this._onChange( newOrder );
    },

    // На вызов любогг метода корзины, он обновляет localStorage
    _onChange: function( order ) {
      window.localStorage.setItem( 'order', order );
      this._get();
    }
}));

});
