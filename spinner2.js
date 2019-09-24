process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinner = {
  0: '\r|   ',
  1: '\r/   ',
  2: '\r-   ',
  3: '\r\\   '
};

for (let i = 0; i < 4; i++) {
  setTimeout(() => {
    return process.stdout.write(spinner[i]);
  }, i * 200);
}



