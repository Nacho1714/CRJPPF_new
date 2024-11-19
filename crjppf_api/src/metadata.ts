/* eslint-disable */
export default async () => {
    const t = {
        ["./common/interfaces/enum/document_options.enum"]: await import("./common/interfaces/enum/document_options.enum"),
        ["./employee/entities/employee.entity"]: await import("./employee/entities/employee.entity"),
        ["./position/entities/position.entity"]: await import("./position/entities/position.entity"),
        ["./auth/entities/user-token.entity"]: await import("./auth/entities/user-token.entity"),
        ["./directorate_has_sector/entities/directorate_has_sector.entity"]: await import("./directorate_has_sector/entities/directorate_has_sector.entity"),
        ["./directorate/entities/directorate.entity"]: await import("./directorate/entities/directorate.entity"),
        ["./sector/entities/sector.entity"]: await import("./sector/entities/sector.entity"),
        ["./user/entities/user.entity"]: await import("./user/entities/user.entity"),
        ["./session_failed/entities/session_failed.entity"]: await import("./session_failed/entities/session_failed.entity"),
        ["./visitor/entities/visitor.entity"]: await import("./visitor/entities/visitor.entity"),
        ["./government_institutions/entities/government_institution.entity"]: await import("./government_institutions/entities/government_institution.entity"),
        ["./institutional_departments/entities/institutional_department.entity"]: await import("./institutional_departments/entities/institutional_department.entity")
    };
    return { "@nestjs/swagger": { "models": [[import("./employee/dto/create-employee.dto"), { "CreateEmployeeDto": { position_fk: { required: false, type: () => Number, description: "Foreign Key del cargo", example: 1, maximum: 2147483647, minimum: 1 }, destination_fk: { required: true, type: () => Number, description: "Foreign Key de la oficina", example: 1, maximum: 2147483647, minimum: 1 }, name: { required: true, type: () => String, description: "Nombre del empleado", example: "Ignacio Ezequiel", minLength: 2, maxLength: 100, pattern: "^[A-Za-zs''\u00F1\u00D1. ]+$" }, last_name: { required: true, type: () => String, description: "Apellido del empleado", example: "Barros", minLength: 2, maxLength: 100, pattern: "^[A-Za-zs''\u00F1\u00D1. ]+$" }, is_active: { required: false, type: () => Boolean, description: "Indicada si el empleado est\u00E1 activo", example: true, default: true } } }], [import("./employee/dto/update-employee.dto"), { "UpdateEmployeeDto": {} }], [import("./employee/entities/employee.entity"), { "Employee": { employee_id: { required: true, type: () => Number, description: "Primary Key del empleado", example: 1 }, position_fk: { required: true, type: () => Number, description: "Foreign Key del cargo", example: 1 }, destination_fk: { required: true, type: () => Number, description: "Foreign Key de la oficina", example: 1 }, name: { required: true, type: () => String, description: "Nombre del empleado", example: "Ignacio Ezequiel" }, last_name: { required: true, type: () => String, description: "Apellido del empleado", example: "Barros" }, is_active: { required: true, type: () => Boolean, description: "Indicada si el empleado est\u00E1 activo", example: true, default: true }, created_at: { required: true, type: () => Date, description: "Fecha de creaci\u00F3n de la direcci\u00F3n", example: "2024-02-03 00:51:05.325363" }, updated_at: { required: true, type: () => Date, description: "Fecha de actualizaci\u00F3n de la direcci\u00F3n", example: "2024-02-03 00:51:05.325363" } } }], [import("./common/dto/pagination.dto"), { "PaginationDto": { limit: { required: false, type: () => Number, description: "Cantidad de registros a mostrar", example: 10, minimum: 1 }, offset: { required: false, type: () => Number, description: "Cantidad de registros a saltar", example: 0, default: 0, minimum: 0 } } }], [import("./position/dto/create-position.dto"), { "CreatePositionDto": { name: { required: true, type: () => String, description: "Nombre del cargo", example: "Director", minLength: 2, maxLength: 70, pattern: "^[A-Za-zs''\u00F1\u00D1. ]+$" }, is_active: { required: false, type: () => Boolean, description: "Indica si el cargo est\u00E1 activo", example: true, default: true } } }], [import("./position/dto/update-position.dto"), { "UpdatePositionDto": {} }], [import("./position/entities/position.entity"), { "Position": { position_id: { required: true, type: () => Number, description: "Primary Key del cargo", example: 1 }, name: { required: true, type: () => String, description: "Nombre del cargo", example: "Director" }, is_active: { required: false, type: () => Boolean, description: "Indicada si el empleado est\u00E1 activo", example: true, default: true }, created_at: { required: true, type: () => Date, description: "Fecha de creaci\u00F3n de la direcci\u00F3n", example: "2024-02-03 00:51:05.325363" }, updated_at: { required: true, type: () => Date, description: "Fecha de actualizaci\u00F3n de la direcci\u00F3n", example: "2024-02-03 00:51:05.325363" } } }], [import("./directorate_has_sector/dto/create-directorate_has_sector.dto"), { "CreateDirectorateHasSectorDto": { directorate_fk: { required: true, type: () => Number, description: "Foreign Key de la direcci\u00F3n", example: 1, maximum: 2147483647, minimum: 1 }, sector_fk: { required: true, type: () => Number, description: "Foreign Key del sector", example: 1, maximum: 2147483647, minimum: 1 }, name: { required: false, type: () => String, description: "Nombre de la oficina", example: "PRESIDENCIA - DEPARTAMENTO PASIVIDADES", minLength: 2, maxLength: 80, pattern: "^[A-Za-zn\u00D1 -]+$" }, level: { required: false, type: () => String, description: "Piso del edificio", example: "1", default: null, minLength: 1, maxLength: 1, pattern: "^[0-9]+$" } } }], [import("./directorate_has_sector/dto/update-directorate_has_sector.dto"), { "UpdateDirectorateHasSectorDto": {} }], [import("./directorate_has_sector/entities/directorate_has_sector.entity"), { "DirectorateHasSector": { destination_id: { required: true, type: () => Number, description: "Primary key de la oficina", example: 1 }, directorate_fk: { required: true, type: () => Number, description: "Foreign key de la direcci\u00F3n", example: 1 }, sector_fk: { required: true, type: () => Number, description: "Foreign key del sector", example: 1 }, name: { required: true, type: () => String, description: "Nombre de la oficina", example: "PRESIDENCIA - DEPARTAMENTO PASIVIDADES" }, level: { required: false, type: () => String, description: "Piso del edificio", example: "1" }, is_active: { required: true, type: () => Boolean, description: "Indica si la direcci\u00F3n est\u00E1 activa", example: true }, created_at: { required: true, type: () => Date, description: "Fecha de creaci\u00F3n de la direcci\u00F3n", example: "2024-02-03 00:51:05.325363" }, updated_at: { required: true, type: () => Date, description: "Fecha de actualizaci\u00F3n de la direcci\u00F3n", example: "2024-02-03 00:51:05.325363" } } }], [import("./directorate/dto/create-directorate.dto"), { "CreateDirectorateDto": { name: { required: true, type: () => String, description: "Nombre de la direcci\u00F3n", example: "Direcci\u00F3n de Inform\u00E1tica", minLength: 2, maxLength: 40, pattern: "^[A-Za-zn\u00D1 ]+$" }, is_active: { required: false, type: () => Boolean, description: "Indica si la direcci\u00F3n est\u00E1 activa", example: true, default: true } } }], [import("./directorate/dto/update-directorate.dto"), { "UpdateDirectorateDto": {} }], [import("./directorate/entities/directorate.entity"), { "Directorate": { directorate_id: { required: true, type: () => Number, description: "Primary key de la direcci\u00F3n", example: 1 }, name: { required: true, type: () => String, description: "Nombre de la direcci\u00F3n", example: "Direcci\u00F3n de Inform\u00E1tica" }, is_active: { required: true, type: () => Boolean, description: "Indica si la direcci\u00F3n est\u00E1 activa", example: true }, created_at: { required: true, type: () => Date, description: "Fecha de creaci\u00F3n de la direcci\u00F3n", example: "2024-02-03 00:51:05.325363" }, updated_at: { required: true, type: () => Date, description: "Fecha de actualizaci\u00F3n de la direcci\u00F3n", example: "2024-02-03 00:51:05.325363" } } }], [import("./sector/dto/create-sector.dto"), { "CreateSectorDto": { name: { required: true, type: () => String, description: "Nombre del sector", example: "DEPARTAMENTO PASIVIDADES", minLength: 2, maxLength: 40, pattern: "^[A-Za-zn\u00D1 ]+$" }, is_active: { required: false, type: () => Boolean, description: "Indica si el sector est\u00E1 activo", example: true, default: true } } }], [import("./sector/dto/update-sector.dto"), { "UpdateSectorDto": {} }], [import("./sector/entities/sector.entity"), { "Sector": { sector_id: { required: true, type: () => Number, description: "Primary Key del sector", example: 1 }, name: { required: true, type: () => String, description: "Nombre del sector", example: "DEPARTAMENTO PASIVIDADES" }, is_active: { required: true, type: () => Boolean, description: "Indicada si el empleado est\u00E1 activo", example: true, default: true }, created_at: { required: true, type: () => Date, description: "Fecha de creaci\u00F3n de la direcci\u00F3n", example: "2024-02-03 00:51:05.325363" }, updated_at: { required: true, type: () => Date, description: "Fecha de actualizaci\u00F3n de la direcci\u00F3n", example: "2024-02-03 00:51:05.325363" } } }], [import("./auth/dto/login-user.dto"), { "LoginUserDto": { profile: { required: true, type: () => String, description: "Nombre de usuario", example: "baig", minLength: 4, maxLength: 4 }, password: { required: true, type: () => String, description: "Contrase\u00F1a", example: "43721804", minLength: 8, maxLength: 255 } } }], [import("./auth/dto/token-user.dto"), { "TokenUserDto": { token: { required: true, type: () => String, description: "Token", example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNzYsImlhdCI6MTcwNzY5NDYzOSwiZXhwIjoxNzA3NzgxMDM5fQ.ZGodi1dWraNjuE2cAk8tON-tZMJb0xLvc2rgYn7zVO8" } } }], [import("./user/entities/user.entity"), { "User": { user_id: { required: true, type: () => Number, description: "Primary key del usuario", example: 1 }, name: { required: true, type: () => String, description: "Nombre del usuario", example: "Ignacio Ezequiel" }, last_name: { required: true, type: () => String, description: "Apellido del usuario", example: "Barros" }, profile: { required: true, type: () => String, description: "Perfil del usuario", example: "baig" }, password: { required: true, type: () => String, description: "Contrase\u00F1a del usuario", example: "$2a$06$5z2oTmfEuKFt5sDjVAzM6eBavzp619GOON0Y9e6eNfU1Iv0MLKqRa" }, last_login: { required: true, type: () => Date, description: "Fecha de \u00FAltimo login del usuario", example: "2024-02-03 00:51:05.325363" }, is_active: { required: true, type: () => Boolean, description: "Indica si el usuarip est\u00E1 activa", example: true }, created_at: { required: true, type: () => Date, description: "Fecha de creaci\u00F3n del usuario", example: "2024-02-03 00:51:05.325363" }, updated_at: { required: true, type: () => Date, description: "Fecha de actualizaci\u00F3n del usuario", example: "2024-02-03 00:51:05.325363" } } }], [import("./auth/entities/user-token.entity"), { "UserWithToken": { user_id: { required: true, type: () => Number, description: "Primary key del usuario", example: 1 }, name: { required: true, type: () => String, description: "Nombre del usuario", example: "Ignacio Ezequiel" }, last_name: { required: true, type: () => String, description: "Apellido del usuario", example: "Barros" }, profile: { required: true, type: () => String, description: "Perfil del usuario", example: "baig" }, token: { required: true, type: () => String, description: "Token de autenticaci\u00F3n", example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo5NiwiaWF0IjoxNzA3NDA4OTU1LCJleHAiOjE3MDc0OTUzNTV9.-87PQ7EDtn-z7oPeM4BlE0WtSAN07vv1YQmzYQYvOi8" } } }], [import("./user/dto/create-user.dto"), { "CreateUserDto": { name: { required: true, type: () => String, description: "Nombre del usuario", example: "Juan", minLength: 2, maxLength: 100, pattern: "^[A-Za-zs''\u00F1\u00D1. ]+$" }, last_name: { required: true, type: () => String, description: "Apellido del usuario", example: "Perez", minLength: 2, maxLength: 100, pattern: "^[A-Za-zs''\u00F1\u00D1. ]+$" }, profile: { required: true, type: () => String, description: "Nombre de usuario", example: "baig", minLength: 4, maxLength: 4 }, password: { required: true, type: () => String, description: "Contrase\u00F1a", example: "43568465", minLength: 8, maxLength: 255 }, is_active: { required: false, type: () => Boolean, description: "Indicada si el usuario est\u00E1 activo", example: true, default: true } } }], [import("./user/dto/update-user.dto"), { "UpdateUserDto": {} }], [import("./session_failed/entities/session_failed.entity"), { "SessionFailed": { session_failed_id: { required: true, type: () => Number, description: "Primary Key de la sesi\u00F3n fallida", example: 1 }, user_name: { required: true, type: () => String, description: "Nombre del usuario", example: "baig" }, created_at: { required: true, type: () => Date, description: "Fecha de creaci\u00F3n de la direcci\u00F3n", example: "2024-02-03 00:51:05.325363" } } }], [import("./visitor/dto/create-visitor.dto"), { "CreateVisitorDto": { user_fk: { required: true, type: () => Number, description: "Foreign Key del usuario", example: 1, maximum: 2147483647, minimum: 1 }, employee_fk: { required: true, type: () => Number, description: "Foreign Key del empleado", example: 1, maximum: 2147483647, minimum: 1 }, destination_fk: { required: true, type: () => Number, description: "Foreign Key de la oficina", example: 1, maximum: 2147483647, minimum: 1 }, institutional_departments_fk: { required: true, type: () => Number, description: "Foreign Key del departamento institucional", example: 1, maximum: 2147483647, minimum: 1 }, name: { required: true, type: () => String, description: "Nombre del visitante", example: "Juan", minLength: 2, maxLength: 100, pattern: "^[A-Za-zs''\u00F1\u00D1. ]+$" }, last_name: { required: true, type: () => String, description: "Apellido del visitante", example: "Perez", minLength: 2, maxLength: 100, pattern: "^[A-Za-zs''\u00F1\u00D1. ]+$" }, document_type: { required: true, description: "Tipo de documento", example: "DNI", enum: t["./common/interfaces/enum/document_options.enum"].document_options }, document_number: { required: true, type: () => String, description: "N\u00FAmero de documento", example: "43568465", minLength: 2, maxLength: 20, pattern: "^[A-Za-zn\u00D10-9]+$" }, note: { required: false, type: () => String, description: "Nota", example: "Es un visitante importante", default: null, maxLength: 200 }, entry: { required: false, type: () => Date, description: "Fecha de ingreso", example: "2024-02-03 06:51:05.183" }, exit: { required: false, type: () => Date, description: "Fecha de salida", example: "2024-02-03 09:22:23.124", default: null }, file: { required: false, type: () => Object } } }], [import("./visitor/dto/update-visitor.dto"), { "UpdateVisitorDto": {} }], [import("./visitor/dto/find-visitor.dto"), { "FindVisitorDto": { entry: { required: false, type: () => Date, description: "Fecha de entrada", example: "2024-02-03" }, exit: { required: false, type: () => Boolean, description: "Fecha de salida" } } }], [import("./visitor/entities/visitor.entity"), { "Visitor": { visitor_id: { required: true, type: () => Number, description: "Primary key del usuario", example: 1 }, user_fk: { required: true, type: () => Number, description: "Foreign Key del usuario", example: 1 }, employee_fk: { required: true, type: () => Number, description: "Foreign Key del empleado", example: 1 }, destination_fk: { required: true, type: () => Number, description: "Foreign Key de la oficina", example: 1 }, institutional_departments_fk: { required: true, type: () => Number, description: "Foreign Key del departamento institucional", example: 1 }, name: { required: true, type: () => String, description: "Nombre del visitante", example: "Juan" }, last_name: { required: true, type: () => String, description: "Apellido del visitante", example: "Perez" }, document_type: { required: true, description: "Tipo de documento", example: "DNI", enum: t["./common/interfaces/enum/document_options.enum"].document_options }, document_number: { required: true, type: () => String, description: "N\u00FAmero de documento", example: "43568465" }, image: { required: true, type: () => String, description: "Imagen del visitante", example: "http://localhost:3000/api/visitor/image/b1c1da1f-eca6-4950-b63a-c15e6ac8c2bc.jpeg" }, note: { required: false, type: () => String, description: "Nota", example: "Es un visitante importante", default: null }, entry: { required: true, type: () => Date, description: "Fecha de ingreso", example: "2024-02-03 06:51:05.183" }, exit: { required: false, type: () => Date, description: "Fecha de salida", example: "2024-02-03 09:22:23.124", default: null }, created_at: { required: true, type: () => Date, description: "Fecha de creaci\u00F3n del usuario", example: "2024-02-03 00:51:05.325363" }, updated_at: { required: true, type: () => Date, description: "Fecha de actualizaci\u00F3n del usuario", example: "2024-02-03 00:51:05.325363" } } }], [import("./government_institutions/dto/create-government_institution.dto"), { "CreateGovernmentInstitutionDto": { name: { required: true, type: () => String, description: "Nombre de la direcci\u00F3n", example: "Direcci\u00F3n de Inform\u00E1tica", minLength: 2, maxLength: 40, pattern: "^[A-Za-zn\u00D1 ]+$" } } }], [import("./government_institutions/dto/update-government_institution.dto"), { "UpdateGovernmentInstitutionDto": {} }], [import("./government_institutions/entities/government_institution.entity"), { "GovernmentInstitution": { government_institutions_id: { required: true, type: () => Number, description: "Primary key de la direcci\u00F3n", example: 1 }, name: { required: true, type: () => String, description: "Nombre de la direcci\u00F3n", example: "Direcci\u00F3n de Inform\u00E1tica" }, created_at: { required: true, type: () => Date, description: "Fecha de creaci\u00F3n de la direcci\u00F3n", example: "2024-02-03 00:51:05.325363" }, updated_at: { required: true, type: () => Date, description: "Fecha de actualizaci\u00F3n de la direcci\u00F3n", example: "2024-02-03 00:51:05.325363" } } }], [import("./institutional_departments/dto/create-institutional_department.dto"), { "CreateInstitutionalDepartmentDto": { government_institutions_fk: { required: true, type: () => Number, maximum: 2147483647, minimum: 1 }, name: { required: true, type: () => String, minLength: 2, maxLength: 100, pattern: "^[A-Za-zs''\u00F1\u00D1. ]+$" } } }], [import("./institutional_departments/dto/update-institutional_department.dto"), { "UpdateInstitutionalDepartmentDto": {} }], [import("./institutional_departments/entities/institutional_department.entity"), { "InstitutionalDepartment": { institutional_departments_id: { required: true, type: () => Number, description: "Primary key del usuario", example: 1 }, government_institutions_fk: { required: true, type: () => Number, description: "Foreign Key del usuario", example: 1 }, name: { required: true, type: () => String, description: "Nombre del visitante", example: "Juan" }, created_at: { required: true, type: () => Date, description: "Fecha de creaci\u00F3n del usuario", example: "2024-02-03 00:51:05.325363" }, updated_at: { required: true, type: () => Date, description: "Fecha de actualizaci\u00F3n del usuario", example: "2024-02-03 00:51:05.325363" } } }]], "controllers": [[import("./employee/employee.controller"), { "EmployeeController": { "create": { summary: "Crear un nuevo empleado", type: t["./employee/entities/employee.entity"].Employee }, "findAll": { summary: "Listar todos los empleados", type: [t["./employee/entities/employee.entity"].Employee] }, "findOne": { summary: "Buscar un empleado por su id", type: t["./employee/entities/employee.entity"].Employee }, "findByOffice": { summary: "Buscar empleados por oficina", type: [t["./employee/entities/employee.entity"].Employee] }, "update": { summary: "Actualizar un empleado por su id", type: t["./employee/entities/employee.entity"].Employee } } }], [import("./position/position.controller"), { "PositionController": { "create": { summary: "Crear un nuevo cargo", type: t["./position/entities/position.entity"].Position }, "findAll": { summary: "Listar todos los cargos", type: [t["./position/entities/position.entity"].Position] }, "findOne": { summary: "Buscar un cargo por su id", type: t["./position/entities/position.entity"].Position }, "update": { summary: "Actualizar un cargo por su id", type: t["./position/entities/position.entity"].Position } } }], [import("./auth/auth.controller"), { "AuthController": { "login": { summary: "Iniciar sesi\u00F3n", type: t["./auth/entities/user-token.entity"].UserWithToken }, "decodeToken": { summary: "Decodificar token", type: Object }, "checkAuthStatus": { summary: "Verificar estado de autenticaci\u00F3n", type: t["./auth/entities/user-token.entity"].UserWithToken } } }], [import("./directorate_has_sector/directorate_has_sector.controller"), { "DirectorateHasSectorController": { "create": { summary: "Crear una nueva relaci\u00F3n entre direcci\u00F3n y sector", type: t["./directorate_has_sector/entities/directorate_has_sector.entity"].DirectorateHasSector }, "findAll": { summary: "Listar todas las relaciones entre direcci\u00F3n y sector", type: [t["./directorate_has_sector/entities/directorate_has_sector.entity"].DirectorateHasSector] }, "findOne": { summary: "Buscar una relaci\u00F3n entre direcci\u00F3n y sector por su id", type: t["./directorate_has_sector/entities/directorate_has_sector.entity"].DirectorateHasSector }, "update": { summary: "Actualizar una relaci\u00F3n entre direcci\u00F3n y sector por su id", type: t["./directorate_has_sector/entities/directorate_has_sector.entity"].DirectorateHasSector } } }], [import("./directorate/directorate.controller"), { "DirectorateController": { "create": { summary: "Crear una nueva direcci\u00F3n", type: t["./directorate/entities/directorate.entity"].Directorate }, "findAll": { summary: "Listar todas las direcciones", type: [t["./directorate/entities/directorate.entity"].Directorate] }, "findOne": { summary: "Buscar una direcci\u00F3n por su id", type: t["./directorate/entities/directorate.entity"].Directorate }, "update": { summary: "Actualizar una direcci\u00F3n por su id", type: t["./directorate/entities/directorate.entity"].Directorate } } }], [import("./sector/sector.controller"), { "SectorController": { "create": { summary: "Crear un nuevo sector", type: t["./sector/entities/sector.entity"].Sector }, "findAll": { summary: "Listar todos los sectores", type: [t["./sector/entities/sector.entity"].Sector] }, "findOne": { summary: "Buscar un sector por su id", type: t["./sector/entities/sector.entity"].Sector }, "update": { summary: "Actualizar un sector por su id", type: t["./sector/entities/sector.entity"].Sector } } }], [import("./user/user.controller"), { "UserController": { "create": { summary: "Crear un nuevo usuario", type: t["./user/entities/user.entity"].User }, "findAll": { summary: "Listar todos los usuarios", type: [t["./user/entities/user.entity"].User] }, "findOne": { summary: "Buscar un usuario por su id", type: t["./user/entities/user.entity"].User }, "update": { summary: "Actualizar un usuario por su id", type: t["./user/entities/user.entity"].User } } }], [import("./session_failed/session_failed.controller"), { "SessionFailedController": { "findAll": { summary: "Listar todas las sesiones fallidas", type: [t["./session_failed/entities/session_failed.entity"].SessionFailed] }, "findOne": { summary: "Buscar una sesi\u00F3n fallida por su id", type: t["./session_failed/entities/session_failed.entity"].SessionFailed } } }], [import("./visitor/visitor.controller"), { "VisitorController": { "create": { summary: "Crear un nuevo visitante", type: t["./visitor/entities/visitor.entity"].Visitor }, "findAll": { summary: "Listar todos los visitantes", type: [Object] }, "getYears": { summary: "Buscar los a\u00F1os de los registros existentes", type: [Number] }, "getMonth": { summary: "Buscar los a\u00F1os de los registros existentes", type: [String] }, "findOne": { summary: "Buscar un visitante por su id", type: t["./visitor/entities/visitor.entity"].Visitor }, "findImage": { summary: "Buscar una imagen de un visitante por su nombre" }, "update": { summary: "Actualizar un visitante por su id", type: t["./visitor/entities/visitor.entity"].Visitor } } }], [import("./government_institutions/government_institutions.controller"), { "GovernmentInstitutionsController": { "create": { summary: "Crear una nueva institucion de gobierno", type: t["./government_institutions/entities/government_institution.entity"].GovernmentInstitution }, "findAll": { summary: "Listar todas las instituciones de gobierno", type: [t["./government_institutions/entities/government_institution.entity"].GovernmentInstitution] }, "findOne": { summary: "Buscar una institucion de gobierno por su id", type: t["./government_institutions/entities/government_institution.entity"].GovernmentInstitution }, "update": { summary: "Actualizar una institucion de gobierno por su id", type: t["./government_institutions/entities/government_institution.entity"].GovernmentInstitution } } }], [import("./institutional_departments/institutional_departments.controller"), { "InstitutionalDepartmentsController": { "create": { summary: "Crear un nuevo departamento institucional", type: t["./institutional_departments/entities/institutional_department.entity"].InstitutionalDepartment }, "findAll": { summary: "Listar todos los departamentos institucionales", type: [t["./institutional_departments/entities/institutional_department.entity"].InstitutionalDepartment] }, "findOne": { summary: "Buscar un departamento institucional por su id", type: t["./institutional_departments/entities/institutional_department.entity"].InstitutionalDepartment }, "findByGovernmentInstitution": { summary: "Buscar departamentos por instituciones de gobierno", type: [t["./institutional_departments/entities/institutional_department.entity"].InstitutionalDepartment] }, "update": { summary: "Actualizar un departamento institucional por su id", type: t["./institutional_departments/entities/institutional_department.entity"].InstitutionalDepartment } } }], [import("./seed/seed.controller"), { "SeedController": { "executeSeed": { summary: "Reconstruir la base de datos", type: String } } }]] } };
};