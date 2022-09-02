describe('Spotify', () => {

    const baseUrl = "https://api.spotify.com/"
    const headers = {
        'Authorization': 'Bearer BQB9bDQ53Zx03BjpjRs6jpESdB8PHxwI129hF1cGP8eV75dLg_vSzLQtHpieUmudwk8aPnu_ELrQl-0j5drGe6Osjqzm8rOpigv_GRhtLswT74Yqdl4dLp_Fm5uZjH-CtcZie4XTP_I07cXSgTHeCf_kywt7iuJufY-FCNy7i1YCYEpokQ0uMBAI3rowydM2pB1WdRWz3ng'
    } 
    // requirement: base64 format of client_id and client_key
    // header: bearer + access_token

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
            expect(response.body).to.have.property('popularity', 94) // note: dynamic
            expect(response.body).to.have.property('type', 'artist')
            // expect(response.body).to.have.property('genres')
            
        })
    })
})
