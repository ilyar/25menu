block('items').content()(function() {
  return [
    {
      elem: 'header',
      content: [
      {
        elem: 'workinfo',
        content: [
        {
          block: 'icon',
          mods: {
           symbol: 'pizza'
          }
        },
        {
          elem: 'title',
          content: 'Доставка и оплата'
        },
        {
          elem: 'workhours',
          content: 'с 10 до 23'
        },
        ]
      },
      {
        elem: 'login-area',
        content: [
          {
            block: 'icon',
            mods: {
              symbol: 'account'
            }
          },
          {
            elem: 'login',
            content: 'Войти'
          },
        ]
      }
      ]
    },
    { elem: 'card-group',
      elemMods: {
       special: true
      },
      content: [
      {
        block: 'logo',
        mods: {
          big: true
        }
      },
      {
        block: 'slider'
      },
      {
        elem: 'info-block',
        content: [{
          elem: 'info-block_card',
          mods: {
            delivery_info: true
          },
          content: [{
                block: 'icon'
              },{
                elem: 'info-block_card_title',
                content: 'Доставка в Петербурге.'
              },
              {
                elem: 'info-block_card_offer',
                content: 'Калининский, Васильеостровский и ещё 6 районов'
              },
              {
                block: 'link',
                url: "#",
                content: 'Зоны доставки'
          }]
        },{
          elem: 'info-block_card',
          mods: {
            points_info: true
          },
          content: [{
                block: 'icon'
              },{
                elem: 'info-block_card_title',
                content: 'Платите баллами'
              },
              {
                elem: 'info-block_card_offer',
                content: 'Возращаем 5% от стоимости заказа. Накапливайте и оплачивайте заказы'
              }]
        },{
          elem: 'info-block_card',
          mods: {
            sale_info: true
          },
          content: [{
                block: 'icon'
              },{
                elem: 'info-block_card_title',
                content: 'Получите скидку '
              },
              {
                elem: 'info-block_card_offer',
                content: 'пригласите друзей '
              },
              {
                block: 'link',
                url: "#",
                content: 'Смотреть карту'
          }]
        },
        ]
      }]
    },
    { elem: 'card-group',
      content: [
        {
          block: 'items',
          elem: 'card',
          content: [
            {
              block: 'card',
              mods: {
                type: 'usual'
              }
            }
          ]
        },
        {
          block: 'items',
          elem: 'card',
          content: [
            {
              block: 'card',
              mods: {
                type: 'chosen'
              }
            }
          ]
        },
        {
          block: 'items',
          elem: 'card',
          content: [
            {
              block: 'card',
              mods: {
                type: 'info'
              }
            }
          ]
        },
        {
          block: 'items',
          elem: 'card',
          content: [
            {
              block: 'card',
              mods: {
                type: 'pizza'
              }
            }
          ]
        },
        {
          block: 'items',
          elem: 'card',
          content: [
            {
              block: 'card',
              mods: {
                type: 'special'
              }
            }
          ]
        }
      ]
    },
    {
      elem: 'footer'
    }
    ]
});
