const getters = {
  isZoom: state => state.app.isZoom,
  keepList: state => state.app.keepList,
  addRoutes: state => state.permission.addRoutes,
  currentRoutes: state => state.permission.currentRoutes,
  roles: state => state.user.roles
}
export default getters
