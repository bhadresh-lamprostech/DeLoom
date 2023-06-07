import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Lending Service</h1>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ligula eu
              interdum mollis. Mauris fermentum est id purus cursus, ac consectetur orci eleifend.
              Integer convallis, massa vel ultrices tempus, dolor lectus vestibulum nisi, eu
              tristique arcu augue in ex.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate("/home")}
            >
              Get Started
            </button>
          </div>
          <div>
            <img
              src="https://placehold.it/400x300"
              alt="Lending"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
