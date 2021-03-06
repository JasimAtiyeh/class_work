const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const CategoryType = new GraphQLObjectType({
  name: "CategoryType",

  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    products: {
       type: new GraphQLList( require('./product_type') ), 
       resolve(parentValue) {
         return Category.fetchAllProducts(parentValue._id)
       }
      }
  })
});

module.exports = CategoryType;