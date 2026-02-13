import React, { useState } from 'react';
import Box from './Box';

const Grid = () => {
      const [boxes, setBoxes] = useState(Array(9).fill(0));

      const handleBoxClick = (index) => {
            // Check if clicked box is strictly locked
            if (boxes[index] >= 15) return;

            const newBoxes = [...boxes];
            // Increment the clicked box
            newBoxes[index] += 1;

            const newValue = newBoxes[index];

            // Rule A: If divisible by 3 -> Decrement RIGHT neighbor
            // Constraint: Not in last column
            if (newValue % 3 === 0) {
                  if (index % 3 !== 2) {
                        const rightNeighborIndex = index + 1;
                        // Check if neighbor is not locked logic: "neighbors cannot change its value"
                        // We use the *current* state of the neighbor (which is in newBoxes, but hasn't been modified yet in this tick unless we clicked it - wait.
                        // If we clicked it, we just modified it. But we can only click one box at a time.
                        // So we check if the neighbor is currently locked.
                        if (newBoxes[rightNeighborIndex] < 15) {
                              newBoxes[rightNeighborIndex] -= 1;
                        }
                  }
            }

            // Rule B: If divisible by 5 -> Increment BELOW neighbor (+2)
            // Constraint: Not in last row
            if (newValue % 5 === 0) {
                  if (index < 6) {
                        const bottomNeighborIndex = index + 3;
                        // Check if neighbor is not locked
                        if (newBoxes[bottomNeighborIndex] < 15) {
                              newBoxes[bottomNeighborIndex] += 2;
                        }
                  }
            }

            setBoxes(newBoxes);
      };

      return (
            <div className="grid grid-cols-3 gap-4 p-4 bg-white rounded-xl shadow-2xl">
                  {boxes.map((value, index) => (
                        <Box
                              key={index}
                              value={value}
                              onClick={() => handleBoxClick(index)}
                              isLocked={value >= 15}
                        />
                  ))}
            </div>
      );
};

export default Grid;
