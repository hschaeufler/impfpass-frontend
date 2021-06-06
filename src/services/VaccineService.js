
const VaccineService = (function (){

    function getVaccines(token){
        return fetch('/api/vaccine', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer '+token
            }
        }).then((response) => {
            if (!response.ok) {
                throw response.statusText;
            }
            return response.json();
        });
    }

    return {getVaccines};
})();

export default VaccineService;