export const setLogged = (logged: boolean) => {
  window.localStorage.setItem("logged", logged ? "1" : "0");
};

export const isLogged = () => {
  return window.localStorage.getItem("logged") === "1" ? true : false;
};
