const storage = {
  hasVisitedSite: () => {
    return JSON.parse(window.localStorage.getItem('hasVisitedSite'));
  },
  setHasVisitedSite: (value) => {
    window.localStorage.setItem('hasVisitedSite', value);
  },
  getDarkMode: () => {
    return JSON.parse(window.localStorage.getItem('darkMode'));
  },
  setDarkMode: (value) => {
    window.localStorage.setItem('darkMode', value);
  },
};

export default storage;
