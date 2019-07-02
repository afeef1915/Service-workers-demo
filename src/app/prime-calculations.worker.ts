/// <reference lib="webworker" />

// addEventListener('message', ({ data }) => {
//   const response = `worker response to ${data}`;
//   postMessage(response);
// });
import isPrimeNumber from 'prime-number';
import primeNumberList from 'prime-number/list';

// addEventListener('message', ({ data }) => {
//   const response = `worker response to ${data}`;
//   postMessage(response);
// });
addEventListener('message', ({ data }) => {
    console.log(primeNumberList);
    // const arePrimeList = primeNumberList.map((prime) => {
    //   console.log(prime);
    //     return isPrimeNumber(prime);
    // });
    const response = `worker response to ${data}`;
     
    console.log('arePrimeList====');
    console.log(response);
    //console.log(arePrimeList);
    postMessage(response);
    //postMessage(arePrimeList);
});