import { render, RenderPosition } from './render';
import TripInfoView from './view/info-view';
import TripFiltersView from './view/filters-view';
import TripPresenter from './presenter';

const tripMainElement = document.querySelector('.trip-main');
const tripControlsFiltersElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');
render(new TripInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);
render(new TripFiltersView(), tripControlsFiltersElement);

const tripPresenter = new TripPresenter({eventsContainer: tripEventsElement});

tripPresenter.init();
