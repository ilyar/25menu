block('page-order').content()(function() {
    return [
    {
      block: 'header',
      mix: { block: 'page-order', elem: 'header' }
    },
    {
      block: 'status',
      mix: { block: 'page-order', elem: 'state' }
    },
    {
      block: 'footer',
      mix: { block: 'page-order', elem: 'footer' }
    }
    ]
});
