import { useState } from 'react';

const Gallery = ({ menuItems }) => {
  const [newMenuItem, setNewMenuItem] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/menu', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newMenuItem }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Menu Items:</h1>
      <ul>
        {menuItems.map((menuItem) => (
          <li key={menuItem.id}>{menuItem.name}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newMenuItem} onChange={(e) => setNewMenuItem(e.target.value)} />
        <button type="submit">Add Menu Item</button>
      </form>
    </div>
  );
};

export async function getStaticProps() {
  const menuItems = [
    { id: 1, name: 'Andrea Hirata' },
    { id: 2, name: 'Tere Liye' },
    { id: 3, name: 'Eka Kurniawan' },
  ];
  return { props: { menuItems } };
}

export default Gallery;
