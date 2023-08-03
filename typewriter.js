const sentence = "hello there from lighthouse labs";
let t = 0;
for (const char of (sentence + '\n')) {
  setTimeout(() => {process.stdout.write(char)}, t);
  t += 50;
};
