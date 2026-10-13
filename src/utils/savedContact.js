/* "Save information for next time" — keeps name + email in this browser only. */
const KEY = "elearna:contact";

export function loadSavedContact() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) ?? {};
  } catch {
    return {};
  }
}

export function saveContact(data) {
  try {
    if (data) localStorage.setItem(KEY, JSON.stringify(data));
    else localStorage.removeItem(KEY);
  } catch {
    // storage blocked (private mode etc.) — saving is optional, ignore
  }
}
