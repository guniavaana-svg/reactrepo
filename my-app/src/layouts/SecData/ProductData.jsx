 const productData=[
  {
    "id": "P001",
    "name": "Wireless Bluetooth Headphones",
    "brand": "SoundMax",
    "category": "Electronics",
    "price": 79.99,
    "currency": "USD",
    "in_stock": true,
    "rating": 4.5,
    "reviews_count": 124,
    "description": "High-quality wireless headphones with noise cancellation and 20-hour battery life.",
    "features": [
      "Bluetooth 5.0",
      "Noise Cancellation",
      "20-hour Battery",
      "Built-in Microphone"
    ],
    "dimensions": {
      "weight": "250g",
      "color": "Black"
    },
    "image_url": "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg",
    "seller": {
      "name": "TechStore",
      "location": "New York, USA"
    },
    "created_at": "2026-04-01T10:00:00Z"
  },
  {
    "id": "P002",
    "name": "Smartphone Device",
    "brand": "TechLife",
    "category": "Electronics",
    "price": 699.99,
    "currency": "USD",
    "in_stock": true,
    "rating": 4.7,
    "reviews_count": 500,
    "description": "Latest smartphone with a 6.7-inch OLED display, 5G capability, and a powerful camera system.",
    "features": [
      "5G Support",
      "128GB Storage",
      "48MP Camera",
      "OLED Display"
    ],
    "dimensions": {
      "weight": "220g",
      "color": "Space Grey"
    },
    "image_url": "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg",
    "seller": {
      "name": "GadgetPro",
      "location": "California, USA"
    },
    "created_at": "2026-03-20T08:30:00Z"
  },
  {
    "id": "P003",
    "name": "Office Desk Chair",
    "brand": "WorkComfort",
    "category": "Furniture",
    "price": 149.99,
    "currency": "USD",
    "in_stock": true,
    "rating": 4.3,
    "reviews_count": 320,
    "description": "Ergonomically designed office chair with adjustable height and lumbar support.",
    "features": [
      "Adjustable Height",
      "Lumbar Support",
      "Breathable Mesh",
      "360° Swivel"
    ],
    "dimensions": {
      "weight": "15kg",
      "color": "Grey"
    },
    "image_url": "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg",
    "seller": {
      "name": "ComfortWorks",
      "location": "Chicago, USA"
    },
    "created_at": "2026-01-15T12:00:00Z"
  },
  {
    "id": "P004",
    "name": "Laptop Computer",
    "brand": "TechPower",
    "category": "Electronics",
    "price": 999.99,
    "currency": "USD",
    "in_stock": true,
    "rating": 4.8,
    "reviews_count": 450,
    "description": "High-performance laptop with Intel i7, 16GB RAM, and 512GB SSD.",
    "features": [
      "Intel Core i7",
      "16GB RAM",
      "512GB SSD",
      "Full HD Display"
    ],
    "dimensions": {
      "weight": "1.8kg",
      "color": "Silver"
    },
    "image_url": "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg",
    "seller": {
      "name": "PowerTech",
      "location": "Seattle, USA"
    },
    "created_at": "2026-02-15T14:00:00Z"
  },
  {
    "id": "P005",
    "name": "Smart Watch",
    "brand": "FitTrack",
    "category": "Wearables",
    "price": 199.99,
    "currency": "USD",
    "in_stock": true,
    "rating": 4.4,
    "reviews_count": 320,
    "description": "Stylish smartwatch with fitness tracking, heart rate monitor, and notifications.",
    "features": [
      "Fitness Tracker",
      "Heart Rate Monitor",
      "Sleep Monitoring",
      "Water-resistant"
    ],
    "dimensions": {
      "weight": "45g",
      "color": "Black"
    },
    "image_url": "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg",
    "seller": {
      "name": "TrackFit",
      "location": "Los Angeles, USA"
    },
    "created_at": "2026-03-05T13:30:00Z"
  },
  {
    "id": "P006",
    "name": "Coffee Grinder",
    "brand": "GrindMaster",
    "category": "Appliances",
    "price": 49.99,
    "currency": "USD",
    "in_stock": true,
    "rating": 4.6,
    "reviews_count": 200,
    "description": "Electric coffee grinder for precise, fresh grinding of your favorite coffee beans.",
    "features": [
      "Precision Grinding",
      "Multiple Grind Settings",
      "Quiet Operation",
      "Removable Grinding Bowl"
    ],
    "dimensions": {
      "weight": "1kg",
      "color": "Silver"
    },
    "image_url": "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg",
    "seller": {
      "name": "HomeBrew",
      "location": "San Francisco, USA"
    },
    "created_at": "2026-02-25T10:00:00Z"
  },
  {
    "id": "P007",
    "name": "Power Bank",
    "brand": "PowerGo",
    "category": "Electronics",
    "price": 29.99,
    "currency": "USD",
    "in_stock": true,
    "rating": 4.5,
    "reviews_count": 150,
    "description": "Portable power bank with 10,000mAh capacity, dual USB ports, and fast charging.",
    "features": [
      "10,000mAh Capacity",
      "Dual USB Ports",
      "Fast Charging",
      "Compact Design"
    ],
    "dimensions": {
      "weight": "220g",
      "color": "Black"
    },
    "image_url": "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg",
    "seller": {
      "name": "PowerHub",
      "location": "Boston, USA"
    },
    "created_at": "2026-03-18T10:30:00Z"
  },
  {
    "id": "P008",
    "name": "4K Smart TV",
    "brand": "VisionPro",
    "category": "Electronics",
    "price": 499.99,
    "currency": "USD",
    "in_stock": true,
    "rating": 4.7,
    "reviews_count": 180,
    "description": "40-inch 4K smart TV with voice control and built-in Wi-Fi.",
    "features": [
      "4K Resolution",
      "Voice Control",
      "Smart Features",
      "Wi-Fi Connectivity"
    ],
    "dimensions": {
      "weight": "8kg",
      "color": "Black"
    },
    "image_url": "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg",
    "seller": {
      "name": "HomeTech",
      "location": "Miami, USA"
    },
    "created_at": "2026-02-10T09:45:00Z"
  },
  {
    "id": "P009",
    "name": "Gaming Laptop",
    "brand": "GamingPro",
    "category": "Electronics",
    "price": 1299.99,
    "currency": "USD",
    "in_stock": true,
    "rating": 4.9,
    "reviews_count": 400,
    "description": "High-end gaming laptop with NVIDIA GTX 1660, Intel i7, and 16GB RAM.",
    "features": [
      "NVIDIA GTX 1660 Graphics",
      "16GB RAM",
      "Intel i7 Processor",
      "Full HD 144Hz Display"
    ],
    "dimensions": {
      "weight": "2.5kg",
      "color": "Silver"
    },
    "image_url": "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg",
       "seller": {
      "name": "HomeTech",
      "location": "Miami, USA"
    },
    "created_at": "2026-02-10T09:45:00Z"
  }];
  export default productData;
