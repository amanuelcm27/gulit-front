export const createObjectURLIfObject = (value) => {
  if (value && typeof value === "object") {
    return URL.createObjectURL(value);
  }
  return value;
};
