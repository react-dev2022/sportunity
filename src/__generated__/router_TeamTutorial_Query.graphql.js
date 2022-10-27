/**
 * @flow
 * @relayHash 22683b7e6deae1cf780e97aca8906622
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TeamTutorial_viewer$ref = any;
export type router_TeamTutorial_QueryVariables = {||};
export type router_TeamTutorial_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: TeamTutorial_viewer$ref
  |}
|};
export type router_TeamTutorial_Query = {|
  variables: router_TeamTutorial_QueryVariables,
  response: router_TeamTutorial_QueryResponse,
|};
*/


/*
query router_TeamTutorial_Query {
  viewer {
    ...TeamTutorial_viewer
    id
  }
}

fragment TeamTutorial_viewer on Viewer {
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
  "name": "router_TeamTutorial_Query",
  "id": null,
  "text": "query router_TeamTutorial_Query {\n  viewer {\n    ...TeamTutorial_viewer\n    id\n  }\n}\n\nfragment TeamTutorial_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_TeamTutorial_Query",
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
            "name": "TeamTutorial_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_TeamTutorial_Query",
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
(node/*: any*/).hash = 'b0288978059595a5eb14be64d541cb44';
module.exports = node;
