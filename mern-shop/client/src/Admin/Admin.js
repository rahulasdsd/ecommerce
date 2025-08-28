import React from 'react'

import UserListScreen from '../pages/UserListScreen'
import UserEditScreen from '../pages/UserEditScreen'
import ProductListScreen from '../pages/ProductListScreen'
import ProductEditScreen from '../pages/ProductEditScreen'
import OrderListScreen from '../pages/OrderListScreen'
const Admin = () => {   
  return (
    <div>
      <h1>Admin Page</h1>
      <UserListScreen/>
      <UserEditScreen/>
      <ProductListScreen/>
      <ProductEditScreen/>
      <OrderListScreen/>
      
    </div>
  )
}
export default Admin