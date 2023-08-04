import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { data } from '../../static/data';
import { Link } from 'react-router-dom';

const SeachBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchData, setSearchData] = useState(null);

  const handleSearchTermChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filterProductData =
      term.length < 3
        ? null
        : data.productData.filter((product) =>
            product.name.toLowerCase().includes(term.toLowerCase())
          );
    setSearchData(filterProductData);
  };
  console.log(searchData);
  return (
    <div className="flex relative items-center md:bg-[#E2E6E9] w-full h-full px-2 md:rounded-lg">
      <input
        className="appearance-none bg-transparent outline-none w-full"
        placeholder="Search for a product"
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />

      <span className="pl-2 text-dark">
        <FiSearch size={24} />
      </span>
      {searchData && (
        <div className="absolute flex flex-col w-full bg-white shadow-lg  left-0 top-[120%] py-2">
          {searchData.map((pr, index) => (
            <Link
              to={`/product/${pr.name}`}
              key={index}
              className="flex border border-[#0000] items-center rounded-lg p-2  text-sm gap-2 mb-2 border-b-slate-200 hover:border-pri"
            >
              <img
                src={pr.image_Url[0].url}
                alt="product image"
                className="w-10 h-10"
              />
              <p className="truncate">{pr.name}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
export default SeachBar;
