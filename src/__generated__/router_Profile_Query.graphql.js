/**
 * @flow
 * @relayHash 741b9638768735d000f5774473b446d4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Profile_viewer$ref = any;
export type router_Profile_QueryVariables = {||};
export type router_Profile_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Profile_viewer$ref
  |}
|};
export type router_Profile_Query = {|
  variables: router_Profile_QueryVariables,
  response: router_Profile_QueryResponse,
|};
*/


/*
query router_Profile_Query {
  viewer {
    ...Profile_viewer
    id
  }
}

fragment Profile_viewer on Viewer {
  id
  ...Sports_viewer
  languages {
    ...Languages_languages
    id
  }
  me {
    id
    pseudo
    email
    avatar
    firstName
    lastName
    description
    sex
    profileType
    birthday
    hideMyAge
    address {
      ...Address_address
    }
    publicAddress {
      ...PublicAddress_publicAddress
    }
    languages {
      id
      code
      name
      ...Languages_languages
    }
    sports {
      ...Sports_meSports
      sport {
        id
        type
        logo
        name {
          EN
          DE
          FR
          id
        }
      }
      levels {
        id
        EN {
          name
        }
        DE {
          name
        }
        FR {
          name
        }
      }
      positions {
        id
        EN
        DE
        FR
      }
      certificates {
        certificate {
          id
          name {
            EN
            FR
            DE
            id
          }
        }
      }
      assistantType {
        id
        name {
          EN
          DE
          FR
          id
        }
      }
    }
  }
}

fragment Sports_viewer on Viewer {
  ...AddSport_viewer
}

fragment Languages_languages on Language {
  id
  code
  name
}

fragment Address_address on AddressModel {
  address
  country
  city
  zip
}

fragment PublicAddress_publicAddress on AddressModel {
  country
  city
}

fragment Sports_meSports on SportDescriptor {
  sport {
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
        skillLevel
        name
        description
      }
      FR {
        skillLevel
        name
        description
      }
      DE {
        skillLevel
        name
        description
      }
    }
    positions {
      EN
      FR
      DE
      id
    }
    assistantTypes {
      id
      name {
        EN
        DE
        FR
        id
      }
    }
  }
}

fragment AddSport_viewer on Viewer {
  sports(first: 10, language: EN) {
    edges {
      node {
        id
        type
        name {
          EN
          FR
          DE
          id
        }
        logo
        positions {
          id
          EN
          FR
          DE
        }
        certificates {
          id
          name {
            id
            EN
            FR
            DE
          }
        }
        levels {
          id
          EN {
            skillLevel
            name
            description
          }
          FR {
            skillLevel
            name
            description
          }
          DE {
            skillLevel
            name
            description
          }
        }
        assistantTypes {
          id
          name {
            EN
            FR
            DE
            id
          }
        }
      }
    }
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
  "name": "type",
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
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "DE",
  "args": null,
  "storageKey": null
},
v5 = [
  v2,
  v3,
  v4,
  v0
],
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": v5
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "logo",
  "args": null,
  "storageKey": null
},
v8 = [
  v0,
  v2,
  v3,
  v4
],
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v11 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "skillLevel",
    "args": null,
    "storageKey": null
  },
  v9,
  v10
],
v12 = {
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
      "selections": v11
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "FR",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v11
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "DE",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v11
    }
  ]
},
v13 = [
  v0,
  v6
],
v14 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "languages",
  "storageKey": null,
  "args": null,
  "concreteType": "Language",
  "plural": true,
  "selections": [
    v0,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "code",
      "args": null,
      "storageKey": null
    },
    v9
  ]
},
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "country",
  "args": null,
  "storageKey": null
},
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "city",
  "args": null,
  "storageKey": null
},
v17 = [
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
      v4,
      v3,
      v0
    ]
  }
],
v18 = [
  v9
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "router_Profile_Query",
  "id": null,
  "text": "query router_Profile_Query {\n  viewer {\n    ...Profile_viewer\n    id\n  }\n}\n\nfragment Profile_viewer on Viewer {\n  id\n  ...Sports_viewer\n  languages {\n    ...Languages_languages\n    id\n  }\n  me {\n    id\n    pseudo\n    email\n    avatar\n    firstName\n    lastName\n    description\n    sex\n    profileType\n    birthday\n    hideMyAge\n    address {\n      ...Address_address\n    }\n    publicAddress {\n      ...PublicAddress_publicAddress\n    }\n    languages {\n      id\n      code\n      name\n      ...Languages_languages\n    }\n    sports {\n      ...Sports_meSports\n      sport {\n        id\n        type\n        logo\n        name {\n          EN\n          DE\n          FR\n          id\n        }\n      }\n      levels {\n        id\n        EN {\n          name\n        }\n        DE {\n          name\n        }\n        FR {\n          name\n        }\n      }\n      positions {\n        id\n        EN\n        DE\n        FR\n      }\n      certificates {\n        certificate {\n          id\n          name {\n            EN\n            FR\n            DE\n            id\n          }\n        }\n      }\n      assistantType {\n        id\n        name {\n          EN\n          DE\n          FR\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment Sports_viewer on Viewer {\n  ...AddSport_viewer\n}\n\nfragment Languages_languages on Language {\n  id\n  code\n  name\n}\n\nfragment Address_address on AddressModel {\n  address\n  country\n  city\n  zip\n}\n\nfragment PublicAddress_publicAddress on AddressModel {\n  country\n  city\n}\n\nfragment Sports_meSports on SportDescriptor {\n  sport {\n    id\n    name {\n      EN\n      FR\n      DE\n      id\n    }\n    logo\n    levels {\n      id\n      EN {\n        skillLevel\n        name\n        description\n      }\n      FR {\n        skillLevel\n        name\n        description\n      }\n      DE {\n        skillLevel\n        name\n        description\n      }\n    }\n    positions {\n      EN\n      FR\n      DE\n      id\n    }\n    assistantTypes {\n      id\n      name {\n        EN\n        DE\n        FR\n        id\n      }\n    }\n  }\n}\n\nfragment AddSport_viewer on Viewer {\n  sports(first: 10, language: EN) {\n    edges {\n      node {\n        id\n        type\n        name {\n          EN\n          FR\n          DE\n          id\n        }\n        logo\n        positions {\n          id\n          EN\n          FR\n          DE\n        }\n        certificates {\n          id\n          name {\n            id\n            EN\n            FR\n            DE\n          }\n        }\n        levels {\n          id\n          EN {\n            skillLevel\n            name\n            description\n          }\n          FR {\n            skillLevel\n            name\n            description\n          }\n          DE {\n            skillLevel\n            name\n            description\n          }\n        }\n        assistantTypes {\n          id\n          name {\n            EN\n            FR\n            DE\n            id\n          }\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_Profile_Query",
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
            "name": "Profile_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_Profile_Query",
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
                      v1,
                      v6,
                      v7,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "positions",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "TranslatedString",
                        "plural": true,
                        "selections": v8
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
                          v0,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "name",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "TranslatedString",
                            "plural": false,
                            "selections": v8
                          }
                        ]
                      },
                      v12,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "assistantTypes",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "AssistantType",
                        "plural": true,
                        "selections": v13
                      }
                    ]
                  }
                ]
              }
            ]
          },
          v14,
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
                "kind": "ScalarField",
                "alias": null,
                "name": "sex",
                "args": null,
                "storageKey": null
              },
              v0,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "email",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "avatar",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "firstName",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "lastName",
                "args": null,
                "storageKey": null
              },
              v10,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "pseudo",
                "args": null,
                "storageKey": null
              },
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
                "name": "birthday",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hideMyAge",
                "args": null,
                "storageKey": null
              },
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
                  v15,
                  v16,
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
                "name": "publicAddress",
                "storageKey": null,
                "args": null,
                "concreteType": "AddressModel",
                "plural": false,
                "selections": [
                  v15,
                  v16
                ]
              },
              v14,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "sports",
                "storageKey": null,
                "args": null,
                "concreteType": "SportDescriptor",
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
                      v6,
                      v7,
                      v12,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "positions",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "TranslatedString",
                        "plural": true,
                        "selections": v5
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "assistantTypes",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "AssistantType",
                        "plural": true,
                        "selections": v17
                      },
                      v1
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
                        "selections": v18
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "DE",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SportLevel",
                        "plural": false,
                        "selections": v18
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "FR",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SportLevel",
                        "plural": false,
                        "selections": v18
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
                    "selections": [
                      v0,
                      v2,
                      v4,
                      v3
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "certificates",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CertificateDescriptor",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "certificate",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Certificate",
                        "plural": false,
                        "selections": v13
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "assistantType",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AssistantType",
                    "plural": true,
                    "selections": v17
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
(node/*: any*/).hash = '798ca06b4c4665fde97e7e272479a4fd';
module.exports = node;
