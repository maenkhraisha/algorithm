function stringMatching(string, pattern) {
  let found = 0;
  let j = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== pattern[j]) {
      j = 0;
      continue;
    } else {
      if (j == pattern.length - 1) {
        found++;
        j = 0;
        continue;
      }
      j++;
    }
  }

  return found;
}

console.log(stringMatching('my name is maen ?', 'maen'));
