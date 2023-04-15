/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.

*/

function cutestCat(cats) {
  // debugger
  let cutest = 0;
  let i = 0;
  let index = 0;

  while (i < cats.length) {
    const cat = cats[i];

    if (cat.cuteness > cutest) {
      cutest = cat.cuteness;
      index = i
    }
    i++;
  }

  return cats[index];
}

const cats = [
  { name: 'Fluffy', cuteness: 9 },
  { name: 'Princess', cuteness: 6 },
  { name: 'Tiger', cuteness: 7 },
  { name: 'Indie', cuteness: 5 },
]

console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }
