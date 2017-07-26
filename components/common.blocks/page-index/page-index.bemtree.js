block('page-index').content()(function() {
  return [
    {
      elem: 'header',
      content: [ {
        block: 'icon',
        mods: {
          type: 'pizza'
        }
      }
      ]
    },
    {
      block: 'items',
      mix: { block: 'page-index', elem: 'inner' }
    }
  ];
});
