const filterByCategory = (category, data) => {
  if (!category) {
    return data;
  }

  return data.filter((item) => item.category === category);
};

export default filterByCategory;
