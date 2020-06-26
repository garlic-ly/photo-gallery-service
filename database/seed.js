const faker = require('faker');
const db = require('./index.js');

const ITEM_NUMBER = 100;

const roomsData = [];
const imagesData = [];
// URL for images in S3 bucket
const exampleImage = 'https://rooms-images-128.s3-us-west-1.amazonaws.com/imageXXX.jpg';

const generateRoomsData = () => {
  for (let i = 0; i < ITEM_NUMBER; i += 1) {
    const oneRoom = {
      room_name: faker.lorem.words(5),
      location_city: faker.address.city(),
      location_country: faker.address.country(),
      average_review_point: (Math.random() * (5 - 1) + 1).toFixed(2),
      number_of_reviews: Math.floor(Math.random() * (250 - 1) + 1),
      is_superhost: faker.random.boolean(),
      is_favorite: 0,
    };
    roomsData.push(oneRoom);
  }
};

const seedRooms = (data) => {
  const query = 'INSERT INTO rooms (room_name, location_city, location_country, average_review_point, number_of_reviews, is_superhost, is_favorite) VALUES(?, ?, ?, ?, ?, ?, ?)';

  for (let i = 0; i < data.length; i += 1) {
    db.query(query, [data[i].room_name, data[i].location_city, data[i].location_country, data[i].average_review_point, data[i].number_of_reviews, data[i].is_superhost, data[i].is_favorite], (err, result, field) => {
      if (err) {
        console.log(err);
      }
    });
  }
};

const generateImagesData = () => {

  // Room_id starts from 1
  for (let i = 1; i <= ITEM_NUMBER; i += 1) {
    // One room has 5-15 images. Number of image is randomly generated
    const randomNumberOfImage = Math.floor(Math.random() * (15 - 5) + 5);

    // there are 70 photos in S3 Bucket and will be chosen randomly
    for (let j = 0; j < randomNumberOfImage; j += 1) {
      const imageId = Math.floor(Math.random() * (70 - 1) + 1);
      const numberOfWords = Math.floor(Math.random() * (6 - 0) + 0);
      const oneImage = {
        image_url: `https://rooms-images-128.s3-us-west-1.amazonaws.com/image${imageId}.jpg`,
        image_description: faker.lorem.words(numberOfWords),
        room_id: i,
      };
      imagesData.push(oneImage);
    }
  }
};

const seedImages = (data) => {
  const query = 'INSERT INTO images (image_url, image_description, room_id) VALUES(?, ?, ?)';

  for (let i = 0; i < data.length; i += 1) {
    db.query(query, [data[i].image_url, data[i].image_description, data[i].room_id], (err, result, field) => {
      if (err) {
        console.log('Error: ', err);
      }
    });
  }
};

generateRoomsData();
seedRooms(roomsData);

generateImagesData();
seedImages(imagesData);

console.log('message : Completed seeding database');
