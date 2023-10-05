import React from 'react';
import Card from '../Card';

function Services() {
  // Define an array of card data
  const cardsData = [
    {
      imageSrc: '../images/s1.jpg',
      title: 'Web Development',
      description: 'Some quick example text for card 1.',
    },
    {
      imageSrc: '../images/s2.webp',
      title: 'App Development',
      description: 'Some quick example text for card 2.',
    },
    {
      imageSrc: '../images/s3.jpg',
      title: 'Software Development',
      description: 'Some quick example text for card 3.',
    },
    {
      imageSrc: '../images/s4.png',
      title: 'Digital Marketing',
      description: 'Some quick example text for card 4.',
    },
    {
      imageSrc: '../images/s5.jpg',
      title: 'Android Development',
      description: 'Some quick example text for card 5.',
    },
    {
      imageSrc: '../images/s6.jpg',
      title: 'Marketing',
      description: 'Some quick example text for card 6.',
    },
    // Add more card data as needed
  ];

  return (
    <div className="my-5">
      <section id="" className="container ">
      <h1 className="text-left servicesText">Our Services</h1>
        <div className="container">
          <div className="row gy-4">
            {cardsData.map((card, index) => (
              <Card
                key={index}
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
