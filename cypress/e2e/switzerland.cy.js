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
            console.log(response.headers)
            console.log(response)

        })

    })
    
    it('should show the ZRH Airport', () => {
        let options = {
            method: 'GET',
            url: `${baseUrl}?iata=ZRH`, //append url to iata=ZRH
            headers: headers
        };
        cy.request(options).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('name', 'Zürich Airport')
            expect(response.body).to.have.property('city', 'Zürich-Flughafen')
            expect(response.body).to.have.property('location', 'Zürich, Switzerland')
            expect(response.body).to.have.property('state', 'Zürich')
            expect(response.body).to.have.property('postal_code', '8058')
        })
    })
})
