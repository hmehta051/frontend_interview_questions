const retry = (func, maxTried, delay) => {
  return new Promise((resolve, reject) => {
    function attempt() {
      func()
        .then((res) => resolve(res))
        .catch((err) => {
          if (maxTried > 0) {
            setTimeout(attempt, delay);
            maxTried--;
          } else {
            reject(err);
          }
        });
    }
    attempt();
  });
};
const funcStimulate = () => {
  return new Promise((resolve, reject) => {
    const passMarks = 80;
    const randomMarks = Math.floor(Math.random() * 100);

    if (randomMarks > passMarks) {
      console.log(randomMarks);
      resolve("Passed");
    } else {
      console.log(randomMarks);
      reject("Failed");
    }
  });
};

retry(funcStimulate, 2, 1000)
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
