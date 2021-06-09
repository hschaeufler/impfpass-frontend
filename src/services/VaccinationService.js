const VaccinationService = (function (){

    function saveRegistration(vaccinationRegistration, token){
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

    return {saveRegistration}
})();

export default VaccinationService;