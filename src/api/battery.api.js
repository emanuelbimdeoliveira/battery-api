const getBattery = async () => {
  return await navigator.getBattery();
};

export { getBattery };
