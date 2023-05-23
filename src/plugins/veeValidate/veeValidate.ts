import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate, {
  fieldsBagName: 'vee-fields',
})

// @ts-ignore
import VeeValidateLaravel from '@pmochine/vee-validate-laravel'

Vue.prototype.$setErrorsFromResponse = function (errorResponse: any) {
  // only allow this function to be run if the validator exists
  if (!this.hasOwnProperty('$validator')) {
    return
  }

  // clear errors
  this.$validator.errors.clear()

  // check if errors exist
  if (!errorResponse.hasOwnProperty('errors')) {
    return
  }

  let errorFields = Object.keys(errorResponse.errors)

  // insert laravel errors
  errorFields.map((field) => {
    let errorString = errorResponse.errors[field].join(', ')
    this.$validator.errors.add({ field: field, msg: errorString })
  })
}

const dictionary = {
  custom: {
    active_status: {
      required: 'The status field is required',
    },
    department_id: {
      required: 'The department field is required',
    },
    org_name: {
      required: 'The organization name field is required',
    },
    mobile_no: {
      required: 'The mobile no field is required',
    },
    user_name: {
      required: 'The Username  field is required',
    },
    password: {
      required: 'The Password field is required',
    },
    foo_rate: {
      required: 'The foo rate field is required',
      decimal:
        'The foo rate field must be numeric and may contain 2 decimal points',
      min_value: 'The foo rate field must be 0 or more',
      max_value: ' The foo rate field must be 99 or less ',
    },
    mobile_or_email: {
      required: 'The Mobile or Email field is required',
      // min: 'The foo number field must be at least 11 characters',
      // max: 'The foo number field may not be greater than 11 characters',
      // digits: 'The foo number field must be numeric and contains exactly 11 digits'
    },
    reset_password: {
      required: 'The reset password field is required',
    },
    otp_code: {
      required: 'The otp code field is required',
    },
    old_password: {
      required: 'The Old password field is required',
    },
    password_confirmation: {
      required: 'The Password confirmation field is required',
      confirmed: 'The Password confirmation does not match',
    },
    display_name: {
      required: 'The display name field is required',
    },
    route_name: {
      required: 'The route name field is required',
    },
    path_url: {
      required: 'The path url field is required',
    },
    route_controller: {
      required: 'The route controller field is required',
    },
    route_model: {
      required: 'The route model field is required',
    },
    custom_permission_id: {
      required: 'The permission field is required',
    },
    route_id: {
      required: 'The route field is required',
    },
  },
}

VeeValidate.Validator.localize('en', dictionary)
Vue.use(VeeValidate, {
  events: 'input|change|blur',
})
Vue.use(VeeValidateLaravel, {
  events: 'input|change|blur',
})

export default {}
