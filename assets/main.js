// Consegna:Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

const listaSpesa = [
     'latte',
     'cereali',
     'marmellata',
     'burro',
     'succo',
]

const lista = document.getElementById('lista-spesa')

let i = 0;

while( i < listaSpesa.length ){
     
     const item  = listaSpesa[i]

     const listItem = document.createElement('li')
     listItem.innerText = item
     lista.append(listItem)

     i++
}

