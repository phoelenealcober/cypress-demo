describe('Spotify', () => {

    const baseUrl = "https://api.spotify.com/"
    const headers = {
        'Authorization': 'Bearer BQBK_HWcXLh-w8jcKB7xvTeVmAMCl_mHiIXUU7T-RHS_scPa1UsKoKjd4k3DLGma3Ip1u6VnsrpKmkBw2FoEGb3TFOS81aeznD1Tf5ngjyyuGDp6P5w'
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
