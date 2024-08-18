
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItemDetails } from '../services/apiService';

const DetailsPage = () => {
  const { name } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItemDetails = async () => {
      const result = await getItemDetails(name);
      setItem(result);
    };

    fetchItemDetails();
  }, [id]);

  if (!item) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
        <p className="text-gray-600 mb-4">{item.description}</p>
        <div className="text-lg">
          <strong>Price:</strong> ${item.price}
        </div>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default DetailsPage;
