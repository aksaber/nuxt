import Vue from 'vue'
import {
    Input,
    Form,
    FormItem,
    Button,
    Upload,
    Message,
    // Dialog,
    MessageBox
} from 'element-ui'

const components = [
    Input,
    Form,
    FormItem,
    Button,
    Upload,
    // Dialog,
];

Message.install = function (Vue, options) {
    Vue.prototype.$message = Message
}

MessageBox.install = function (Vue, options) {
    Vue.prototype.$alert = MessageBox
}

const Element = {
    install (Vue) {
      components.forEach(component => {
        Vue.component(component.name, component)
      })
    }
}

Vue.use(Message);
Vue.use(MessageBox);
Vue.use(Element);