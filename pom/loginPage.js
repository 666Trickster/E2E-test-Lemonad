//import cypress from "cypress"

class LoginPage { 
//Ввести логин
    typeLogin(login) {
        cy.get(':nth-child(1) > div.input > .control > .input')
          .clear()
          .type(login)
        return this
    }
//Ввести пароль
    typePassword(password) {
        cy.get(':nth-child(2) > div.input > .control > .input')
          .clear()
          .type(password)
          .wait(3000)
        return this
    }
//Показать пароль 
    clickShowPassword() {
        cy.get('[class="uil uil-eye is-size-6"]')
          .click()
        return this
    }
//Забыли пароль 
    clickForgotPassword() {
        cy.get('a[href="/reset"]')
          .click()
        return this
    }
//Войти в аккаунт
    clickSignIn() {
          cy.contains(' Sign in ')
       // cy.get('button[type="submit"]')
          .wait(5000) 
          .click()
          .wait(3000)
        return this
    }
//Войти через телеграм 
    clickTelegramButton() {
        cy.get('#telegram-login-LimonadPythonBot')
          .click()
        return this
    }
    //Переход на страницу регистрации 
    clickSignUp(){
        cy.get('a[href="/signUp/"]') 
          .click()
        return this   
    }
    
}

export const loginPage = new LoginPage()
//export default LoginPage