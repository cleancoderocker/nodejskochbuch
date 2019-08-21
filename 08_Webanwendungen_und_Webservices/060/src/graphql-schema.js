const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} = require('graphql');
const data = require('./artists-data.json');

const TrackType = new GraphQLObjectType({
  name: 'TrackType',
  fields: {
    id: {
      type: GraphQLString
    },
    title: {
      type: GraphQLString
    },
    length: {
      type: GraphQLString
    }
  }
});

const AlbumType = new GraphQLObjectType({
  name: 'AlbumType',
  fields: {
    id: {
      type: GraphQLString
    },
    title: {
      type: GraphQLString
    },
    year: {
      type: GraphQLInt
    },
    tracks: {
      type: new GraphQLList(TrackType),
      resolve(album) {
        return album.tracks;
      }
    }
  }
});

const ArtistType = new GraphQLObjectType({
  name: 'ArtistType',
  fields: {
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    albums: {
      type: new GraphQLList(AlbumType),
      resolve(artist) {
        let storedArtist = data.artists.find(
          storedArtist =>
            storedArtist.id === artist.id || storedArtist.name === name
        );
        return storedArtist.albums;
      }
    }
  }
});

const RootType = new GraphQLObjectType({
  name: 'RootType',
  fields: {
    artists: {
      type: new GraphQLList(ArtistType),
      resolve() {
        return data.artists;
      }
    },
    artist: {
      type: ArtistType,
      args: {
        id: {
          type: GraphQLString
        },
        name: {
          type: GraphQLString
        }
      },
      resolve(parent, { id, name }) {
        let storedArtist = data.artists.find(
          storedArtist => storedArtist.id === id || storedArtist.name === name
        );
        return storedArtist;
      }
    }
  }
});

const schema = new GraphQLSchema({
  query: RootType
});

module.exports = schema;
