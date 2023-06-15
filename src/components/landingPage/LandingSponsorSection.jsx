import React from 'react';
import { motion } from 'framer-motion';
import './LandingSponsorSection.css';

const LandingSponsorSection = () => {
  const sponsors = [
    {
      id: 1,
      name: 'Push Protocol', 
      description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo 1',
      icon: "src/assets/pushprotocol.jpeg",
    },
    {
      id: 2,
      name: 'TableLand',
      description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
      icon: 'src/assets/tableland.svg',
    },
    {
      id: 3,
      name: 'Spheron',
      description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo 3',
      icon: 'src/assets/spheron.png',
    },
    {
      id: 4,
      name: 'Web3.storage',
      description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo4',
      icon: "src/assets/web3.png",
    },
  ];

  return (
    <div className="sponsor-section">
      <h1 className="poweredbyHeading"> Powered By </h1>
      <div className="sponsor-cards">
        {sponsors.map((sponsor) => (
          <motion.div
            className="sponsor-card"
            key={sponsor.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: sponsor.id * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="icon-container">
              <img src={sponsor.icon} alt={sponsor.name} />
            </div>
            
            <h2 className='sponsorname'>{sponsor.name}</h2>
            
            <p className='LandingSponsorDesc'>{sponsor.description }</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LandingSponsorSection;
