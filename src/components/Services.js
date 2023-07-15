import React from 'react';

// Sample service data
const servicesData = [
  {
    title: 'Service 1',
    imageUrl: 'https://via.placeholder.com/300x200',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'https://example.com/service1',
  },
  {
    title: 'Service 2',
    imageUrl: 'https://via.placeholder.com/300x200',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'https://example.com/service1',
  },
  {
    title: 'Service 3',
    imageUrl: 'https://via.placeholder.com/300x200',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'https://example.com/service1',
  },
  {
    title: 'Service 4',
    imageUrl: 'https://via.placeholder.com/300x200',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'https://example.com/service1',
  },
  {
    title: 'Service 5',
    imageUrl: 'https://via.placeholder.com/300x200',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'https://example.com/service1',
  },
  {
    title: 'Service 6',
    imageUrl: 'https://via.placeholder.com/300x200',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'https://example.com/service1',
  },
  {
    title: 'Service 7',
    imageUrl: 'https://via.placeholder.com/300x200',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'https://example.com/service1',
  },
  {
    title: 'Service 8',
    imageUrl: 'https://via.placeholder.com/300x200',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'https://example.com/service1',
  },
];

export default function Services() {
  return (
    <div id="services" className="services">
      <h1>Our Services</h1>
      <div className="service-list">
        {servicesData.map((service, index) => (
          <div className="service-item" key={index}>
            <a href={service.link} target="_blank" rel="noopener noreferrer">
              <img src={service.imageUrl} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
