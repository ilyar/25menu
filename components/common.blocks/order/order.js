modules.define('order',
['i-bem-dom', 'jquery'],

function(provide, bemDom, $) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
              // this._events().on('change', this._onChange);
              // console.log( this._get() );
              // debugger;
            }
        }
    },

    // Запросить только товары

    _get: function() {
      $.ajax( {
        async: true,
        url: 'http://delivery.breadhead.ru/api/basket',
        method: 'GET',
      } ).done( request => {
        console.log( request );
        // let currentOrder = this._get().hello = newGood;
        // this._onChange( JSON.stringify( currentOrder ) );
      } )
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
    _add: function( id, count = 1, key, mods ) {
      $.ajax( {
        async: true,
        url: 'http://delivery.breadhead.ru/basket/additem',
        method: 'POST',
        data: {
          product_id: id,
          count: count,
          item_id: key,
          modifications: mods
        }
      } ).done( request => {
        let newGood = JSON.parse( request );
        console.log( newGood );
        // this._render(newGood);
        // console.log( currentOrder );
        // let currentOrder = this._get().hello = newGood;
        // this._onChange( JSON.stringify( currentOrder ) );
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
    },


    // Рендер корзины

    // _render( items ){
    //     bemDom.update(
    //       this.domElem,
    //         items..map ( item => {
    //         BEMHTML.apply({
    //             block : 'product',
    //             mix: { block: 'order', elem: 'good' },
    //             mods: {
    //               type: 'basket'
    //             }
    //           })
    //       }))
    //     return this;
    // }

}));

});
