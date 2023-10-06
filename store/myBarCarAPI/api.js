import axios from "axios"
const myBarCarAPI = axios.create({
  baseURL: "https://mybarcar-37661.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_login_create(payload) {
  return myBarCarAPI.post(`/api/v1/login/`)
}
function api_v1_signup_create(payload) {
  return myBarCarAPI.post(`/api/v1/signup/`, payload)
}
function modules_payments_get_payments_history_list(payload) {
  return myBarCarAPI.get(`/modules/payments/get_payments_history/`)
}
function modules_payments_get_payments_methods_list(payload) {
  return myBarCarAPI.get(`/modules/payments/get_payments_methods/`)
}
function modules_payments_payment_sheet_create(payload) {
  return myBarCarAPI.post(`/modules/payments/payment_sheet/`)
}
function modules_privacy_policy_list(payload) {
  return myBarCarAPI.get(`/modules/privacy-policy/`)
}
function modules_privacy_policy_create(payload) {
  return myBarCarAPI.post(`/modules/privacy-policy/`, payload)
}
function modules_privacy_policy_read(payload) {
  return myBarCarAPI.get(`/modules/privacy-policy/${payload.id}/`)
}
function modules_privacy_policy_update(payload) {
  return myBarCarAPI.put(`/modules/privacy-policy/${payload.id}/`, payload)
}
function modules_privacy_policy_partial_update(payload) {
  return myBarCarAPI.patch(`/modules/privacy-policy/${payload.id}/`, payload)
}
function modules_privacy_policy_delete(payload) {
  return myBarCarAPI.delete(`/modules/privacy-policy/${payload.id}/`)
}
function modules_terms_and_conditions_list(payload) {
  return myBarCarAPI.get(`/modules/terms-and-conditions/`)
}
function modules_terms_and_conditions_create(payload) {
  return myBarCarAPI.post(`/modules/terms-and-conditions/`, payload)
}
function modules_terms_and_conditions_read(payload) {
  return myBarCarAPI.get(`/modules/terms-and-conditions/${payload.id}/`)
}
function modules_terms_and_conditions_update(payload) {
  return myBarCarAPI.put(
    `/modules/terms-and-conditions/${payload.id}/`,
    payload
  )
}
function modules_terms_and_conditions_partial_update(payload) {
  return myBarCarAPI.patch(
    `/modules/terms-and-conditions/${payload.id}/`,
    payload
  )
}
function modules_terms_and_conditions_delete(payload) {
  return myBarCarAPI.delete(`/modules/terms-and-conditions/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return myBarCarAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_list(payload) {
  return myBarCarAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return myBarCarAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return myBarCarAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return myBarCarAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return myBarCarAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return myBarCarAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return myBarCarAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_read(payload) {
  return myBarCarAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return myBarCarAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return myBarCarAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_v1_login_create,
  api_v1_signup_create,
  modules_payments_get_payments_history_list,
  modules_payments_get_payments_methods_list,
  modules_payments_payment_sheet_create,
  modules_privacy_policy_list,
  modules_privacy_policy_create,
  modules_privacy_policy_read,
  modules_privacy_policy_update,
  modules_privacy_policy_partial_update,
  modules_privacy_policy_delete,
  modules_terms_and_conditions_list,
  modules_terms_and_conditions_create,
  modules_terms_and_conditions_read,
  modules_terms_and_conditions_update,
  modules_terms_and_conditions_partial_update,
  modules_terms_and_conditions_delete,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
