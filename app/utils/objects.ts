export const countLeafNodes = (tree: object): number => {
  let leafCount = 0;

  const traverse = (node: any): void => {
    if (typeof node === "object" && node !== null) {
      const keys = Object.keys(node);

      for (const key of keys) {
        traverse(node[key]);
      }
    } else {
      leafCount++;
    }
  };

  traverse(tree);
  return leafCount;
};

export function chunkObject<T>(
  obj: Record<string, T>,
  size: number
): Record<string, T>[] {
  if (typeof obj !== "object" || obj === null) {
    throw new Error("El primer argumento debe ser un objeto.");
  }
  if (typeof size !== "number" || size <= 0) {
    throw new Error("El tamaño debe ser un número mayor que cero.");
  }

  // Convertir el objeto a un array de pares clave-valor
  const entries = Object.entries(obj);
  const chunks: Record<string, T>[] = [];

  for (let i = 0; i < entries.length; i += size) {
    const chunkEntries = entries.slice(i, i + size);

    // Convertir de vuelta el chunk a un objeto
    const chunk = Object.fromEntries(chunkEntries);
    chunks.push(chunk);
  }

  return chunks;
}
