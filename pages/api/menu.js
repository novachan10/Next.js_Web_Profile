export default function handler(req, res) {
    if (req.method === 'GET') {
      const { name } = req.body;
      // Logic untuk menambahkan menu item baru ke database atau storage.
      const newMenuItem = { id: 4, name: name };
      res.status(201).json(newMenuItem);
    } else {
      res.status(404).json({ message: 'Not found' });
    }
  }
  