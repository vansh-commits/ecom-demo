export const DATA_URL = 'https://raw.githubusercontent.com/vansh-commits/ecom-demo/main/Data_for_call/data.json';
export const fetchData = async () => {
  const res = await fetch(DATA_URL);
  const data = await res.json();
  return data;
};