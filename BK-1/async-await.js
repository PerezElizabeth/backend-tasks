/*


                2   4       7 
            1           6 -    9
                3   5       8

tiempo:     0   2   2   5   3  4

*/

function challenge(number, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(number);
      resolve("resolved");
    }, time);
  });
}

async function getData() {
  console.log("1");
  await Promise.all([challenge(2, 2000), challenge(3, 2000)]);
  await Promise.all([challenge(4, 2000), challenge(5, 2000)]);
  await challenge(6, 5000);
  await Promise.all([challenge(7, 3000), challenge(8, 3000)]);
  await challenge(9, 4000);
}
getData();
