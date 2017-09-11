block('sidebar')
.content()(function() {
  return [
    {
      elem: 'header',
      content: [
        {
          block: 'link',
          url: '/',
          content: [
              {
                block: 'logo',
                mods: {
                  small: true
                }
              }
          ]
        },
        {
         elem: 'scroll-area',
         elemMods: {
          hide: true
        },
         content: [
          {
            block: 'logo',
            mods: {
              title: true
            }
          },
          {
            block: 'link',
            url: 'tel:+7812200-20-20',
            content: '8 812 200-20-20'
          }
         ]
        }
      ]
    },
    {
      block: 'nav',
      mix: { block: 'sidebar', elem: 'content' }
    },
    {
      elem: 'footer',
      content: [
        {
          block: 'link',
          mods: {
            dot: 'red',
          },
          url: '#',
          content: ''
        },
        {
          block: 'link',
          mods: {
            dot: 'green',
          },
          url: '#',
          content: ''
        }
      ]
    }
  ]
});


