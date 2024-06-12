const helloQuery = new GraphQLObjectType({
  name: "Hello",
  fields: () => ({
    message: {
      type: GraphQLString,
      resolve: () => "Hello world",
    },
  }),
});
