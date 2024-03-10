// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const { Timestamp } = require('mongodb');

// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));

// /*mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });
// const reservationSchema = new mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   email: String,
//   phoneNumber: String,
//   fromLocation: String,
//   toLocation: String,
//   dateOfJourney: String,
//   age: Number,
//   gender: String,
// });

// const Reservation = mongoose.model('Reservation', reservationSchema);*/

// /*const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/test';
 
// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => {
//   console.log('MongoDB connected');
//   // Once connected, you can start querying and displaying data from MongoDB
//   Reservation.find({})
//     .then(reservations => {
//       console.log('Reservations:', reservations);
//     })
//     .catch(err => {
//       console.error('Error fetching reservation:', err);
//     });
// })
// .catch(err => {
//   console.error('Error connecting to MongoDB:', err);
// });
 
// // MongoDB Schema
// const reservationSchema = new mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   email: String,
//   phoneNumber: String,
//   fromLocation: String,
//   toLocation: String,
//   dateOfJourney: String,
//   age: Number,
//   gender: String,
// });
 
// const Reservation = mongoose.model('Reservation', reservationSchema);
// */

// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/sale';

// // Connect to MongoDB
// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(() => {
//     console.log('MongoDB connected');
//     Sale.find({})
//       .then(sales => {
//         console.log('Sales:', sales);
//       })
//       .catch(err => {
//         console.error('Error fetching salesreport:', err);
//       });
//     });

    
// const salereportSchema = new mongoose.Schema({
//   Date: Date,
//   Time: String,
//   product_name: String,
//   product_id: String,
//   category: String,
//   quantitysold: Number,
//   unitprice: String,
//   totalRevenue: Number,
// });
// totalRevenue = unitprice * quantitysold;
// const Sale = mongoose.model('SalesReport', salereportSchema);

// //const totalRevenue = unitprice * quantitysold;
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });


// app.post('/', (req, res) => {
//   const { Date, Time, product_name, product_id, category,quantitysold, unitprice } = req.body;
//   const totalRevenue = parseFloat(unitprice) * parseInt(quantitysold);
//   const newSale = new Sale({
//     Date,
//     Time,
//     product_name,
//     product_id,
//     category,
//     quantitysold,
//     unitprice ,
//     totalRevenue
//   });

//   newSale.save()
//     .then((savedSalesreport) => {
//       console.log('SalesReport saved:', savedSalesreport);
//       res.send(`
//         <!DOCTYPE html>
//         <html>
//           <head>
//             <title>SalesReport Application</title>
//             <style>
//               body {
//                 margin: 0;
//                 padding: 0;
//                 background: url('https://think360studio-media.s3.ap-south-1.amazonaws.com/portfolio-new/ttb-app-header-banner.jpg');
//                 background-size: cover;
//                 display: flex; 
//                 align-items: center;
//                 justify-content: center;
//                 height: 100vh;
//               }

//               .container {
//                 background-color: #fff;
//                 padding: 20px;
//                 border-radius: 10px;
//                 box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//               }

//               h1 {
//                 color: #1e88e5;
//               }

//               .info-box {
//                 border: 1px solid #ccc;
//                 border-radius: 5px;
//                 padding: 15px;
//                 margin-top: 20px;
//               }

//               .info-box p {
//                 margin: 10px 0;
//               }
//             </style>
//           </head>
//           <body>
//             <div class="container">
//               <h1>Thank you for providing your information</h1>
//               <div class="info-box">
//                 <p><strong>Date:</strong> ${Date}</p>
//                 <p><strong>Time:</strong> ${Time}</p>
//                 <p><strong>product_id:</strong> ${product_id}</p>
//                 <p><strong>product_name:</strong> ${product_name}</p>
//                 <p><strong>Category:</strong> ${category}</p>
//                 <p><strong>Quantity :</strong> ${quantitysold}</p>
//                 <p><strong>Unit price:</strong>${unitprice}</p>
//                 <p><strong>Total Revenue:</strong>${totalRevenue}</p>
//               </div>
//             </div>
//           </body>
//         </html>
//       `);
//     })
//     .catch((error) => {
//       console.error('Error saving reservation:', error);
//       res.status(500).send('Internal Server Error');
//     });
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// }); 



