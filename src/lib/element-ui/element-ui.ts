import Vue from 'vue'

import {
  Dialog,
  DatePicker,
  TimePicker,
  Table,
  TableColumn,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Form,
  FormItem,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Popover,
  Pagination,
  Transfer,
  Tree,
  Col,
  Tabs,
  TabPane,
  Collapse,
  CollapseItem,
  Divider,
} from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

// @ts-ignore
import lang from 'element-ui/lib/locale/lang/en'
// @ts-ignore
import locale from 'element-ui/lib/locale'

// configure language
locale.use(lang)
//
Vue.use(Dialog)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Switch)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Popover)
Vue.use(Pagination)
Vue.use(Transfer)
Vue.use(Tree)
Vue.use(Col)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Divider)

export default {}
