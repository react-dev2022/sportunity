/**
 * @flow
 * @relayHash b035c5dc88357a5168786a4b622d3eb8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NewGroup_viewer$ref = any;
export type router_NewGroup_QueryVariables = {||};
export type router_NewGroup_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: NewGroup_viewer$ref
  |}
|};
export type router_NewGroup_Query = {|
  variables: router_NewGroup_QueryVariables,
  response: router_NewGroup_QueryResponse,
|};
*/


/*
query router_NewGroup_Query {
  viewer {
    ...NewGroup_viewer
    id
  }
}

fragment NewGroup_viewer on Viewer {
  ...step2_viewer
  id
  me {
    ...Organizers_user
    id
    pseudo
    subAccounts {
      id
      pseudo
    }
  }
  sports {
    edges {
      node {
        id
        name {
          EN
          FR
          DE
          ES
          id
        }
        levels {
          id
          EN {
            name
            description
            skillLevel
          }
          FR {
            name
            description
            skillLevel
          }
          ES {
            name
            description
            skillLevel
          }
          DE {
            name
            description
            skillLevel
          }
        }
      }
    }
  }
}

fragment step2_viewer on Viewer {
  me {
    id
    circles {
      edges {
        node {
          id
          ...NewGroupCircleItem_circle
        }
      }
    }
  }
}

fragment Organizers_user on User {
  id
  pseudo
  ...FindOrganizerModal_user
}

fragment FindOrganizerModal_user on User {
  id
}

fragment NewGroupCircleItem_circle on Circle {
  id
  name
  mode
  type
  isCircleUpdatableByMembers
  isCircleUsableByMembers
  memberCount
  owner {
    id
    pseudo
    avatar
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
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v3 = [
  v1,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "description",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "skillLevel",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "router_NewGroup_Query",
  "id": null,
  "text": "query router_NewGroup_Query {\n  viewer {\n    ...NewGroup_viewer\n    id\n  }\n}\n\nfragment NewGroup_viewer on Viewer {\n  ...step2_viewer\n  id\n  me {\n    ...Organizers_user\n    id\n    pseudo\n    subAccounts {\n      id\n      pseudo\n    }\n  }\n  sports {\n    edges {\n      node {\n        id\n        name {\n          EN\n          FR\n          DE\n          ES\n          id\n        }\n        levels {\n          id\n          EN {\n            name\n            description\n            skillLevel\n          }\n          FR {\n            name\n            description\n            skillLevel\n          }\n          ES {\n            name\n            description\n            skillLevel\n          }\n          DE {\n            name\n            description\n            skillLevel\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment step2_viewer on Viewer {\n  me {\n    id\n    circles {\n      edges {\n        node {\n          id\n          ...NewGroupCircleItem_circle\n        }\n      }\n    }\n  }\n}\n\nfragment Organizers_user on User {\n  id\n  pseudo\n  ...FindOrganizerModal_user\n}\n\nfragment FindOrganizerModal_user on User {\n  id\n}\n\nfragment NewGroupCircleItem_circle on Circle {\n  id\n  name\n  mode\n  type\n  isCircleUpdatableByMembers\n  isCircleUsableByMembers\n  memberCount\n  owner {\n    id\n    pseudo\n    avatar\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_NewGroup_Query",
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
            "name": "NewGroup_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_NewGroup_Query",
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
              v0,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "circles",
                "storageKey": null,
                "args": null,
                "concreteType": "CircleConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CircleEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Circle",
                        "plural": false,
                        "selections": [
                          v0,
                          v1,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "mode",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "type",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "isCircleUpdatableByMembers",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "isCircleUsableByMembers",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "memberCount",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "owner",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": false,
                            "selections": [
                              v0,
                              v2,
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "avatar",
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
              v2,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "subAccounts",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": [
                  v0,
                  v2
                ]
              }
            ]
          },
          v0,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "sports",
            "storageKey": null,
            "args": null,
            "concreteType": "SportConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "SportEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Sport",
                    "plural": false,
                    "selections": [
                      v0,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "name",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "TranslatedString",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "EN",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "FR",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "DE",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "ES",
                            "args": null,
                            "storageKey": null
                          },
                          v0
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "levels",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Translated",
                        "plural": true,
                        "selections": [
                          v0,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "EN",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportLevel",
                            "plural": false,
                            "selections": v3
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "FR",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportLevel",
                            "plural": false,
                            "selections": v3
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "ES",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportLevel",
                            "plural": false,
                            "selections": v3
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "DE",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportLevel",
                            "plural": false,
                            "selections": v3
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
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd7ae9cb93b5f9365975e6213c1c0b877';
module.exports = node;
