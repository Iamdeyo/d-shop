import { Link } from 'react-router-dom';
import { data } from '../../../static/data';

const Categories = () => {
  return (
    <section>
      <div className=" rounded-lg px-2 mt-4 bg-white z-10  relative lg:mx-20 lg:shadow-lg lg:-top-20 md:pb-4">
        <p className="py-3 border-b text-sm font-Sora font-semibold md:py-4 md:mb-4">
          FEATURED CATEGORIES
        </p>
        <div className=" flex overflow-y-hidden overflow-x-scroll md:overflow-hidden md:flex-wrap">
          {data?.categoriesData &&
            data.categoriesData.map((ct) => (
              <Link
                to={`/products?category=${ct.title}`}
                key={ct.id}
                className="flex flex-col flex-none text-center items-center justify-between h-[100px] w-[100px] px-2 pb-2 pt-4 md:pt-7 md:w-full md:max-w-[20%] md:h-auto md:gap-2"
              >
                <img
                  src={ct.image_Url}
                  alt="img"
                  className="w-11 h-11 md:w-14 md:h-14"
                />
                <p className=" w-full text-[10px] truncate md:text-xs">
                  {ct.title}
                </p>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};
export default Categories;
