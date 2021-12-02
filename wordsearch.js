const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  console.log(horizontalJoin);
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  // Transposing...

  let newMatrix = [];
  let width = letters[0];

  for (let i = 0; i < width.length; i++) {
    newMatrix.push([]);
  }

  for (let row = 0; row < letters.length; row++) {
    for (let col = 0; col < width.length; col++) {
      newMatrix[col].push(letters[row][col]);
    }
  }
  // Finish transpose

  const verticalJoin = newMatrix.map((ls) => ls.join(""));
  for (l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  return false;
};

module.exports = wordSearch;

// Logic Walkthru:
/* The function receives two parameters: the letters(array) and the word.

The function has to:
    - check if the word is presented horizontally or vertically
    - return true if the word is the letter array. false if it's not.

Steps:
    - Loop vertically. Then loop horizontally.
    - If there's a match between word, then true.

*/

/* const wordSearch = (letter, word) => {
    let results;
        for (let horz of letter.length) {
            if (word = letter.length[horz]) {
                result = true;
            }

        }
        for (let vert of letter[0].length) {
            if (word = letter[0].length[vert]) {
                result = true;
            }
        }
}
*/
