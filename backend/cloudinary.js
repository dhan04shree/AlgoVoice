const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key :process.env.CLOUD_API_KEY,
    api_secret :process.env.CLOUD_API_SECRET
})

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'algovoice',
    resource_type: 'video', 
    format: async (req, file) => 'webm', // or mp3, wav, etc.
    public_id: (req, file) => Date.now().toString(),
  },
});

 module.exports = {
    cloudinary,storage
  };