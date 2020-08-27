import Vue from 'vue';
import {
  Button,
  Select,
  Card,
  Form,
  FormItem,
  Input,
  Message
} from 'element-ui';

Vue.use(Button)
Vue.use(Select)
Vue.use(Card)
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);

Vue.prototype.$message = Message;
