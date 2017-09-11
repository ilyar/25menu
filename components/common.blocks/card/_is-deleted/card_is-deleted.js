modules.define('card', function(provide, Card) {

provide(Card.declMod({ modName: 'is-deleted', modVal: true }, {
    onSetMod: {
        js: {
            inited: function() {
                
            }
        }
    }
}));

});
