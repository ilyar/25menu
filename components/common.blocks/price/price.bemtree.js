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

block('price').mod('type', 'product').content()(function(){
  return [
    { elem: 'button_part',
      elemMods: {
        left: true,
      },
      content:
        {
          elem: 'value',
          content: '585 P'
        }
    },
    {
      elem: 'button_part',
      elemMods: {
        right: true,
      },
      content: [
        {
          block: 'call-to-action',
          content: 'В КОРЗИНУ'
        },
        {
          elem: 'counter',
          elemMods: {
            product: true
          },
          content: [
              {
                elem: 'minus'
              },
              {
                elem: 'quantity',
                content: '1'
              },
              {
                elem: 'plus',
              }
          ]
        }
      ]
      }
    ]
});

