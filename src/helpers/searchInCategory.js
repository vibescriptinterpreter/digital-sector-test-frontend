const searchInCategory = (text, data) => (
  data.filter((item) => item.name.includes(text))
);

export default searchInCategory;
