describe('Тестовый Тест', () => {
    before(() => {
        cy.visit('https://app.leadertraf.com/signIn')
    })
    //Training test
    it('Логинка', () => {
        //Авторизация
        cy.get('input[type="text"]')
            .type('admin')
        cy.get('input[type="password"]')
            .type(',fujdytn')
        cy.get('[class="button is-success is-rounded is-fullwidth"]')
            .click()
        //Ожидание для ввода капчи
            .wait(15000)
        //Переход на дашборд
        //Ожидаем загрузки страницы
        cy.wait(15000)
        //Смена языка
        cy.get('.navbar-burger')
          .click()
        cy.get(':nth-child(1) > .dropdown-trigger > .navbar-link')
          .click() 
        cy.get('[index="2"] > .media') 
          .click()  
        //Переход в раздел пользователи
        cy.contains(' Пользователи ')
            .click()
        //Ожидание загрузки страницы
        cy.wait(15000)  
        //Поиск веба с помощью фильтра  
        cy.get('input[placeholder="Логин/ID"]')
            .type('30')
        //Ожидание загрузки страницы     
        cy.wait(10000) 
        //Переход в кабинет веба  
        // cy.get('[class="b-table common-table with-options"]')
        //  .find('td[data-label="ID"]').contains(" 30 ")
        //  .parent()
        //  .find('[class="button is-small is-success is-light is-rounded"]')
        //     .click({ force: true })
        cy.get(':nth-child(4) > :nth-child(12) > [theme="success"] > [tabindex="0"] > .button > .icon')  
            .click({ force: true })  
            .wait(10000)
        //Проверка URL
        cy.url().should('include', '/dashboard')
    })
})