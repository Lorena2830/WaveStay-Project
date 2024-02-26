# WaveStay-Project

### Authentication Endpoints

The Authentication flow for the application is:

### User Signup/Login

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
POST   | /auth/signup     | -     | user | User Signup              | `name`, `email`, `password`,                    | { message: `string`, result: `token` }
POST   | /auth/login      | -     | user | User Login               | `email`, `password`                             | { message: `string`, result: `token` }

### User Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /user            | YES   | admin| Get All Users            |                                                 | { message: `string`, result: `array` }
GET    | /user/:id        | YES   | admin| Get One User             |                                                 | { message: `string`, result: `object` }
GET    | /user/profile    | YES   | user | Get Own profile          |                                                 | { message: `string`, result: `object` }
POST   | /user            | YES   | admin| Create One User          |    `name`, `email`, `password`, `role`          | { message: `string`, result: `object` }
PUT    | /user/:id        | YES   | admin| Update One User          |    `name`, `email`, `password`, `role`          | { message: `string`, result: `object` }
PUT    | /user/profile    | YES   | user | Update own Profile       |    `name`, `email`, `password`                  | { message: `string`, result: `object` }
DELETE | /user/:id        | YES   | admin| Delete One User          |    `name`, `email`, `password`, `role           | { message: `string`, result: `object` }
DELETE | /user/profile    | YES   | user | Update Own Profile       |    `name`, `email`, `password`, `role           | { message: `string`, result: `object` }

### Booking Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /booking         | YES   |admin | Get All Bookings         |                                                 | { message: `string`, result: `array` }
GET    | /booking/:id     | YES   | user | Get One Booking          |                                                 | { message: `string`, result: `object` }
POST   | /booking         | YES   | user | Create One Booking       |`start date`, `ending date`, `status`, `id_user`,|  { message: `string`, result: `object` }
       |                  |       |      |                          |                    `id_accomodation`            |
PUT    | /booking/:id     | YES   | user | Update One Booking       |`start date`, `ending date`, `status`, `id_user`,| { message: `string`, result: `object` }
  -    |       -          |   -   |   -  |          -               |                  `id_accomodation`              |                 -
DELETE | /booking/:id     | YES   | user | Delete One Booking       |                          -                      | { message: `string`, result: `object` }

### Accomodation Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /accomodation    | YES   | user | Get All Accomodations    |                                                 | { message: `string`, result: `array` }
GET    | /accomodation/:id| YES   | user | Get One Accomodation     |                                                 | { message: `string`, result: `object` }
POST   | /accomodation    | YES   |admin | Create One Accomodation  |   `name`, `address`, `description`, `price`,    |  { message: `string`, result: `object` }
  -    |        -         |   -   |  -   |         -                |             `ratings`, `booking_id`             |                -
PUT    |/accomodation/:id | YES   |admin | Update One Accomodation  |   `name`, `address`, `description`, `price`,    | { message: `string`, result: `object` }
  -    |        -         |   -   |  -   |         -                |              `ratings`, `booking_id`            |                -
PUT    |/accomod../add/:id| YES   | user | Add one acc to favorites |                     -                           | { message: `string`, result: `object` }
PUT    |/acc.../remove/:id| YES   | user | Remove from my favorites |                     -                           | { message: `string`, result: `object` }  
DELETE |/accomodation/:id | YES   |admin | Delete One Accomodation  |                                                 | { message: `string`, result: `object` }


