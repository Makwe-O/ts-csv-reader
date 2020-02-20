export const dateStringToDate = (data: string): Date => {
  const splitDate = data.split('/').map(val => parseInt(val));

  return new Date(splitDate[2], splitDate[1] - 1, splitDate[0]);
};
