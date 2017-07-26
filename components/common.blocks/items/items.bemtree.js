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
      ]
    },
    { elem: 'card-group',
      content: [
      {
        block: 'card',
        mods: {
          type: 'usual'
        },
        mix: { block: 'items', elem: 'card'}
      },
      {
        block: 'card',
        mods: {
          type: 'chosen'
        },
        mix: { block: 'items', elem: 'card'}
      },
      {
        block: 'card',
        mods: {
          type: 'info'
        },
        mix: { block: 'items', elem: 'card'}
      },
      {
        block: 'card',
        mods: {
          type: 'pizza'
        },
        mix: { block: 'items', elem: 'card'}
      },
      {
        block: 'card',
        mods: {
          type: 'special'
        },
        mix: { block: 'items', elem: 'card'}
      },
      ]
    },
    {
      elem: 'footer'
    }
    ]
});
