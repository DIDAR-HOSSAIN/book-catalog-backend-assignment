export const bookFilterableFields: string[] = [
    'searchTerm',
    'title',
    'author',
    'genre',
    'price',
    'publicationDate',
    'categoryId'
];

export const bookSearchableFields: string[] = [
    'title',
    'author',
    'categoryId'
];

export const bookRelationalFields: string[] = [
    'categoryId'
];

export const bookRelationalFieldsMapper: { [key: string]: string } = {
    categoryId: 'category'
};
