http://localhost:5000/api/v1/students/create-student

{
  "studentId": "1",
  "firstName": "Masud",
  "lastName": "Ul",
  "middleName": "Hoque",
  "email": "masud@gmail.com",
  "contactNo": "01815148850",
  "gender": "Male",
  "bloodGroup": "A+",
  "profileImage": "avatar",
  "academicSemester": {
    "connect": {
      "id": "6f84fcec-11c9-4408-b23c-ffb1a04535b8"
    }
  },
  "academicDepartment": {
    "connect": {
      "id": "71400ed4-ab9f-4253-8c1e-179fbe7f510c"
    }
  },
  "academicFaculty": {
    "connect": {
      "id": "6e9b3fbb-a7a5-4098-be0c-0d533c386aec"
    }
  }
}


http://localhost:5000/api/v1/academic-semesters/create-semester

{
"title":"Autumn",
"year":1999,
"code":"01",
"startMonth":"January",
"endMonth":"May"
}


http://localhost:5000/api/v1/academic-departments/create-department

{
  "title": "Computer Science",
  "academicFaculty": {
    "connect": {
      "id": "6e9b3fbb-a7a5-4098-be0c-0d533c386aec"
    }
  }
}

http://localhost:5000/api/v1/academic-faculties/create-academic-faculty

{
  "title": "Business Faculty"
}

http://localhost:5000/api/v1/faculties/create-faculty

{
  "facultyId": "1",
  "firstName":    "Masud",
  "lastName":     "Ul",
  "middleName":   "Hoque",
  "email":        "masud@gmail.com",
  "contactNo":    "01815148850",
  "gender":       "Male",
  "bloodGroup":   "A+",
  "designation":   "IT Manager",
  "profileImage": "avatar",
    "academicDepartment": {
    "connect": {
      "id": "71400ed4-ab9f-4253-8c1e-179fbe7f510c"
    }
  },
  "academicFaculty": {
    "connect": {
      "id": "6e9b3fbb-a7a5-4098-be0c-0d533c386aec"
    }
  }
}


id-: A-100002"
role-: "admin"
token-:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJ1c2VySWQiOiJBLTEwMDAwMiJ9.NdOC3IQsLeNNuDdBxOUofOFw1BacfLjS4_mnTqLkO-g




id-: "230100002"
role-: "student"
token-: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3R1ZGVudCIsInVzZXJJZCI6IjIzMDEwMDAwMiJ9.DGQqESHJ5nKPNAgN7I7Tf4SXfEpuyEqi628ppgrVmBw





//validation

import { z } from 'zod';

const create = z.object({
    body: z.object({
        title: z.string({
            required_error: 'Title is required'
        }),
        code: z.string({
            required_error: 'Code is required'
        }),
        credits: z.number({
            required_error: 'Credits is required'
        }),
        preRequisiteCourses: z
            .array(
                z.object({
                    courseId: z.string({})
                })
            )
            .optional()
    })
});

const update = z.object({
    body: z.object({
        title: z.string().optional(),
        code: z.string().optional(),
        credits: z.number().optional(),
        preRequisiteCourses: z
            .array(
                z.object({
                    courseId: z.string({}),
                    isDeleted: z.boolean({}).optional()
                })
            )
            .optional()
    })
});

const assignOrRemoveFaculties = z.object({
    body: z.object({
        faculties: z.array(z.string(), {
            required_error: "Facultis are required"
        })
    })
})


export const CourseValidation = {
    create,
    update,
    assignOrRemoveFaculties
};