/**
 * @flow
 * @relayHash fa0a5b589381aa31c77caffd31ee8b6d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MyInfo_viewer$ref = any;
export type router_MyInfo_QueryVariables = {||};
export type router_MyInfo_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: MyInfo_viewer$ref
  |}
|};
export type router_MyInfo_Query = {|
  variables: router_MyInfo_QueryVariables,
  response: router_MyInfo_QueryResponse,
|};
*/


/*
query router_MyInfo_Query {
  viewer {
    ...MyInfo_viewer
    id
  }
}

fragment MyInfo_viewer on Viewer {
  ...MyInfoInfo_viewer
  ...Payment_viewer
  ...BankAccount_viewer
  ...MyStatisticPreferences_viewer
  ...AccessRights_viewer
  ...Wallet_viewer
  ...Notification_viewer
  ...Password_viewer
  ...CirclesInformation_viewer
  ...CircleMemberships_viewer
  ...MyUserPreferences_viewer
  ...SynchronizeCalendar_viewer
  me {
    firstName
    lastName
    isSubAccount
    isProfileComplete
    address {
      address
      city
      country
    }
    ...MyInfoInfo_user
    ...BankAccount_user
    ...Payment_user
    ...Notification_user
    ...Password_user
    ...MyStatisticPreferences_user
    ...MyUserPreferences_user
    ...AccessRights_user
    ...CirclesInformation_user
    ...CircleMemberships_user
    profileType
    id
  }
}

fragment MyInfoInfo_viewer on Viewer {
  ...InfoLegal_viewer
  ...InfoNatural_viewer
  ...Payment_viewer
  ...BankAccount_viewer
  ...Wallet_viewer
}

fragment Payment_viewer on Viewer {
  me {
    id
  }
}

fragment BankAccount_viewer on Viewer {
  me {
    id
  }
}

fragment MyStatisticPreferences_viewer on Viewer {
  id
  statisticPreferences {
    private
    isManOfTheGameActivated
    userStats {
      stat0 {
        name
        id
      }
      stat1 {
        name
        id
      }
      stat2 {
        name
        id
      }
      stat3 {
        name
        id
      }
      stat4 {
        name
        id
      }
      stat5 {
        name
        id
      }
    }
  }
}

fragment AccessRights_viewer on Viewer {
  id
  me {
    id
    pseudo
    email
    profileType
    mangoId
    isProfileComplete
    isSubAccount
    userPreferences {
      areSubAccountsActivated
    }
    subAccounts {
      id
      pseudo
      email
      avatar
      numberOfUnreadNotifications
      unreadChats
      token
      authorized_managers {
        user {
          id
          avatar
          pseudo
        }
      }
    }
  }
  ...SelectUser_viewer
  ...SearchModal_viewer
}

fragment Wallet_viewer on Viewer {
  ...Transactions_viewer
  ...Fees_viewer
  ...PaymentPopup_viewer
  id
  me {
    id
    pseudo
    subAccounts {
      id
      pseudo
    }
    isProfileComplete
    mangoId
    bankAccount {
      id
    }
  }
}

fragment Notification_viewer on Viewer {
  id
  me {
    id
  }
}

fragment Password_viewer on Viewer {
  id
  me {
    id
  }
}

fragment CirclesInformation_viewer on Viewer {
  id
  me {
    id
    documents {
      id
      name
      link
      creation_date
    }
  }
  ...CirclePaymentReference_viewer
  ...FeesPaymentPopup_viewer
}

fragment CircleMemberships_viewer on Viewer {
  id
  ...CirclePaymentReference_viewer
  ...FeesPaymentPopup_viewer
}

fragment MyUserPreferences_viewer on Viewer {
  id
}

fragment SynchronizeCalendar_viewer on Viewer {
  me {
    id
    circlesUserIsIn(last: 100) {
      edges {
        node {
          owner {
            id
            pseudo
            avatar
          }
          id
        }
      }
    }
    calendar {
      users {
        id
        pseudo
      }
      preferences {
        own_synchronized_status
      }
    }
  }
}

fragment MyInfoInfo_user on User {
  ...InfoLegal_user
  ...InfoNatural_user
  ...BankAccount_user
  ...Payment_user
  profileType
  isProfileComplete
}

fragment BankAccount_user on User {
  bankAccount {
    addressLine1
    addressLine2
    city
    postalCode
    country
    ownerName
    IBAN
    BIC
    id
  }
}

fragment Payment_user on User {
  firstName
  lastName
  email
  isProfileComplete
  address {
    address
    city
    country
    zip
  }
  paymentMethods {
    id
    cardType
    cardMask
    expirationDate
    currency
  }
}

fragment Notification_user on User {
  id
  appLanguage
  notification_preferences {
    sportunityBooked
    sportunityBookerCancel
    sportunityNewInvited
    sportunityNewFollower
    sportunityModifiedParticipant
    sportunityCancelParticipant
    paymentConfirmationOnDDay
    sportunityNewMainOrganizer
    sportunityBookedOrganizer
    sportunityBookerCancelOrganizer
    sportunityCancelMainOrganizer
    sportunityModifiedMainOrganizer
    paymentReceivedMainOrganizer
    sportunityCompleteStatistics
    sportunityVoteForManOfTheGame
  }
  email_preferences {
    sportunityBooked
    sportunityBookerCancel
    sportunityNewInvited
    sportunityNewFollower
    sportunityModifiedParticipant
    sportunityCancelParticipant
    chatUnReadMessage
    paymentConfirmationOnDDay
    sportunityNewMainOrganizer
    sportunityBookedOrganizer
    sportunityBookerCancelOrganizer
    sportunityCancelMainOrganizer
    sportunityModifiedMainOrganizer
    paymentReceivedMainOrganizer
  }
}

fragment Password_user on User {
  id
}

fragment MyStatisticPreferences_user on User {
  id
  areStatisticsActivated
}

fragment MyUserPreferences_user on User {
  id
  profileType
  userPreferences {
    areSubAccountsActivated
  }
  homePagePreference
}

fragment AccessRights_user on User {
  id
  profileType
  authorized_managers {
    user {
      id
      avatar
      pseudo
    }
  }
}

fragment CirclesInformation_user on User {
  id
  mangoId
  appCurrency
  circlesInformationCircles: circlesUserIsIn(last: 100) {
    edges {
      node {
        id
        name
        owner {
          pseudo
          paymentModelFees
          bankAccount {
            addressLine1
            addressLine2
            city
            postalCode
            country
            ownerName
            IBAN
            BIC
            id
          }
          id
        }
        askedInformation {
          id
          name
          type
          answers
          filledByOwner
          form {
            id
            name
          }
        }
        membersInformation {
          id
          information
          user {
            id
          }
          value
          document {
            id
            name
          }
          validationStatus
          comment
        }
        paymentModels {
          id
          name
          paymentViaBankWireAllowed
          memberToPayFees
          inAppPaymentAllowed
          price {
            cents
            currency
          }
          memberSubscriptions {
            user {
              id
            }
            amount {
              cents
              currency
            }
            beginning_date
            ending_date
          }
          conditions {
            id
            name
            price {
              cents
              currency
            }
            conditions {
              askedInformation {
                id
                type
              }
              askedInformationComparator
              askedInformationComparatorValue
              askedInformationComparatorValueString
              askedInformationComparatorDate
            }
          }
        }
      }
    }
  }
}

fragment CircleMemberships_user on User {
  id
  mangoId
  appCurrency
  circlesCircleMemberships: circlesUserIsIn(last: 100) {
    edges {
      node {
        id
        name
        owner {
          pseudo
          paymentModelFees
          bankAccount {
            addressLine1
            addressLine2
            city
            postalCode
            country
            ownerName
            IBAN
            BIC
            id
          }
          id
        }
        askedInformation {
          id
          name
          type
          answers
          filledByOwner
          form {
            id
            name
          }
        }
        membersInformation {
          id
          information
          user {
            id
          }
          value
          document {
            id
            name
          }
          validationStatus
          comment
        }
        paymentModels {
          id
          name
          paymentViaBankWireAllowed
          memberToPayFees
          inAppPaymentAllowed
          price {
            cents
            currency
          }
          memberSubscriptions {
            user {
              id
            }
            amount {
              cents
              currency
            }
            beginning_date
            ending_date
          }
          conditions {
            id
            name
            price {
              cents
              currency
            }
            conditions {
              askedInformation {
                id
                type
              }
              askedInformationComparator
              askedInformationComparatorValue
              askedInformationComparatorValueString
              askedInformationComparatorDate
            }
          }
        }
      }
    }
  }
}

fragment InfoLegal_user on User {
  id
  appCountry
  profileType
  email
  firstName
  lastName
  birthday
  nationality
  occupation
  incomeRange
  shouldDeclareVAT
  address {
    address
    city
    country
    zip
  }
  business {
    businessName
    businessEmail
    VATNumber
    headquarterAddress {
      address
      city
      country
      zip
    }
  }
}

fragment InfoNatural_user on User {
  id
  profileType
  email
  firstName
  lastName
  birthday
  nationality
  occupation
  incomeRange
  address {
    address
    city
    country
    zip
  }
}

fragment CirclePaymentReference_viewer on Viewer {
  id
}

fragment FeesPaymentPopup_viewer on Viewer {
  id
  ...AddACard_viewer
  me {
    id
    mangoId
    bankAccount {
      id
      addressLine1
      addressLine2
      city
      postalCode
      country
      ownerName
      IBAN
      BIC
    }
    paymentMethods {
      id
      cardMask
      cardType
      expirationDate
      currency
    }
  }
  amountOnWallet {
    amountOnWallet {
      cents
      currency
    }
    amountOnWallets {
      cents
      currency
    }
    lockedAmount {
      cents
      currency
    }
  }
}

fragment AddACard_viewer on Viewer {
  me {
    id
    lastName
  }
}

fragment Transactions_viewer on Viewer {
  me {
    id
  }
}

fragment Fees_viewer on Viewer {
  ...FeesPaymentPopup_viewer
  me {
    id
  }
}

fragment PaymentPopup_viewer on Viewer {
  id
  me {
    id
    bankAccount {
      id
      addressLine1
      addressLine2
      city
      postalCode
      country
      ownerName
      IBAN
      BIC
    }
    paymentMethods {
      id
      cardMask
      cardType
      expirationDate
      currency
    }
  }
  amountOnWallet {
    amountOnWallet {
      cents
      currency
    }
    amountOnWallets {
      cents
      currency
    }
    lockedAmount {
      cents
      currency
    }
  }
}

fragment SelectUser_viewer on Viewer {
  me {
    id
  }
}

fragment SearchModal_viewer on Viewer {
  me {
    id
  }
}

fragment InfoLegal_viewer on Viewer {
  languages {
    id
    name
    code
  }
  me {
    id
  }
}

fragment InfoNatural_viewer on Viewer {
  languages {
    id
    name
    code
  }
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "city",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "country",
  "args": null,
  "storageKey": null
},
v4 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "address",
    "args": null,
    "storageKey": null
  },
  v2,
  v3,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "zip",
    "args": null,
    "storageKey": null
  }
],
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "addressLine1",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "addressLine2",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "postalCode",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "ownerName",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "IBAN",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "BIC",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "currency",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "authorized_managers",
  "storageKey": null,
  "args": null,
  "concreteType": "AuthorizedManager",
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
        v0,
        v14,
        v12
      ]
    }
  ]
},
v16 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 100,
    "type": "Int"
  }
],
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "sportunityNewMainOrganizer",
  "args": null,
  "storageKey": null
},
v18 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "sportunityBooked",
  "args": null,
  "storageKey": null
},
v19 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "sportunityNewInvited",
  "args": null,
  "storageKey": null
},
v20 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "sportunityNewFollower",
  "args": null,
  "storageKey": null
},
v21 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "sportunityModifiedParticipant",
  "args": null,
  "storageKey": null
},
v22 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "sportunityCancelParticipant",
  "args": null,
  "storageKey": null
},
v23 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "paymentConfirmationOnDDay",
  "args": null,
  "storageKey": null
},
v24 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "sportunityBookerCancel",
  "args": null,
  "storageKey": null
},
v25 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "sportunityBookedOrganizer",
  "args": null,
  "storageKey": null
},
v26 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "sportunityBookerCancelOrganizer",
  "args": null,
  "storageKey": null
},
v27 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "sportunityCancelMainOrganizer",
  "args": null,
  "storageKey": null
},
v28 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "sportunityModifiedMainOrganizer",
  "args": null,
  "storageKey": null
},
v29 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "paymentReceivedMainOrganizer",
  "args": null,
  "storageKey": null
},
v30 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v31 = [
  v0,
  v1
],
v32 = {
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
},
v33 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "cents",
    "args": null,
    "storageKey": null
  },
  v11
],
v34 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "price",
  "storageKey": null,
  "args": null,
  "concreteType": "Price",
  "plural": false,
  "selections": v33
},
v35 = [
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
            "kind": "LinkedField",
            "alias": null,
            "name": "owner",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v12,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "paymentModelFees",
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
                "selections": [
                  v5,
                  v6,
                  v2,
                  v7,
                  v3,
                  v8,
                  v9,
                  v10,
                  v0
                ]
              },
              v0
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "askedInformation",
            "storageKey": null,
            "args": null,
            "concreteType": "askedInformation",
            "plural": true,
            "selections": [
              v0,
              v1,
              v30,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "answers",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "filledByOwner",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "form",
                "storageKey": null,
                "args": null,
                "concreteType": "CircleInformationFormOutput",
                "plural": false,
                "selections": v31
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "membersInformation",
            "storageKey": null,
            "args": null,
            "concreteType": "membersInformation",
            "plural": true,
            "selections": [
              v0,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "information",
                "args": null,
                "storageKey": null
              },
              v32,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "value",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "document",
                "storageKey": null,
                "args": null,
                "concreteType": "DocumentObject",
                "plural": false,
                "selections": v31
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "validationStatus",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "comment",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "paymentModels",
            "storageKey": null,
            "args": null,
            "concreteType": "CirclePaymentModel",
            "plural": true,
            "selections": [
              v0,
              v1,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "paymentViaBankWireAllowed",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "memberToPayFees",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "inAppPaymentAllowed",
                "args": null,
                "storageKey": null
              },
              v34,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "memberSubscriptions",
                "storageKey": null,
                "args": null,
                "concreteType": "memberSubscriptions",
                "plural": true,
                "selections": [
                  v32,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "amount",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Price",
                    "plural": false,
                    "selections": v33
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "beginning_date",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "ending_date",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "conditions",
                "storageKey": null,
                "args": null,
                "concreteType": "CirclePaymentModelCondition",
                "plural": true,
                "selections": [
                  v0,
                  v1,
                  v34,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "conditions",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "PaymentModelConditionList",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "askedInformation",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "askedInformation",
                        "plural": false,
                        "selections": [
                          v0,
                          v30
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "askedInformationComparator",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "askedInformationComparatorValue",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "askedInformationComparatorValueString",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "askedInformationComparatorDate",
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
    ]
  }
],
v36 = [
  v1,
  v0
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "router_MyInfo_Query",
  "id": null,
  "text": "query router_MyInfo_Query {\n  viewer {\n    ...MyInfo_viewer\n    id\n  }\n}\n\nfragment MyInfo_viewer on Viewer {\n  ...MyInfoInfo_viewer\n  ...Payment_viewer\n  ...BankAccount_viewer\n  ...MyStatisticPreferences_viewer\n  ...AccessRights_viewer\n  ...Wallet_viewer\n  ...Notification_viewer\n  ...Password_viewer\n  ...CirclesInformation_viewer\n  ...CircleMemberships_viewer\n  ...MyUserPreferences_viewer\n  ...SynchronizeCalendar_viewer\n  me {\n    firstName\n    lastName\n    isSubAccount\n    isProfileComplete\n    address {\n      address\n      city\n      country\n    }\n    ...MyInfoInfo_user\n    ...BankAccount_user\n    ...Payment_user\n    ...Notification_user\n    ...Password_user\n    ...MyStatisticPreferences_user\n    ...MyUserPreferences_user\n    ...AccessRights_user\n    ...CirclesInformation_user\n    ...CircleMemberships_user\n    profileType\n    id\n  }\n}\n\nfragment MyInfoInfo_viewer on Viewer {\n  ...InfoLegal_viewer\n  ...InfoNatural_viewer\n  ...Payment_viewer\n  ...BankAccount_viewer\n  ...Wallet_viewer\n}\n\nfragment Payment_viewer on Viewer {\n  me {\n    id\n  }\n}\n\nfragment BankAccount_viewer on Viewer {\n  me {\n    id\n  }\n}\n\nfragment MyStatisticPreferences_viewer on Viewer {\n  id\n  statisticPreferences {\n    private\n    isManOfTheGameActivated\n    userStats {\n      stat0 {\n        name\n        id\n      }\n      stat1 {\n        name\n        id\n      }\n      stat2 {\n        name\n        id\n      }\n      stat3 {\n        name\n        id\n      }\n      stat4 {\n        name\n        id\n      }\n      stat5 {\n        name\n        id\n      }\n    }\n  }\n}\n\nfragment AccessRights_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n    email\n    profileType\n    mangoId\n    isProfileComplete\n    isSubAccount\n    userPreferences {\n      areSubAccountsActivated\n    }\n    subAccounts {\n      id\n      pseudo\n      email\n      avatar\n      numberOfUnreadNotifications\n      unreadChats\n      token\n      authorized_managers {\n        user {\n          id\n          avatar\n          pseudo\n        }\n      }\n    }\n  }\n  ...SelectUser_viewer\n  ...SearchModal_viewer\n}\n\nfragment Wallet_viewer on Viewer {\n  ...Transactions_viewer\n  ...Fees_viewer\n  ...PaymentPopup_viewer\n  id\n  me {\n    id\n    pseudo\n    subAccounts {\n      id\n      pseudo\n    }\n    isProfileComplete\n    mangoId\n    bankAccount {\n      id\n    }\n  }\n}\n\nfragment Notification_viewer on Viewer {\n  id\n  me {\n    id\n  }\n}\n\nfragment Password_viewer on Viewer {\n  id\n  me {\n    id\n  }\n}\n\nfragment CirclesInformation_viewer on Viewer {\n  id\n  me {\n    id\n    documents {\n      id\n      name\n      link\n      creation_date\n    }\n  }\n  ...CirclePaymentReference_viewer\n  ...FeesPaymentPopup_viewer\n}\n\nfragment CircleMemberships_viewer on Viewer {\n  id\n  ...CirclePaymentReference_viewer\n  ...FeesPaymentPopup_viewer\n}\n\nfragment MyUserPreferences_viewer on Viewer {\n  id\n}\n\nfragment SynchronizeCalendar_viewer on Viewer {\n  me {\n    id\n    circlesUserIsIn(last: 100) {\n      edges {\n        node {\n          owner {\n            id\n            pseudo\n            avatar\n          }\n          id\n        }\n      }\n    }\n    calendar {\n      users {\n        id\n        pseudo\n      }\n      preferences {\n        own_synchronized_status\n      }\n    }\n  }\n}\n\nfragment MyInfoInfo_user on User {\n  ...InfoLegal_user\n  ...InfoNatural_user\n  ...BankAccount_user\n  ...Payment_user\n  profileType\n  isProfileComplete\n}\n\nfragment BankAccount_user on User {\n  bankAccount {\n    addressLine1\n    addressLine2\n    city\n    postalCode\n    country\n    ownerName\n    IBAN\n    BIC\n    id\n  }\n}\n\nfragment Payment_user on User {\n  firstName\n  lastName\n  email\n  isProfileComplete\n  address {\n    address\n    city\n    country\n    zip\n  }\n  paymentMethods {\n    id\n    cardType\n    cardMask\n    expirationDate\n    currency\n  }\n}\n\nfragment Notification_user on User {\n  id\n  appLanguage\n  notification_preferences {\n    sportunityBooked\n    sportunityBookerCancel\n    sportunityNewInvited\n    sportunityNewFollower\n    sportunityModifiedParticipant\n    sportunityCancelParticipant\n    paymentConfirmationOnDDay\n    sportunityNewMainOrganizer\n    sportunityBookedOrganizer\n    sportunityBookerCancelOrganizer\n    sportunityCancelMainOrganizer\n    sportunityModifiedMainOrganizer\n    paymentReceivedMainOrganizer\n    sportunityCompleteStatistics\n    sportunityVoteForManOfTheGame\n  }\n  email_preferences {\n    sportunityBooked\n    sportunityBookerCancel\n    sportunityNewInvited\n    sportunityNewFollower\n    sportunityModifiedParticipant\n    sportunityCancelParticipant\n    chatUnReadMessage\n    paymentConfirmationOnDDay\n    sportunityNewMainOrganizer\n    sportunityBookedOrganizer\n    sportunityBookerCancelOrganizer\n    sportunityCancelMainOrganizer\n    sportunityModifiedMainOrganizer\n    paymentReceivedMainOrganizer\n  }\n}\n\nfragment Password_user on User {\n  id\n}\n\nfragment MyStatisticPreferences_user on User {\n  id\n  areStatisticsActivated\n}\n\nfragment MyUserPreferences_user on User {\n  id\n  profileType\n  userPreferences {\n    areSubAccountsActivated\n  }\n  homePagePreference\n}\n\nfragment AccessRights_user on User {\n  id\n  profileType\n  authorized_managers {\n    user {\n      id\n      avatar\n      pseudo\n    }\n  }\n}\n\nfragment CirclesInformation_user on User {\n  id\n  mangoId\n  appCurrency\n  circlesInformationCircles: circlesUserIsIn(last: 100) {\n    edges {\n      node {\n        id\n        name\n        owner {\n          pseudo\n          paymentModelFees\n          bankAccount {\n            addressLine1\n            addressLine2\n            city\n            postalCode\n            country\n            ownerName\n            IBAN\n            BIC\n            id\n          }\n          id\n        }\n        askedInformation {\n          id\n          name\n          type\n          answers\n          filledByOwner\n          form {\n            id\n            name\n          }\n        }\n        membersInformation {\n          id\n          information\n          user {\n            id\n          }\n          value\n          document {\n            id\n            name\n          }\n          validationStatus\n          comment\n        }\n        paymentModels {\n          id\n          name\n          paymentViaBankWireAllowed\n          memberToPayFees\n          inAppPaymentAllowed\n          price {\n            cents\n            currency\n          }\n          memberSubscriptions {\n            user {\n              id\n            }\n            amount {\n              cents\n              currency\n            }\n            beginning_date\n            ending_date\n          }\n          conditions {\n            id\n            name\n            price {\n              cents\n              currency\n            }\n            conditions {\n              askedInformation {\n                id\n                type\n              }\n              askedInformationComparator\n              askedInformationComparatorValue\n              askedInformationComparatorValueString\n              askedInformationComparatorDate\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment CircleMemberships_user on User {\n  id\n  mangoId\n  appCurrency\n  circlesCircleMemberships: circlesUserIsIn(last: 100) {\n    edges {\n      node {\n        id\n        name\n        owner {\n          pseudo\n          paymentModelFees\n          bankAccount {\n            addressLine1\n            addressLine2\n            city\n            postalCode\n            country\n            ownerName\n            IBAN\n            BIC\n            id\n          }\n          id\n        }\n        askedInformation {\n          id\n          name\n          type\n          answers\n          filledByOwner\n          form {\n            id\n            name\n          }\n        }\n        membersInformation {\n          id\n          information\n          user {\n            id\n          }\n          value\n          document {\n            id\n            name\n          }\n          validationStatus\n          comment\n        }\n        paymentModels {\n          id\n          name\n          paymentViaBankWireAllowed\n          memberToPayFees\n          inAppPaymentAllowed\n          price {\n            cents\n            currency\n          }\n          memberSubscriptions {\n            user {\n              id\n            }\n            amount {\n              cents\n              currency\n            }\n            beginning_date\n            ending_date\n          }\n          conditions {\n            id\n            name\n            price {\n              cents\n              currency\n            }\n            conditions {\n              askedInformation {\n                id\n                type\n              }\n              askedInformationComparator\n              askedInformationComparatorValue\n              askedInformationComparatorValueString\n              askedInformationComparatorDate\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment InfoLegal_user on User {\n  id\n  appCountry\n  profileType\n  email\n  firstName\n  lastName\n  birthday\n  nationality\n  occupation\n  incomeRange\n  shouldDeclareVAT\n  address {\n    address\n    city\n    country\n    zip\n  }\n  business {\n    businessName\n    businessEmail\n    VATNumber\n    headquarterAddress {\n      address\n      city\n      country\n      zip\n    }\n  }\n}\n\nfragment InfoNatural_user on User {\n  id\n  profileType\n  email\n  firstName\n  lastName\n  birthday\n  nationality\n  occupation\n  incomeRange\n  address {\n    address\n    city\n    country\n    zip\n  }\n}\n\nfragment CirclePaymentReference_viewer on Viewer {\n  id\n}\n\nfragment FeesPaymentPopup_viewer on Viewer {\n  id\n  ...AddACard_viewer\n  me {\n    id\n    mangoId\n    bankAccount {\n      id\n      addressLine1\n      addressLine2\n      city\n      postalCode\n      country\n      ownerName\n      IBAN\n      BIC\n    }\n    paymentMethods {\n      id\n      cardMask\n      cardType\n      expirationDate\n      currency\n    }\n  }\n  amountOnWallet {\n    amountOnWallet {\n      cents\n      currency\n    }\n    amountOnWallets {\n      cents\n      currency\n    }\n    lockedAmount {\n      cents\n      currency\n    }\n  }\n}\n\nfragment AddACard_viewer on Viewer {\n  me {\n    id\n    lastName\n  }\n}\n\nfragment Transactions_viewer on Viewer {\n  me {\n    id\n  }\n}\n\nfragment Fees_viewer on Viewer {\n  ...FeesPaymentPopup_viewer\n  me {\n    id\n  }\n}\n\nfragment PaymentPopup_viewer on Viewer {\n  id\n  me {\n    id\n    bankAccount {\n      id\n      addressLine1\n      addressLine2\n      city\n      postalCode\n      country\n      ownerName\n      IBAN\n      BIC\n    }\n    paymentMethods {\n      id\n      cardMask\n      cardType\n      expirationDate\n      currency\n    }\n  }\n  amountOnWallet {\n    amountOnWallet {\n      cents\n      currency\n    }\n    amountOnWallets {\n      cents\n      currency\n    }\n    lockedAmount {\n      cents\n      currency\n    }\n  }\n}\n\nfragment SelectUser_viewer on Viewer {\n  me {\n    id\n  }\n}\n\nfragment SearchModal_viewer on Viewer {\n  me {\n    id\n  }\n}\n\nfragment InfoLegal_viewer on Viewer {\n  languages {\n    id\n    name\n    code\n  }\n  me {\n    id\n  }\n}\n\nfragment InfoNatural_viewer on Viewer {\n  languages {\n    id\n    name\n    code\n  }\n  me {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_MyInfo_Query",
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
            "name": "MyInfo_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_MyInfo_Query",
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
            "name": "languages",
            "storageKey": null,
            "args": null,
            "concreteType": "Language",
            "plural": true,
            "selections": [
              v0,
              v1,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "code",
                "args": null,
                "storageKey": null
              }
            ]
          },
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
                "name": "address",
                "storageKey": null,
                "args": null,
                "concreteType": "AddressModel",
                "plural": false,
                "selections": v4
              },
              v0,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "mangoId",
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
                "selections": [
                  v0,
                  v5,
                  v6,
                  v2,
                  v7,
                  v3,
                  v8,
                  v9,
                  v10
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "paymentMethods",
                "storageKey": null,
                "args": null,
                "concreteType": "PaymentMethod",
                "plural": true,
                "selections": [
                  v0,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cardMask",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cardType",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "expirationDate",
                    "args": null,
                    "storageKey": null
                  },
                  v11
                ]
              },
              v12,
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
                  v12,
                  v13,
                  v14,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "numberOfUnreadNotifications",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "unreadChats",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "token",
                    "args": null,
                    "storageKey": null
                  },
                  v15
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isProfileComplete",
                "args": null,
                "storageKey": null
              },
              v13,
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
                "kind": "LinkedField",
                "alias": null,
                "name": "userPreferences",
                "storageKey": null,
                "args": null,
                "concreteType": "UserPreferences",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "areSubAccountsActivated",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "documents",
                "storageKey": null,
                "args": null,
                "concreteType": "DocumentObject",
                "plural": true,
                "selections": [
                  v0,
                  v1,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "link",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "creation_date",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "circlesUserIsIn",
                "storageKey": "circlesUserIsIn(last:100)",
                "args": v16,
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
                              v12,
                              v14
                            ]
                          },
                          v0
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "calendar",
                "storageKey": null,
                "args": null,
                "concreteType": "Calendar",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "users",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": true,
                    "selections": [
                      v0,
                      v12
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "preferences",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CalendarPreferences",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "own_synchronized_status",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
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
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "appCountry",
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
                "name": "nationality",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "occupation",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "incomeRange",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "shouldDeclareVAT",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "business",
                "storageKey": null,
                "args": null,
                "concreteType": "Business",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "businessName",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "businessEmail",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "VATNumber",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "headquarterAddress",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AddressModel",
                    "plural": false,
                    "selections": v4
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "appLanguage",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "notification_preferences",
                "storageKey": null,
                "args": null,
                "concreteType": "NotificationPreferences",
                "plural": false,
                "selections": [
                  v17,
                  v18,
                  v19,
                  v20,
                  v21,
                  v22,
                  v23,
                  v24,
                  v25,
                  v26,
                  v27,
                  v28,
                  v29,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "sportunityCompleteStatistics",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "sportunityVoteForManOfTheGame",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "email_preferences",
                "storageKey": null,
                "args": null,
                "concreteType": "EmailPreferences",
                "plural": false,
                "selections": [
                  v23,
                  v18,
                  v19,
                  v20,
                  v21,
                  v22,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "chatUnReadMessage",
                    "args": null,
                    "storageKey": null
                  },
                  v24,
                  v17,
                  v25,
                  v26,
                  v27,
                  v28,
                  v29
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "areStatisticsActivated",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "homePagePreference",
                "args": null,
                "storageKey": null
              },
              v15,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "appCurrency",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": "circlesInformationCircles",
                "name": "circlesUserIsIn",
                "storageKey": "circlesUserIsIn(last:100)",
                "args": v16,
                "concreteType": "CircleConnection",
                "plural": false,
                "selections": v35
              },
              {
                "kind": "LinkedField",
                "alias": "circlesCircleMemberships",
                "name": "circlesUserIsIn",
                "storageKey": "circlesUserIsIn(last:100)",
                "args": v16,
                "concreteType": "CircleConnection",
                "plural": false,
                "selections": v35
              }
            ]
          },
          v0,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "amountOnWallet",
            "storageKey": null,
            "args": null,
            "concreteType": "AmountOnWallet",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "amountOnWallet",
                "storageKey": null,
                "args": null,
                "concreteType": "TotalAmountOnWallet",
                "plural": false,
                "selections": v33
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "amountOnWallets",
                "storageKey": null,
                "args": null,
                "concreteType": "AmountOnWallets",
                "plural": true,
                "selections": v33
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "lockedAmount",
                "storageKey": null,
                "args": null,
                "concreteType": "LockedAmountOnWallet",
                "plural": false,
                "selections": v33
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "statisticPreferences",
            "storageKey": null,
            "args": null,
            "concreteType": "StatisticPreferences",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "private",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isManOfTheGameActivated",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "userStats",
                "storageKey": null,
                "args": null,
                "concreteType": "userStats",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "stat0",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticName",
                    "plural": false,
                    "selections": v36
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "stat1",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticName",
                    "plural": false,
                    "selections": v36
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "stat2",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticName",
                    "plural": false,
                    "selections": v36
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "stat3",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticName",
                    "plural": false,
                    "selections": v36
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "stat4",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticName",
                    "plural": false,
                    "selections": v36
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "stat5",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticName",
                    "plural": false,
                    "selections": v36
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
(node/*: any*/).hash = '6463bac2c13a2387fd426dcacead1243';
module.exports = node;
