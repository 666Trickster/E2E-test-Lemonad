describe('Логинка', () => {
    before(() => {
        cy.visit('https://app.leadertraf.com/signIn')
    })
    //Авторизация
    it('', () => {
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
       //Переход в раздел Аудит
        cy.contains(' Аудит ')  
          .click()
        //Ожидание прогрузки страницы Аудит 
        
        //Выбор даты
        cy.get('.input-wrapper', { timeout: 10000 })
          .click()
        cy.get('#year-label')
          .click() 
        //Выбор оффера  
         cy.get('#vs17__combobox > .vs__selected-options > .mt-0') 
           .type('203')
           //.wait(5000)
           .type('{enter}')
         cy.get('[class="v-select control fixed white vs--single vs--unsearchable"]')  
           .type('{downArrow}{downArrow}{enter}')
          // .contains('Обновлено')
          // .click()
           //.select('Обновлено')
           //.should('have.value', '203')
           //.type("{enter}") 
    })
})