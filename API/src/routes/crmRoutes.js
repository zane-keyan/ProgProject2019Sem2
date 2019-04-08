import {
  addNewCar,
  getCars,
} from "../controllers/carController";

import { 
  addNewRental,
  getRentals 
} from "../controllers/rentalController"

const routes = (app) => {
  app.route('/car')

    .post(addNewCar)

    .get(getCars);
    
  app.route('/rental')
    .post(addNewRental)
    .get(getRentals)
}

export default routes;