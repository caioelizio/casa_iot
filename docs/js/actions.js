// import firebase from 'firebase/app'
// import 'firebase/database'

import {
  alertsRef,
  schedulesRef,
  sensorsRef,
  parametersRef,
  usersRef,
} from '@/firebase'

const setAlerts = async ({ commit }, payload) => {
  alertsRef
    // .orderByChild('deleted')
    // .equalTo(null)
    .on('value', snapshot => {
      let alerts = []
      snapshot.forEach(item => {
        if (item.val().deleted) return
        alerts.push({ key: item.key, ...item.val() })
      })
      commit('SET_ALERTS', { ...payload, alerts })
    })
}

const setSchedules = async ({ commit }, payload) => {
  schedulesRef
    .orderByChild('deleted')
    .equalTo(null)
    .on('value', snapshot => {
      let schedules = []
      snapshot.forEach(item => {
        if (item.val().deleted) return
        schedules.push({ key: item.key, ...item.val() })
      })
      commit('SET_SCHEDULES', { ...payload, schedules })
    })
}
const saveSchedule = async (_, payload) => {
  const created = new Date().toISOString()
  const { key } = payload
  delete payload.key

  if (key) {
    schedulesRef.child(key).update({ ...payload, updated: created })
  } else {
    schedulesRef.push({ ...payload, created })
  }
}
const removeSchedule = async (_, payload) => {
  schedulesRef.child(payload.key).remove()
}

const setUsers = async ({ commit }, payload) => {
  usersRef
    .orderByChild('deleted')
    .equalTo(null)
    .on('value', snapshot => {
      let users = []
      snapshot.forEach(item => {
        users.push({ key: item.key, ...item.val() })
      })
      commit('SET_USERS', { ...payload, users })
    })
}

const saveUser = async (_, payload) => {
  const created = new Date().toISOString()
  const { key } = payload
  delete payload.key

  if (key) {
    usersRef.child(key).update({ ...payload, updated: created })
  } else {
    usersRef.push({ ...payload, created })
  }
}
const removeUser = async (_, payload) => {
  const timestamp = new Date().toISOString()
  const { key } = payload
  delete payload.key

  // TODO: verficar se pode ser deletado

  usersRef.child(key).update({ ...payload, updated: timestamp, deleted: timestamp })
}

const setSensors = async ({ commit }, payload) => {
  sensorsRef
    .orderByChild('deleted')
    .equalTo(null)
    .on('value', snapshot => {
      let sensors = []
      snapshot.forEach(item => {
        if (item.val().deleted) return
        sensors.push({ key: item.key, ...item.val() })
      })
      commit('SET_SENSORS', { ...payload, sensors })
    })
}
const saveSensor = async (_, payload) => {
  const created = new Date().toISOString()
  const { key } = payload
  delete payload.key

  if (key) {
    sensorsRef.child(key).update({ ...payload, updated: created })
  } else {
    sensorsRef.push({ ...payload, created })
  }
}
const removeSensor = async (_, payload) => {
  sensorsRef.child(payload.key).remove()
}

const setParameters = async ({ commit }, payload) => {
  parametersRef
    .orderByChild('deleted')
    .equalTo(null)
    .on('value', snapshot => {
      let parameters = []
      snapshot.forEach(item => {
        if (item.val().deleted) return
        parameters.push({ key: item.key, ...item.val() })
      })
      commit('SET_PARAMETERS', { ...payload, parameters })
    })
}
const saveParameter = async (_, payload) => {
  const created = new Date().toISOString()
  const { key } = payload
  delete payload.key

  if (key) {
    parametersRef.child(key).update({ ...payload, updated: created })
  } else {
    parametersRef.push({ ...payload, created })
  }
}
const removeParameter = async (_, payload) => {
  parametersRef.child(payload.key).remove()
}

export default {
  setAlerts,
  setSchedules,
  saveSchedule,
  removeSchedule,
  setSensors,
  saveSensor,
  removeSensor,
  setParameters,
  saveParameter,
  removeParameter,
  setUsers,
  saveUser,
  removeUser,
}
