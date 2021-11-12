// index js

import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import app from './app'
import database from './database'
//import Firebase from '@/Pages/Firebase/store'
//import firebase from 'firebase/app'
//import 'firebase/auth'
//import 'firebase/database'

// export utils/refs
export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
  db,
  auth,
  alertsRef,
  app,
  database,
  sensorsRef,
  usersRef,
}

// utils
const db = firebase.database()
const auth = firebase.auth()

// references
const alertsRef = db.ref('alerts')
const sensorsRef = db.ref('devices')
const usersRef = db.ref('users')
