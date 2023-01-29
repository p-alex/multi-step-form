export const convertPrice = (isYearlyBilling: boolean, price: number) => {
  return isYearlyBilling ? "$" + price * 10 + "/yr" : "$" + price + "/mo";
};
