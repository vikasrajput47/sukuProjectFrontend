export const data = Array.from({ length: 40 }, (_, index) => ({
  date: `2023-01-${Math.floor(Math.random() * 28) + 1}`,
  vehicleNo: `ABC${Math.floor(Math.random() * 1000)}`,
  validUpto: `${Math.floor(Math.random() * 10000)}`,
  imageLink: `https://example.com/image${index + 1}.jpg`,
}));
