/**
 * @flow
 * @relayHash c17aa5531b51d3a256d2b6d34f3a2b69
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DatasheetSportunities_viewer$ref = any;
export type router_DatasheetSportunities_QueryVariables = {||};
export type router_DatasheetSportunities_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: DatasheetSportunities_viewer$ref
  |}
|};
export type router_DatasheetSportunities_Query = {|
  variables: router_DatasheetSportunities_QueryVariables,
  response: router_DatasheetSportunities_QueryResponse,
|};
*/


/*
query router_DatasheetSportunities_Query {
  viewer {
    ...DatasheetSportunities_viewer
    id
  }
}

fragment DatasheetSportunities_viewer on Viewer {
  id
  ...SearchModal_viewer
  ...InvitedCircleDetails_viewer
  ...Organizers_viewer
  ...OpponentEditor_viewer
  me {
    ...Organizers_user
    id
    pseudo
    icsLinks
    subAccounts {
      id
      pseudo
    }
  }
  sports {
    edges {
      node {
        id
        type
        name {
          id
          EN
          FR
        }
        levels {
          id
          EN {
            name
            skillLevel
          }
          FR {
            name
            skillLevel
          }
        }
      }
    }
  }
  sportunityTypes(sportType: COLLECTIVE) {
    id
    name {
      EN
      FR
      id
    }
  }
}

fragment SearchModal_viewer on Viewer {
  me {
    id
  }
}

fragment InvitedCircleDetails_viewer on Viewer {
  id
  me {
    id
  }
  ...AddUserModal_viewer
  ...AddMemberModal_viewer
  ...AddChildModal_viewer
}

fragment Organizers_viewer on Viewer {
  id
  ...SearchModal_viewer
}

fragment OpponentEditor_viewer on Viewer {
  me {
    id
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

fragment AddUserModal_viewer on Viewer {
  id
  ...InputUserAutocompleted_viewer
}

fragment AddMemberModal_viewer on Viewer {
  me {
    id
  }
  userExists(pseudo: "_", email: "_")
}

fragment AddChildModal_viewer on Viewer {
  ...SubmitAddChild_viewer
  ...InputUserAutocompleted_viewer
  me {
    id
  }
}

fragment SubmitAddChild_viewer on Viewer {
  id
}

fragment InputUserAutocompleted_viewer on Viewer {
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
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "EN",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "FR",
  "args": null,
  "storageKey": null
},
v4 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
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
  "name": "router_DatasheetSportunities_Query",
  "id": null,
  "text": "query router_DatasheetSportunities_Query {\n  viewer {\n    ...DatasheetSportunities_viewer\n    id\n  }\n}\n\nfragment DatasheetSportunities_viewer on Viewer {\n  id\n  ...SearchModal_viewer\n  ...InvitedCircleDetails_viewer\n  ...Organizers_viewer\n  ...OpponentEditor_viewer\n  me {\n    ...Organizers_user\n    id\n    pseudo\n    icsLinks\n    subAccounts {\n      id\n      pseudo\n    }\n  }\n  sports {\n    edges {\n      node {\n        id\n        type\n        name {\n          id\n          EN\n          FR\n        }\n        levels {\n          id\n          EN {\n            name\n            skillLevel\n          }\n          FR {\n            name\n            skillLevel\n          }\n        }\n      }\n    }\n  }\n  sportunityTypes(sportType: COLLECTIVE) {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n  }\n}\n\nfragment SearchModal_viewer on Viewer {\n  me {\n    id\n  }\n}\n\nfragment InvitedCircleDetails_viewer on Viewer {\n  id\n  me {\n    id\n  }\n  ...AddUserModal_viewer\n  ...AddMemberModal_viewer\n  ...AddChildModal_viewer\n}\n\nfragment Organizers_viewer on Viewer {\n  id\n  ...SearchModal_viewer\n}\n\nfragment OpponentEditor_viewer on Viewer {\n  me {\n    id\n  }\n}\n\nfragment Organizers_user on User {\n  id\n  pseudo\n  ...FindOrganizerModal_user\n}\n\nfragment FindOrganizerModal_user on User {\n  id\n}\n\nfragment AddUserModal_viewer on Viewer {\n  id\n  ...InputUserAutocompleted_viewer\n}\n\nfragment AddMemberModal_viewer on Viewer {\n  me {\n    id\n  }\n  userExists(pseudo: \"_\", email: \"_\")\n}\n\nfragment AddChildModal_viewer on Viewer {\n  ...SubmitAddChild_viewer\n  ...InputUserAutocompleted_viewer\n  me {\n    id\n  }\n}\n\nfragment SubmitAddChild_viewer on Viewer {\n  id\n}\n\nfragment InputUserAutocompleted_viewer on Viewer {\n  me {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_DatasheetSportunities_Query",
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
            "name": "DatasheetSportunities_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_DatasheetSportunities_Query",
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
              v1,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "icsLinks",
                "args": null,
                "storageKey": null
              },
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
                  v1
                ]
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "userExists",
            "args": [
              {
                "kind": "Literal",
                "name": "email",
                "value": "_",
                "type": "String"
              },
              {
                "kind": "Literal",
                "name": "pseudo",
                "value": "_",
                "type": "String"
              }
            ],
            "storageKey": "userExists(email:\"_\",pseudo:\"_\")"
          },
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
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "type",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "name",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "TranslatedString",
                        "plural": false,
                        "selections": [
                          v0,
                          v2,
                          v3
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
                            "selections": v4
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "FR",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportLevel",
                            "plural": false,
                            "selections": v4
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
            "name": "sportunityTypes",
            "storageKey": "sportunityTypes(sportType:\"COLLECTIVE\")",
            "args": [
              {
                "kind": "Literal",
                "name": "sportType",
                "value": "COLLECTIVE",
                "type": "SportTypeEnum"
              }
            ],
            "concreteType": "SportunityType",
            "plural": true,
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
                  v2,
                  v3,
                  v0
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
(node/*: any*/).hash = 'af378ea99461aef549766756481d8745';
module.exports = node;
