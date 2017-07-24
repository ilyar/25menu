block('sidebar').content()(function() {
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
          content: '8800'
        }
      ]
    },
    {
      block: 'nav',
      mix: { block: 'sidebar', elem: 'content' }
    }
  ]
});
