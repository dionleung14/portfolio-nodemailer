import testimonialsJson from "../data/testimonials.json";

export default class Testimonial {
  constructor({ from, message, relationship }) {
    this.from = from;
    this.message = message;
    this.relationship = relationship;
  }

  static all() {
    return testimonialsJson.map((entry) => new Testimonial(entry));
  }

  static at(index) {
    const testimonials = Testimonial.all();
    if (!testimonials.length) {
      return null;
    }
    return testimonials[Math.abs(index) % testimonials.length];
  }
}
