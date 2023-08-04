import CountDown from './CountDown.jsx';

const EventsCard = () => {
  const targetDate = '2023-8-31T23:59:59';
  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row lg:gap-10 xl:gap-40 md:items-start py-6 px-2">
      <div className="w-full max-w-sm aspect-square">
        <img
          src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/71/2326212/1.jpg?8188"
          alt="product image"
          className="w-full h-full"
        />
      </div>
      <div className="w-full font-Sora flex flex-col gap-3">
        <p className="text-xl font-semibold">Apple IPhone 14 Pro 6.1" 256GB</p>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit id illo
          reiciendis quam? Minus exercitationem placeat, unde iste debitis rem
          nemo aperiam voluptas facilis ipsa dolor reprehenderit perferendis
          quae cumque!
        </p>
        <div className="flex items-end gap-1">
          <span className="text-lg font-medium">$1090</span>
          <span className="line-through text-red-600 text-sm ">$999</span>
          <span className="ml-auto text-pri">120 sold</span>
        </div>
        <div className=" md:mt-5">
          <CountDown targetDate={targetDate} />
        </div>
      </div>
    </div>
  );
};
export default EventsCard;
