export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._render = renderer;
    this._containerSelector = containerSelector;
    this._container = document.querySelector(containerSelector);
  }
  renderer(items) {
    items.forEach((item) => this._render(item));
  }
  addItem(element) {
    this._containerSelector === ".elements"
      ? this._container.prepend(element)
      : this._container.append(element);
  }
}
