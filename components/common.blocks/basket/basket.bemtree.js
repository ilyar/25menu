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


block('basket').mod('type', 'open').content()(function(){
  return [
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
            width: 'available'
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
            width: 'available'
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
          elem: 'choose',
          content: 'Выбрать время'
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
            'has-mask': true,
            'has-calendar' : true,
             special: true,
             size: 'm'
          }
        },
        {
          block: 'input',
          mix: { block: 'delivery', elem: 'time' },
          mods: {
            'has-mask': true,
            special: true,
            size: 'm'
          },
          placeholder: '11:00',
          js : {
              mask : '{{99}}/{{99}}'
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
                theme: 'islands',
                size: 'm',
                view: 'plain',

            },
            text: 'Через 55 мин'
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
            width: 'available'
          },
          placeholder: 'Оплата',
          icon: {
            block: 'icon',
            mods: {
            symbol: 'basket_payment'
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
            width: 'available'
          },
          placeholder: 'Добавить комментарий'
        }
        ]
      }
    ]
  },
  {
    elem: 'content',
    mix: { block: 'basket', elem: 'content' }
  },
  {
    elem: 'footer',
    mix: { block: 'basket', elem: 'footer' }
  }
  ]
}
]
});


