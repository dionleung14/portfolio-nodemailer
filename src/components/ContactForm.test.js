import React from "react";
import { act, fireEvent, render } from "@testing-library/react";
import ContactForm from "./ContactForm";
import API from "../utils/API";

jest.mock("../utils/API", () => ({
  __esModule: true,
  default: {
    submitEmail: jest.fn(),
  },
}));

function renderForm() {
  return render(<ContactForm darkModeApp={{ darkMode: false }} />);
}

function fillHumanFields(container) {
  fireEvent.change(container.querySelector('input[name="firstName"]'), {
    target: { value: "Ada" },
  });
  fireEvent.change(container.querySelector('input[name="lastName"]'), {
    target: { value: "Lovelace" },
  });
  fireEvent.change(container.querySelector('input[name="emailAddress"]'), {
    target: { value: "ada@example.com" },
  });
  fireEvent.change(container.querySelector("textarea"), {
    target: { value: "Hello" },
  });
  fireEvent.click(container.querySelector('input[name="email"]'));
}

describe("ContactForm honeypot", () => {
  beforeEach(() => {
    API.submitEmail.mockReset();
    API.submitEmail.mockImplementation(() => Promise.resolve({ status: 200 }));
    jest.spyOn(window, "alert").mockImplementation(() => {});
    delete window.location;
    window.location = { reload: jest.fn() };
  });

  afterEach(() => {
    window.alert.mockRestore();
  });

  test("sends company as an empty string and leaves the subject select alone", async () => {
    const { container } = renderForm();
    const company = container.querySelector('input[name="company"]');
    const subject = container.querySelector('select[name="subject"]');

    expect(company.type).toBe("text");
    expect(company.tabIndex).toBe(-1);
    expect(company.autocomplete).toBe("off");
    expect(company.parentElement.getAttribute("aria-hidden")).toBe("true");
    expect(company.parentElement.style.left).toBe("-10000px");
    expect(container.querySelector('input[name="subjectLine"]')).toBeNull();
    expect(subject.value).toBe("Networking");

    fillHumanFields(container);
    jest.spyOn(window, "setTimeout").mockImplementation(() => 0);
    await act(async () => {
      fireEvent.submit(container.querySelector("#contact-form"));
      await Promise.resolve();
    });
    window.setTimeout.mockRestore();

    expect(API.submitEmail).toHaveBeenCalledTimes(1);
    expect(API.submitEmail).toHaveBeenCalledWith({
      firstName: "Ada",
      lastName: "Lovelace",
      emailAddress: "ada@example.com",
      phNum: "",
      subject: "Networking",
      message: "Hello",
      call: false,
      email: true,
      text: false,
      company: "",
    });
    expect(window.location.reload).not.toHaveBeenCalled();
  });

  test("does not submit or show success when the company field is filled", () => {
    const { container, queryByText } = renderForm();
    fillHumanFields(container);
    const company = container.querySelector('input[name="company"]');
    company.value = "Acme SEO";

    fireEvent.submit(container.querySelector("#contact-form"));

    expect(API.submitEmail).not.toHaveBeenCalled();
    expect(window.location.reload).toHaveBeenCalledTimes(1);
    expect(queryByText(/sent successfully/i)).toBeNull();
    expect(queryByText(/Sending/i)).toBeNull();
  });

  test("treats whitespace in company as a filled trap", () => {
    const { container } = renderForm();
    fillHumanFields(container);
    container.querySelector('input[name="company"]').value = " ";

    fireEvent.submit(container.querySelector("#contact-form"));

    expect(API.submitEmail).not.toHaveBeenCalled();
    expect(window.location.reload).toHaveBeenCalledTimes(1);
  });
});
