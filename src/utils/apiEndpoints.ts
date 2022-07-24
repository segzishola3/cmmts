export const endpoints = {
  authenticateUserEndpoint: `${process.env.REACT_APP_PUBLIC_API_BASE_URL}/api/User/authenticate`,
  addUserEndpoint: `${process.env.REACT_APP_PUBLIC_API_BASE_URL}/api/User/addUser`,
  fetchUserByUsernameEndpoint: `${process.env.REACT_APP_PUBLIC_API_BASE_URL}/api/User/searchByUserName`,
  activateUserEndpoint: `${process.env.REACT_APP_PUBLIC_API_BASE_URL}/api/User/activate`,
  dectivateUserEndpoint: `${process.env.REACT_APP_PUBLIC_API_BASE_URL}/api/User/dectivate`,
  deleteUserEndpoint: `${process.env.REACT_APP_PUBLIC_API_BASE_URL}/api/User`,
  fetchUsersEndpoint: `${process.env.REACT_APP_PUBLIC_API_BASE_URL}/api/User`,
  getUserByIdEndpoint: `${process.env.REACT_APP_PUBLIC_API_BASE_URL}/api/User/getUserById`,
  refreshTokenEndpoint: `${process.env.REACT_APP_PUBLIC_API_BASE_URL}/api/User/authenticate`,
  fetchRolesEndpoint: `${process.env.REACT_APP_PUBLIC_API_BASE_URL}/api/Roles`,
  addRoleEndpoint: `${process.env.REACT_APP_PUBLIC_API_BASE_URL}/api/Roles`,
  deleteRoleEndpoint: `${process.env.REACT_APP_PUBLIC_API_BASE_URL}/api/Roles`,
  fetchMenusEndpoint: `${process.env.REACT_APP_PUBLIC_API_BASE_URL}/api/Menu`,
  deleteMenuEndpoint: `${process.env.REACT_APP_PUBLIC_API_BASE_URL}/api/Menu`,
  addMenuEndpoint: `${process.env.REACT_APP_PUBLIC_API_BASE_URL}/api/Menu`,
};