export const FormatoTable = (Data) => {
  const FormatoTabla = Data.map((x, y) => {
    return {
      Id: y + 1,
      Nombre: x.name,
      Cantidad: x.qty,
      Estado: x.state === 1 ? "Habilitado" : "Baja",
    };
  });
  return FormatoTabla;
};
