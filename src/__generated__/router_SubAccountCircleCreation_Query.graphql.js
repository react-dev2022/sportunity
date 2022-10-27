/**
 * @flow
 * @relayHash ddbe08d435153f6f421cf2f014947f7c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MyCircles_viewer$ref = any;
export type router_SubAccountCircleCreation_QueryVariables = {||};
export type router_SubAccountCircleCreation_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: MyCircles_viewer$ref
  |}
|};
export type router_SubAccountCircleCreation_Query = {|
  variables: router_SubAccountCircleCreation_QueryVariables,
  response: router_SubAccountCircleCreation_QueryResponse,
|};
*/


/*
query router_SubAccountCircleCreation_Query {
  viewer {
    ...MyCircles_viewer
    id
  }
}

fragment MyCircles_viewer on Viewer {
  id
  ...AllCircleMembers_viewer
  ...InformationForms_viewer
  ...AddEditInformationForms_viewer
  ...FormDetails_viewer
  ...PaymentModelDetails_viewer
  ...PaymentModels_viewer
  ...AddEditPaymentModels_viewer
  myCirclesSports: sports(first: 10, language: EN) {
    count
    edges {
      node {
        id
        name {
          EN
          FR
          DE
          id
        }
        logo
        levels {
          id
          EN {
            name
            skillLevel
            description
          }
          FR {
            name
            skillLevel
            description
          }
          DE {
            name
            skillLevel
            description
          }
        }
      }
    }
  }
  me {
    id
    profileType
    isSubAccount
    basicCircleSavedFiltersCreated
    defaultSavedCircleFilter {
      id
      filterName
      location {
        lat
        lng
        radius
      }
      sport {
        sport {
          id
          name {
            EN
            FR
            id
          }
        }
      }
      circleType
      memberTypes
      modes
      owners {
        id
        pseudo
      }
    }
    savedCircleFilters {
      id
      filterName
      canBeDeleted
      location {
        lat
        lng
        radius
      }
      sport {
        sport {
          id
          name {
            EN
            FR
            id
          }
        }
      }
      circleType
      memberTypes
      modes
      owners {
        id
        pseudo
      }
    }
    ...AllCircleMembers_user
    ...InformationForms_user
    ...AddEditInformationForms_user
    ...FormDetails_user
    ...PaymentModelDetails_user
    ...PaymentModels_user
    ...AddEditPaymentModels_user
    ...TermOfUse_user
    subAccounts {
      id
      pseudo
      circles(last: 30) {
        edges {
          node {
            id
            name
            memberCount
          }
        }
      }
    }
    masterAccount {
      id
      subAccounts {
        id
        pseudo
        circles(last: 30) {
          edges {
            node {
              id
              name
              memberCount
            }
          }
        }
      }
    }
  }
}

fragment AllCircleMembers_viewer on Viewer {
  ...MemberCard_viewer
  ...MemberRow_viewer
  ...MembersInformation_viewer
}

fragment InformationForms_viewer on Viewer {
  id
}

fragment AddEditInformationForms_viewer on Viewer {
  id
  ...SearchModal_viewer
}

fragment FormDetails_viewer on Viewer {
  id
}

fragment PaymentModelDetails_viewer on Viewer {
  id
}

fragment PaymentModels_viewer on Viewer {
  id
}

fragment AddEditPaymentModels_viewer on Viewer {
  id
  ...SearchModal_viewer
}

fragment AllCircleMembers_user on User {
  profileType
  termsOfUses {
    id
    name
    acceptedBy {
      user {
        id
      }
    }
  }
}

fragment InformationForms_user on User {
  id
}

fragment AddEditInformationForms_user on User {
  id
}

fragment FormDetails_user on User {
  id
}

fragment PaymentModelDetails_user on User {
  id
}

fragment PaymentModels_user on User {
  id
  mangoId
}

fragment AddEditPaymentModels_user on User {
  id
  paymentModelFees
}

fragment TermOfUse_user on User {
  id
}

fragment SearchModal_viewer on Viewer {
  me {
    id
  }
}

fragment MemberCard_viewer on Viewer {
  id
}

fragment MemberRow_viewer on Viewer {
  id
}

fragment MembersInformation_viewer on Viewer {
  id
  ...MembersDetailledInformation_viewer
}

fragment MembersDetailledInformation_viewer on Viewer {
  id
  me {
    pseudo
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
  "name": "filterName",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "location",
  "storageKey": null,
  "args": null,
  "concreteType": "CircleFilterLatLng",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "lat",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "lng",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "radius",
      "args": null,
      "storageKey": null
    }
  ]
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "EN",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "FR",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "sport",
  "storageKey": null,
  "args": null,
  "concreteType": "CircleFilterSport",
  "plural": true,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "sport",
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
            v3,
            v4,
            v0
          ]
        }
      ]
    }
  ]
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "circleType",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "memberTypes",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "modes",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "owners",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": [
    v0,
    v9
  ]
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "subAccounts",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": [
    v0,
    v9,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "circles",
      "storageKey": "circles(last:30)",
      "args": [
        {
          "kind": "Literal",
          "name": "last",
          "value": 30,
          "type": "Int"
        }
      ],
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
                v11,
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "memberCount",
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
v13 = [
  v11,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "skillLevel",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "description",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "router_SubAccountCircleCreation_Query",
  "id": null,
  "text": "query router_SubAccountCircleCreation_Query {\n  viewer {\n    ...MyCircles_viewer\n    id\n  }\n}\n\nfragment MyCircles_viewer on Viewer {\n  id\n  ...AllCircleMembers_viewer\n  ...InformationForms_viewer\n  ...AddEditInformationForms_viewer\n  ...FormDetails_viewer\n  ...PaymentModelDetails_viewer\n  ...PaymentModels_viewer\n  ...AddEditPaymentModels_viewer\n  myCirclesSports: sports(first: 10, language: EN) {\n    count\n    edges {\n      node {\n        id\n        name {\n          EN\n          FR\n          DE\n          id\n        }\n        logo\n        levels {\n          id\n          EN {\n            name\n            skillLevel\n            description\n          }\n          FR {\n            name\n            skillLevel\n            description\n          }\n          DE {\n            name\n            skillLevel\n            description\n          }\n        }\n      }\n    }\n  }\n  me {\n    id\n    profileType\n    isSubAccount\n    basicCircleSavedFiltersCreated\n    defaultSavedCircleFilter {\n      id\n      filterName\n      location {\n        lat\n        lng\n        radius\n      }\n      sport {\n        sport {\n          id\n          name {\n            EN\n            FR\n            id\n          }\n        }\n      }\n      circleType\n      memberTypes\n      modes\n      owners {\n        id\n        pseudo\n      }\n    }\n    savedCircleFilters {\n      id\n      filterName\n      canBeDeleted\n      location {\n        lat\n        lng\n        radius\n      }\n      sport {\n        sport {\n          id\n          name {\n            EN\n            FR\n            id\n          }\n        }\n      }\n      circleType\n      memberTypes\n      modes\n      owners {\n        id\n        pseudo\n      }\n    }\n    ...AllCircleMembers_user\n    ...InformationForms_user\n    ...AddEditInformationForms_user\n    ...FormDetails_user\n    ...PaymentModelDetails_user\n    ...PaymentModels_user\n    ...AddEditPaymentModels_user\n    ...TermOfUse_user\n    subAccounts {\n      id\n      pseudo\n      circles(last: 30) {\n        edges {\n          node {\n            id\n            name\n            memberCount\n          }\n        }\n      }\n    }\n    masterAccount {\n      id\n      subAccounts {\n        id\n        pseudo\n        circles(last: 30) {\n          edges {\n            node {\n              id\n              name\n              memberCount\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment AllCircleMembers_viewer on Viewer {\n  ...MemberCard_viewer\n  ...MemberRow_viewer\n  ...MembersInformation_viewer\n}\n\nfragment InformationForms_viewer on Viewer {\n  id\n}\n\nfragment AddEditInformationForms_viewer on Viewer {\n  id\n  ...SearchModal_viewer\n}\n\nfragment FormDetails_viewer on Viewer {\n  id\n}\n\nfragment PaymentModelDetails_viewer on Viewer {\n  id\n}\n\nfragment PaymentModels_viewer on Viewer {\n  id\n}\n\nfragment AddEditPaymentModels_viewer on Viewer {\n  id\n  ...SearchModal_viewer\n}\n\nfragment AllCircleMembers_user on User {\n  profileType\n  termsOfUses {\n    id\n    name\n    acceptedBy {\n      user {\n        id\n      }\n    }\n  }\n}\n\nfragment InformationForms_user on User {\n  id\n}\n\nfragment AddEditInformationForms_user on User {\n  id\n}\n\nfragment FormDetails_user on User {\n  id\n}\n\nfragment PaymentModelDetails_user on User {\n  id\n}\n\nfragment PaymentModels_user on User {\n  id\n  mangoId\n}\n\nfragment AddEditPaymentModels_user on User {\n  id\n  paymentModelFees\n}\n\nfragment TermOfUse_user on User {\n  id\n}\n\nfragment SearchModal_viewer on Viewer {\n  me {\n    id\n  }\n}\n\nfragment MemberCard_viewer on Viewer {\n  id\n}\n\nfragment MemberRow_viewer on Viewer {\n  id\n}\n\nfragment MembersInformation_viewer on Viewer {\n  id\n  ...MembersDetailledInformation_viewer\n}\n\nfragment MembersDetailledInformation_viewer on Viewer {\n  id\n  me {\n    pseudo\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_SubAccountCircleCreation_Query",
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
            "name": "MyCircles_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_SubAccountCircleCreation_Query",
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
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "savedCircleFilters",
                "storageKey": null,
                "args": null,
                "concreteType": "UserCircleFilter",
                "plural": true,
                "selections": [
                  v0,
                  v1,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "canBeDeleted",
                    "args": null,
                    "storageKey": null
                  },
                  v2,
                  v5,
                  v6,
                  v7,
                  v8,
                  v10
                ]
              },
              v9,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "profileType",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isSubAccount",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "basicCircleSavedFiltersCreated",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "defaultSavedCircleFilter",
                "storageKey": null,
                "args": null,
                "concreteType": "UserCircleFilter",
                "plural": false,
                "selections": [
                  v0,
                  v1,
                  v2,
                  v5,
                  v6,
                  v7,
                  v8,
                  v10
                ]
              },
              v0,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "termsOfUses",
                "storageKey": null,
                "args": null,
                "concreteType": "CircleTermsOfUse",
                "plural": true,
                "selections": [
                  v0,
                  v11,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "acceptedBy",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "TermsOfUseAcceptedBy",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "user",
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
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "mangoId",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "paymentModelFees",
                "args": null,
                "storageKey": null
              },
              v12,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "masterAccount",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  v0,
                  v12
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": "myCirclesSports",
            "name": "sports",
            "storageKey": "sports(first:10,language:\"EN\")",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 10,
                "type": "Int"
              },
              {
                "kind": "Literal",
                "name": "language",
                "value": "EN",
                "type": "SupportedLanguage"
              }
            ],
            "concreteType": "SportConnection",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "count",
                "args": null,
                "storageKey": null
              },
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
                          v3,
                          v4,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "DE",
                            "args": null,
                            "storageKey": null
                          },
                          v0
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "logo",
                        "args": null,
                        "storageKey": null
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
                            "selections": v13
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "FR",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportLevel",
                            "plural": false,
                            "selections": v13
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "DE",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportLevel",
                            "plural": false,
                            "selections": v13
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
(node/*: any*/).hash = '93fe3391a7c4dc789087cbd1e81b5562';
module.exports = node;
