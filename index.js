// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function () {
  return drivers.slice(0, 2);
}
const returnLastTwoDrivers = function () {
  return drivers.slice(2);
}
const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]



/*const createFareMultiplier = function (integer) {
  return integer * createFareMultiplier() ;*/


const fareDoubler = function (integer) {
  return integer * 2;
};
