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
  ]
});
