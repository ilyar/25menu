block('price')(
  addJs()( function () {
    return {
      quantity: 1,
      id: this.ctx.product_id
    }
  }),
  content()('')
)

block('price').mod('type', 'card').content()(function(){
  return [
    {
      elem: 'button_part',
      elemMods: {
        left: true,
      },
      content:
        {
          elem: 'value',
          content: this.ctx.price + " ₽"
        }
    },
    {
      elem: 'button_part',
      elemMods: {
        right: true,
      },
      content: [
        {
          elem: 'counter',
          elemMods: {
            card: true
          },
          content: [
            {
              block: 'icon',
              mods: {
                symbol: 'minus'
              },
              mix: { block: 'price', elem: 'minus' }
            },
            {
              elem: 'quantity'
            },
            {
              block: 'icon',
              mods: {
                symbol: 'plus'
              },
              mix: { block: 'price', elem: 'plus' }
            }
          ]
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
          content: this.ctx.price + " ₽"
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
                block: 'icon',
                mods: {
                  symbol: 'minus'
                },
                mix: { block: 'price', elem: 'minus' }
              },
              {
                elem: 'quantity'
              },
              {
                block: 'icon',
                mods: {
                  symbol: 'plus'
                },
                mix: { block: 'price', elem: 'plus' }
              }
          ]
        }
      ]
    }
  ]
});

block('price').mod('type', 'basket').content()(function(){
  return [
    {
      elem: 'counter',
      elemMods: {
        product: true
      },
      content: [
          {
            block: 'icon',
            mods: {
              symbol: 'minus'
            },
            mix: { block: 'price', elem: 'minus' }
          },
          {
            elem: 'quantity'
          },
          {
            block: 'icon',
            mods: {
              symbol: 'plus'
            },
            mix: { block: 'price', elem: 'plus' }
          }
      ]
    }
    ]
});
