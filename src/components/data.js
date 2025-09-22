const cars = [
  {
    id: 1,
    category: "Convertible",
    name: "Jaguar F-Type",
    modelNo: "F-Type-2025",
    color: "Black",
    engine: "5.0L V8",
    price: "$74,000",
    image: "https://s1.cdn.autoevolution.com/images/news/gallery/2016-jaguar-f-type-all-wheel-drive-manual-priced-photo-gallery_8.jpg"
  },
  {
    id: 2,
    category: "SUV",
    name: "Mercedes-Benz GLE",
    modelNo: "GLE-2025",
    color: "Black",
    engine: "3.0L I6",
    price: "$73,000",
    image: "https://tse2.mm.bing.net/th?id=OIP.mG6Dj9KX989iCmAvitLmSwHaEK&pid=Api&P=0&h=220"
  },
  {
    id: 3,
    category: "Hatchback",
    name: "Honda Civic",
    modelNo: "Civic-2025",
    color: "Blue",
    engine: "2.0L I4",
    price: "$25,000",
    image: "https://tse1.mm.bing.net/th?id=OIP.DLGwpGbpAO60Mgdeavm95QHaEK&pid=Api&P=0&h=220"
  },
  {
    id: 4,
    category: "SUV",
    name: "Audi Q8",
    modelNo: "Q8-2025",
    color: "Gray",
    engine: "3.0L V6",
    price: "$72,000",
    image: "https://tse4.mm.bing.net/th?id=OIP.tlxKuQtmnhjOQ7XLpf1PqwHaEk&pid=Api&P=0&h=220"
  },
  {
    id: 5,
    category: "Sedan",
    name: "Audi A6",
    modelNo: "A6-2024",
    color: "Gray",
    engine: "3.0L V6",
    price: "$67,000",
    image: "https://tse4.mm.bing.net/th?id=OIP.vJP_VGZJhAbko_Kml3s8swHaEK&pid=Api&P=0&h=220"
  },
  {
    id: 6,
    category: "Convertible",
    name: "Mazda MX-5 Miata",
    modelNo: "MX5-2024",
    color: "Gray",
    engine: "2.0L I4",
    price: "$28,000",
    image: "https://tse2.mm.bing.net/th?id=OIP.fxpNl4EhgAsPA-m6UfevEQHaE6&pid=Api&P=0&h=220"
  },
  {
    id: 7,
    category: "Supercar",
    name: "Bugatti Chiron",
    modelNo: "Chiron-2025",
    color: "Blue",
    engine: "8.0L W16",
    price: "$3000,000",
    image: "https://tse4.mm.bing.net/th?id=OIP.wZUa5TppH7TKYuNs2x9KrgHaE7&pid=Api&P=0&h=220"
  },
  {
    id: 8,
    category: "Convertible",
    name: "BMW Z4",
    modelNo: "Z4-2024",
    color: "Blue",
    engine: "2.0L I4",
    price: "$51,000",
    image: "https://tse1.mm.bing.net/th?id=OIP.ESv8pwGwHMTzpSxBkYtLegHaE7&pid=Api&P=0&h=220"
  },
  {
    id: 9,
    category: "Sedan",
    name: "Tesla Model 3",
    modelNo: "M3-2025",
    color: "White",
    engine: "Electric",
    price: "$39,990",
    image: "https://www.motortrend.com/uploads/sites/5/2021/07/2021-Tesla-Model-3_19-exterior-three-quarter-front-view.jpg"
  },
  {
    id: 10,
    category: "Hatchback",
    name: "Hyundai i30",
    modelNo: "i30-2025",
    color: "Blue",
    engine: "1.6L I4",
    price: "$23,500",
    image: "https://tse4.mm.bing.net/th?id=OIP.talLomCLYBpv1p4xhnGO-AHaEO&pid=Api&P=0&h=220"
  },
  {
    id: 11,
    category: "Supercar",
    name: "Ferrari SF90",
    modelNo: "SF90-2024",
    color: "Blue",
    engine: "4.0L V8 Hybrid",
    price: "$507,000",
    image: "https://tse4.mm.bing.net/th?id=OIP.8cf_kL_AZsqQIYcjkDhMNgHaEK&pid=Api&P=0&h=220"
  },
  {
    id: 12,
    category: "Sedan",
    name: "BMW 5 Series",
    modelNo: "530i-2025",
    color: "Blue",
    engine: "2.0L I4",
    price: "$57,000",
    image: "https://www.carscoops.com/wp-content/uploads/2020/09/BMW-5-Series-1.jpg"
  },
  {
    id: 13,
    category: "Hatchback",
    name: "Volkswagen Golf",
    modelNo: "Golf-2025",
    color: "Blue",
    engine: "1.5L I4",
    price: "$24,500",
    image: "https://tse4.mm.bing.net/th?id=OIP.DhGOntyn4LY7YKJKWXz_7wHaEA&pid=Api&P=0&h=220"
  },
  {
    id: 14,
    category: "Supercar",
    name: "Lamborghini Aventador",
    modelNo: "A7-2025",
    color: "Yellow",
    engine: "6.5L V12",
    price: "$393,695",
    image: "https://s1.paultan.org/image/2019/03/Lamborghini-Aventador-SVJ-Roadster-5.jpg"
  },
  {
    id: 15,
    category: "SUV",
    name: "BMW X7",
    modelNo: "X7-2024",
    color: "Black",
    engine: "4.4L V8",
    price: "$99,600",
    image: "https://tse2.mm.bing.net/th?id=OIP.fnnAJVY_WP8Co8qDtFOzOQHaEK&pid=Api&P=0&h=220"
  },
  {
    id: 16,
    category: "Convertible",
    name: "Porsche 911 Cabriolet",
    modelNo: "911-Cab-2025",
    color: "Silver",
    engine: "3.0L Flat-6",
    price: "$130,000",
    image: "https://tse1.mm.bing.net/th?id=OIP.j_eA94DZhJ5O2ycFQdrvOwHaFR&pid=Api&P=0&h=220"
  },
  {
    id: 17,
    category: "Hatchback",
    name: "Toyota Corolla",
    modelNo: "Corolla-2024",
    color: "Blue",
    engine: "1.8L I4",
    price: "$20,000",
    image: "https://tse1.mm.bing.net/th?id=OIP.be6t_RFD2vK88MZ5vRZbeAHaEK&pid=Api&P=0&h=220"
  },
  {
    id: 18,
    category: "Sedan",
    name: "Mercedes-Benz E-Class",
    modelNo: "E300-2025",
    color: "Silver",
    engine: "2.0L I4",
    price: "$58,000",
    image: "https://tse2.mm.bing.net/th?id=OIP.SyGCtrEVyANXl3fW20aqJQHaD4&pid=Api&P=0&h=220"
  },
  {
    id: 19,
    category: "SUV",
    name: "Volvo XC90",
    modelNo: "XC90-2024",
    color: "Silver",
    engine: "2.0L I4",
    price: "$56,000",
    image: "https://tse4.mm.bing.net/th?id=OIP.KnLEGnHfgEXEX8CXd6xnMAHaE4&pid=Api&P=0&h=220"
  },
  {
    id: 20,
    category: "Hatchback",
    name: "Ford Fiesta",
    modelNo: "Fiesta-2024",
    color: "Gray",
    engine: "1.0L EcoBoost",
    price: "$21,000",
    image: "https://tse1.mm.bing.net/th?id=OIP.16tqgVOTODtho4UyE32MlQHaE8&pid=Api&P=0&h=220"
  },
  {
    id: 21,
    category: "Supercar",
    name: "McLaren 720S",
    modelNo: "720S-2025",
    color: "Orange",
    engine: "4.0L V8",
    price: "$299,000",
    image: "https://tse1.mm.bing.net/th?id=OIP.cWnmzloyUh_PIQfElpclMwHaEK&pid=Api&P=0&h=220"
  },
  {
    id: 22,
    category: "Supercar",
    name: "Aston Martin DB11",
    modelNo: "DB11-2024",
    color: "Blue",
    engine: "5.2L V12",
    price: "$205,600",
    image: "https://tse3.mm.bing.net/th?id=OIP.4iQL7ii4yrpBw8Fri8EchgHaEK&pid=Api&P=0&h=220"
  },
  {
    id: 23,
    category: "SUV",
    name: "Range Rover Sport",
    modelNo: "RR-2025",
    color: "Red",
    engine: "3.0L V6",
    price: "$83,000",
    image: "https://tse3.mm.bing.net/th?id=OIP.QWR1my6AbgPKIJeSbHJeiAHaEF&pid=Api&P=0&h=220"
  },
  {
    id: 24,
    category: "Hatchback",
    name: "Lexus ES",
    modelNo: "ES-2025",
    color: "Black",
    engine: "2.5L I4",
    price: "$42,000",
    image: "https://95octane.com/wp-content/uploads/2021/04/2022_lexus_es_1.jpg"
  }
];

export default cars;