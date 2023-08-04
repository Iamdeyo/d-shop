import styles from '../../styles/styles.js';

const MainLogo = () => {
  return (
    <div className={`${styles.noramlFlex} gap-2 cursor-pointer`}>
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g clipPath="url(#clip0_901_3095)">
            <path
              d="M10 24L9 20L8 16L7 12L6 8H31L29 22C28.86 23.04 28.12 24 27 24H10Z"
              fill="#7BC142"
            ></path>
            <path
              d="M23 27C24.1 27 25 27.9 25 29C25 30.1 24.1 31 23 31C21.9 31 21 30.1 21 29C21 27.9 21.9 27 23 27ZM11 27C12.1 27 13 27.9 13 29C13 30.1 12.1 31 11 31C9.9 31 9 30.1 9 29C9 27.9 9.9 27 11 27Z"
              fill="#000000"
            ></path>
            <path
              d="M8 16H2M9 20H3M7 12H1M26 16H11M25 20H12M27 12H10M10 24H27C28.125 24 28.862 23.038 29 22L31 8H6L4 1H1M13 29C13 27.896 12.104 27 11 27C9.896 27 9 27.896 9 29C9 30.104 9.896 31 11 31C12.104 31 13 30.104 13 29ZM25 29C25 27.896 24.104 27 23 27C21.896 27 21 27.896 21 29C21 30.104 21.896 31 23 31C24.104 31 25 30.104 25 29Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_901_3095">
              <rect width="32" height="32" fill="white"></rect>
            </clipPath>
          </defs>
        </g>
      </svg>
      {/*  */}
      <h1 className="text-[24px]">D-Shop</h1>
    </div>
  );
};
export default MainLogo;
