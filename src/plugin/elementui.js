import Vue from 'vue';
import {
  Button,
  Select,
  Card,
  Form,
  FormItem,
  Input,
  Message,
  Container,
  Header,
  Aside,
  Main,
  Footer
} from 'element-ui';

Vue.use(Button)
Vue.use(Select)
Vue.use(Card)
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);

Vue.prototype.$message = Message;
