block('page').content()(function() {
  return [
    {
      block: 'sidebar',
      mix: { block: 'page', elem: 'aside'}
    },
    {
      block: 'items',
      mix: { block: 'page', elem: 'inner' }
    },
    {
      block: 'sidebar',
      mods: {
        order: true
      },
      mix: { block: 'page', elem: 'aside', elemMods: { order: true, hide: true }}
    }
  ];
});
