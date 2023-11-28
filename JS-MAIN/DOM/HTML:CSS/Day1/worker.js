onmessage = (e) => {
  const data = e.data;
  const res = data * 10;
  self.postMessage(res);
};
