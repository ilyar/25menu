modules.define('order', function(provide, Order) {

provide(Order.declMod({ modName: 'empty', modVal: true }, {
    onSetMod: {
        js: {
            inited: function() {
                
            }
        }
    }
}));

});
