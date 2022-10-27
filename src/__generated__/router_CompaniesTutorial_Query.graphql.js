/**
 * @flow
 * @relayHash 3fd16bc1a1ff58df34062f4dbe8474d8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CompaniesTutorial_viewer$ref = any;
export type router_CompaniesTutorial_QueryVariables = {||};
export type router_CompaniesTutorial_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: CompaniesTutorial_viewer$ref
  |}
|};
export type router_CompaniesTutorial_Query = {|
  variables: router_CompaniesTutorial_QueryVariables,
  response: router_CompaniesTutorial_QueryResponse,
|};
*/


/*
query router_CompaniesTutorial_Query {
  viewer {
    ...CompaniesTutorial_viewer
    id
  }
}

fragment CompaniesTutorial_viewer on Viewer {
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
  "name": "router_CompaniesTutorial_Query",
  "id": null,
  "text": "query router_CompaniesTutorial_Query {\n  viewer {\n    ...CompaniesTutorial_viewer\n    id\n  }\n}\n\nfragment CompaniesTutorial_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_CompaniesTutorial_Query",
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
            "name": "CompaniesTutorial_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_CompaniesTutorial_Query",
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
(node/*: any*/).hash = '051c6e7584dd4dc2310d970b23230ba5';
module.exports = node;
