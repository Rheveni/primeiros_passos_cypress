import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'


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

    myInfoPage.fillPersonalDetails('First Name','Middle Name', 'Last Name')
    myInfoPage.fillEmployeeDetails('EmployId', 'OtherId', '101010', '2025-10-15', '2015-08-08')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
    myInfoPage.fillCustomFields('212121')
    myInfoPage.saveCustomFields()
  })
})