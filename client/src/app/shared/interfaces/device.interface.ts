export  interface DeviceList {
  count: number,
  rows: [
    {
      id: string,
      name: string,
      price: number,
      rating: number,
      img: string
    }
  ]
}

export  interface Device {
  id: string,
  name: string,
  price: number,
  rating: number,
  img: string
}

export interface Description {
  id: string,
  title: string,
  description: string
}
