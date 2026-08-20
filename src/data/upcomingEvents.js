import { eventsData, getEventStatus } from './events';

export const upcomingEvents = eventsData.filter((event) => getEventStatus(event) === 'upcoming');

const eventEndOfDay = (eventDate) => new Date(`${eventDate}T23:59:59`);

export const isEventUpcoming = (event, now = new Date()) => event.eventDate ? eventEndOfDay(event.eventDate) >= now : getEventStatus(event, now) === 'upcoming';
export const getUpcomingEvents = (now = new Date()) => upcomingEvents.filter((event) => isEventUpcoming(event, now));
export const getEventById = (eventId) => upcomingEvents.find((event) => event.id === eventId);