import testimonialsJson from "../data/testimonials.json";

const DEFAULT_DURATION_MS = 5000;

export default class Testimonial {
  constructor({ from, message, relationship, durationMs }) {
    this.from = from;
    this.message = message;
    this.relationship = relationship;
    this.durationMs = Testimonial.resolveDuration(durationMs);
  }

  static resolveDuration(durationMs) {
    if (typeof durationMs === "number" && durationMs > 0) {
      return durationMs;
    }
    return DEFAULT_DURATION_MS;
  }

  static get defaultDurationMs() {
    return DEFAULT_DURATION_MS;
  }

  static all() {
    return testimonialsJson.map((entry) => new Testimonial(entry));
  }

  static at(index) {
    const testimonials = Testimonial.all();
    if (!testimonials.length) {
      return null;
    }
    return testimonials[
      ((index % testimonials.length) + testimonials.length) %
        testimonials.length
    ];
  }
}
