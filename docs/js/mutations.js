const SET_ALERTS = (state, payload) => {
  state.alerts = payload.alerts
}

const SET_SCHEDULES = (state, payload) => {
  state.schedules = payload.schedules
}

const SET_SENSORS = (state, payload) => {
  state.sensors = payload.sensors
}

const SET_PARAMETERS = (state, payload) => {
  state.parameters = payload.parameters
}

const SET_USERS = (state, payload) => {
  state.users = payload.users
}

export default {
  SET_ALERTS,
  SET_SCHEDULES,
  SET_SENSORS,
  SET_PARAMETERS,
  SET_USERS,
}
