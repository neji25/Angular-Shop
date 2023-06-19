export  interface DeviceList {
  count: number
  rows: [
    {
      id: string
      name: string
      price: number
      rating: number
      img: string
    }
  ]
}

export  interface Device {
  id: string
  name: string
  price: number
  rating: number
  img: string
}

export interface Description {
  id: string
  title: string
  description: string
}

export interface submitDevice {
  id: string
  name: string
  price: number
  rating: number
  img: string
  typeId: string
  brandId: string
  description: [
    id: string,
    title: string,
    description: string
  ]
}
