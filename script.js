// Test Array start at 1 and finish at 10, which the 3 doesn't is Paired
let TestArray = [1, 10, 9, 8, 1, 7, 7, 10, 5, 6, 2, 2, 8, 4, 3, 4, 5, 6, 9];

const SolutionArray = (array) => {
  const ArrayOrdened = array.sort((a, b) => a - b);
  const ElementsPaired = [];
  const EachElementOfArray = [];
  ArrayOrdened.map((element, index) => {
    if (element === ArrayOrdened[index + 1]) {
      ElementsPaired.push(element);
    } else {
      EachElementOfArray.push(element);
    }
  });
  // Filter each element of array and return the element isn't paired
  let NotPairedElement = EachElementOfArray.filter((element) => {
    if (ElementsPaired.indexOf(element) == -1) {
      return element;
    }
  });
  console.log(NotPairedElement.toString());
  return NotPairedElement.toString();
};

SolutionArray(TestArray);

// =============================================================================

// Test Array start at -10 and finish at 10
let TestDistinct = [10, 8, 10, -8, -8, -8, -7, -7, -7, 9, 9, 8, 7, -1, -1, -6, -6, 0, 0, 0, 0, -10, -9, -5, -4, -4, -4, -5, -5, -2, -3, -1, -1, -2, -2, 1, 4, 3, 3, 3, 2, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const SolutionDistinct = (array) => {
  const ArraySolution = [];
  const ArrayOrdened = array.sort((a, b) => a - b);
  ArrayOrdened.map((element, index) => {
    element !== ArrayOrdened[index + 1] ? ArraySolution.push(element) : null;
  });
  console.log(ArraySolution);
  return ArraySolution;
};

SolutionDistinct(TestDistinct);
// =============================================================================

const SolutionEuclidean = (numChocolate, interval) => {
  let chocolates = [];
  // Fill a new array with X numbers of chocolate
  fillArray = (numChocolate) => {
    for (let count = 0; count < numChocolate; count++) {
      chocolates.push(0);
    }
    return chocolates;
  };
  fillArray(numChocolate);

  let needContinue = true;
  let chocolatesEaten = 0;
  for (let count = 0; needContinue; count += interval) {
    if (count >= numChocolate) {
      let newCount = count - numChocolate;
      count = newCount;
    }
    if (chocolates[count] === 1) {
      needContinue = false;
      console.log(chocolatesEaten);
      return chocolatesEaten;
    }
    chocolatesEaten++;
    chocolates.splice(count, 1, 1);
  }
};
SolutionEuclidean(7, 2);
