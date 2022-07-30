const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = 4000;

app.get('/', (req, res) => {
   res.json([
      {
         id: '1',
         title: 'Book Review: The Bear & The Nightingale',
      },
      {
         id: '2',
         title: 'Game Review: Pokemon Brillian Diamond',
      },
      {
         id: '3',
         title: 'Show Review: Alice in Borderland',
      },
   ]);
});

app.listen(PORT, () => {
   console.log(`listening for requests on port ${PORT}`);
});
