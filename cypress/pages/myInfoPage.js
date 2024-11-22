class MyInfoPage{
    selectorsList() {
        
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            genericCombobox: ".oxd-select-text",
            ItemCombobox: ".oxd-select-dropdown > :nth-child(8)",
            ItemCombobox2: ".oxd-select-dropdown > :nth-child(3)",
            ItemCombobox3: ".oxd-select-dropdown > :nth-child(8)",
            generButton: ".oxd-radio-wrapper"
        }
        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(EmployeeId, OtherId, DriverLicenseNumber, expiryDate, birthDate){
        cy.get(this.selectorsList().genericField).eq(3).clear().type(EmployeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(OtherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(DriverLicenseNumber)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(expiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genericField).eq(7).clear().type(birthDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    fillStatus() {
        cy.get(this.selectorsList().genericCombobox).eq(0).click({ force: true})
        cy.get(this.selectorsList().ItemCombobox).click()
        cy.get(this.selectorsList().genericCombobox).eq(1).click({ force: true})
        cy.get(this.selectorsList().ItemCombobox2).click()
        cy.get(this.selectorsList().generButton).eq(0).click()
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }

    fillCustomFields(TestField) {
        cy.get(this.selectorsList().genericCombobox).eq(2).click({ force: true})
        cy.get(this.selectorsList().ItemCombobox3).click()
        cy.get(this.selectorsList().genericField).eq(9).clear().type(TestField)
    }

    saveCustomFields() {
        cy.get(this.selectorsList().submitButton).eq(1).click()
    }   
}
    export default MyInfoPage