/*const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/sale';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

const salereportSchema = new mongoose.Schema({
  Date: Date,
  Time: String,
  product_name: String,
  product_id: String,
  category: String,
  quantitysold: Number,
  unitprice: String,
  totalRevenue: Number,
});

const Sale = mongoose.model('SalesReport', salereportSchema);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  const { Date, Time, product_name, product_id, category, quantitysold, unitprice } = req.body;
  const totalRevenue = parseFloat(unitprice) * parseInt(quantitysold);
  
  const newSale = new Sale({
    Date,
    Time,
    product_name,
    product_id,
    category,
    quantitysold,
    unitprice,
    totalRevenue
  });

  newSale.save()
    .then((savedSalesreport) => {
      console.log('SalesReport saved:', savedSalesreport);
      res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>SalesReport Application</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            background: url('https://think360studio-media.s3.ap-south-1.amazonaws.com/portfolio-new/ttb-app-header-banner.jpg');
            background-size: cover;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
          }
      
          .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
      
          h1 {
            color: #1e88e5;
          }
      
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }
      
          th, td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: left;
          }
      
          th {
            background-color: #f2f2f2;
          }
        </style>
      </head>
      
      <body>
        <div class="container">
          <h1>Thank you for providing your information</h1>
          <table>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Quantity Sold</th>
              <th>Unit Price</th>
              <th>Total Revenue</th>
            </tr>
            <tr>
              <td>${Date}</td>
              <td>${Time}</td>
              <td>${product_id}</td>
              <td>${product_name}</td>
              <td>${category}</td>
              <td>${quantitysold}</td>
              <td>${unitprice}</td>
              <td>${totalRevenue}</td>
            </tr>
          </table>
        </div>
      </body>
      </html>
      
      `);
    })
    .catch((error) => {
      console.error('Error saving reservation:', error);
      res.status(500).send('Internal Server Error');
    });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});*/


const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/salesreport';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

const salereportSchema = new mongoose.Schema({
  Date: String,
  Time: String,
  product_name: String,
  product_id: String,
  category: String,
  quantitysold: Number,
  unitprice: String,
  totalRevenue: Number,
});

const Sale = mongoose.model('SalesReport', salereportSchema);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  const { Date, Time, product_name, product_id, category, quantitysold, unitprice } = req.body;
  const totalRevenue = parseFloat(unitprice) * parseInt(quantitysold);

  const newSale = new Sale({
    Date,
    Time,
    product_name,
    product_id,
    category,
    quantitysold,
    unitprice,
    totalRevenue
  });

  newSale.save()
    .then((savedSalesreport) => {
      console.log('SalesReport saved:', savedSalesreport);
      res.redirect('/sales');
    })
    .catch((error) => {
      console.error('Error saving sale:', error);
      res.status(500).send('Internal Server Error');
    });
});

app.get('/sales', async (req, res) => {
  try {
    const sales = await Sale.find();
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>All Sales Reports</title>
        <style>
        body {
          margin: 0;
          padding: 0;
          background: url('https://assets-global.website-files.com/60e7f71b22c6d0b9cf329ceb/621e193892e8c41051e34fce_StepsforEffectivelyAnalyzingYourSalesData_20971e108bda1d8795a0c640c000e691_2000.png');
          background-size: cover;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
    
        .container {
          width: 50%;
          margin: 50px auto;
          background-color: rgba(182, 245, 244, 0.8);
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
    
        h1 {
          color: #1e88e5;
        }
    
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
    
        th, td {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: left;
        }
    
        th {
          background-color: #f2f2f2;
        }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>All Sales Reports</h1>
          <table>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Quantity Sold</th>
              <th>Unit Price</th>
              <th>Total Revenue</th>
            </tr>
            ${sales.map(sale => `
              <tr>
                <td>${sale.Date}</td>
                <td>${sale.Time}</td>
                <td>${sale.product_id}</td>
                <td>${sale.product_name}</td>
                <td>${sale.category}</td>
                <td>${sale.quantitysold}</td>
                <td>${sale.unitprice}</td>
                <td>${sale.totalRevenue}</td>
              </tr>
            `).join('')}
          </table>
        </div>
      </body>
      </html>
    `);
  } catch (error) {
    console.error('Error fetching sales reports:', error);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

