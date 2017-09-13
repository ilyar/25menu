block('page-notfound').content()(function() {
    return [
    {
      block: 'header'
    },
    {
      elem: 'content',
      content: [
      {
        elem: 'error',
        content: [
        '404',
        {
          elem: 'text',
          content: 'Упс :('
        },
        ]
      },
      {
        elem: 'text',
        content: 'Cтраница не найдена'
      },
      {
        block: 'button',
        mix: { block: 'page-notfound', elem: 'comeback' },
        mods: {
            theme: '25menu',
            size: 'l',
            type: 'link'
        },
        url: '/',
        text: 'Перейти на главную страницу'
      }
      ]
    },
    {
      block: 'footer'
    }
    ]
});
