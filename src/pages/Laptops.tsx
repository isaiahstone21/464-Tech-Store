import React from 'react';
import ProductCard from '../components/ProductCard';

function Laptop() {
  const laptops = [
    {
      name: 'Apple - MacBook Pro 14" Laptop - M3 chip - 8GB Memory - 10-core GPU - 512GB SSD (Latest Model) - Space Gray',
      manufacturer: 'Apple',
      description: 'The 14-inch MacBook Pro blasts forward with M3, an incredibly advanced chip that brings serious speed and capability. With industry-leading battery life—up to 22 hours—and a beautiful Liquid Retina XDR display, it’s a pro laptop without equal. ',
      price: '1449.99',
      imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6534/6534641_sd.jpg;maxHeight=2000;maxWidth=2000',
    },
    {
      name: 'Ideapad 3i 15.6" FHD Touch Laptop - Core i5-1155G7 with 8GB Memory - 512GB SSD - Abyss Blue',
      manufacturer: 'Lenovo',
      description: 'The ultimate Smart Learning notebook, the Lenovo IdeaPad 3i pairs up to 11th Generation Intel Core i5 processors with tailored work and learn from home solutions that address eye strain, posture problems and at-home distractions, while deploying intelligent thermals for a cool and whisper-quiet system. The new privacy shutter on the camera also lets you reserve complete control over your privacy in the home and beyond. ',
      price: '349.99',
      imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6549/6549067_sd.jpg;maxHeight=640;maxWidth=550',
    },
    {
      name: 'HP - 15.6" Touch-Screen Laptop - Intel Core i3 - 8GB Memory - 256GB SSD - Natural Silver',
      manufacturer: 'HP',
      description: 'Do more from anywhere. All-day long. Designed to keep you productive and entertained from anywhere, the HP 15.6-inch Laptop PC combines long lasting battery life with a thin and portable, microedge bezel design. ',
      price: '329.99',
      imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6550/6550428_sd.jpg;maxHeight=640;maxWidth=550',
    },
    {
      name: 'Acer - Predator Helios Neo 16" WQXGA 165Hz IPS Gaming Laptop - Intel i7-13700HX – GeForce RTX 4060 with 16GB DDR5 – 1TB SSD - Steel Gray',
      manufacturer: 'Acer',
      description: 'When you brandish this Predator Helios Neo gaming laptop, you’re holding the key to unlocking your ambitions – your curiosities – and endless possibilities. Suit up, strap in – and let Helios Neo pave the way. Equipped with superior cooling technology and a trove of performance like NVIDIA GeForce RTX 4060 laptop graphics and the latest 13th Gen Intel Core i7 processor with new performance hybrid architecture– this gaming laptop will be your guide to gaming bliss. With the 16" 2560 x 1600 IPS panel, 165Hz Refresh, NVIDIA Advanced Optimus, NVIDIA G-SYNC technology and 3ms Overdrive response time you can say farewell to blur and hello clear, crisp, high-octane gameplay. ',
      price: '1079.99',
      imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6541/6541302_sd.jpg;maxHeight=640;maxWidth=550',
    },
  ];

  return (
    <div>
      <h1>Laptops</h1>
      <div className="product-list">
        {laptops.map((laptop) => (
          <ProductCard
            key={laptop.name}
            name={laptop.name}
            manufacturer={laptop.manufacturer}
            description={laptop.description}
            price={laptop.price}
            imageUrl={laptop.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Laptop;
