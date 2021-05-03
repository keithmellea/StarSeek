![](https://www.nasa.gov/sites/default/files/thumbnails/image/potw2103a.jpg)

# **We are StarSeek**. 

We facilitate your astronautical urges. Pick a spot in the galaxy, whether it be a resort floating around the ring of Jupiter, or deep in the jungles of Osiris, and it's yours.

Our massive, comprehensive map of all Spots in the galaxy is at your disposal, powered by a passionate community of trillions of amateur and professional hosts of all species. 

Each one of our hosts and their respective Spots has been thoroughly vetted through the StarSeek inspection process, and we guarantee your satisfaction.

Come, Seeker, let's find your next galactic adventure.

https://starseekapp.herokuapp.com/

## Technologies used to build the site

- HTML , Vanilla CSS, Javascript (Front-end)
- React (Front-end)
- Redux (Front-end)
- Heroku (hosting services) (Front-end)
- csurf, dotenv, bcrypt, cookie-parser (Back-end)
- express, express-session, express-validator (Back-end)
- nodemon (Back-end)
- postgreSQL, sequelize (Back-end)

## Functionalities

- User authentication is completed by hashing passwords using bcrypt js library (csurf protected as well)
- The user can search for spots around the galaxy by searching based on times available, locations(spot name, planet, system)
- Once logged in, a user can book a listing for a specified amount of time. Once made, the user has the ability to cancel the booking on their profile page.
- The user can leave a review on a spot they've been to.
- Custom Galaxy Map based on Google Maps API to specify location.
- Logged in user has a profile page
