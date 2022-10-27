/**
 * @flow
 * @relayHash b2c0ca84b5cf9e07911d8dd96221978a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Facility_viewer$ref = any;
export type router_Facility_QueryVariables = {|
  venueId?: ?string
|};
export type router_Facility_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Facility_viewer$ref
  |}
|};
export type router_Facility_Query = {|
  variables: router_Facility_QueryVariables,
  response: router_Facility_QueryResponse,
|};
*/


/*
query router_Facility_Query(
  $venueId: ID
) {
  viewer {
    ...Facility_viewer_1D9fpR
    id
  }
}

fragment Facility_viewer_1D9fpR on Viewer {
  ...NewFacility_viewer
  ...EditFacility_viewer
  ...EditVenue_viewer
  id
  me {
    id
    avatar
  }
  venue(id: $venueId) {
    ...EditVenue_venue
    ...EditFacility_venue
    ...NewFacility_venue
    id
    name
    infrastructures {
      id
      name
      logo
      sport {
        id
        logo
        name {
          EN
          FR
          id
        }
      }
      authorized_managers {
        user {
          id
          pseudo
        }
        circle {
          id
          name
        }
      }
    }
    price {
      currency
      cents
    }
  }
}

fragment NewFacility_viewer on Viewer {
  id
  me {
    id
    pseudo
    subAccounts {
      id
      pseudo
    }
    circles(last: 100) {
      edges {
        node {
          id
          name
          memberCount
        }
      }
    }
    allCircleMembers {
      user {
        id
        pseudo
        avatar
      }
    }
  }
  sports(first: 10) {
    ...SportList_allSports
  }
}

fragment EditFacility_viewer on Viewer {
  id
  me {
    id
    pseudo
    subAccounts {
      id
      pseudo
    }
    circles(last: 100) {
      edges {
        node {
          id
          name
          memberCount
        }
      }
    }
    allCircleMembers {
      user {
        id
        pseudo
        avatar
      }
    }
  }
  sports(first: 10) {
    ...SportList_allSports
  }
}

fragment EditVenue_viewer on Viewer {
  me {
    venues(last: 100) {
      edges {
        node {
          id
          name
        }
      }
    }
    id
  }
}

fragment EditVenue_venue on Venue {
  id
  name
  address {
    address
    country
    city
    zip
  }
}

fragment EditFacility_venue on Venue {
  id
  infrastructures {
    sport {
      ...SportList_sports
      id
    }
    authorized_managers {
      user {
        id
        pseudo
      }
      circle {
        id
        name
      }
    }
    id
  }
}

fragment NewFacility_venue on Venue {
  id
  infrastructures {
    sport {
      ...SportList_sports
      id
    }
    authorized_managers {
      user {
        id
        pseudo
      }
      circle {
        id
        name
      }
    }
    id
  }
}

fragment SportList_sports on Sport {
  id
  logo
  name {
    EN
    FR
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
  }
  positions {
    EN
    FR
    id
  }
  certificates {
    id
    name {
      EN
      FR
      id
    }
  }
  status
}

fragment SportList_allSports on SportConnection {
  edges {
    node {
      id
      name {
        id
        EN
        FR
      }
      logo
      status
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "venueId",
    "type": "ID",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
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
  v2
],
v4 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 100,
    "type": "Int"
  }
],
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v7 = [
  v1,
  v5
],
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "EN",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "FR",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "logo",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v12 = [
  v8,
  v9,
  v1
],
v13 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": v12
},
v14 = [
  v5,
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
  "name": "router_Facility_Query",
  "id": null,
  "text": "query router_Facility_Query(\n  $venueId: ID\n) {\n  viewer {\n    ...Facility_viewer_1D9fpR\n    id\n  }\n}\n\nfragment Facility_viewer_1D9fpR on Viewer {\n  ...NewFacility_viewer\n  ...EditFacility_viewer\n  ...EditVenue_viewer\n  id\n  me {\n    id\n    avatar\n  }\n  venue(id: $venueId) {\n    ...EditVenue_venue\n    ...EditFacility_venue\n    ...NewFacility_venue\n    id\n    name\n    infrastructures {\n      id\n      name\n      logo\n      sport {\n        id\n        logo\n        name {\n          EN\n          FR\n          id\n        }\n      }\n      authorized_managers {\n        user {\n          id\n          pseudo\n        }\n        circle {\n          id\n          name\n        }\n      }\n    }\n    price {\n      currency\n      cents\n    }\n  }\n}\n\nfragment NewFacility_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n    subAccounts {\n      id\n      pseudo\n    }\n    circles(last: 100) {\n      edges {\n        node {\n          id\n          name\n          memberCount\n        }\n      }\n    }\n    allCircleMembers {\n      user {\n        id\n        pseudo\n        avatar\n      }\n    }\n  }\n  sports(first: 10) {\n    ...SportList_allSports\n  }\n}\n\nfragment EditFacility_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n    subAccounts {\n      id\n      pseudo\n    }\n    circles(last: 100) {\n      edges {\n        node {\n          id\n          name\n          memberCount\n        }\n      }\n    }\n    allCircleMembers {\n      user {\n        id\n        pseudo\n        avatar\n      }\n    }\n  }\n  sports(first: 10) {\n    ...SportList_allSports\n  }\n}\n\nfragment EditVenue_viewer on Viewer {\n  me {\n    venues(last: 100) {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment EditVenue_venue on Venue {\n  id\n  name\n  address {\n    address\n    country\n    city\n    zip\n  }\n}\n\nfragment EditFacility_venue on Venue {\n  id\n  infrastructures {\n    sport {\n      ...SportList_sports\n      id\n    }\n    authorized_managers {\n      user {\n        id\n        pseudo\n      }\n      circle {\n        id\n        name\n      }\n    }\n    id\n  }\n}\n\nfragment NewFacility_venue on Venue {\n  id\n  infrastructures {\n    sport {\n      ...SportList_sports\n      id\n    }\n    authorized_managers {\n      user {\n        id\n        pseudo\n      }\n      circle {\n        id\n        name\n      }\n    }\n    id\n  }\n}\n\nfragment SportList_sports on Sport {\n  id\n  logo\n  name {\n    EN\n    FR\n    id\n  }\n  levels {\n    id\n    EN {\n      name\n      description\n      skillLevel\n    }\n    FR {\n      name\n      description\n      skillLevel\n    }\n  }\n  positions {\n    EN\n    FR\n    id\n  }\n  certificates {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n  }\n  status\n}\n\nfragment SportList_allSports on SportConnection {\n  edges {\n    node {\n      id\n      name {\n        id\n        EN\n        FR\n      }\n      logo\n      status\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_Facility_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
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
            "name": "Facility_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "venueId",
                "variableName": "venueId",
                "type": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_Facility_Query",
    "argumentDefinitions": v0,
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
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "me",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v1,
              v2,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "subAccounts",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v3
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "circles",
                "storageKey": "circles(last:100)",
                "args": v4,
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
                          v1,
                          v5,
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
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "allCircleMembers",
                "storageKey": null,
                "args": null,
                "concreteType": "CircleMemberOutput",
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
                      v1,
                      v2,
                      v6
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "venues",
                "storageKey": "venues(last:100)",
                "args": v4,
                "concreteType": "VenueConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "VenueEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Venue",
                        "plural": false,
                        "selections": v7
                      }
                    ]
                  }
                ]
              },
              v6
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "sports",
            "storageKey": "sports(first:10)",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 10,
                "type": "Int"
              }
            ],
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
                      v1,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "name",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "TranslatedString",
                        "plural": false,
                        "selections": [
                          v1,
                          v8,
                          v9
                        ]
                      },
                      v10,
                      v11
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "venue",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "id",
                "variableName": "venueId",
                "type": "ID"
              }
            ],
            "concreteType": "Venue",
            "plural": false,
            "selections": [
              v1,
              v5,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "address",
                "storageKey": null,
                "args": null,
                "concreteType": "AddressModel",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "address",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "country",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "city",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "zip",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "infrastructures",
                "storageKey": null,
                "args": null,
                "concreteType": "Infrastructure",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sport",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Sport",
                    "plural": true,
                    "selections": [
                      v1,
                      v10,
                      v13,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "levels",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Translated",
                        "plural": true,
                        "selections": [
                          v1,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "EN",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportLevel",
                            "plural": false,
                            "selections": v14
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "FR",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportLevel",
                            "plural": false,
                            "selections": v14
                          }
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "positions",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "TranslatedString",
                        "plural": true,
                        "selections": v12
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "certificates",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Certificate",
                        "plural": true,
                        "selections": [
                          v1,
                          v13
                        ]
                      },
                      v11
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "authorized_managers",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "InfrastructureAuthorizedManager",
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
                        "selections": v3
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "circle",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Circle",
                        "plural": false,
                        "selections": v7
                      }
                    ]
                  },
                  v1,
                  v5,
                  v10
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "price",
                "storageKey": null,
                "args": null,
                "concreteType": "Price",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "currency",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cents",
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
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6f5ee9dbdb38c3bd113f69ffa1f6db64';
module.exports = node;
