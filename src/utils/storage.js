const storage = {
  hasVisitedSite: () => {
    return JSON.parse(window.localStorage.getItem('hasVisitedSite'));
  },
  setHasVisitedSite: (value) => {
    window.localStorage.setItem('hasVisitedSite', value);
  },
  getTheme: () => {
    return window.localStorage.getItem('mode');
  },
  setTheme: (value) => {
    window.localStorage.setItem('mode', value);
  },
};

export default storage;
