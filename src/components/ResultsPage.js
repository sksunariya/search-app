
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { searchByArticul } from '../services/apiService';

const ResultsPage = ({ articul }) => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchMoreData = async () => {
    const newItems = await searchByArticul(articul, page);
    setItems((prevItems) => [...prevItems, ...newItems]);
    setPage(page + 1);
    if (newItems.length < 20) setHasMore(false);
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Results for Articul: {articul}</h1>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-white shadow-lg rounded-lg cursor-pointer"
              onClick={() => window.open(`/details/${item.id}`, '_blank')}
            >
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default ResultsPage;
