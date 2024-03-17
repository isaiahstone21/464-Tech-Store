import React from 'react';
import ProductCard from '../components/ProductCard';

function Desktop() {
  const desktops = [
    {
      name: 'HP - Envy Desktop - Intel Core i7 - 16GB Memory - 1TB SSD - Black',
      manufacturer: 'HP',
      description: 'Fuel your creativity. Experience the power and performance of an Intel processor that’s designed to meet your creation needs. Render, edit, and stream better than ever before. Your creative sidekick. ',
      price: '799.99',
      imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6532/6532244_sd.jpg;maxHeight=640;maxWidth=550',
    },
    {
      name: 'CLX - SET Gaming Desktop - Intel Core i9-13900KF - 64GB Memory - NVIDIA GeForce RTX 4070 - 2TB NVMe M.2 SSD + 6TB HDD - Black',
      manufacturer: 'CLX Gaming',
      description: 'Stunning looks and unbelievable power, this CLX SET Ultra gaming desktop computer built in a spectacular dual chamber, high airflow, ATX Mid-Tower chassis with an awesome dual tempered glass design along with integrated Digital-RGB lighting and several RGB fans that showcase the powerful components inside, featuring the latest 13th Genaration Intel i9 13900KF 3.0GHz 24-Core processor capable of a Max clock of 5.8GHz! Gameplay visuals are stunning as well, because this gaming rig includes the newly released NVIDIA, 40-series GeForce RTX 4070 GPU that has 12GB of GDDR6X high-speed memory, plus big advancements utilizing an ultra-efficient NVIDIA Ada Lovelace architecture with new streaming processors and 4th Gen Tensor Cores for AI-powered graphics. More game-changing technologies are packed into the RTX 4070 delivering high fps gameplay.',
      price: '2589.99',
      imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6544/6544421_sd.jpg;maxHeight=2000;maxWidth=2000',
    },
    {
      name: 'HP - 24" Touch-Screen All-in-One with Adjustable Height - AMD Ryzen 5 - 8GB Memory - 1TB SSD - Jet Black',
      manufacturer: 'HP',
      description: 'The HP 23.8-inch All-in-One Desktop takes caring for the planet to the next level while also packed with everything to take on your day. Your home base for getting everything done. ',
      price: '699.99',
      imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6538/6538897ld.jpg;maxHeight=2000;maxWidth=2000',
    },
    {
      name: 'Lenovo - Yoga AIO 9i 31.5" All-In-One - Intel Core i9 - 16GB Memory + 512GB SSD - Storm Gray',
      manufacturer: 'Lenovo',
      description: 'Anchor your home and devices to a stunning and powerful all-in-one flagship built to amplify your creativity – the sustainably sourced, architecturally inspired and ultra-slim Yoga AIO 9i, featuring up to 13th Gen Intel Core i9 processors for professional photo or video editing. Watch Netflix in 4K with a massive 32" IPS display while four speakers surround you in a curtain of Dolby Atmos 3D audio. Control and charge multiple devices with your PC via One Cable Link and wireless charging.',
      price: '1549.99',
      imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6535/6535558_bd.jpg;maxHeight=640;maxWidth=550',
    },
    {
      name: 'MSI - PRO DP180 Desktop - Intel Core i7-13700F - 32GB Memory - NVIDIA GeForce RTX 4060 - 2TB SSD - Black - Black',
      manufacturer: 'MSI',
      description: 'Your business should be empowered to stop at nothing while navigating your journey with the PRO DP180 13NUC-224US Business Desktop. With the latest NVIDIA GeForce Graphics, PRO DP180 13th allows you to enjoy the benefit of up to 4-display, you can share and preview any information of E-commerce or e-learning material with the most efficient way. ',
      price: '1299.99',
      imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6576/6576710ld.jpg;maxHeight=640;maxWidth=550',
    },
    {
      name: 'CORSAIR - VENGEANCE i7500 Gaming PC - Intel Core i9 14900KF - 64GB DDR5 6000 MHz Memory NVIDIA GeForce RTX 4090 - 2TB SSD - Black',
      manufacturer: 'Corsair',
      description: 'Step up your game with a CORSAIR VENGEANCE i7500 Series Gaming PC, powered by a 14th Gen Intel Core processor, NVIDIA GeForce RTX 40-Series graphics, and CORSAIR VENGEANCE RGB DDR5 memory. Dynamic RGB lighting brilliantly illuminates the system, with powerful CORSAIR iCUE software to control lighting, fan and pump speeds, and more. The VENGEANCE i7500 Series is cooled by an H100i RGB ELITE liquid CPU cooler and six SP RGB ELITE fans with AirGuide technology for concentrated airflow. Equipped with a high-speed M.2 NVMe SSD, housed in a roomy CORSAIR 4000D AIRFLOW mid-tower case, and easily upgradeable thanks to a standard ATX form-factor, this is everything you need to game with a VENGEANCE.  ',
      price: '3999.99',
      imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6566/6566233_sd.jpg;maxHeight=640;maxWidth=550',
    },
  ];

  return (
    <div>
      <h1>Desktops</h1>
      <div className="product-list">
        {desktops.map((desktop) => (
          <ProductCard
            key={desktop.name}
            name={desktop.name}
            manufacturer={desktop.manufacturer}
            description={desktop.description}
            price={desktop.price}
            imageUrl={desktop.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Desktop;
