export default function bubble_sort(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j]
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp
        swapped = true;
      }
    }
    if (!swapped) break;
  }
}