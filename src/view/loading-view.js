import { createElement } from '../render';

function tripLoadingTemplate() {
  return `<p class="trip-events__msg">Loading...
  </p>`;
}

export default class TripLoadingView {
  getTemplate() {
    return tripLoadingTemplate();
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
