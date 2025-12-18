const state = {
  charging: false,
  level: 0,
};

const setState = (key, value) => {
  state[key] = value;
};

export { state, setState };
