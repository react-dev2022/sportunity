/**
 * @flow
 * @relayHash a23915f07bdff0dccf8910b8f970af46
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UseStatistics_viewer$ref = any;
export type router_ClubsTutorialUseStatistics_QueryVariables = {||};
export type router_ClubsTutorialUseStatistics_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: UseStatistics_viewer$ref
  |}
|};
export type router_ClubsTutorialUseStatistics_Query = {|
  variables: router_ClubsTutorialUseStatistics_QueryVariables,
  response: router_ClubsTutorialUseStatistics_QueryResponse,
|};
*/


/*
query router_ClubsTutorialUseStatistics_Query {
  viewer {
    ...UseStatistics_viewer
    id
  }
}

fragment UseStatistics_viewer on Viewer {
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
  "name": "router_ClubsTutorialUseStatistics_Query",
  "id": null,
  "text": "query router_ClubsTutorialUseStatistics_Query {\n  viewer {\n    ...UseStatistics_viewer\n    id\n  }\n}\n\nfragment UseStatistics_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_ClubsTutorialUseStatistics_Query",
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
            "name": "UseStatistics_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_ClubsTutorialUseStatistics_Query",
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
(node/*: any*/).hash = '1ae587674af3e4f19f5512df9c2e4829';
module.exports = node;
