block('items').content()(function() {
  return [
    {
      elem: 'header'
    },
    { elem: 'card-group',
      content: [
      {
        block: 'card',
        mods: {
          type: 'usual'
        },
        mix: { block: 'items', elem: 'card'}
      },
      {
        block: 'card',
        mods: {
          type: 'chosen'
        },
        mix: { block: 'items', elem: 'card'}
      },
      {
        block: 'card',
        mods: {
          type: 'info'
        },
        mix: { block: 'items', elem: 'card'}
      },
      {
        block: 'card',
        mods: {
          type: 'pizza'
        },
        mix: { block: 'items', elem: 'card'}
      },
      {
        block: 'card',
        mods: {
          type: 'special'
        },
        mix: { block: 'items', elem: 'card'}
      },
      ]
    },
    { elem: 'card-group',
      content: [
      {
        block: 'card',
        mods: {
          type: 'usual'
        },
        mix: { block: 'items', elem: 'card'}
      },
      {
        block: 'card',
        mods: {
          type: 'chosen'
        },
        mix: { block: 'items', elem: 'card'}
      },
      {
        block: 'card',
        mods: {
          type: 'info'
        },
        mix: { block: 'items', elem: 'card'}
      },
      {
        block: 'card',
        mods: {
          type: 'pizza'
        },
        mix: { block: 'items', elem: 'card'}
      },
      {
        block: 'card',
        mods: {
          type: 'special'
        },
        mix: { block: 'items', elem: 'card'}
      },
      ]
    },
    {
      elem: 'footer'
    }
    ]
});
