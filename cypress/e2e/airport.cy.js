describe('Airport', () => {
    const baseUrl = "https://airport-info.p.rapidapi.com/airport"
    const headers = {
        'X-RapidAPI-Key': 'c48894f37cmshb04e7eacc519c1dp14709djsn2a84546722da',
        'X-RapidAPI-Host': 'airport-info.p.rapidapi.com'
    }
    before(() => {
        let options = {
            method: 'GET',
            url: baseUrl,
            headers: headers
        };

        cy.request(options).then((response) => {
            expect(response.status).to.eq(200)
        })
    })
    
    it('should show the LAX Airport', () => {
        let options = {
            method: 'GET',
            url: `${baseUrl}?iata=LAX`,
            headers: headers
        };
        cy.request(options).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('name', 'Los Angeles International Airport')
            expect(response.body).to.have.property('city', 'Los Angeles')
        })
    })
})
