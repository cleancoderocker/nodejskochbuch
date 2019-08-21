const { graphql } = require('graphql');
const schema = require('./graphql-schema');

(async () => {
  const query = `{
    artists {
      id,
      name
    }
  }`;
  const result = await graphql(schema, query);
  console.log(JSON.stringify(result, null, 2));
  // {
  //   "data": {
  //     "artists": [
  //       {
  //         "id": "artist-1",
  //         "name": "Ben Harper"
  //       },
  //       {
  //         "id": "artist-2",
  //         "name": "DJ Shadow"
  //       }
  //     ]
  //   }
  // }
})();

(async () => {
  const query = `{
      artists {
        name,
        albums {
          title,
          year
        }
      }
    }`;
  const result = await graphql(schema, query);
  console.log(JSON.stringify(result, null, 2));
})();

(async () => {
  const query = `{
    artist(name: "Ben Harper") {
      name,
      albums {
        title,
        year
      }
    }
  }`;
  const result = await graphql(schema, query);
  console.log(JSON.stringify(result, null, 2));
  // {
  //   "data": {
  //     "artist": {
  //       "name": "Ben Harper",
  //       "albums": [
  //         {
  //           "title": "Welcome to the Cruel World",
  //           "year": 1994
  //         },
  //         {
  //           "title": "Fight for Your Mind",
  //           "year": 1995
  //         },
  //         {
  //           "title": "The Will to Live",
  //           "year": 1997
  //         },
  //         {
  //           "title": "Burn to Shine",
  //           "year": 1999
  //         },
  //         {
  //           "title": "Diamonds on the Inside",
  //           "year": 2003
  //         }
  //       ]
  //     }
  //   }
  // }
})();

(async () => {
  const query = `{
    artist(name: "Ben Harper") {
      artistName: name
      albums {
        albumName: title
        songs: tracks {
          songName: title
        }
      }
	}
  }`;
  const result = await graphql(schema, query);
  console.log(JSON.stringify(result, null, 2));
// {
// 	"data": {
// 	  "artist": {
// 		"artistName": "Ben Harper",
// 		"albums": [
// 		  {
// 			"albumName": "Welcome to the Cruel World",
// 			"songs": [
// 			  {
// 				"songName": "The Three of Us"
// 			  },
// 			  {
// 				"songName": "Whipping Boy"
// 			  },
// 			  {
// 				"songName": "Breakin' Down"
// 			  },
// 			  {
// 				"songName": "Don't Take That Attitude to Your Grave"
// 			  },
// 			  {
// 				"songName": "Waiting on an Angel"
// 			  },
// 			  {
// 				"songName": "Mama's Got a Girlfriend Now"
// 			  },
// 			  {
// 				"songName": "Forever"
// 			  },
// 			  {
// 				"songName": "Like a King"
// 			  },
// 			  {
// 				"songName": "Pleasure and Pain"
// 			  },
// 			  {
// 				"songName": "Walk Away"
// 			  },
// 			  {
// 				"songName": "How Many Miles Must We March"
// 			  },
// 			  {
// 				"songName": "Welcome to the Cruel World"
// 			  },
// 			  {
// 				"songName": "I'll Rise"
// 			  }
// 			]
// 		  },
// 		  ...
// 		]
// 	  }
// 	}
// }
})();
