/**
 * @flow
 * @relayHash 90c9baaeaeaf87351d4801ad6146e87e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ManageVenue_viewer$ref = any;
export type router_ManageVenue_QueryVariables = {||};
export type router_ManageVenue_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: ManageVenue_viewer$ref
  |}
|};
export type router_ManageVenue_Query = {|
  variables: router_ManageVenue_QueryVariables,
  response: router_ManageVenue_QueryResponse,
|};
*/


/*
query router_ManageVenue_Query {
  viewer {
    ...ManageVenue_viewer
    id
  }
}

fragment ManageVenue_viewer on Viewer {
  ...ManageVenueSidebar_viewer
  ...ManageVenueCalendarSidebar_viewer
  ...ManageVenueBigCalendar_viewer
  ...ManageVenueVenues_viewer
  ...EditVenue_viewer
  ...Facility_viewer
  id
  me {
    id
    circles(last: 100) {
      edges {
        node {
          id
          name
          memberCount
        }
      }
    }
    venues(last: 100) {
      edges {
        node {
          id
          name
          infrastructures {
            id
            name
            sport {
              id
            }
          }
        }
      }
    }
  }
}

fragment ManageVenueSidebar_viewer on Viewer {
  ...ManageVenueVenues_viewer
}

fragment ManageVenueCalendarSidebar_viewer on Viewer {
  ...ManageVenueNewTimeSlot_viewer
}

fragment ManageVenueBigCalendar_viewer on Viewer {
  id
  ...ManageVenueNewOrEditTimeSlotModal_viewer
}

fragment ManageVenueVenues_viewer on Viewer {
  me {
    venues(last: 100) {
      edges {
        node {
          id
          name
          infrastructures {
            id
            name
            sport {
              id
            }
          }
        }
      }
    }
    id
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

fragment Facility_viewer on Viewer {
  ...NewFacility_viewer
  ...EditFacility_viewer
  ...EditVenue_viewer
  id
  me {
    id
    avatar
  }
  venue {
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

fragment ManageVenueNewOrEditTimeSlotModal_viewer on Viewer {
  me {
    id
    circles(last: 100) {
      edges {
        node {
          id
          name
          memberCount
        }
      }
    }
  }
  ...ManageVenueSubmit_viewer
  manageVenueNewOrEditTimeSlotModalUserExists: userExists(pseudo: "_", email: "_")
}

fragment ManageVenueSubmit_viewer on Viewer {
  me {
    id
    isProfileComplete
    bankAccount {
      id
    }
    appCurrency
  }
}

fragment ManageVenueNewTimeSlot_viewer on Viewer {
  ...ManageVenueNewOrEditTimeSlotModal_viewer
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 100,
    "type": "Int"
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = [
  v1
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v5 = [
  v1,
  v4
],
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "EN",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "FR",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "logo",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v11 = [
  v7,
  v8,
  v1
],
v12 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": v11
},
v13 = [
  v2,
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
  "name": "router_ManageVenue_Query",
  "id": null,
  "text": "query router_ManageVenue_Query {\n  viewer {\n    ...ManageVenue_viewer\n    id\n  }\n}\n\nfragment ManageVenue_viewer on Viewer {\n  ...ManageVenueSidebar_viewer\n  ...ManageVenueCalendarSidebar_viewer\n  ...ManageVenueBigCalendar_viewer\n  ...ManageVenueVenues_viewer\n  ...EditVenue_viewer\n  ...Facility_viewer\n  id\n  me {\n    id\n    circles(last: 100) {\n      edges {\n        node {\n          id\n          name\n          memberCount\n        }\n      }\n    }\n    venues(last: 100) {\n      edges {\n        node {\n          id\n          name\n          infrastructures {\n            id\n            name\n            sport {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment ManageVenueSidebar_viewer on Viewer {\n  ...ManageVenueVenues_viewer\n}\n\nfragment ManageVenueCalendarSidebar_viewer on Viewer {\n  ...ManageVenueNewTimeSlot_viewer\n}\n\nfragment ManageVenueBigCalendar_viewer on Viewer {\n  id\n  ...ManageVenueNewOrEditTimeSlotModal_viewer\n}\n\nfragment ManageVenueVenues_viewer on Viewer {\n  me {\n    venues(last: 100) {\n      edges {\n        node {\n          id\n          name\n          infrastructures {\n            id\n            name\n            sport {\n              id\n            }\n          }\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment EditVenue_viewer on Viewer {\n  me {\n    venues(last: 100) {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment Facility_viewer on Viewer {\n  ...NewFacility_viewer\n  ...EditFacility_viewer\n  ...EditVenue_viewer\n  id\n  me {\n    id\n    avatar\n  }\n  venue {\n    ...EditVenue_venue\n    ...EditFacility_venue\n    ...NewFacility_venue\n    id\n    name\n    infrastructures {\n      id\n      name\n      logo\n      sport {\n        id\n        logo\n        name {\n          EN\n          FR\n          id\n        }\n      }\n      authorized_managers {\n        user {\n          id\n          pseudo\n        }\n        circle {\n          id\n          name\n        }\n      }\n    }\n    price {\n      currency\n      cents\n    }\n  }\n}\n\nfragment NewFacility_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n    subAccounts {\n      id\n      pseudo\n    }\n    circles(last: 100) {\n      edges {\n        node {\n          id\n          name\n          memberCount\n        }\n      }\n    }\n    allCircleMembers {\n      user {\n        id\n        pseudo\n        avatar\n      }\n    }\n  }\n  sports(first: 10) {\n    ...SportList_allSports\n  }\n}\n\nfragment EditFacility_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n    subAccounts {\n      id\n      pseudo\n    }\n    circles(last: 100) {\n      edges {\n        node {\n          id\n          name\n          memberCount\n        }\n      }\n    }\n    allCircleMembers {\n      user {\n        id\n        pseudo\n        avatar\n      }\n    }\n  }\n  sports(first: 10) {\n    ...SportList_allSports\n  }\n}\n\nfragment EditVenue_venue on Venue {\n  id\n  name\n  address {\n    address\n    country\n    city\n    zip\n  }\n}\n\nfragment EditFacility_venue on Venue {\n  id\n  infrastructures {\n    sport {\n      ...SportList_sports\n      id\n    }\n    authorized_managers {\n      user {\n        id\n        pseudo\n      }\n      circle {\n        id\n        name\n      }\n    }\n    id\n  }\n}\n\nfragment NewFacility_venue on Venue {\n  id\n  infrastructures {\n    sport {\n      ...SportList_sports\n      id\n    }\n    authorized_managers {\n      user {\n        id\n        pseudo\n      }\n      circle {\n        id\n        name\n      }\n    }\n    id\n  }\n}\n\nfragment SportList_sports on Sport {\n  id\n  logo\n  name {\n    EN\n    FR\n    id\n  }\n  levels {\n    id\n    EN {\n      name\n      description\n      skillLevel\n    }\n    FR {\n      name\n      description\n      skillLevel\n    }\n  }\n  positions {\n    EN\n    FR\n    id\n  }\n  certificates {\n    id\n    name {\n      EN\n      FR\n      id\n    }\n  }\n  status\n}\n\nfragment SportList_allSports on SportConnection {\n  edges {\n    node {\n      id\n      name {\n        id\n        EN\n        FR\n      }\n      logo\n      status\n    }\n  }\n}\n\nfragment ManageVenueNewOrEditTimeSlotModal_viewer on Viewer {\n  me {\n    id\n    circles(last: 100) {\n      edges {\n        node {\n          id\n          name\n          memberCount\n        }\n      }\n    }\n  }\n  ...ManageVenueSubmit_viewer\n  manageVenueNewOrEditTimeSlotModalUserExists: userExists(pseudo: \"_\", email: \"_\")\n}\n\nfragment ManageVenueSubmit_viewer on Viewer {\n  me {\n    id\n    isProfileComplete\n    bankAccount {\n      id\n    }\n    appCurrency\n  }\n}\n\nfragment ManageVenueNewTimeSlot_viewer on Viewer {\n  ...ManageVenueNewOrEditTimeSlotModal_viewer\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_ManageVenue_Query",
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
            "name": "ManageVenue_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_ManageVenue_Query",
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
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "venues",
                "storageKey": "venues(last:100)",
                "args": v0,
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
                        "selections": [
                          v1,
                          v2,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "infrastructures",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Infrastructure",
                            "plural": true,
                            "selections": [
                              v1,
                              v2,
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "sport",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "Sport",
                                "plural": true,
                                "selections": v3
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              v1,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "circles",
                "storageKey": "circles(last:100)",
                "args": v0,
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
                          v2,
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
                "kind": "ScalarField",
                "alias": null,
                "name": "isProfileComplete",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "bankAccount",
                "storageKey": null,
                "args": null,
                "concreteType": "BankAccount",
                "plural": false,
                "selections": v3
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "appCurrency",
                "args": null,
                "storageKey": null
              },
              v4,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "subAccounts",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v5
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
                      v4,
                      v6
                    ]
                  }
                ]
              },
              v6
            ]
          },
          {
            "kind": "ScalarField",
            "alias": "manageVenueNewOrEditTimeSlotModalUserExists",
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
          v1,
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
                          v7,
                          v8
                        ]
                      },
                      v9,
                      v10
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
            "args": null,
            "concreteType": "Venue",
            "plural": false,
            "selections": [
              v1,
              v2,
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
                      v9,
                      v12,
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
                        "selections": v11
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
                          v12
                        ]
                      },
                      v10
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
                        "selections": v5
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "circle",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Circle",
                        "plural": false,
                        "selections": [
                          v1,
                          v2
                        ]
                      }
                    ]
                  },
                  v1,
                  v2,
                  v9
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
(node/*: any*/).hash = 'c8486bdda04239115480a43506538e25';
module.exports = node;
