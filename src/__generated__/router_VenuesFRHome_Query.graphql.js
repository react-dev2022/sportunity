/**
 * @flow
 * @relayHash 13252d82c29331dfa699bdc0d9754257
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type VenuesHome_viewer$ref = any;
export type router_VenuesFRHome_QueryVariables = {||};
export type router_VenuesFRHome_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: VenuesHome_viewer$ref
  |}
|};
export type router_VenuesFRHome_Query = {|
  variables: router_VenuesFRHome_QueryVariables,
  response: router_VenuesFRHome_QueryResponse,
|};
*/


/*
query router_VenuesFRHome_Query {
  viewer {
    ...VenuesHome_viewer
    id
  }
}

fragment VenuesHome_viewer on Viewer {
  me {
    id
  }
  ...HeaderImage_viewer
}

fragment HeaderImage_viewer on Viewer {
  me {
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
  "name": "router_VenuesFRHome_Query",
  "id": null,
  "text": "query router_VenuesFRHome_Query {\n  viewer {\n    ...VenuesHome_viewer\n    id\n  }\n}\n\nfragment VenuesHome_viewer on Viewer {\n  me {\n    id\n  }\n  ...HeaderImage_viewer\n}\n\nfragment HeaderImage_viewer on Viewer {\n  me {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_VenuesFRHome_Query",
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
            "name": "VenuesHome_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_VenuesFRHome_Query",
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
            "kind": "LinkedField",
            "alias": null,
            "name": "me",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v0
            ]
          },
          v0
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '827ee8c6f25c4235e2b116e5f26ff178';
module.exports = node;
