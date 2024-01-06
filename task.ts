function calculateStatistics(numbers: number[]): void {
  // Calculate and print the sum of the numbers
  var sum: number =
    numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
  console.log(sum);
  // Calculate and print the average of the numbers
  console.log(sum / numbers.length);
  // Identify and print the largest number
  //   I have no idea how to do it
  var max: number = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  console.log("Largest number:", max);
}

// Example usage:
const numArray: number[] = [10, 5, 8, 20, 3];
calculateStatistics(numArray);
