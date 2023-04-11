const sentence = "Now it works.";

const typeEachCharactor = (sentence) => {
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      // print the char here
      process.stdout.write(sentence[i]);
    }, 500 * i); // <= 1s delay to make it noticeable. Can dial it down later.
  }

  setTimeout(() => {
    console.log();
  }, 500 * (sentence.length + 1));
};
typeEachCharactor(sentence);
