const { ApolloServer, gql } = require('apollo-server');
const data = require('./artists-data.json');
const typeDefs = gql`
  type Artist {
    id: String
    name: String
    albums: [Album]
  }
  type Album {
    id: String
    title: String
    year: Int
    tracks: [Track]
  }
  type Track {
    id: String
	title: String
    length: String
  }
  type Query {
	artists: [Artist]
	artist: Artist
  }
`;
const resolvers = {
  Query: {
    artists: () => data.artists,
    artist: ({ id, name }) => {
      let storedArtist = data.artists.find(
        (storedArtist) => storedArtist.id === id || storedArtist.name === name
      );
      return storedArtist;
    }
  }
};
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`GraphQL gestartet unter ${url}`);
});
