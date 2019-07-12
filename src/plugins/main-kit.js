import "@/assets/scss/main.scss";
import globalComponents from "./globalComponents";
import globalDirectives from "./globalDirectives";

export default {
  install(Vue) {
    Vue.use(globalComponents);
    Vue.use(globalDirectives);
  }
};