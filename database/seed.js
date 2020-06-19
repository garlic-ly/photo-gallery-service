const faker = require('faker');
const db = require('./index.js');

const ITEM_NUMBER = 100;

const roomsData = [];
const imagesData = [];
// TODO: This url needs to be sourced from S3. For now, it is LoremFlicker
const randomImageUrl = 'https://loremflickr.com/1440/960/room';

const generateRoomsData = () => {
  for (let i = 0; i < ITEM_NUMBER; i += 1) {
    const oneRoom = {
      room_name: faker.lorem.words(5),
      location_city: faker.address.city(),
      location_country: faker.address.country(),
      average_review_point: (Math.random() * (5 - 1) + 1).toFixed(2),
      number_of_reviews: Math.floor(Math.random() * (250 - 1) + 1),
    };
    roomsData.push(oneRoom);
  }
};

const seedRooms = (data) => {
  const query = 'INSERT INTO rooms (room_name, location_city, location_country, average_review_point, number_of_reviews) VALUES(?, ?, ?, ?, ?)';

  for (let i = 0; i < data.length; i += 1) {
    db.query(query, [data[i].room_name, data[i].location_city, data[i].location_country, data[i].average_review_point, data[i].number_of_reviews], (err, result, field) => {
      if (err) {
        console.log(err);
      }
    })
  }
};

const generateImagesData = () => {

  // Room_id starts from 1
  for (let i = 1; i <= ITEM_NUMBER; i++) {
    // One room has 5-15 images. Number of image is randomly generated
    let randomNumberOfImage = Math.floor(Math.random()*(15 - 5) + 5);

    // randomImageUrl will generate different image everytime
    for (j = 0; j < randomNumberOfImage; j++) {
      let oneImage = {
        image_url: randomImageUrl,
        room_id: i
      }
      imagesData.push(oneImage);
    }
  }
}

const seedImages = (data) => {
  let query = 'INSERT INTO images (image_url, room_id) VALUES(?, ?)';

  for (let i = 0; i< data.length; i++) {
    db.query(query, [data[i].image_url, data[i].room_id], (err, result, field) => {
      if(err) {
        console.log(err);
      }
    })
  }
};

generateRoomsData();
seedRooms(roomsData);

generateImagesData();
seedImages(imagesData);

console.log('Completed seeding database');