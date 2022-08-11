//import LoginPage from "../pom/loginPage";
//const loginPage = new LoginPage()
import {loginPage} from "./pom/loginPage"

describe('', () => {
    
    before(() => {
        cy.visit('https://app.leadertraf.com/signIn')
    })
    
    it('Позитивный кейс: Авторизация с валидными данными', () => {
       loginPage.typeLogin('admin')
       loginPage.typePassword(',fujdytn')
       loginPage.clickShowPassword()
        //loginPage.clickSignIn() 

    })

    it('Негативный кейс: Авторизация с невалидными данными', () => {
       loginPage.typeLogin('wqertrtr')
       loginPage.typePassword('1233223') 
       //loginPage.clickSignIn()

     })

       it('Проверка кнопки "Забыли пароль', () => {
       loginPage.clickForgotPassword()
       loginPage.clickSignIn()
       
    })

      it('Проверка кнопк Телеграмм', () => {
      loginPage.clickTelegramButton()
  
    })
   

 })

