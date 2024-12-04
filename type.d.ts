export interface ProductProps {

    brand: string
    category: string
    description: string
    isNew: boolean
    image: any
    oldPrice: number
    price: number
    title: string
    _id: number
}

export interface StoreProduct {

    brand: string
    category: string
    description: string
    isNew: boolean
    image: any
    oldPrice: number
    price: number
    title: string
    _id: number
    quantity: number
}

export interface favoriteProduct {

    brand: string
    category: string
    description: string
    isNew: boolean
    image: any
    oldPrice: number
    price: number
    title: string
    _id: number
}

export interface stateProps{
    productData: []
    favoriteData: []
    userInfo: null | string
    next: any
}
