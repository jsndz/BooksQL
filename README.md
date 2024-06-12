## Define a schema

const schema = new GraphQLSchema({
query: RootQuery,
});

## set up qraphql

app.use(
"/graphql",
graphqlHTTP({
schema: schema,
graphiql: true,
})
);

## Defining the main query

const RootQuery = new GraphQLObjectType({
name: "Query",
description: "Root Query",
fields: () => ({
books: {
type: new GraphQLList(BookType),
description: "List of All Books",
resolve: () => books,
},
}),
});

## defining a query "book" inside "query" to return something

---

const books = [
{ id: 1, name: "Harry Potter and the Chamber of Secrets", authorId: 1 },

];

---

-fields are the data types
const BookType = new GraphQLObjectType({
name: "Book",
description: "A book written by an author",
fields: () => ({
id: { type: GraphQLNonNull(GraphQLInt) },
name: { type: GraphQLNonNull(GraphQLString) },
authorId: { type: GraphQLNonNull(GraphQLInt) },
}),
});

## how to get parent query attribute to inherit in child attribute

const BookType = new GraphQLObjectType({
name: "Book",
description: "A book written by an author",
fields: () => ({
id: { type: GraphQLNonNull(GraphQLInt) },
name: { type: GraphQLNonNull(GraphQLString) },
authorId: { type: GraphQLNonNull(GraphQLInt) },
author: {
type: AuthorType,
description: "List of Authors",
resolve: (book) => { ###here the book is parent query ###
return authors.find((author) => author.id === book.authorId); ### you get book.authorId ###
},
},
}),
});
