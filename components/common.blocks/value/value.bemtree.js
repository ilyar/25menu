block('value').content()(function() {
    return;
});


block('value').mod('type', 'product').content()(function(){
  return [
  {
    elem: 'title',
    content: 'Ценность на 100 г.'
  },
  {
    block: 'calories',
    content: [
    {
      elem:'title',
      content: 'Ккал'
    },
    {
      elem:'value',
      content: '456'
    }
    ]
  },
  {
    block: 'calories',
    content: [
    {
      elem:'title',
      content: 'Белки'
    },
    {
      elem:'value',
      content: '456'
    }
    ]
  },
  {
    block: 'calories',
    content: [
    {
      elem:'title',
      content: 'Жиры'
    },
    {
      elem:'value',
      content: '456'
    }
    ]
  },
  {
    block: 'calories',
    content: [
    {
      elem:'title',
      content: 'Углеводы'
    },
    {
      elem:'value',
      content: '456'
    }
    ]
  }
  ]
});
