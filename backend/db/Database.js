import mongoose from 'mongoose';

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongodb connected with server: ${data.connection.host}`);
    });
};

export default connectDatabase;
