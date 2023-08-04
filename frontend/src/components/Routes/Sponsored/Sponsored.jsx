import styles from '../../../styles/styles';

const Sponsored = () => {
  const sponsorsLogo = [
    'https://logos-world.net/wp-content/uploads/2020/04/Samsung-Logo.png',
    'https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png',
    'https://logos-world.net/wp-content/uploads/2020/11/BlackBerry-Logo.png',
    'https://logos-world.net/wp-content/uploads/2020/07/Xiaomi-Logo-700x394.png',
    'https://logos-world.net/wp-content/uploads/2020/09/SpaceX-Logo-700x394.png',
    'https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo-700x394.png',
  ];
  return (
    <div
      className={
        styles.section +
        ' ' +
        'my-6 flex items-center flex-wrap justify-center space-x-6'
      }
    >
      {sponsorsLogo.map((url, i) => (
        <div key={i} className="w-[150px] object-contain">
          <img
            src={url}
            className="w-full h-full object-contain"
            alt="sponsors logo"
          />
        </div>
      ))}
    </div>
  );
};
export default Sponsored;
