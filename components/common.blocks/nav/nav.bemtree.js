block('nav').content()(function() {
  return [
    this.data.menu.map(item => {
      return {
        block: 'link',
        mix: { block: 'nav', elem: 'item' },
        url: '/#'+ item.name,
        content: item.name
      }
    })
    // {
    //   block: 'link',
    //   mix: { block: 'nav', elem: 'item' },
    //   url: '#',
    //   content: 'Акции'
    // },
    // {
    //   block: 'link',
    //   mix: { block: 'nav', elem: 'item' },
    //   url: '#pizza',
    //   content: 'Пиццы'
    // },
    // {
    //   block: 'link',
    //   mix: { block: 'nav', elem: 'item' },
    //   url: '#',
    //   content: 'Роллы'
    // },
    // {
    //   block: 'link',
    //   mix: { block: 'nav', elem: 'item' },
    //   url: '#',
    //   content: 'Суши'
    // },
    // {
    //   block: 'link',
    //   mix: { block: 'nav', elem: 'item' },
    //   url: '#',
    //   content: 'Вок'
    // },
    // {
    //   block: 'link',
    //   mix: { block: 'nav', elem: 'item' },
    //   url: '#',
    //   content: 'Паста'
    // },
    // {
    //   block: 'link',
    //   mix: { block: 'nav', elem: 'item' },
    //   url: '#',
    //   content: 'Боулы'
    // },
    // {
    //   block: 'link',
    //   mix: { block: 'nav', elem: 'item' },
    //   url: '#',
    //   content: 'Закуски'
    // },
    // {
    //   block: 'link',
    //   mix: { block: 'nav', elem: 'item' },
    //   url: '#',
    //   content: 'Супы'
    // },
    // {
    //   block: 'link',
    //   mix: { block: 'nav', elem: 'item' },
    //   url: '#',
    //   content: 'Горячее'
    // },
    // {
    //   block: 'link',
    //   mix: { block: 'nav', elem: 'item' },
    //   url: '#',
    //   content: 'Десерты'
    // },
    // {
    //   block: 'link',
    //   mix: { block: 'nav', elem: 'item' },
    //   url: '#',
    //   content: 'Напитки'
    // },
    // {
    //   block: 'link',
    //   mods: {
    //     type: 'important'
    //   },
    //   mix: { block: 'nav', elem: 'item' },
    //   url: '#',
    //   content: 'Обеды'
    // },
    // {
    //   block: 'link',
    //   mods: {
    //     type: 'important'
    //   },
    //   mix: { block: 'nav', elem: 'item' },
    //   url: '#',
    //   content: 'Наборы'
    // }
  ]
});
