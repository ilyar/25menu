block('product').js()( true )


block('product').content()(function() {
    return [
    {
      block: 'close-btn',
      mods: {
        type: 'product'
      },
      mix: [
      { block: 'product', elem: 'close' },
      { block: 'items', elem: 'product_close'}
      ]
    },
    {
      block: 'button',
      mods: {
        theme: '25menu'
      },
      mix: { block: 'items', elem: 'control', elemMods: { left: true } },
      icon:
      {
        block: 'icon',
        mods: {
          symbol: 'control',
        }
      }
    },
    {
      block: 'button',
      mix: { block: 'items', elem: 'control', elemMods: { right: true } },
      icon:
      {
        block: 'icon',
        mods: {
          symbol: 'control',
          revert: true
        }
      }
    },
    {
      elem: 'info',
      content: [
      {
        block: 'title',
        mix: { block: 'product', elem: 'title' },
        content: this.ctx.name
      },
      {
        block: 'consist',
        mods: {
          type: 'product'
        },
        mix: { block: 'product', elem: 'topping' },
        ingridients: this.ctx.ingridients,
        modifiers: this.ctx.modifiers
      },
      {
        block: 'price',
        mods:{
          type: 'product'
        },
        mix: { block: 'product', elem: 'price-block' },
        price: this.ctx.price
      },
      {
        block: 'description',
        content: [
        {
          elem: 'weight_special',
          content: this.ctx.weight * 1000 + ' гр.'
        },
        {
          block: 'link',
          url: '',
          content:[
          {
            block: 'icon'
          },
          'ОСТРОЕ'
          ],
          mix: { block: 'product', elem: 'filter' }
        },
        {
          block: 'link',
          url: '',
          content: [
          {
            block: 'icon'
          },
          'БЕЗ ГЛЮТЕНА'
          ],
          mix: { block: 'product', elem: 'filter' }
        },
        {
          elem: 'text',
          content: this.ctx.description
        }
        ]
      },
      {
        block: 'value',
        mods: {
          type: 'product'
        },
        mix: { block: 'product', elem: 'value-block' },
        energy: this.ctx.energy,
        fat: this.ctx.fat,
        fiber: this.ctx.fiber,
        hydrates: this.ctx.hydrates
      },
      {
        block: 'link',
        url: '',
        content: [
        'ПОДРОБНЕЕ',
        {
          block: 'icon'
        }
        ],
        mix: { block: 'product', elem: 'more' }
      }
      ]
    },
    {
      block: 'img',
      attrs: {
        style: 'background-image: url("' + '//delivery.breadhead.ru' + this.ctx.image + '476x476' + '");'
      }
    }
    ]
});



block('product').mod('type', 'basket').content()(function(){
    return [
    {
      elem: 'image',
      content: [
      {
        block: 'image',
        url: 'http://lorempixel.com/40/40/pizza'
      }
      ]
    },
    {
      elem: 'info',
      content: [
      {
        elem: 'description',
        content: [
          {
            block: 'title',
            mix: { block: 'product', elem: 'title' },
            content: [
              {
                elem: 'name',
                content: 'Котик няшечка в соусе'
              },
              {
                block: 'dropdown',
                mods: {
                    switcher: 'button',
                    theme: '25menu',
                    size: 's'
                },
                switcher: {
                  block: 'button',
                  text: '',
                  icon: {
                    block: 'icon',
                    mods: {
                      symbol: 'more'
                    }
                  }
                },
                popup: [
                {
                  elem: 'chars',
                  content: 'Ø 35 см на толстом тесте '
                }
                ]
              },
              ]
          },
          {
            block: 'price',
            mods:{
              type: 'basket'
            }
          },
          {
            block: 'bill',
            mix: { block: 'basket', elem: 'item-bill' },
            content: '585 Р'

          },
        ]
      },
      {
        block: 'consist',
        mods: {
          type: 'basket'
        },
        mix: { block: 'basket', elem: 'topping' }
      }
      ]
    }
    ]
});


