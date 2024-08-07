export const generateUniqueLink = (id) => {
  const baseUrl = window.location.origin;
  const uniqueId = id || Math.random().toString(36).substr(2, 9);
  return `${baseUrl}/landing/${uniqueId}`;
};
