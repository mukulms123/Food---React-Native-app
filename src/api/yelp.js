import axios from "axios";
import { Header } from "react-native/Libraries/NewAppScreen";
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 0DOUJexiyynKkQoxk_1ra_ucMZkfOM8X2YJRXP5dw1q1ZxsCVdQlWDthIaR2V6blAubSJrJmk2b28yDyNI1t1kgiqzUOOGp_t7SAqDQoqKQGojoMoIHX1BS-DKy3X3Yx",
  },
});
