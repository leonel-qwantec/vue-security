import { HeadGoverness } from 'vue-kindergarten';

export default class RouteGoverness extends HeadGoverness {
  guard(action, { redirect }) {
    if (this.isNotAllowed(action)) {
      console.log(`Acción "${action}" no permitida`)
      redirect('/');
    }
  }
}