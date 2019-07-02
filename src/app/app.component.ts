import { Component } from '@angular/core';
import isPrimeNumber from 'prime-number';
import primeNumberList from 'prime-number/list';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-worker';

  runWorker() {
    console.log('runWorkers');
    // if (typeof Worker !== 'undefined') {
    //   // Create a new
    //   const worker = new Worker('./app.worker', { type: 'module' });
    //   worker.onmessage = ({ data }) => {
    //     console.log('page got message: $\{data\}');
    //   };
    //   worker.postMessage('hello');
    // } else {
    //   // Web Workers are not supported in this environment.
    //   // You should add a fallback so that your program still executes correctly.
    // }

    if (typeof Worker !== 'undefined') {
      console.log('worker exists======');
    const worker = new Worker('./prime-calculations.worker', { 
        type: 'module' 
    });
   
    worker.onmessage = ({ data }) => {
      //console.log('page got message: $\{data\}');
        console.log('From Web Worker====:', data);
    };
    worker.postMessage('hello');
    //worker.postMessage({'hello'});

  } else {

    console.log('workers not working====');
    // Web Workers are not supported in this environment.
    // You should add a fallback so that your program still executes correctly.
  }


 }
 runThread() {
  console.log('runThread');
     const arePrimeList = primeNumberList.map((prime) => {
      //  console.log('prime===');
      //   console.log(prime);
      // console.log(prime);
         return isPrimeNumber(prime);
     });
     
     console.log('From Javascript Thread', arePrimeList);
 }
}
