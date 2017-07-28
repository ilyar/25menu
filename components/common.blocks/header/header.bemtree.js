block('header').content()(function() {
  return [
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
});
