/**
 * @flow
 * @relayHash fe34d6e002d9c4cccb4b07b0289d7ffc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Venue_viewer$ref = any;
export type router_Venue_QueryVariables = {||};
export type router_Venue_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Venue_viewer$ref
  |}
|};
export type router_Venue_Query = {|
  variables: router_Venue_QueryVariables,
  response: router_Venue_QueryResponse,
|};
*/


/*
query router_Venue_Query {
  viewer {
    ...Venue_viewer
    id
  }
}

fragment Venue_viewer on Viewer {
  id
  me {
    venues(last: 100) {
      edges {
        node {
          id
          name
        }
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "router_Venue_Query",
  "id": null,
  "text": "query router_Venue_Query {\n  viewer {\n    ...Venue_viewer\n    id\n  }\n}\n\nfragment Venue_viewer on Viewer {\n  id\n  me {\n    venues(last: 100) {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_Venue_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Venue_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_Venue_Query",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          v0,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "me",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "venues",
                "storageKey": "venues(last:100)",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "last",
                    "value": 100,
                    "type": "Int"
                  }
                ],
                "concreteType": "VenueConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "VenueEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Venue",
                        "plural": false,
                        "selections": [
                          v0,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "name",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              v0
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '634d1222c04ae1b16cd4463e98dc5260';
module.exports = node;
