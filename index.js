// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();
// const sequelize = require('./config/database');
// const authRoutes = require('./routes/authRoutes');
// const productRoutes = require('./routes/productRoutes');
// const orderRoutes = require('./routes/orderRoutes');

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use('/api/auth', authRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/orders', orderRoutes);

// const PORT = process.env.PORT || 5000;

// sequelize.sync({ alter: true }).then(() => {
//     // console.log('Database connected & synced successfully!');
//     app.listen(PORT, () => {
//         console.log(`Server running on port ${PORT}`);
//     });
// }).catch(err => console.log('Database connection error: ', err));


const express = require('express');
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./config/database');

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:5173'
// }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Backend is working!'
    });
});

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// Vercel
module.exports = app;

// Local development
if (require.main === module) {
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}


// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();

// const sequelize = require('./config/database');

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get('/', (req, res) => {
//     res.json({
//         message: 'Backend is working!'
//     });
// });

// module.exports = app;