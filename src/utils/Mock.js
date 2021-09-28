import img_01 from '../components/img/img_01.jpg'
import img_02 from '../components/img/img_02.jpg'
import img_03 from '../components/img/img_03.jpg'
import img_04 from '../components/img/img_04.jpg'
import img_05 from '../components/img/img_05.jpg'
import img_06 from '../components/img/img_06.jpg'

const productos = [ {
                    id: 1,
                    category: 'jovenes',
                    name: "PALERMO",
                    description: "Doble chedar con bacon",
                    img: img_01,
                    price:"750",
                    stock: 5
                },
                {
                    id: 2,
                    category: 'jovenes',
                    name: "HOLLYWOOD",
                    description: "Con tomate y cebolla morada",
                    img: img_02,
                    price:"750",
                    stock: 3
                },
                {
                    id: 3,
                    category: 'adultos',
                    name: "FIORITO",
                    description: "Con wisky y mucho picante",
                    img: img_03,
                    price:"750",
                    stock: 6
                },
                {
                    id: 4,
                    category: 'jovenes',
                    name: "URQUIZA",
                    description: "Con bacon y muzzarelita rebozada",
                    img: img_04,
                    price:"750",
                    stock: 5
                },
                {
                    id: 5,
                    category: 'jovenes',
                    name: "PACHECO",
                    description: "Con bacon y huevo frito",
                    img: img_05,
                    price:"750",
                    stock: 3
                },
                {
                    id: 6,
                    category: 'jovenes',
                    name: "BELGRANO",
                    description: "Mucho cheddar y virviri",
                    img: img_06,
                    price:"750",
                    stock: 6
                }
                 ];


export const getFetch = new Promise((resolve) => {

    setTimeout(() => {
        resolve(productos)
    }, 2000)
})

// const producto = {
//                     id: 1,
//                     category: 'nomarl',
//                     name: "PALERMO",
//                     description: "Doble chedar con bacon",
//                     img: img_01,
//                     stock: 5
//                 }

// const product = productos.filter((item) => item.id === 5);




// export const getFetchUno = new Promise((resolve) => {

//     setTimeout(() => {
//         resolve(product)
//     }, 2000)
// })








