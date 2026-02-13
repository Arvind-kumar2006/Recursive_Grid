export const calculateNextState = (boxes, index) => {
     
      if (boxes[index] >= 15) return boxes;

      const newBoxes = [...boxes];
      newBoxes[index] += 1;
      const newValue = newBoxes[index];

      
      if (newValue % 3 === 0) {
            if (index % 3 !== 2) {
                  const rightNeighborIndex = index + 1;
                  if (newBoxes[rightNeighborIndex] < 15) {
                        newBoxes[rightNeighborIndex] -= 1;
                  }
            }
      }

     
      if (newValue % 5 === 0) {
            if (index < 6) {
                  const bottomNeighborIndex = index + 3;
                  if (newBoxes[bottomNeighborIndex] < 15) {
                        newBoxes[bottomNeighborIndex] += 2;
                  }
            }
      }

      return newBoxes;
};
