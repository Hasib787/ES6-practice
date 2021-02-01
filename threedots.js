const ages = [12, 15, 17, 18, 11];
const ages2 = [13, 14, 12, 11, 15];
const ages3 = [18, 15, 12, 14, 15, 16];
const allAges = [...ages, ...ages2, ...ages3];
console.log(allAges);

const business = 680;
const minister = 550;
const sochib = 450;
const takaPoisa=[888,455,787,850];
// const maximum = Math.max(business, minister, sochib);
const maximum= Math.max(...takaPoisa);
console.log(maximum);
