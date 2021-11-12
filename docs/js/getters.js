const sensorList = state => state.sensors.map(item => ({ key: item.key, model: item.DeviceModel }))

const alertObj = state =>
  state.alerts.reduce(
    (res, alert) => {
      const type = alert.isCritical ? 'alertCount' : 'criticalCount'

      res[type] = (res[type] || 0) + 1

      return res
    },
    { operacional: state.alerts.length },
  )

export default {
  alertObj,
  sensorList,
}
