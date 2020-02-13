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

const ferry_building_marketplace_hours = {
  mon: "10:00 am - 6:00 pm",
  tue: "10:00 am - 6:00 pm",
  wed: "10:00 am - 6:00 pm",
  thurs: "10:00 am - 6:00 pm",
  fri: "10:00 am - 6:00 pm",
  sat: "9:00 am - 6:00 pm",
  sun: "11:00 am - 5:00 pm"
}

new Business({
  category: "5e449188acf32d81822aa762",
  name: "Ferry Building Marketplace",
  owner: "5e449188acf32d81822aa760",
  address: "1 Ferry Bldg",
  city: "San Francisco",
  state: "CA",
  zipcode: "94111",
  hours: ferry_building_marketplace_hours,
  latitude: 37.795961,
  longitude: -122.393782,
  phone: "(415)983-8030",
  price_range: '$$'
}).save();

const post_script_hours = {
  mon: "11:00 am - 7:00 pm",
  tue: "11:00 am - 7:00 pm",
  wed: "11:00 am - 7:00 pm",
  thurs: "11:00 am - 7:00 pm",
  fri: "11:00 am - 7:00 pm",
  sat: "11:00 am - 7:00 pm",
  sun: "11:00 am - 7:00 pm"
}

new Business({
  category: "5e449188acf32d81822aa762",
  name: "Post Script",
  owner: "5e449188acf32d81822aa760",
  address: "2413 California St",
  city: "San Francisco",
  state: "CA",
  zipcode: "94115",
  hours: post_script_hours,
  latitude: 37.788836,
  longitude: -122.434127,
  phone: "(415)213-8392",
  price_range: '$'
}).save();

// nightlife - 5e449188acf32d81822aa763

const velvet_cantina_hours = {
  mon: "5:00 pm - 12:00 am",
  tue: "5:00 pm - 12:00 am",
  wed: "5:00 pm - 12:00 am",
  thurs: "5:00 pm - 12:00 am",
  fri: "5:00 pm - 2:00 am",
  sat: "5:00 pm - 2:00 am",
  sun: "5:00 pm - 12:00 am"
}

new Business({
  category: "5e449188acf32d81822aa763",
  name: "Velvet Cantina",
  owner: "5e449188acf32d81822aa760",
  address: "3349 23rd St",
  city: "San Francisco",
  state: "CA",
  zipcode: "94110",
  hours: velvet_cantina_hours,
  latitude: 37.753884,
  longitude: -122.419418,
  phone: "(415)648-4142",
  price_range: '$$'
}).save();

const view_lounge_hours = {
  mon: "4:00 pm - 12:00 am",
  tue: "4:00 pm - 12:00 am",
  wed: "4:00 pm - 12:00 am",
  thurs: "4:00 pm - 12:00 am",
  fri: "4:00 pm - 1:00 am",
  sat: "4:00 pm - 1:00 am",
  sun: "4:00 pm - 12:00 am"
}

new Business({
  category: "5e449188acf32d81822aa763",
  name: "The View Lounge",
  owner: "5e449188acf32d81822aa760",
  address: "780 Mission St",
  city: "San Francisco",
  state: "CA",
  zipcode: "94103",
  hours: view_lounge_hours,
  latitude: 37.785422,
  longitude: -122.404535,
  phone: "(415)896-1600",
  price_range: '$$'
}).save();

const rooftop_25_hours = {
  mon: "11:30 am - 8:00 pm",
  tue: "11:30 am - 8:00 pm",
  wed: "11:30 am - 8:00 pm",
  thurs: "11:30 am - 10:00 pm",
  fri: "11:30 am - 10:00 pm",
  sat: "11:30 am - 10:00 pm",
  sun: "11:30 am - 8:00 pm"
}

new Business({
  category: "5e449188acf32d81822aa763",
  name: "Rooftop 25",
  owner: "5e449188acf32d81822aa760",
  address: "25 Lusk St",
  city: "San Francisco",
  state: "CA",
  zipcode: "94107",
  hours: rooftop_25_hours,
  latitude: 37.778697,
  longitude: -122.394296,
  phone: "(415)390-3290",
  price_range: '$$'
}).save();

const exploratorium_after_dark_hours = {
  mon: "Closed",
  tue: "Closed",
  wed: "Closed",
  thurs: "6:00 pm - 10:00 pm",
  fri: "Closed",
  sat: "Closed",
  sun: "Closed"
}

new Business({
  category: "5e449188acf32d81822aa763",
  name: "Exploratorium After Dark",
  owner: "5e449188acf32d81822aa760",
  address: "Pier 15",
  city: "San Francisco",
  state: "CA",
  zipcode: "94111",
  hours: exploratorium_after_dark_hours,
  latitude: 37.801745,
  longitude: -122.397473,
  phone: "(415)302-1039",
  price_range: '$$'
}).save();

const f8_nightclub_bar_hours = {
  mon: "Closed",
  tue: "10:00 pm - 1:00 am",
  wed: "5:00 pm - 2:00 am",
  thurs: "9:00 pm - 2:00 am",
  fri: "5:00 pm - 3:00 am",
  sat: "10:00 pm - 3:00 am",
  sun: "10:00 pm - 2:00 am"
}

new Business({
  category: "5e449188acf32d81822aa763",
  name: "F8 Nightclub and Bar",
  owner: "5e449188acf32d81822aa760",
  address: "1192 Folsom",
  city: "San Francisco",
  state: "CA",
  zipcode: "94103",
  hours: f8_nightclub_bar_hours,
  latitude: 37.775500,
  longitude: -122.409980,
  phone: "(415)432-4302",
  price_range: '$$'
}).save();

// beauty & spas - 5e449188acf32d81822aa765

// automotive - 5e449188acf32d81822aa766

// active life - 5e449188acf32d81822aa764

// home services - 5e449188acf32d81822aa767

