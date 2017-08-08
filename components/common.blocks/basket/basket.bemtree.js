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
        block: 'form-field',
        content: [
        {
          block: 'input',
          mods: {
            size: 'm',
            width: 'available'
          },
          placeholder: 'Время',
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


