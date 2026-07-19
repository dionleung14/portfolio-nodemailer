import ReactGA from "react-ga4";

const MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;

const PAGE_TITLES = {
  "/": "Home",
  "/portfolio": "Portfolio",
  "/archive": "Archive",
  "/meta-portfolio": "Meta Portfolio",
};

let initialized = false;

export function initAnalytics() {
  if (initialized || !MEASUREMENT_ID) {
    return false;
  }

  ReactGA.initialize(MEASUREMENT_ID, {
    gtagOptions: {
      send_page_view: false,
    },
  });
  initialized = true;
  return true;
}

export function isAnalyticsReady() {
  return initialized;
}

export function trackPageView(pathname, search = "") {
  if (!initialized) {
    return;
  }

  const path = `${pathname}${search}`;
  const title = PAGE_TITLES[pathname] || "Not Found";

  ReactGA.send({
    hitType: "pageview",
    page: path,
    title,
  });
}

export function trackEvent({ category, action, label, value }) {
  if (!initialized) {
    return;
  }

  ReactGA.event({
    category,
    action,
    label,
    value,
  });
}
