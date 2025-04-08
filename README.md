# Scatch - E-commerce Platform

A full-featured e-commerce platform built with Node.js, Express.js, and MongoDB. This application provides separate interfaces for store owners and customers, allowing for product management and online shopping.

## 🚀 Features

- **User Authentication**
  - JWT-based authentication
  - Separate user and owner roles
  - Secure password hashing with bcrypt
  - Session management

- **Product Management**
  - Add, edit, and delete products
  - Product image upload
  - Product categorization
  - Inventory management

- **User Features**
  - User registration and login
  - Profile management
  - Shopping cart functionality
  - Order history

- **Owner Dashboard**
  - Product management interface
  - Order tracking
  - Sales analytics
  - Store settings

## 🛠️ Tech Stack

- **Backend**
  - Node.js
  - Express.js
  - MongoDB with Mongoose
  - JWT for authentication
  - Express Session for session management

- **Frontend**
  - EJS templating engine
  - Bootstrap for styling
  - JavaScript for client-side functionality

- **Additional Tools**
  - Multer for file uploads
  - Connect Flash for user notifications
  - Cookie Parser for handling cookies
  - Dotenv for environment variables

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn package manager

## 🔧 Installation

1. Clone the repository
```bash
git clone [repository-url]
cd scatch
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_KEY=your_jwt_secret_key
PORT=3000
```

4. Start the server
```bash
npm start
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
scatch/
├── app.js                 # Main application file
├── config/               # Configuration files
├── controllers/          # Business logic
├── middlewares/         # Custom middleware
├── models/              # Database models
├── public/              # Static assets
├── routes/              # Route definitions
├── utils/               # Utility functions
├── views/               # EJS templates
├── .env                 # Environment variables
├── .gitignore          # Git ignore file
└── package.json        # Project dependencies
```

## 🔐 API Routes

### User Routes
- `POST /user/register` - User registration
- `POST /user/login` - User login
- `GET /user/profile` - Get user profile
- `PUT /user/profile` - Update user profile

### Owner Routes
- `POST /owner/register` - Owner registration
- `POST /owner/login` - Owner login
- `GET /owner/dashboard` - Owner dashboard
- `GET /owner/products` - Manage products

### Product Routes
- `GET /product` - List all products
- `POST /product` - Add new product
- `PUT /product/:id` - Update product
- `DELETE /product/:id` - Delete product

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👤 Author

Shubham Kumar Mishra

## 🙏 Acknowledgments

- Express.js community
- MongoDB team
- All contributors and supporters 