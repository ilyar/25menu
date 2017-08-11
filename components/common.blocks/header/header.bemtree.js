block('header').content()(function() {
  return [
      {
        elem: 'workinfo',
        content: [
        {
          block: 'link',
          url: 'tel=+7812200-20-20',
          content: '8 812 200-20-20'
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
