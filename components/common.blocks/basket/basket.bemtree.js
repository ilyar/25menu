block('basket').content()(function() {
    return;
});



block('basket').mod('type', 'closed').content()(function(){
  return [
    {
     block: 'icon',
     mods: {
      symbol: 'cart'
     },
     mix: {block: 'basket', elem: 'cart' }
    }
  ]
});
