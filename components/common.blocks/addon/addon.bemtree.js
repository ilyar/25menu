block('addon').content()(function() {
    return [
    ];
});


block('addon').mod('type', 'product').content()(function(){
  return [
    {
      block: 'icon',
      mods: {
        symbol: 'add'
      }
    },
    {
      elem: 'descr',
      content: 'Ананасы'
    },
    {
      elem: 'weight',
      content: '40г'
    },
    {
      elem: 'price',
      content: '50 Р'
    }
  ]
});


