import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  initAnalytics,
  isAnalyticsReady,
  trackPageView,
} from "../utils/analytics";

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    if (!isAnalyticsReady() && !initAnalytics()) {
      return;
    }

    trackPageView(location.pathname, location.search);
  }, [location.pathname, location.search]);

  return null;
}
