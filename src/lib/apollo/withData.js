// import { ApolloClient } from 'apollo-client';
// import { split, ApolloLink, concat } from 'apollo-link';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { getMainDefinition } from 'apollo-utilities';
// import withApollo from 'next-with-apollo';
// import { HttpLink } from 'apollo-link-http';
// import fetch from 'isomorphic-unfetch';
// import { WebSocketLink } from 'apollo-link-ws';

// /**
//  * Configuration
//  */

// export const SERVER = 'http://localhost:4444/';
// export const WEB_SOCKET_LINK = 'ws://localhost:4444/';

// export default withApollo((props) => {
//   const httpLink = new HttpLink({
//     fetch,
//     uri: SERVER,
//   });

//   const authMiddleware = new ApolloLink((operation, forward) => {
//     const Token =
//       typeof window !== 'undefined' ? localStorage.getItem('Token') : '';
//     console.log('Token', Token);
//     operation.setContext({
//       headers: {
//         'X-JWT':
//           typeof window !== 'undefined' ? localStorage.getItem('Token') : '',
//       },

//       fetchOptions: {
//         credentials: 'include',
//       },
//     });
//     // Add onto payload for WebSocket authentication

//     return forward(operation);
//   });

//   const webSocketLink = process.browser
//     ? new WebSocketLink({
//         uri: WEB_SOCKET_LINK,
//         options: {
//           reconnect: true,
//           connectionParams: {
//             'X-JWT':
//               typeof window !== 'undefined'
//                 ? localStorage.getItem('Token')
//                 : '',
//           },
//         },
//       })
//     : null;

//   const link = process.browser
//     ? split(
//         ({ query }) => {
//           const { kind, operation } = getMainDefinition(query);
//           return kind === 'OperationDefinition' && operation === 'subscription';
//         },
//         webSocketLink,
//         httpLink,
//       )
//     : httpLink;

//   // Token = props.ctx.req.headers.cookie;

//   return new ApolloClient({
//     link: concat(authMiddleware, link),
//     cache: new InMemoryCache(),
//   });
// });

import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

const endpoint = `http://localhost:4444`;
const prodEndpoint = '';

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    request: (operation) => {
      //like a middleware that passes credentials and headers to all requests
      const Token =
        typeof window !== 'undefined' ? localStorage.getItem('Token') : '';
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers: {
          ...headers,
          authorization: Token ? `Bearer ${Token}` : '',
        },
      });
    },
  });
}
export default withApollo(createClient);
