export function convert(cantidad,unidad){
  let valor = 2.20462
  let resultado = 0

  if (unidad == "kg"){
    resultado = cantidad * valor
  } else if (unidad == "lb"){
    resultado = cantidad / valor
  }

  return resultado
}

export function conver_to_kg(cantidad){
  let valor = 2.20462
  let resultado = 0
  return resultado = cantidad * valor
}


export function conver_to_lb(cantidad){
  let valor = 2.20462
  let resultado = 0
  return resultado = cantidad / valor  
}
