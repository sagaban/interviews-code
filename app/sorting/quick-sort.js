export default function quickSort(arr) {
  console.log('\narr: ', arr);

  if (arr.length <= 1) return arr;
  const a = [];
  const z = [];
  const l = arr.length - 1;
  const p = arr[l];

  for (let i = 0; i < l; i++) {
    const e = arr[i];

    if (e <= p) {
      a.push(e);
    } else {
      z.push(e);
    }
  }

  console.log('p: ', p);
  console.log('a: ', a);
  console.log('z: ', z);

  return (a.length > 1 ? quickSort(a) : a)
    .concat(p)
    .concat(z.length > 1 ? quickSort(z) : z);
}

