const mongoose = require('mongoose');
const db = require('./keys').mongoURI;
const Category = require('../models/Category');
const User = require('../models/User');
const Business = require('../models/Business');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Seeded successfully"))
  .catch(err => console.log(err));

// new User({
//   username: "username",
//   email: "username@email.com",
//   password: "hunter12"
// }).save();

// new User({
//   username: "sloth123",
//   email: "sloth123@gmail.com",
//   password: "hunter12"
// }).save();

// new Category({ title: "Restaurants" }).save();
// new Category({ title: "Shopping" }).save();
// new Category({ title: "Nightlife" }).save();
// new Category({ title: "Active Life" }).save();
// new Category({ title: "Beauty & Spas" }).save();
// new Category({ title: "Automotive" }).save();
// new Category({ title: "Home Services" }).save();


// restaurants 
const the_house_hours = {
  mon: "11:30 am - 10:00 pm",
  tue: "11:30 am - 10:00 pm",
  wed: "11:30 am - 10:00 pm",
  thurs: "11:30 am - 10:00 pm",
  fri: "11:30 am - 10:00 pm",
  sat: "11:30 am - 10:00 pm",
  sun: "5:00 pm - 10:00 pm"
}

new Business({
  category: "5e449188acf32d81822aa761",
  name: "The House",
  owner: "5e449188acf32d81822aa760",
  address: "1230 Grant Ave",
  city: "San Francisco",
  state: "CA",
  zipcode: "94133",
  hours: the_house_hours,
  latitude: 37.7984743,
  longitude: -122.4092219,
  phone: "(415)986-8612",
  price_range: '$$$'
}).save();

const farmhouse_hours = {
  mon: "11:00 am - 10:00 pm",
  tue: "11:00 am - 10:00 pm",
  wed: "11:00 am - 10:00 pm",
  thurs: "11:00 am - 10:00 pm",
  fri: "11:00 am - 10:30 pm",
  sat: "12:00 pm - 10:30 pm",
  sun: "12:00 pm - 10:00 pm"
};

new Business({
  category: "5e449188acf32d81822aa761",
  name: "Farmhouse Kitchen Thai Cuisine",
  owner: "5e449188acf32d81822aa760",
  address: "710 Florida St",
  city: "San Francisco",
  state: "CA",
  zipcode: "94110",
  hours: farmhouse_hours,
  latitude: 37.7672023,
  longitude: -122.9418707,
  phone: "(415)814-2920",
  price_range: "$$"
}).save();

const lolo_hours = {
  mon: "5:30 pm - 11:00 pm",
  tue: "5:30 pm - 11:00 pm",
  wed: "5:30 pm - 11:00 pm",
  thurs: "5:30 pm - 11:00 pm",
  fri: "5:30 pm - 1:00 am",
  sat: "11:00 am - 1:00 am",
  sun: "11:00 am - 4:00 pm"
};

new Business({
  category: "5e449188acf32d81822aa761",
  name: "Loló",
  owner: "5e449188acf32d81822aa760",
  address: "974 Valencia St",
  city: "San Francisco",
  state: "CA",
  zipcode: "94110",
  hours: lolo_hours,
  latitude: 37.757375,
  longitude: -122.4235415,
  phone: "(415)643-5656",
  price_range: "$$"
}).save();

const liholiho_hours = {
  mon: "5:30 pm - 11:00 pm",
  tue: "5:30 pm - 11:00 pm",
  wed: "5:30 pm - 11:00 pm",
  thurs: "5:30 pm - 11:00 pm",
  fri: "5:30 pm - 1:00 am",
  sat: "11:00 am - 1:00 am",
  sun: "11:00 am - 4:00 pm"
};

new Business({
  category: "5e449188acf32d81822aa761",
  name: "Liholiho Yatch Club",
  owner: "5e449188acf32d81822aa760",
  address: "871 Sutter St",
  city: "San Francisco",
  state: "CA",
  zipcode: "94109",
  hours: liholiho_hours,
  latitude: 37.7882319,
  longitude: -122.4235415,
  phone: "(415)440-5446",
  price_range: "$$$"
}).save();

const tuba_hours = {
  mon: "5:00 pm - 9:30 pm",
  tue: "5:00 pm - 9:30 pm",
  wed: "5:00 pm - 9:30 pm",
  thurs: "5:00 pm - 9:30 pm",
  fri: "5:00 pm - 10:30 pm",
  sat: "5:00 pm - 10:30 pm",
  sun: "5:00 pm - 9:30 pm"
};

new Business({
  category: "5e449188acf32d81822aa761",
  name: "Tuba Authentic Turkish Restaurant",
  owner: "5e449188acf32d81822aa760",
  address: "1007 Guerrero St"
  city: "San Francisco",
  state: "CA",
  zipcode: "94110",
  hours: tuba_hours,
  latitude: 37.754996,
  longitude: -122.422963,
  phone: "(415)826-8822",
  price_range: "$$"
}).save();

// shopping
const westfield_center_hours = {
  mon: "10:00 am - 8:30 pm",
  tue: "10:00 am - 8:30 pm",
  wed: "10:00 am - 8:30 pm",
  thurs: "10:00 am - 8:30 pm",
  fri: "10:00 am - 8:30 pm",
  sat: "10:00 am - 8:30 pm",
  sun: "11:00 am - 7:00 pm"
}

new Business({
  category: "5e449188acf32d81822aa762",
  name: "Westfield San Francisco Center",
  owner: "5e449188acf32d81822aa760",
  address: "865 Market St",
  city: "San Francisco",
  state: "CA",
  zipcode: "94103",
  hours: westfield_center_hours,
  latitude: 37.783930,
  longitude: -122.406834,
  phone: "(415)512-6776",
  price_range: '$$'
}).save();

const love_of_ganesha_hours = {
  mon: "11:00 am - 6:30 pm",
  tue: "11:00 am - 6:30 pm",
  wed: "11:00 am - 6:30 pm",
  thurs: "11:00 am - 6:30 pm",
  fri: "11:00 am - 6:30 pm",
  sat: "11:00 am - 6:30 pm",
  sun: "11:00 am - 6:00 pm"
}

new Business({
  category: "5e449188acf32d81822aa762",
  name: "The Love of Ganesha",
  owner: "5e449188acf32d81822aa760",
  address: "1573 Haight St",
  city: "San Francisco",
  state: "CA",
  zipcode: "94117",
  hours: love_of_ganesha_hours,
  latitude: 37.769839,
  longitude: -122.448079,
  phone: "(415)863-0999",
  price_range: '$'
}).save();

const foggy_notion_hours = {
  mon: "11:00 am - 7:00 pm",
  tue: "11:00 am - 7:00 pm",
  wed: "11:00 am - 7:00 pm",
  thurs: "11:00 am - 7:00 pm",
  fri: "11:00 am - 7:00 pm",
  sat: "10:00 am - 7:00 pm",
  sun: "10:00 am - 6:00 pm"
}

new Business({
  category: "5e449188acf32d81822aa762",
  name: "Foggy Notion",
  owner: "5e449188acf32d81822aa760",
  address: "124 Clement St",
  city: "San Francisco",
  state: "CA",
  zipcode: "94118",
  hours: foggy_notion_hours,
  latitude: 37.783398,
  longitude: -122.460565,
  phone: "(415)683-5654",
  price_range: '$$'
}).save();