import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'


const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(),chance.last(), chance.last())
    myInfoPage.fillEmployeeDetails(chance.integer({ min: 1, max: 2000 }), chance.integer({ min: 1, max: 4000 }),
        chance.integer({ min: 8000, max: 80000 }), '2025-10-15', '2015-08-08')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
    myInfoPage.fillCustomFields('212121')
    myInfoPage.saveCustomFields()
  })
}) 