/**
 * @flow
 * @relayHash e9eb04a121d056a7208a51ec6d05f444
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AboutUs_viewer$ref = any;
export type router_AboutUs_QueryVariables = {||};
export type router_AboutUs_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: AboutUs_viewer$ref
  |}
|};
export type router_AboutUs_Query = {|
  variables: router_AboutUs_QueryVariables,
  response: router_AboutUs_QueryResponse,
|};
*/


/*
query router_AboutUs_Query {
  viewer {
    ...AboutUs_viewer
    id
  }
}

fragment AboutUs_viewer on Viewer {
  id
  me {
    id
  }
  ...HeaderAboutUsImage_viewer
}

fragment HeaderAboutUsImage_viewer on Viewer {
  id
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
  "name": "router_AboutUs_Query",
  "id": null,
  "text": "query router_AboutUs_Query {\n  viewer {\n    ...AboutUs_viewer\n    id\n  }\n}\n\nfragment AboutUs_viewer on Viewer {\n  id\n  me {\n    id\n  }\n  ...HeaderAboutUsImage_viewer\n}\n\nfragment HeaderAboutUsImage_viewer on Viewer {\n  id\n  me {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_AboutUs_Query",
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
            "name": "AboutUs_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_AboutUs_Query",
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
(node/*: any*/).hash = 'ca6b3ecd4fc68a4905ed0b657fbf097c';
module.exports = node;
