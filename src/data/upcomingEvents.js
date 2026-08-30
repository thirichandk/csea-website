import { eventsData, getEventStatus } from './events';

export const upcomingEvents = eventsData.filter((event) => getEventStatus(event) === 'upcoming');

const eventEndOfDay = (eventDate) => new Date(`${eventDate}T23:59:59`);

export const isEventUpcoming = (event, now = new Date()) => event.eventDate ? eventEndOfDay(event.eventDate) >= now : getEventStatus(event, now) === 'upcoming';
export const getUpcomingEvents = (now = new Date()) => eventsData.filter((event) => getEventStatus(event, now) === 'upcoming');
export const getCompletedEvents = (now = new Date()) => eventsData.filter((event) => getEventStatus(event, now) === 'completed');
export const getPromotedUpcomingEvents = (now = new Date()) => getUpcomingEvents(now).filter((event) => event.promotionActive);
export const getEventById = (eventId) => eventsData.find((event) => event.id === eventId);