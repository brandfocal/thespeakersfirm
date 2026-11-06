export interface UtmParams {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  gclid: string;
}

const STORAGE_KEY = "tsf_utm_params";

export function getUtmParams(): UtmParams {
  const empty: UtmParams = {
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
    gclid: ""
  };

  if (typeof window === "undefined") {
    return empty;
  }

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const keys: (keyof UtmParams)[] = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
      "gclid"
    ];

    const hasAnyInUrl = keys.some((k) => urlParams.has(k) && urlParams.get(k)?.trim());

    if (hasAnyInUrl) {
      const fresh: UtmParams = {
        utm_source: urlParams.get("utm_source") || "",
        utm_medium: urlParams.get("utm_medium") || "",
        utm_campaign: urlParams.get("utm_campaign") || "",
        utm_term: urlParams.get("utm_term") || "",
        utm_content: urlParams.get("utm_content") || "",
        gclid: urlParams.get("gclid") || ""
      };
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
      return fresh;
    }

    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (err) {
    // Graceful fallback if storage is inaccessible
  }

  return empty;
}

