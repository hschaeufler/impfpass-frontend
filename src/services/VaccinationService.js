const VaccinationService = (function (){

    async function saveRegistration(vaccinationRegistration, token){
        return fetch('/api/vaccination/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + token
            },
            body: JSON.stringify(vaccinationRegistration)
        }).then((response) => {
            if (!response.ok) {
                throw response.statusText;
            }
            return response.json();
        });
    }

    async function saveClaim(vaccination, token){
        return fetch('/api/vaccination/claim', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + token
            },
            body: JSON.stringify(vaccination)
        }).then((response) => {
            if (!response.ok) {
                throw response.statusText;
            }
            return response.json();
        });
    }

    return {saveRegistration, saveClaim}
})();

export default VaccinationService;