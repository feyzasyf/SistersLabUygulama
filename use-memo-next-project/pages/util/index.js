export const calculateMostExpensive = (data) => {
  return (
    data.reduce((total, product) => {
      const price = product.fields.price;
      if (price >= total) {
        total = price;
      }
      return total;
    }, 0) / 100
  );
};
