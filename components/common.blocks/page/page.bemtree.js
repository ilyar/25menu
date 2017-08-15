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
      block: 'basket',
      mods: {
        type: 'closed'
      },
      mix: {
        block: 'page',
        elem: 'basket',
        elemMods: {
          hide: true
        }
      }
    },
    {
      block: 'basket',
      mods: {
        type: 'open'
      },
      mix: {
        block: 'page',
        elem: 'basket',
        elemMods: {
          // hide: true
        }
      }
    }
  ];
});
