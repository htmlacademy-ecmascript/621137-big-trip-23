import { createElement } from '../render';

function tripFailedLoadTemplate() {
  return `<p class="trip-events__msg">
  Failed to load latest route information</p>`;
}

export default class TripFailedLoadView {
  getTemplate() {
    return tripFailedLoadTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
