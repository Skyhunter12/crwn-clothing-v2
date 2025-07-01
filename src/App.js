import Directory from "./directory/directory.component";
// Assuming you have a CSS file for styles
const App = () => {
  const categories = [
    {
      'id': 1,
      'title': 'Hats',
      'imageUrl': 'https://i.ibb.co/cvpntL1/hats.png',
      subtitle: 'Shop Now',
    },
    {
      'id': 2,
      'title': 'Jackets',
      'imageUrl': 'https://i.ibb.co/cvpntL1/jackets.png',
      subtitle: 'Shop Now',
    },
    {
      'id': 3,
      'title': 'Sneakers',
      'imageUrl': 'https://i.ibb.co/cvpntL1/sneakers.png',
      subtitle: 'Shop Now',
    },
    {
      'id': 4,
      'title': 'Mens',
      'imageUrl': 'https://i.ibb.co/cvpntL1/sneakers.png',
      subtitle: 'Shop Now',
    },
    {
      'id': 5,
      'title': 'Womens',
      'imageUrl': 'https://i.ibb.co/cvpntL1/sneakers.png',
      subtitle: 'Shop Now',
    }
  ];
  return (
    <Directory categories={categories} />
  );
};

export default App;
