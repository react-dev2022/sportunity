/**
 * @flow
 * @relayHash e1022293eb626a2d2c2882a99872c516
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AboutUs_viewer$ref = any;
export type router_ContactUs_QueryVariables = {||};
export type router_ContactUs_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: AboutUs_viewer$ref
  |}
|};
export type router_ContactUs_Query = {|
  variables: router_ContactUs_QueryVariables,
  response: router_ContactUs_QueryResponse,
|};
*/


/*
query router_ContactUs_Query {
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
  "name": "router_ContactUs_Query",
  "id": null,
  "text": "query router_ContactUs_Query {\n  viewer {\n    ...AboutUs_viewer\n    id\n  }\n}\n\nfragment AboutUs_viewer on Viewer {\n  id\n  me {\n    id\n  }\n  ...HeaderAboutUsImage_viewer\n}\n\nfragment HeaderAboutUsImage_viewer on Viewer {\n  id\n  me {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_ContactUs_Query",
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
    "name": "router_ContactUs_Query",
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
(node/*: any*/).hash = 'ea31dbf3ee173db3f6bd5998c6b6dbfd';
module.exports = node;
