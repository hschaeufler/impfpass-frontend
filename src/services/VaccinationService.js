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

    async function getVaccinations(token){
        return fetch('/api/vaccination/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + token
            }
        }).then((response) => {
            if (!response.ok) {
                throw response.statusText;
            }
            return response.json();
        });
    }

    async function getVaccination(token, id){
        return fetch('/api/vaccination/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + token
            }
        }).then((response) => {
            if (!response.ok) {
                throw response.statusText;
            }
            return response.json();
        });
    }

    return {saveRegistration, saveClaim,getVaccinations, getVaccination}
})();

export default VaccinationService;