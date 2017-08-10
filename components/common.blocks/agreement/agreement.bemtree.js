block('agreement').content()(function() {
    return [
    {
      elem: 'text',
      content: [
      'Нажимая кнопку «Заказать», вы принимаете',
      {
        block: 'link',
        content: ' условия оферты'
      },
      ' и',
      {
        block: 'link',
        content: ' политики конфиденциальности'
      }
      ]
    }
    ]
});
