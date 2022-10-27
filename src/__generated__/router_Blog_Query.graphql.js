/**
 * @flow
 * @relayHash 684ed204c92d727904ef7a5dc75fe415
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Blog_viewer$ref = any;
export type router_Blog_QueryVariables = {||};
export type router_Blog_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Blog_viewer$ref
  |}
|};
export type router_Blog_Query = {|
  variables: router_Blog_QueryVariables,
  response: router_Blog_QueryResponse,
|};
*/


/*
query router_Blog_Query {
  viewer {
    ...Blog_viewer
    id
  }
}

fragment Blog_viewer on Viewer {
  id
  me {
    id
    pseudo
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
  "name": "router_Blog_Query",
  "id": null,
  "text": "query router_Blog_Query {\n  viewer {\n    ...Blog_viewer\n    id\n  }\n}\n\nfragment Blog_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_Blog_Query",
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
            "name": "Blog_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_Blog_Query",
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
                "name": "pseudo",
                "args": null,
                "storageKey": null
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
(node/*: any*/).hash = '4a4720edd0057686e382fcf3aabc22e0';
module.exports = node;
