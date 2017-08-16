block('*')(
  match( function() { return this._mods; } ).def()( function() {
    // this.mods.size = this.mods.size || this._mods.size;
    this.mods.size = this.mods.size || 'm';
    // this.mods.theme = this.mods.theme || this._mods.theme;
    this.mods.theme = this.mods.theme || '25menu';
    return applyNext();
  } )
);
