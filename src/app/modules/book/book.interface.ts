export type IBookFilterRequest = {
    searchTerm?: string | undefined;
    categoryId?: string | undefined;
    title?: string | undefined;
    author?: string | undefined;
    genre?: string | undefined;
    publicationDate?: string | undefined;
}

export type IStudentMyCoursesRequest = {
    academicSemesterId?: string | undefined;
    courseId?: string | undefined;
}

export type IStudentMyCourseSchedulesRequest = {
    academicSemesterId?: string | undefined;
    courseId?: string | undefined;
}

export type StudentCreatedEvent = {
    id: string;
    name: {
        firstName: string;
        lastName: string;
        middleName?: string;
    };
    dateOfBirth: string;
    gender: string;
    bloodGroup: string;
    email: string;
    contactNo: string;
    profileImage: string;
    academicFaculty: {
        syncId: string;
    };
    academicDepartment: {
        syncId: string;
    };
    academicSemester: {
        syncId: string;
    };
};

export type StudentUpdatedEvent = {
    id: string;
    name: {
        firstName: string;
        lastName: string;
        middleName?: string;
    };
    dateOfBirth: string;
    gender: string;
    bloodGroup: string;
    email: string;
    contactNo: string;
    profileImage: string;
    academicFaculty: {
        syncId: string;
    };
    academicDepartment: {
        syncId: string;
    };
    academicSemester: {
        syncId: string;
    };
};