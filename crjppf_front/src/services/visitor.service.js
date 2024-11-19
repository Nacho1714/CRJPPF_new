const uriAPI = import.meta.env.VITE_API_URL

async function fetchAPI({endpoint, method = 'GET', body = null, error = null}) {

    const response = await fetch(`${uriAPI}/${endpoint}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: body ? JSON.stringify(body) : undefined
    });

    const result = await response.json();

    if (!response.ok || result.error) {
        console.error('ERROR');
        console.table(result);
        throw (error || 'Error en la solicitud');
    }

    return result;
}

async function findAll(filter = '') {
    const response = await fetchAPI({
        endpoint: `visitor?${filter}`, 
        method: 'GET',
        error: 'Error al obtener los visitantes'
    });
    return response;
}

async function getYears() {
    const response = await fetchAPI({
        endpoint: `visitor/year`, 
        method: 'GET',
        error: 'Error al obtener los años'
    });
    return response;
}

async function getMonth(year) {
    const response = await fetchAPI({
        endpoint: `visitor/month/${year}`, 
        method: 'GET',
        error: 'Error al obtener los meses'
    });
    return response;
}

async function findById(id) {
    const response = await fetchAPI({
        endpoint: `visitor/${id}`, 
        method: 'GET',
        error: 'Error al obtener al visitante'
    });
    return response;
}

async function findAllMapping(filter = '') {

    const visitors = await findAll(filter);
    return visitors.map(visitor => {
        const { user, directorate_has_sector, employee, ...rest } = visitor;
        return {
            user: user.profile,
            office: directorate_has_sector.name,
            employee: `${employee.last_name} ${employee.name}`,
            ...rest
        };
    });
}

async function findByIdMapping(id) {

    const visitor = await findById(id);

    console.log(visitor)
    
    const { user, directorate_has_sector, employee, institutional_departments, ...rest } = visitor;

    return {
        user: user.profile,
        office: directorate_has_sector.name,
        employee: `${employee.last_name} ${employee.name}`,
        institutional_departments: institutional_departments.name,
        government_institutions: institutional_departments.government_institutions.name,
        ...rest
    };
}

async function findBySummary(year, month) {

    // Mapeo de meses
    const monthMap = {
        'Enero': 1,
        'Febrero': 2,
        'Marzo': 3,
        'Abril': 4,
        'Mayo': 5,
        'Junio': 6,
        'Julio': 7,
        'Agosto': 8,
        'Septiembre': 9,
        'Octubre': 10,
        'Noviembre': 11,
        'Diciembre': 12,
    };

    return findAllMapping(`exit=true&entry=${year}-${monthMap[month]}-10`)
}

async function findAllPending(mapping = true) {
        
    if (mapping) return findAllMapping('exit=false');
    
    return findAll('exit=false');
}

async function update(id, newVisitor) {

    const response = await fetchAPI({
        endpoint: `visitor/${id}`, 
        method: 'PATCH', 
        body: newVisitor,
        error: 'Error al actualizar el visitante'
    });
    return response;
}

async function create(newVisitor) {

    const response = await fetch(`${uriAPI}/visitor`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: newVisitor
    });

    const result = await response.json();

    if (!response.ok || result.error) {
        console.error('ERROR');
        console.table(result);
        throw (error || 'Error en la solicitud');
    }

    return result;
}

export default {
    findAll,
    findAllMapping,
    findByIdMapping,
    findAllPending,
    findById,
    update,
    create,
    getYears,
    getMonth,
    findBySummary
}