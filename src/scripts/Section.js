export default class Section {
  constructor({ items, itemRenderer }, containerSelector) {
    this._items = items;
    this._itemRenderer = itemRenderer;

    this._containerSelector = containerSelector;
    this._container = document.querySelector(containerSelector);
    this._renderer();
  }

  _renderer() {
    console.log(this._items);
    this._container.innerHtml = "";
    this._items.forEach((element) => {
      let card = this._itemRenderer(element);
      console.log(this._container.appendchild);
      this._container.append(card);
    });
  }

  addItem(element) {
    this._containerSelector === ".elements"
      ? this._container.prepend(element)
      : this._container.append(element);
  }
}
