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
      block: 'footer'
    }
  ];
});
