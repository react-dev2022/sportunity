/**
 * @flow
 * @relayHash 3a9cf2126fea9393b1966165fff6fee5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type VenueView_viewer$ref = any;
export type router_VenueView_QueryVariables = {||};
export type router_VenueView_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: VenueView_viewer$ref
  |}
|};
export type router_VenueView_Query = {|
  variables: router_VenueView_QueryVariables,
  response: router_VenueView_QueryResponse,
|};
*/


/*
query router_VenueView_Query {
  viewer {
    ...VenueView_viewer
    id
  }
}

fragment VenueView_viewer on Viewer {
  id
  me {
    id
    numberOfUnreadNotifications
    notifications(last: 5) {
      edges {
        node {
          id
          text
          link
          created
        }
      }
    }
  }
  venues(first: 1) {
    ...Title_venues
    ...Description_venues
    ...Events_venues
  }
}

fragment Title_venues on VenueConnection {
  edges {
    node {
      name
      address {
        address
        city
        country
      }
      id
    }
  }
}

fragment Description_venues on VenueConnection {
  edges {
    node {
      description
      id
    }
  }
}

fragment Events_venues on VenueConnection {
  edges {
    node {
      description
      id
    }
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
  "name": "router_VenueView_Query",
  "id": null,
  "text": "query router_VenueView_Query {\n  viewer {\n    ...VenueView_viewer\n    id\n  }\n}\n\nfragment VenueView_viewer on Viewer {\n  id\n  me {\n    id\n    numberOfUnreadNotifications\n    notifications(last: 5) {\n      edges {\n        node {\n          id\n          text\n          link\n          created\n        }\n      }\n    }\n  }\n  venues(first: 1) {\n    ...Title_venues\n    ...Description_venues\n    ...Events_venues\n  }\n}\n\nfragment Title_venues on VenueConnection {\n  edges {\n    node {\n      name\n      address {\n        address\n        city\n        country\n      }\n      id\n    }\n  }\n}\n\nfragment Description_venues on VenueConnection {\n  edges {\n    node {\n      description\n      id\n    }\n  }\n}\n\nfragment Events_venues on VenueConnection {\n  edges {\n    node {\n      description\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_VenueView_Query",
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
            "name": "VenueView_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_VenueView_Query",
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
              v0,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "numberOfUnreadNotifications",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "notifications",
                "storageKey": "notifications(last:5)",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "last",
                    "value": 5,
                    "type": "Int"
                  }
                ],
                "concreteType": "NotificationConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "NotificationEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Notification",
                        "plural": false,
                        "selections": [
                          v0,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "text",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "link",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "created",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "venues",
            "storageKey": "venues(first:1)",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 1,
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
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "name",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "address",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "AddressModel",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "address",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "city",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "country",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      },
                      v0,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "description",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '18d15f09d69efa7b6737b9f73229b208';
module.exports = node;
