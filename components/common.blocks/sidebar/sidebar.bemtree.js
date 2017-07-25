block('sidebar')
.content()(function() {
  return [
    {
      elem: 'header',
      content: [
        {
          block: 'logo',
        },
        {
          block: 'logo',
          mods: {
            title: true
          }
        },
        {
          block: 'link',
          url: '34234',
          content: '8 812 200-20-20'
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
          content: '8'
        },
        {
          block: 'link',
          mods: {
            dot: 'green',
          },
          url: '#',
          content: '8'
        }
      ]
    }
  ]
});

block('sidebar').mod('order', true).content()(function(){
  return [
    {
     block: 'icon',
     mods: {
      symbol: 'cart'
     }
    }
  ]
});
