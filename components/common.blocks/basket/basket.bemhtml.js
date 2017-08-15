block('basket').js()( true )

block('basket').addJs()( () => {
  return [
    {
      order: [
        {
          block: 'product'
        },
        {
          block: 'product',
        },
        {
          block: 'product',
        }
      ]
    }
  ]
});

