block('page').content()(function() {
  return [
    {
      block: 'sidebar',
      mix: { block: 'page', elem: 'aside'}
    },
    {
      block: this.data.view
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
