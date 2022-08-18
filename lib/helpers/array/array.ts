export function moveArrayElement(arr: any[], from: number, to: number) {
  const el = arr[from];
  arr.splice(from, 1);
  arr.splice(to, 0, el);
}

export function sort(array = [], fieldName: string) {
  const normalize = (text: string) => {
    return (text || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };

  return array.sort((first, second) => {
    return normalize(first[fieldName]) > normalize(second[fieldName]) ? 1 : -1;
  });
}