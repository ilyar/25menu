block('price').content()(function() {
    return
    {
      block: price
    }
});

block('price').mod('type', 'active').content()(function(){
  return [
    {
      block: 'price',
    },
    {
      elem: 'counter',
      content: [
          {
            elem: 'minus',
            content: '-'
          },
          {
            elem: 'quantity',
            content: '25'
          },
          {
            elem: 'plus',
            content: '+'
          }
      ]
    }
  ]
});


