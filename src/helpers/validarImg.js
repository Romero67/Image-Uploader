export function validarImg(imagen) {
  const imgValidas = ["image/jpeg", "image/jpg", "image/png"];

  for (const img of imgValidas) {
    if (imagen.type !== "") {
      if (img.includes(imagen.type)) {
        return true;
      }
    }
  }
  return false;
}
