/**
 * @flow
 * @relayHash b5d1412f519d7e42b1de6f1a23ee3262
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Wallet_viewer$ref = any;
export type router_CashInConfirmation_QueryVariables = {||};
export type router_CashInConfirmation_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Wallet_viewer$ref
  |}
|};
export type router_CashInConfirmation_Query = {|
  variables: router_CashInConfirmation_QueryVariables,
  response: router_CashInConfirmation_QueryResponse,
|};
*/


/*
query router_CashInConfirmation_Query {
  viewer {
    ...Wallet_viewer
    id
  }
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
  "name": "currency",
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
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "cents",
    "args": null,
    "storageKey": null
  },
  v1
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "router_CashInConfirmation_Query",
  "id": null,
  "text": "query router_CashInConfirmation_Query {\n  viewer {\n    ...Wallet_viewer\n    id\n  }\n}\n\nfragment Wallet_viewer on Viewer {\n  ...Transactions_viewer\n  ...Fees_viewer\n  ...PaymentPopup_viewer\n  id\n  me {\n    id\n    pseudo\n    subAccounts {\n      id\n      pseudo\n    }\n    isProfileComplete\n    mangoId\n    bankAccount {\n      id\n    }\n  }\n}\n\nfragment Transactions_viewer on Viewer {\n  me {\n    id\n  }\n}\n\nfragment Fees_viewer on Viewer {\n  ...FeesPaymentPopup_viewer\n  me {\n    id\n  }\n}\n\nfragment PaymentPopup_viewer on Viewer {\n  id\n  me {\n    id\n    bankAccount {\n      id\n      addressLine1\n      addressLine2\n      city\n      postalCode\n      country\n      ownerName\n      IBAN\n      BIC\n    }\n    paymentMethods {\n      id\n      cardMask\n      cardType\n      expirationDate\n      currency\n    }\n  }\n  amountOnWallet {\n    amountOnWallet {\n      cents\n      currency\n    }\n    amountOnWallets {\n      cents\n      currency\n    }\n    lockedAmount {\n      cents\n      currency\n    }\n  }\n}\n\nfragment FeesPaymentPopup_viewer on Viewer {\n  id\n  ...AddACard_viewer\n  me {\n    id\n    mangoId\n    bankAccount {\n      id\n      addressLine1\n      addressLine2\n      city\n      postalCode\n      country\n      ownerName\n      IBAN\n      BIC\n    }\n    paymentMethods {\n      id\n      cardMask\n      cardType\n      expirationDate\n      currency\n    }\n  }\n  amountOnWallet {\n    amountOnWallet {\n      cents\n      currency\n    }\n    amountOnWallets {\n      cents\n      currency\n    }\n    lockedAmount {\n      cents\n      currency\n    }\n  }\n}\n\nfragment AddACard_viewer on Viewer {\n  me {\n    id\n    lastName\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_CashInConfirmation_Query",
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
            "name": "Wallet_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_CashInConfirmation_Query",
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
                "kind": "ScalarField",
                "alias": null,
                "name": "lastName",
                "args": null,
                "storageKey": null
              },
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
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "addressLine1",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "addressLine2",
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
                    "name": "postalCode",
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
                    "name": "ownerName",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "IBAN",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "BIC",
                    "args": null,
                    "storageKey": null
                  }
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
                  v1
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
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isProfileComplete",
                "args": null,
                "storageKey": null
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
                "selections": v3
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "amountOnWallets",
                "storageKey": null,
                "args": null,
                "concreteType": "AmountOnWallets",
                "plural": true,
                "selections": v3
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "lockedAmount",
                "storageKey": null,
                "args": null,
                "concreteType": "LockedAmountOnWallet",
                "plural": false,
                "selections": v3
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
(node/*: any*/).hash = 'ec7ff58c69005831c55097228272f296';
module.exports = node;
