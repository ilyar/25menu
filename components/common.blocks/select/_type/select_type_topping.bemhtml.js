block('select').mod('type', 'topping').content()( ( node, ctx ) => {
  return [
    { elem: 'icon-add' },
    applyNext()
  ];
});
