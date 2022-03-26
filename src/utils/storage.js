const storage = {
  getToken: () => {
    return JSON.parse(window.localStorage.getItem("token"));
  },
  setToken: (token) => {
    window.localStorage.setItem("token", token);
  },
  clearToken: () => {
    window.localStorage.removeItem("token");
  },
};

export default storage;
