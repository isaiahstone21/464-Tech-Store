import React from 'react';
import ProductCard from '../components/ProductCard';

function Phone() {
  const phones = [
    {
      name: 'Apple - iPhone 15 Pro Max 256GB - Black Titanium',
      manufacturer: 'Apple',
      description: 'iPhone 15 Pro Max. Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever. ',
      price: '1199.99',
      imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6525/6525421_sd.jpg;maxHeight=640;maxWidth=550',
    },
    {
      name: 'Apple - iPhone 15 Pro 256GB - Natural Titanium',
      manufacturer: 'Apple',
      description: 'iPhone 15 Pro. Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and a more versatile Pro camera system. ',
      price: '1099.99',
      imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6525/6525410_sd.jpg;maxHeight=640;maxWidth=550',
    },
    {
      name: 'Apple - iPhone 15 256GB - Blue',
      manufacturer: 'Apple',
      description: 'iPhone 15 brings you Dynamic Island, a 48MP Main camera, and USB-C—all in a durable color-infused glass and aluminum design',
      price: '929.99',
      imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6418/6418013_sd.jpg;maxHeight=640;maxWidth=550',
    },
    {
      name: 'Samsung - Galaxy S24 Ultra 512GB - Titanium Gray',
      manufacturer: 'Samsung',
      description: 'The new era of mobile AI is here. Do more with an epic Galaxy. Wondering where the cool museum that your favorite influencer visited is located? Simply Circle to Search with Google and start planning your own trip to the Louvre. Then get ready to experience local flavors by calling ahead with Live Translate to make a reservation in French, even if all you know is “Bonjour.” Capture every detail of your candlelight meal with impressive Nightography and zoom in to see the live violinist playing across the room. Once you’re back in your hotel, elevate your pics from good to great right on your Galaxy S24 Ultra. You can even use your built in S Pen to add fun doodles before posting. Unleash new ways to create, connect and more with Galaxy S24 Ultra. Galaxy AI is here. ',
      price: '1319.99',
      imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6570/6570300_sd.jpg;maxHeight=640;maxWidth=550',
    },
    {
      name: 'Samsung - Galaxy S24 256GB - Amber Yellow',
      manufacturer: 'Samsung',
      description: 'The new era of mobile AI is here. Make every day epic with Galaxy S24. See a delicious looking dish on your social feed but don’t see a recipe? Simply Circle to Search with Google to find it in seconds. Then head to a sunny farmer’s market to pick up the ingredients and see your list clearly on the bright, adaptive display of Galaxy S24. Once the meal is ready, capture stunning close ups of your dish and dinner guests, no matter the lighting, with a high res camera and Nightography. And all the while, you can stay plugged into the moment, not the outlet, with a long lasting battery. Do more easily with Galaxy S24. Galaxy AI is here.  ',
      price: '859.99',
      imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6570/6570272_sd.jpg;maxHeight=640;maxWidth=550',
    },
  ];

  return (
    <div>
      <h1>Phones</h1>
      <div className="product-list">
        {phones.map((phone) => (
          <ProductCard
            key={phone.name}
            name={phone.name}
            manufacturer={phone.manufacturer}
            description={phone.description}
            price={phone.price}
            imageUrl={phone.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Phone;
