import TripInfoView from './view/info-view';
import TripFiltersView from './view/filters-view';
import TripSortView from './view/sort-view';
import TripEventsView from './view/events-view';
import TripEventsEditView from './view/events-edit-view';
import { render, RenderPosition } from './render';

const EVENTS_DATA = [
  {
    day: 'MAR 18',
    icon: 'img/icons/taxi.png',
    event: 'Taxi Amsterdam',
    startTime: '10:30',
    endTime: '11:00',
    duration: '30M',
    price: '20',
    offers: [{title: 'Order Uber', price: '20'}],
    star: true,
    isEdit: true,
  },
  {
    day: 'MAR 18',
    icon: 'img/icons/drive.png',
    event: 'Drive Chamonix',
    startTime: '14:30',
    endTime: '16:05',
    duration: '01H 35M',
    price: '160',
    offers: [{title: 'Rent a car', price: '200'}],
    star: true,
    isEdit: false,
  },
];

export default class TripPresenter {

  tripInfoComponent = new TripInfoView();
  tripFiltersComponent = new TripFiltersView();
  tripSortComponent = new TripSortView();
  tripEventsComponent = new TripEventsView(EVENTS_DATA);
  tripEventsEditComponent = new TripEventsEditView();

  constructor({eventsContainer}) {
    this.eventsContainer = eventsContainer;
  }

  init() {
    render(this.tripEventsEditComponent, this.tripEventsComponent.getElement(), RenderPosition.AFTERBEGIN);
    render(this.tripSortComponent, this.eventsContainer);
    render(this.tripEventsComponent, this.eventsContainer);
  }
}
