block('page').mod('view', '404').content()(function() {
  return [
    {
      block: 'sidebar',
      mix: { block: 'page', elem: 'aside'}
    },
    {
      block: 'basket',
        mods: {
          type: 'closed'
        }
    }
  ];
});


