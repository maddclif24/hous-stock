export default (str) => {
  return str.split(",").reduce(
    (acc, value) => {
      const normalizedValue = value.trim();
      const key = isNaN(Number(normalizedValue)) ? "username" : "id";
      acc[key].push(normalizedValue);
      return acc;
    },
    { id: [], username: [] }
  );
};
