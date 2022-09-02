describe('Spotify', () => {

    const baseUrl = "https://api.spotify.com/"
    const headers = {
        'Authorization': 'Bearer BQCoXA1RQxnBPA-aeHtX81eWT5eX2Vg1jQtft7eLs6KE5_LZzXY68Arme4h7aGpJitDSTssJ3FMe-dr1ozAE-_ela0SG4EP3fC3OLmUoWeqVLLPianA'
    } // header: bearer + access_token

    const artistId = "06HL4z0CvFAxyc27GXpf02" // Artist ID for Taylor Swift

    before(() => {
        let options = {
            method: 'GET',
            url: baseUrl,
            headers: headers
        };

        cy.request(options).then((response) => {
            expect(response.status).to.eq(200) //checking if API is online/accessible 
        })

    })
    
    it('should show the Spotify artist info for Taylor Swift', () => {
        let options = {
            method: 'GET',
            url: `${baseUrl}v1/artists/${artistId}`,
            headers: headers
        };
        cy.request(options).then((response) => {
            expect(response.status).to.eq(200) // if online
            expect(response.body).to.have.property('name', 'Taylor Swift')
            expect(response.body).to.have.property('popularity', 93)
            expect(response.body).to.have.property('type', 'artist')
            // expect(response.body).to.have.property('genres')
            
        })
    })
})
