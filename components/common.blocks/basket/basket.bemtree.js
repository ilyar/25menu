block('basket').content()(function() {
  return;
});


block('basket').mod('type', 'open').content()(function(){
  return [
  {
   block: 'icon',
   mods: {
    symbol: 'cart'
    },
    mix: {block: 'basket', elem: 'cart' }
  },
  {
    block: 'bill',
    mix: { block: 'basket_type_closed', elem: 'bill' },
    content: '2130 Р'
  },
  {
   block: 'close-btn',
   mods: {
    type: 'basket'
    },
    mix: { block: 'basket', elem: 'close' }
  },
  {
    block: 'form',
    content: [
    {
      elem: 'header',
      mix: { block: 'basket', elem: 'header' },
      content: [
      {
        block: 'form-field',
        content: [
        {
          block: 'input',
          mods: {
            size: 'm',
            width: 'available',
            theme: '25menu'
          },
          placeholder: 'Имя',
          icon: {
            block: 'icon',
            mods: {
            symbol: 'basket_account'
            }
          }
        }
        ]
      },
      {
        block: 'form-field',
        content: [
        {
          block: 'input',
          mods: {
            size: 'm',
            width: 'available',
            theme: '25menu'
          },
          placeholder: 'Телефон',
          icon: {
            block: 'icon',
            mods: {
            symbol: 'basket_phone'
            }
          }
        }
        ]
      },
      {
        block: 'form-field',
        content: [
        {
          block: 'input',
          mods: {
            size: 'm',
            theme: '25menu',
            width: 'available'
          },
          placeholder: 'Адрес',
          icon: {
            block: 'icon',
            mods: {
            symbol: 'basket_map'
            }
          }
        }
        ]
      },
      {
        block: 'delivery-default',
        content: [
        {
          elem: 'time',
          content: [
          {
            block: 'icon',
              mods: {
              symbol: 'basket_time'
              }
          },
          {
            elem: 'current-time',
            content: '55 мин'
          }
          ]
        },
        {
            block: 'button',
            mix: { block: 'delivery-default', elem: 'choose' },
            mods: {
                size: 'm',
                view: 'plain'
            },
            text: 'Выбрать время'
        }
        ]
      },
      {
        block: 'form-field',
        mods: {
          type: 'delivery-time'
        },
        content: [
        {
          block: 'input',
          mix: { block: 'delivery', elem: 'date' },
          mods: {
            // 'has-mask': true,
            'has-calendar' : true,
             special: true,
             size: 'm',
             theme: '25menu'
          }
        },
        {
          block: 'input',
          mix: { block: 'delivery', elem: 'time' },
          mods: {
            // 'has-mask': true,
            special: true,
            size: 'm',
            theme: '25menu'
          },
          placeholder: '11:00',
          js : {
              mask : '{{99}}-{{99}}'
          },
          icon: {
            block: 'icon',
            mods: {
            symbol: 'basket_time'
            }
          }
        },
        {
            block: 'button',
            mix: { block: 'delivery', elem: 'default' },
            mods: {
                size: 'm',
                view: 'plain'
            },
            text: 'Через 55 мин'
        }
        ]
      },
      {
        block: 'select',
        mix: { block: 'basket', elem: 'payment' },
        mods: {
            mode: 'radio',
            theme: '25menu',
            size: 'm'
        },
        name: 'select2',
        val: 3,
        options: [
            {
                val: 1,
                text: 'Картой на сайте'
            },
            {
                val: 2,
                text: 'Картой курьеру'
            },
            {
                val: 3,
                text: 'Наличными курьеру'
            }
        ]
      },
      {
        block: 'form-field',
        mods: {
          theme: '25menu'
        },
        content: [
        {
          block: 'input',
          mods: {
            size: 'm',
            width: 'available',
            theme: '25menu'
          },
          placeholder: 'Добавить комментарий'
        }
        ]
      }
      ]
    },
    {
      elem: 'content',
      mix: { block: 'basket', elem: 'content' },
      content: [
      {
        elem: 'empty-block',
        mix: { block: 'basket', elem: 'is_empty' },
        content: 'В КОРЗИНЕ ПОКА ПУСТО'
      },
      {
        block: 'product',
        mix: { block: 'basket', elem: 'good' },
        mods: {
          type: 'basket'
        }
      },
      {
        block: 'product',
        mix: { block: 'basket', elem: 'good' },
        mods: {
          type: 'basket'
        }
      },
      {
        block: 'product',
        mix: { block: 'basket', elem: 'good' },
        mods: {
          type: 'basket'
        }
      },
      {
        block: 'product',
        mix: { block: 'basket', elem: 'good' },
        mods: {
          type: 'basket'
        }
      },
      {
        block: 'product',
        mix: { block: 'basket', elem: 'good' },
        mods: {
          type: 'basket'
        }
      },
      {
        block: 'product',
        mix: { block: 'basket', elem: 'good' },
        mods: {
          type: 'basket'
        }
      },
      {
        block: 'product',
        mix: { block: 'basket', elem: 'good' },
        mods: {
          type: 'basket'
        }
      }]
    },
    {
      elem: 'footer',
      mix: { block: 'basket', elem: 'footer' },
      content: [
        {
          elem: 'result',
          content: [
          {
            block: 'input',
            mix: { block: 'footer', elem: 'promocode' },
            mods: {
              size: 'm',
              width: 'available',
              theme: '25menu'
            },
            placeholder: 'Ввести промокод'
          },
          {
            block: 'bill',
            mix: { block: 'final-price' },
            content: '2130 Р'
          }
          ]
      },
      {
          block: 'button',
          mix: { block: 'basket', elem: 'buy' },
          mods: {
              size: 'm',
              type: 'submit'
          },
          text: 'ЗАКАЗАТЬ'
      },
      {
        block: 'agreement',
        mix: { block: 'basket', elem: 'agreement' }
      }]
    }
    ]
  }
]
});

