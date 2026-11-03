// Single source of truth for webinar date/time and pricing.
// When the schedule changes, update ONLY this file — every page
// (landing hero, reserve card, urgency sections, thank-you) reads from here.

export const WEBINAR = {
  /** Short date shown on cards, e.g. "15th Nov" */
  date: "15th Nov",
  /** Time with timezone, e.g. "9:30 AM GST" */
  time: "11:00 AM GST",
  /** Combined short form, e.g. "15th Nov, 11:00 AM" */
  dateTimeShort: "15th Nov, 11:00 AM",
  /** Regular (strikethrough) price */
  regularPrice: "AED 99",
  /** Current offer price */
  offerPrice: "AED 0",
} as const;
