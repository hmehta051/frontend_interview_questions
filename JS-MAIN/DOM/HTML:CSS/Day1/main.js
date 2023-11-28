console.log("Web Worker Start");
if (window.Worker) {
  const worker = new Worker("./worker.js");
  worker.onmessage = (e) => {
    const result = e.data;
    console.log("Message received from worker", result);
  };
  const dataToSend = 10;
  worker.postMessage(dataToSend);
}
console.log("Web worker end");
