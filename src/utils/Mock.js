import img_01 from '../components/img/img_01.jpg'
import img_02 from '../components/img/img_02.jpg'
import img_03 from '../components/img/img_03.jpg'

const productos = [ {
                    id: "1",
                    name: "PALERMO",
                    description: "Doble chedar con bacon",
                    img: img_01,
                    stock: 5
                },
                {
                    id: "2",
                    name: "HOLLYWOOD",
                    description: "Con tomate y cebolla morada",
                    img: img_02,
                    stock: 3
                },
                {
                    id: "3",
                    name: "FIORITO",
                    description: "Con wisky y mucho picante",
                    img: img_03,
                    stock: 6
                }
                 ];


export const getFetch = new Promise((resolve) => {

    setTimeout(() => {
        resolve(productos)
    }, 2000)
})

const producto = { id: "1",
                    name: "BUZOS",
                    description: "Interior de felpa",
                    img: img_01,
                    stock: 5 }


export const getFetchUno = new Promise((resolve) => {

    setTimeout(() => {
        resolve(producto)
    }, 2000)
})








