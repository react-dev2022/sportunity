/**
 * @flow
 * @relayHash ff3914a52489dac985366327ab618820
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NewSportunity_viewer$ref = any;
export type router_EventEdit_QueryVariables = {|
  sportunityId?: ?string,
  querySuperMe: boolean,
  queryDetails: boolean,
|};
export type router_EventEdit_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: NewSportunity_viewer$ref
  |}
|};
export type router_EventEdit_Query = {|
  variables: router_EventEdit_QueryVariables,
  response: router_EventEdit_QueryResponse,
|};
*/


/*
query router_EventEdit_Query(
  $sportunityId: ID
  $querySuperMe: Boolean!
) {
  viewer {
    ...NewSportunity_viewer_1zfuiK
    id
  }
}

fragment NewSportunity_viewer_1zfuiK on Viewer {
  languages {
    id
    name
    code
  }
  ...AddACardPopup_viewer
  ...VenueOrAddress_viewer
  ...Opponent_viewer
  ...Invited_viewer
  ...Organizers_viewer
  ...SportSelect_viewer
  ...DetailsList_viewer
  ...GroupList_viewer
  ...PersonList_viewer
  ...CircleList_viewer
  ...SearchModal_viewer
  id
  superMe @include(if: $querySuperMe) {
    id
    profileType
  }
  me {
    ...Organizers_user
    id
    pseudo
    firstName
    lastName
    nationality
    sportunityTemplates {
      id
      title
      description
      kind
      privacy_switch_preference {
        privacy_switch_type
        switch_privacy_x_days_before
      }
      invited {
        user {
          id
          pseudo
          avatar
        }
        answer
      }
      invited_circles(last: 10) {
        edges {
          node {
            id
            name
            members {
              id
            }
            memberStatus {
              starting_date
              member {
                id
                pseudo
              }
              status
            }
            owner {
              id
              pseudo
              avatar
            }
            type
            memberCount
          }
        }
      }
      price_for_circle {
        circle {
          id
        }
        price {
          cents
          currency
        }
        participantByDefault
        excludedParticipantByDefault {
          excludedMembers {
            id
            pseudo
          }
        }
      }
      notification_preference {
        notification_type
        send_notification_x_days_before
      }
      participantRange {
        from
        to
      }
      hide_participant_list
      price {
        currency
        cents
      }
      is_repeated_occurence_number
      number_of_occurences
      sport {
        sport {
          id
          name {
            EN
            DE
            FR
            id
          }
          logo
          type
          sportunityTypes {
            id
            isScoreRelevant
            name {
              FR
              EN
              id
            }
          }
          positions {
            id
            EN
            FR
            DE
          }
          certificates {
            id
            name {
              EN
              FR
              DE
              id
            }
          }
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
          assistantTypes {
            id
            name {
              EN
              FR
              DE
              ES
              id
            }
          }
        }
        positions {
          id
          EN
          FR
          DE
        }
        certificates {
          id
          name {
            EN
            FR
            DE
            id
          }
        }
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
      ageRestriction {
        from
        to
      }
      sexRestriction
      address {
        address
        country
        city
        position {
          lat
          lng
        }
      }
      organizers {
        organizer {
          id
          pseudo
        }
        isAdmin
        role
        price {
          cents
          currency
        }
        secondaryOrganizerType {
          id
          name {
            FR
            EN
            id
          }
        }
        customSecondaryOrganizerType
        permissions {
          chatAccess {
            view
            edit
          }
          memberAccess {
            view
            edit
          }
          carPoolingAccess {
            view
            edit
          }
          imageAccess {
            view
            edit
          }
          detailsAccess {
            view
            edit
          }
          compositionAccess {
            view
            edit
          }
        }
        id
      }
      pendingOrganizers {
        id
        circles(last: 20) {
          edges {
            node {
              id
              name
              memberCount
              type
              members {
                id
              }
              owner {
                id
                pseudo
              }
            }
          }
        }
        isAdmin
        role
        price {
          cents
          currency
        }
        secondaryOrganizerType {
          id
          name {
            FR
            EN
            DE
            ES
            id
          }
        }
        customSecondaryOrganizerType
        permissions {
          chatAccess {
            view
            edit
          }
          memberAccess {
            view
            edit
          }
          carPoolingAccess {
            view
            edit
          }
          imageAccess {
            view
            edit
          }
          detailsAccess {
            view
            edit
          }
          compositionAccess {
            view
            edit
          }
        }
      }
      sportunityType {
        id
        isScoreRelevant
        name {
          FR
          EN
          id
        }
      }
      game_information {
        opponent {
          organizer {
            id
            pseudo
            avatar
          }
          organizerPseudo
          lookingForAnOpponent
          invitedOpponents(last: 5) {
            edges {
              node {
                id
                name
                memberCount
              }
            }
          }
          unknownOpponent
        }
      }
    }
    address {
      address
      city
      country
    }
    fees
    paymentMethods {
      id
      cardMask
      currency
    }
    circles(last: 20) {
      edges {
        node {
          id
          name
          memberCount
          type
          owner {
            id
            pseudo
          }
          memberStatus {
            starting_date
            member {
              id
              pseudo
            }
            status
          }
          circlePreferences {
            isChildrenCircle
          }
          members {
            id
            pseudo
          }
          sport {
            sport {
              id
              name {
                FR
                id
              }
            }
          }
        }
      }
    }
    circlesUserIsIn(last: 20) {
      edges {
        node {
          id
          isCircleUsableByMembers
          name
          type
          memberStatus {
            starting_date
            member {
              id
              pseudo
            }
            status
          }
          owner {
            id
            pseudo
            avatar
          }
          members {
            id
            pseudo
          }
          memberCount
          sport {
            sport {
              id
              name {
                FR
                id
              }
            }
          }
        }
      }
    }
    circlesFromClub(last: 20) {
      edges {
        node {
          id
          name
          type
          memberStatus {
            starting_date
            member {
              id
              pseudo
            }
            status
          }
          owner {
            id
            pseudo
            avatar
          }
          memberCount
          members {
            id
            pseudo
          }
          sport {
            sport {
              id
              name {
                FR
                id
              }
            }
          }
        }
      }
    }
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
    profileType
    isProfileComplete
    shouldDeclareVAT
    birthday
    business {
      businessName
      businessEmail
      headquarterAddress {
        address
        city
        country
      }
      VATNumber
    }
    areStatisticsActivated
  }
  sportunity(id: $sportunityId) {
    id
    title
    description
    kind
    privacy_switch_preference {
      privacy_switch_type
      switch_privacy_x_days_before
    }
    participants {
      id
      avatar
      pseudo
    }
    waiting {
      id
      pseudo
      avatar
    }
    invited {
      user {
        id
        pseudo
        avatar
      }
      answer
    }
    survey {
      isSurveyTransformed
      surveyDates {
        beginning_date
        ending_date
      }
    }
    invited_circles(last: 10) {
      edges {
        node {
          id
          name
          memberStatus {
            starting_date
            member {
              id
              pseudo
            }
            status
          }
          members {
            id
          }
          owner {
            id
            pseudo
            avatar
          }
          type
          memberCount
        }
      }
    }
    price_for_circle {
      circle {
        id
      }
      price {
        cents
        currency
      }
      participantByDefault
      excludedParticipantByDefault {
        excludedMembers {
          id
          pseudo
        }
      }
    }
    notification_preference {
      notification_type
      send_notification_x_days_before
    }
    participantRange {
      from
      to
    }
    hide_participant_list
    beginning_date
    ending_date
    price {
      currency
      cents
    }
    is_repeated_occurence_number
    number_of_occurences
    sport {
      sport {
        id
        name {
          EN
          DE
          FR
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
            EN
            FR
            DE
            id
          }
        }
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
        type
        sportunityTypes {
          id
          isScoreRelevant
          name {
            FR
            EN
            id
          }
        }
        assistantTypes {
          id
          name {
            EN
            FR
            DE
            ES
            id
          }
        }
      }
      positions {
        id
        EN
        FR
        DE
      }
      certificates {
        id
        name {
          EN
          FR
          DE
          id
        }
      }
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
    ageRestriction {
      from
      to
    }
    sexRestriction
    address {
      address
      country
      city
      position {
        lat
        lng
      }
    }
    organizers {
      organizer {
        id
        pseudo
      }
      isAdmin
      role
      price {
        cents
        currency
      }
      secondaryOrganizerType {
        id
        name {
          FR
          EN
          DE
          ES
          id
        }
      }
      customSecondaryOrganizerType
      permissions {
        chatAccess {
          view
          edit
        }
        memberAccess {
          view
          edit
        }
        carPoolingAccess {
          view
          edit
        }
        imageAccess {
          view
          edit
        }
        detailsAccess {
          view
          edit
        }
        compositionAccess {
          view
          edit
        }
      }
      id
    }
    pendingOrganizers {
      id
      circles(last: 20) {
        edges {
          node {
            id
            name
            memberCount
            type
            members {
              id
            }
            owner {
              id
              pseudo
            }
          }
        }
      }
      isAdmin
      role
      price {
        cents
        currency
      }
      secondaryOrganizerType {
        id
        name {
          FR
          EN
          DE
          ES
          id
        }
      }
      customSecondaryOrganizerType
      permissions {
        chatAccess {
          view
          edit
        }
        memberAccess {
          view
          edit
        }
        carPoolingAccess {
          view
          edit
        }
        imageAccess {
          view
          edit
        }
        detailsAccess {
          view
          edit
        }
        compositionAccess {
          view
          edit
        }
      }
    }
    venue {
      id
      name
      address {
        address
        city
        country
      }
    }
    infrastructure {
      id
      name
    }
    slot {
      id
      from
      end
      price {
        cents
        currency
      }
    }
    sportunityType {
      id
      isScoreRelevant
      name {
        FR
        EN
        id
      }
    }
    game_information {
      opponent {
        organizer {
          id
          pseudo
          avatar
        }
        organizerPseudo
        lookingForAnOpponent
        invitedOpponents(last: 5) {
          edges {
            node {
              id
              name
              memberCount
            }
          }
        }
        unknownOpponent
      }
    }
    status
  }
}

fragment AddACardPopup_viewer on Viewer {
  id
}

fragment VenueOrAddress_viewer on Viewer {
  ...CalendarModal_viewer
  ...FindPlace_viewer
  id
  me {
    id
    profileType
    isSubAccount
  }
}

fragment Opponent_viewer on Viewer {
  me {
    id
  }
}

fragment Invited_viewer on Viewer {
  ...InvitedList_viewer
  ...NewCircle_viewer
  ...SummoningModal_viewer
  me {
    id
    profileType
    pseudo
    avatar
  }
  invitedUserExists: userExists(pseudo: "_", email: "_")
}

fragment Organizers_viewer on Viewer {
  id
  ...SearchModal_viewer
}

fragment SportSelect_viewer on Viewer {
  id
  selectSports: sports(first: 10, language: EN) {
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
        positions {
          id
          EN
          FR
          DE
        }
        certificates {
          id
          name {
            EN
            FR
            DE
            id
          }
        }
        type
        sportunityTypes {
          id
          isScoreRelevant
          name {
            FR
            EN
            id
          }
        }
      }
    }
  }
}

fragment DetailsList_viewer on Viewer {
  id
  ...SummoningInvitedList_viewer
}

fragment GroupList_viewer on Viewer {
  ...SummonGroups_viewer
  me {
    id
    profileType
    pseudo
    avatar
  }
}

fragment PersonList_viewer on Viewer {
  ...InputUserAutocompleted_viewer
  me {
    id
    profileType
    pseudo
    avatar
  }
  personListUserExists: userExists(pseudo: "_", email: "_")
}

fragment CircleList_viewer on Viewer {
  me {
    id
  }
}

fragment SearchModal_viewer on Viewer {
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

fragment InputUserAutocompleted_viewer on Viewer {
  me {
    id
  }
}

fragment SummonGroups_viewer on Viewer {
  ...NewCircle_viewer
  ...OwnerSelect_viewer
  ...SportSelect_viewer
  me {
    profileType
    id
  }
}

fragment NewCircle_viewer on Viewer {
  ...NewCircleAdvanced_viewer
}

fragment OwnerSelect_viewer on Viewer {
  me {
    id
  }
}

fragment NewCircleAdvanced_viewer on Viewer {
  newCircleSports: sports(first: 10, language: EN) {
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
}

fragment SummoningInvitedList_viewer on Viewer {
  ...InvitedCircleDetails_viewer
  me {
    id
    pseudo
    avatar
    profileType
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

fragment InvitedList_viewer on Viewer {
  me {
    id
    pseudo
    avatar
    profileType
  }
}

fragment SummoningModal_viewer on Viewer {
  ...SummoningInvitedList_viewer
  ...NewCircle_viewer
  ...OwnerSelect_viewer
  me {
    profileType
    id
  }
  summoningModalSports: sports(first: 10, language: EN) {
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
}

fragment CalendarModal_viewer on Viewer {
  ...Sidebar_viewer
  ...CalendarSidebar_viewer
  ...BigCalendar_viewer
  id
  me {
    id
  }
}

fragment FindPlace_viewer on Viewer {
  id
  ...CalendarModal_viewer
}

fragment Sidebar_viewer on Viewer {
  id
  ...NewSportunityVenues_viewer
}

fragment CalendarSidebar_viewer on Viewer {
  ...NewTimeSlot_viewer
}

fragment BigCalendar_viewer on Viewer {
  id
  ...NewOrEditTimeSlotModal_viewer
  infrastructure {
    id
    name
    sport {
      id
    }
    logo
    slots {
      id
      from
      end
      is_repeated
      is_repeated_occurence_number
      number_of_occurences
      usersSlotIsFor {
        id
        pseudo
        avatar
      }
      circlesSlotIsFor(last: 20) {
        edges {
          node {
            id
            name
            memberCount
          }
        }
      }
      price {
        currency
        cents
      }
      status
      sportunity {
        id
        title
        organizers {
          isAdmin
          organizer {
            pseudo
            id
          }
          id
        }
        cancel_date
      }
    }
  }
}

fragment NewOrEditTimeSlotModal_viewer on Viewer {
  me {
    id
  }
  ...Submit_viewer
  timeSlotUserExists: userExists(pseudo: "_", email: "_")
}

fragment Submit_viewer on Viewer {
  me {
    id
    isProfileComplete
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
  }
}

fragment NewTimeSlot_viewer on Viewer {
  ...NewOrEditTimeSlotModal_viewer
}

fragment NewSportunityVenues_viewer on Viewer {
  me {
    id
    venues(last: 100) {
      edges {
        node {
          id
          name
          address {
            address
            city
            country
          }
          infrastructures {
            id
            name
            sport {
              id
            }
            slots {
              id
              from
              end
              price {
                currency
                cents
              }
            }
          }
        }
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "sportunityId",
    "type": "ID",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "querySuperMe",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "queryDetails",
    "type": "Boolean!",
    "defaultValue": null
  }
],
v1 = [
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
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "currency",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cents",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "price",
  "storageKey": null,
  "args": null,
  "concreteType": "Price",
  "plural": false,
  "selections": [
    v4,
    v5
  ]
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "kind",
  "args": null,
  "storageKey": null
},
v9 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "privacy_switch_type",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "switch_privacy_x_days_before",
    "args": null,
    "storageKey": null
  }
],
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v12 = [
  v2,
  v10,
  v11
],
v13 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "user",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": false,
    "selections": v12
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "answer",
    "args": null,
    "storageKey": null
  }
],
v14 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 10,
    "type": "Int"
  }
],
v15 = [
  v2
],
v16 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "members",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v15
},
v17 = [
  v2,
  v10
],
v18 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v19 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "memberStatus",
  "storageKey": null,
  "args": null,
  "concreteType": "memberStatus",
  "plural": true,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "starting_date",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "member",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": v17
    },
    v18
  ]
},
v20 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "owner",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v12
},
v21 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v22 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "memberCount",
  "args": null,
  "storageKey": null
},
v23 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "circle",
  "storageKey": null,
  "args": null,
  "concreteType": "Circle",
  "plural": false,
  "selections": v15
},
v24 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "price",
  "storageKey": null,
  "args": null,
  "concreteType": "Price",
  "plural": false,
  "selections": [
    v5,
    v4
  ]
},
v25 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "participantByDefault",
  "args": null,
  "storageKey": null
},
v26 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "excludedMembers",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": true,
    "selections": v17
  }
],
v27 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "notification_type",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "send_notification_x_days_before",
    "args": null,
    "storageKey": null
  }
],
v28 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "from",
  "args": null,
  "storageKey": null
},
v29 = [
  v28,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "to",
    "args": null,
    "storageKey": null
  }
],
v30 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "participantRange",
  "storageKey": null,
  "args": null,
  "concreteType": "IntInterval",
  "plural": false,
  "selections": v29
},
v31 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "hide_participant_list",
  "args": null,
  "storageKey": null
},
v32 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v33 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "is_repeated_occurence_number",
  "args": null,
  "storageKey": null
},
v34 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "number_of_occurences",
  "args": null,
  "storageKey": null
},
v35 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "EN",
  "args": null,
  "storageKey": null
},
v36 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "DE",
  "args": null,
  "storageKey": null
},
v37 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "FR",
  "args": null,
  "storageKey": null
},
v38 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": [
    v35,
    v36,
    v37,
    v2
  ]
},
v39 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "logo",
  "args": null,
  "storageKey": null
},
v40 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": [
    v37,
    v35,
    v2
  ]
},
v41 = [
  v2,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "isScoreRelevant",
    "args": null,
    "storageKey": null
  },
  v40
],
v42 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "sportunityTypes",
  "storageKey": null,
  "args": null,
  "concreteType": "SportunityType",
  "plural": true,
  "selections": v41
},
v43 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "positions",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": true,
  "selections": [
    v2,
    v35,
    v37,
    v36
  ]
},
v44 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": [
    v35,
    v37,
    v36,
    v2
  ]
},
v45 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "certificates",
  "storageKey": null,
  "args": null,
  "concreteType": "Certificate",
  "plural": true,
  "selections": [
    v2,
    v44
  ]
},
v46 = [
  v3,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "skillLevel",
    "args": null,
    "storageKey": null
  },
  v7
],
v47 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "levels",
  "storageKey": null,
  "args": null,
  "concreteType": "Translated",
  "plural": true,
  "selections": [
    v2,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "EN",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v46
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "FR",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v46
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "DE",
      "storageKey": null,
      "args": null,
      "concreteType": "SportLevel",
      "plural": false,
      "selections": v46
    }
  ]
},
v48 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "ES",
  "args": null,
  "storageKey": null
},
v49 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "assistantTypes",
  "storageKey": null,
  "args": null,
  "concreteType": "AssistantType",
  "plural": true,
  "selections": [
    v2,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "name",
      "storageKey": null,
      "args": null,
      "concreteType": "TranslatedString",
      "plural": false,
      "selections": [
        v35,
        v37,
        v36,
        v48,
        v2
      ]
    }
  ]
},
v50 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "ageRestriction",
  "storageKey": null,
  "args": null,
  "concreteType": "IntInterval",
  "plural": false,
  "selections": v29
},
v51 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "sexRestriction",
  "args": null,
  "storageKey": null
},
v52 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "address",
  "args": null,
  "storageKey": null
},
v53 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "country",
  "args": null,
  "storageKey": null
},
v54 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "city",
  "args": null,
  "storageKey": null
},
v55 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "address",
  "storageKey": null,
  "args": null,
  "concreteType": "AddressModel",
  "plural": false,
  "selections": [
    v52,
    v53,
    v54,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "position",
      "storageKey": null,
      "args": null,
      "concreteType": "PositionType",
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
        }
      ]
    }
  ]
},
v56 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "organizer",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v17
},
v57 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isAdmin",
  "args": null,
  "storageKey": null
},
v58 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "role",
  "args": null,
  "storageKey": null
},
v59 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "customSecondaryOrganizerType",
  "args": null,
  "storageKey": null
},
v60 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "view",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "edit",
    "args": null,
    "storageKey": null
  }
],
v61 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "permissions",
  "storageKey": null,
  "args": null,
  "concreteType": "coOrganizersPermissions",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "chatAccess",
      "storageKey": null,
      "args": null,
      "concreteType": "coOrganizersChatAccess",
      "plural": false,
      "selections": v60
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "memberAccess",
      "storageKey": null,
      "args": null,
      "concreteType": "coOrganizersMemberAccess",
      "plural": false,
      "selections": v60
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "carPoolingAccess",
      "storageKey": null,
      "args": null,
      "concreteType": "coOrganizersCarPoolingAccess",
      "plural": false,
      "selections": v60
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "imageAccess",
      "storageKey": null,
      "args": null,
      "concreteType": "coOrganizersImageAccess",
      "plural": false,
      "selections": v60
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "detailsAccess",
      "storageKey": null,
      "args": null,
      "concreteType": "coOrganizersDetailsAccess",
      "plural": false,
      "selections": v60
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "compositionAccess",
      "storageKey": null,
      "args": null,
      "concreteType": "coOrganizersCompositionAccess",
      "plural": false,
      "selections": v60
    }
  ]
},
v62 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 20,
    "type": "Int"
  }
],
v63 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "owner",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v17
},
v64 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "secondaryOrganizerType",
  "storageKey": null,
  "args": null,
  "concreteType": "AssistantType",
  "plural": false,
  "selections": [
    v2,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "name",
      "storageKey": null,
      "args": null,
      "concreteType": "TranslatedString",
      "plural": false,
      "selections": [
        v37,
        v35,
        v36,
        v48,
        v2
      ]
    }
  ]
},
v65 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "pendingOrganizers",
  "storageKey": null,
  "args": null,
  "concreteType": "PendingOrganizer",
  "plural": true,
  "selections": [
    v2,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "circles",
      "storageKey": "circles(last:20)",
      "args": v62,
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
                v2,
                v3,
                v22,
                v21,
                v16,
                v63
              ]
            }
          ]
        }
      ]
    },
    v57,
    v58,
    v24,
    v64,
    v59,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "permissions",
      "storageKey": null,
      "args": null,
      "concreteType": "pendingCoOrganizersPermissions",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "chatAccess",
          "storageKey": null,
          "args": null,
          "concreteType": "pendingCoOrganizersChatAccess",
          "plural": false,
          "selections": v60
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "memberAccess",
          "storageKey": null,
          "args": null,
          "concreteType": "pendingCoOrganizersMemberAccess",
          "plural": false,
          "selections": v60
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "carPoolingAccess",
          "storageKey": null,
          "args": null,
          "concreteType": "pendingCoOrganizersCarPoolingAccess",
          "plural": false,
          "selections": v60
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "imageAccess",
          "storageKey": null,
          "args": null,
          "concreteType": "pendingCoOrganizersImageAccess",
          "plural": false,
          "selections": v60
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "detailsAccess",
          "storageKey": null,
          "args": null,
          "concreteType": "pendingCoOrganizersDetailsAccess",
          "plural": false,
          "selections": v60
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "compositionAccess",
          "storageKey": null,
          "args": null,
          "concreteType": "pendingCoOrganizersCompositionAccess",
          "plural": false,
          "selections": v60
        }
      ]
    }
  ]
},
v66 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "sportunityType",
  "storageKey": null,
  "args": null,
  "concreteType": "SportunityType",
  "plural": false,
  "selections": v41
},
v67 = [
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
          v2,
          v3,
          v22
        ]
      }
    ]
  }
],
v68 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "organizer",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": false,
    "selections": v12
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "organizerPseudo",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "lookingForAnOpponent",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "invitedOpponents",
    "storageKey": "invitedOpponents(last:5)",
    "args": [
      {
        "kind": "Literal",
        "name": "last",
        "value": 5,
        "type": "Int"
      }
    ],
    "concreteType": "CircleConnection",
    "plural": false,
    "selections": v67
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "unknownOpponent",
    "args": null,
    "storageKey": null
  }
],
v69 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "profileType",
  "args": null,
  "storageKey": null
},
v70 = [
  v52,
  v54,
  v53
],
v71 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "address",
  "storageKey": null,
  "args": null,
  "concreteType": "AddressModel",
  "plural": false,
  "selections": v70
},
v72 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "sport",
  "storageKey": null,
  "args": null,
  "concreteType": "Sport",
  "plural": true,
  "selections": v15
},
v73 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "end",
  "args": null,
  "storageKey": null
},
v74 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "members",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v17
},
v75 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "sport",
  "storageKey": null,
  "args": null,
  "concreteType": "CircleSport",
  "plural": false,
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
        v2,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "name",
          "storageKey": null,
          "args": null,
          "concreteType": "TranslatedString",
          "plural": false,
          "selections": [
            v37,
            v2
          ]
        }
      ]
    }
  ]
},
v76 = [
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
v77 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "ending_date",
  "args": null,
  "storageKey": null
},
v78 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "beginning_date",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "router_EventEdit_Query",
  "id": null,
  "text": "query router_EventEdit_Query(\n  $sportunityId: ID\n  $querySuperMe: Boolean!\n) {\n  viewer {\n    ...NewSportunity_viewer_1zfuiK\n    id\n  }\n}\n\nfragment NewSportunity_viewer_1zfuiK on Viewer {\n  languages {\n    id\n    name\n    code\n  }\n  ...AddACardPopup_viewer\n  ...VenueOrAddress_viewer\n  ...Opponent_viewer\n  ...Invited_viewer\n  ...Organizers_viewer\n  ...SportSelect_viewer\n  ...DetailsList_viewer\n  ...GroupList_viewer\n  ...PersonList_viewer\n  ...CircleList_viewer\n  ...SearchModal_viewer\n  id\n  superMe @include(if: $querySuperMe) {\n    id\n    profileType\n  }\n  me {\n    ...Organizers_user\n    id\n    pseudo\n    firstName\n    lastName\n    nationality\n    sportunityTemplates {\n      id\n      title\n      description\n      kind\n      privacy_switch_preference {\n        privacy_switch_type\n        switch_privacy_x_days_before\n      }\n      invited {\n        user {\n          id\n          pseudo\n          avatar\n        }\n        answer\n      }\n      invited_circles(last: 10) {\n        edges {\n          node {\n            id\n            name\n            members {\n              id\n            }\n            memberStatus {\n              starting_date\n              member {\n                id\n                pseudo\n              }\n              status\n            }\n            owner {\n              id\n              pseudo\n              avatar\n            }\n            type\n            memberCount\n          }\n        }\n      }\n      price_for_circle {\n        circle {\n          id\n        }\n        price {\n          cents\n          currency\n        }\n        participantByDefault\n        excludedParticipantByDefault {\n          excludedMembers {\n            id\n            pseudo\n          }\n        }\n      }\n      notification_preference {\n        notification_type\n        send_notification_x_days_before\n      }\n      participantRange {\n        from\n        to\n      }\n      hide_participant_list\n      price {\n        currency\n        cents\n      }\n      is_repeated_occurence_number\n      number_of_occurences\n      sport {\n        sport {\n          id\n          name {\n            EN\n            DE\n            FR\n            id\n          }\n          logo\n          type\n          sportunityTypes {\n            id\n            isScoreRelevant\n            name {\n              FR\n              EN\n              id\n            }\n          }\n          positions {\n            id\n            EN\n            FR\n            DE\n          }\n          certificates {\n            id\n            name {\n              EN\n              FR\n              DE\n              id\n            }\n          }\n          levels {\n            id\n            EN {\n              name\n              skillLevel\n              description\n            }\n            FR {\n              name\n              skillLevel\n              description\n            }\n            DE {\n              name\n              skillLevel\n              description\n            }\n          }\n          assistantTypes {\n            id\n            name {\n              EN\n              FR\n              DE\n              ES\n              id\n            }\n          }\n        }\n        positions {\n          id\n          EN\n          FR\n          DE\n        }\n        certificates {\n          id\n          name {\n            EN\n            FR\n            DE\n            id\n          }\n        }\n        levels {\n          id\n          EN {\n            name\n            skillLevel\n            description\n          }\n          FR {\n            name\n            skillLevel\n            description\n          }\n          DE {\n            name\n            skillLevel\n            description\n          }\n        }\n      }\n      ageRestriction {\n        from\n        to\n      }\n      sexRestriction\n      address {\n        address\n        country\n        city\n        position {\n          lat\n          lng\n        }\n      }\n      organizers {\n        organizer {\n          id\n          pseudo\n        }\n        isAdmin\n        role\n        price {\n          cents\n          currency\n        }\n        secondaryOrganizerType {\n          id\n          name {\n            FR\n            EN\n            id\n          }\n        }\n        customSecondaryOrganizerType\n        permissions {\n          chatAccess {\n            view\n            edit\n          }\n          memberAccess {\n            view\n            edit\n          }\n          carPoolingAccess {\n            view\n            edit\n          }\n          imageAccess {\n            view\n            edit\n          }\n          detailsAccess {\n            view\n            edit\n          }\n          compositionAccess {\n            view\n            edit\n          }\n        }\n        id\n      }\n      pendingOrganizers {\n        id\n        circles(last: 20) {\n          edges {\n            node {\n              id\n              name\n              memberCount\n              type\n              members {\n                id\n              }\n              owner {\n                id\n                pseudo\n              }\n            }\n          }\n        }\n        isAdmin\n        role\n        price {\n          cents\n          currency\n        }\n        secondaryOrganizerType {\n          id\n          name {\n            FR\n            EN\n            DE\n            ES\n            id\n          }\n        }\n        customSecondaryOrganizerType\n        permissions {\n          chatAccess {\n            view\n            edit\n          }\n          memberAccess {\n            view\n            edit\n          }\n          carPoolingAccess {\n            view\n            edit\n          }\n          imageAccess {\n            view\n            edit\n          }\n          detailsAccess {\n            view\n            edit\n          }\n          compositionAccess {\n            view\n            edit\n          }\n        }\n      }\n      sportunityType {\n        id\n        isScoreRelevant\n        name {\n          FR\n          EN\n          id\n        }\n      }\n      game_information {\n        opponent {\n          organizer {\n            id\n            pseudo\n            avatar\n          }\n          organizerPseudo\n          lookingForAnOpponent\n          invitedOpponents(last: 5) {\n            edges {\n              node {\n                id\n                name\n                memberCount\n              }\n            }\n          }\n          unknownOpponent\n        }\n      }\n    }\n    address {\n      address\n      city\n      country\n    }\n    fees\n    paymentMethods {\n      id\n      cardMask\n      currency\n    }\n    circles(last: 20) {\n      edges {\n        node {\n          id\n          name\n          memberCount\n          type\n          owner {\n            id\n            pseudo\n          }\n          memberStatus {\n            starting_date\n            member {\n              id\n              pseudo\n            }\n            status\n          }\n          circlePreferences {\n            isChildrenCircle\n          }\n          members {\n            id\n            pseudo\n          }\n          sport {\n            sport {\n              id\n              name {\n                FR\n                id\n              }\n            }\n          }\n        }\n      }\n    }\n    circlesUserIsIn(last: 20) {\n      edges {\n        node {\n          id\n          isCircleUsableByMembers\n          name\n          type\n          memberStatus {\n            starting_date\n            member {\n              id\n              pseudo\n            }\n            status\n          }\n          owner {\n            id\n            pseudo\n            avatar\n          }\n          members {\n            id\n            pseudo\n          }\n          memberCount\n          sport {\n            sport {\n              id\n              name {\n                FR\n                id\n              }\n            }\n          }\n        }\n      }\n    }\n    circlesFromClub(last: 20) {\n      edges {\n        node {\n          id\n          name\n          type\n          memberStatus {\n            starting_date\n            member {\n              id\n              pseudo\n            }\n            status\n          }\n          owner {\n            id\n            pseudo\n            avatar\n          }\n          memberCount\n          members {\n            id\n            pseudo\n          }\n          sport {\n            sport {\n              id\n              name {\n                FR\n                id\n              }\n            }\n          }\n        }\n      }\n    }\n    bankAccount {\n      id\n      addressLine1\n      addressLine2\n      city\n      postalCode\n      country\n      ownerName\n      IBAN\n      BIC\n    }\n    profileType\n    isProfileComplete\n    shouldDeclareVAT\n    birthday\n    business {\n      businessName\n      businessEmail\n      headquarterAddress {\n        address\n        city\n        country\n      }\n      VATNumber\n    }\n    areStatisticsActivated\n  }\n  sportunity(id: $sportunityId) {\n    id\n    title\n    description\n    kind\n    privacy_switch_preference {\n      privacy_switch_type\n      switch_privacy_x_days_before\n    }\n    participants {\n      id\n      avatar\n      pseudo\n    }\n    waiting {\n      id\n      pseudo\n      avatar\n    }\n    invited {\n      user {\n        id\n        pseudo\n        avatar\n      }\n      answer\n    }\n    survey {\n      isSurveyTransformed\n      surveyDates {\n        beginning_date\n        ending_date\n      }\n    }\n    invited_circles(last: 10) {\n      edges {\n        node {\n          id\n          name\n          memberStatus {\n            starting_date\n            member {\n              id\n              pseudo\n            }\n            status\n          }\n          members {\n            id\n          }\n          owner {\n            id\n            pseudo\n            avatar\n          }\n          type\n          memberCount\n        }\n      }\n    }\n    price_for_circle {\n      circle {\n        id\n      }\n      price {\n        cents\n        currency\n      }\n      participantByDefault\n      excludedParticipantByDefault {\n        excludedMembers {\n          id\n          pseudo\n        }\n      }\n    }\n    notification_preference {\n      notification_type\n      send_notification_x_days_before\n    }\n    participantRange {\n      from\n      to\n    }\n    hide_participant_list\n    beginning_date\n    ending_date\n    price {\n      currency\n      cents\n    }\n    is_repeated_occurence_number\n    number_of_occurences\n    sport {\n      sport {\n        id\n        name {\n          EN\n          DE\n          FR\n          id\n        }\n        logo\n        positions {\n          id\n          EN\n          FR\n          DE\n        }\n        certificates {\n          id\n          name {\n            EN\n            FR\n            DE\n            id\n          }\n        }\n        levels {\n          id\n          EN {\n            name\n            skillLevel\n            description\n          }\n          FR {\n            name\n            skillLevel\n            description\n          }\n          DE {\n            name\n            skillLevel\n            description\n          }\n        }\n        type\n        sportunityTypes {\n          id\n          isScoreRelevant\n          name {\n            FR\n            EN\n            id\n          }\n        }\n        assistantTypes {\n          id\n          name {\n            EN\n            FR\n            DE\n            ES\n            id\n          }\n        }\n      }\n      positions {\n        id\n        EN\n        FR\n        DE\n      }\n      certificates {\n        id\n        name {\n          EN\n          FR\n          DE\n          id\n        }\n      }\n      levels {\n        id\n        EN {\n          name\n          skillLevel\n          description\n        }\n        FR {\n          name\n          skillLevel\n          description\n        }\n        DE {\n          name\n          skillLevel\n          description\n        }\n      }\n    }\n    ageRestriction {\n      from\n      to\n    }\n    sexRestriction\n    address {\n      address\n      country\n      city\n      position {\n        lat\n        lng\n      }\n    }\n    organizers {\n      organizer {\n        id\n        pseudo\n      }\n      isAdmin\n      role\n      price {\n        cents\n        currency\n      }\n      secondaryOrganizerType {\n        id\n        name {\n          FR\n          EN\n          DE\n          ES\n          id\n        }\n      }\n      customSecondaryOrganizerType\n      permissions {\n        chatAccess {\n          view\n          edit\n        }\n        memberAccess {\n          view\n          edit\n        }\n        carPoolingAccess {\n          view\n          edit\n        }\n        imageAccess {\n          view\n          edit\n        }\n        detailsAccess {\n          view\n          edit\n        }\n        compositionAccess {\n          view\n          edit\n        }\n      }\n      id\n    }\n    pendingOrganizers {\n      id\n      circles(last: 20) {\n        edges {\n          node {\n            id\n            name\n            memberCount\n            type\n            members {\n              id\n            }\n            owner {\n              id\n              pseudo\n            }\n          }\n        }\n      }\n      isAdmin\n      role\n      price {\n        cents\n        currency\n      }\n      secondaryOrganizerType {\n        id\n        name {\n          FR\n          EN\n          DE\n          ES\n          id\n        }\n      }\n      customSecondaryOrganizerType\n      permissions {\n        chatAccess {\n          view\n          edit\n        }\n        memberAccess {\n          view\n          edit\n        }\n        carPoolingAccess {\n          view\n          edit\n        }\n        imageAccess {\n          view\n          edit\n        }\n        detailsAccess {\n          view\n          edit\n        }\n        compositionAccess {\n          view\n          edit\n        }\n      }\n    }\n    venue {\n      id\n      name\n      address {\n        address\n        city\n        country\n      }\n    }\n    infrastructure {\n      id\n      name\n    }\n    slot {\n      id\n      from\n      end\n      price {\n        cents\n        currency\n      }\n    }\n    sportunityType {\n      id\n      isScoreRelevant\n      name {\n        FR\n        EN\n        id\n      }\n    }\n    game_information {\n      opponent {\n        organizer {\n          id\n          pseudo\n          avatar\n        }\n        organizerPseudo\n        lookingForAnOpponent\n        invitedOpponents(last: 5) {\n          edges {\n            node {\n              id\n              name\n              memberCount\n            }\n          }\n        }\n        unknownOpponent\n      }\n    }\n    status\n  }\n}\n\nfragment AddACardPopup_viewer on Viewer {\n  id\n}\n\nfragment VenueOrAddress_viewer on Viewer {\n  ...CalendarModal_viewer\n  ...FindPlace_viewer\n  id\n  me {\n    id\n    profileType\n    isSubAccount\n  }\n}\n\nfragment Opponent_viewer on Viewer {\n  me {\n    id\n  }\n}\n\nfragment Invited_viewer on Viewer {\n  ...InvitedList_viewer\n  ...NewCircle_viewer\n  ...SummoningModal_viewer\n  me {\n    id\n    profileType\n    pseudo\n    avatar\n  }\n  invitedUserExists: userExists(pseudo: \"_\", email: \"_\")\n}\n\nfragment Organizers_viewer on Viewer {\n  id\n  ...SearchModal_viewer\n}\n\nfragment SportSelect_viewer on Viewer {\n  id\n  selectSports: sports(first: 10, language: EN) {\n    edges {\n      node {\n        id\n        name {\n          EN\n          FR\n          DE\n          id\n        }\n        logo\n        levels {\n          id\n          EN {\n            name\n            skillLevel\n            description\n          }\n          FR {\n            name\n            skillLevel\n            description\n          }\n          DE {\n            name\n            skillLevel\n            description\n          }\n        }\n        positions {\n          id\n          EN\n          FR\n          DE\n        }\n        certificates {\n          id\n          name {\n            EN\n            FR\n            DE\n            id\n          }\n        }\n        type\n        sportunityTypes {\n          id\n          isScoreRelevant\n          name {\n            FR\n            EN\n            id\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment DetailsList_viewer on Viewer {\n  id\n  ...SummoningInvitedList_viewer\n}\n\nfragment GroupList_viewer on Viewer {\n  ...SummonGroups_viewer\n  me {\n    id\n    profileType\n    pseudo\n    avatar\n  }\n}\n\nfragment PersonList_viewer on Viewer {\n  ...InputUserAutocompleted_viewer\n  me {\n    id\n    profileType\n    pseudo\n    avatar\n  }\n  personListUserExists: userExists(pseudo: \"_\", email: \"_\")\n}\n\nfragment CircleList_viewer on Viewer {\n  me {\n    id\n  }\n}\n\nfragment SearchModal_viewer on Viewer {\n  me {\n    id\n  }\n}\n\nfragment Organizers_user on User {\n  id\n  pseudo\n  ...FindOrganizerModal_user\n}\n\nfragment FindOrganizerModal_user on User {\n  id\n}\n\nfragment InputUserAutocompleted_viewer on Viewer {\n  me {\n    id\n  }\n}\n\nfragment SummonGroups_viewer on Viewer {\n  ...NewCircle_viewer\n  ...OwnerSelect_viewer\n  ...SportSelect_viewer\n  me {\n    profileType\n    id\n  }\n}\n\nfragment NewCircle_viewer on Viewer {\n  ...NewCircleAdvanced_viewer\n}\n\nfragment OwnerSelect_viewer on Viewer {\n  me {\n    id\n  }\n}\n\nfragment NewCircleAdvanced_viewer on Viewer {\n  newCircleSports: sports(first: 10, language: EN) {\n    edges {\n      node {\n        id\n        name {\n          id\n          EN\n          FR\n        }\n        logo\n        status\n        levels {\n          id\n          EN {\n            name\n            skillLevel\n            description\n          }\n          FR {\n            name\n            skillLevel\n            description\n          }\n          DE {\n            name\n            skillLevel\n            description\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment SummoningInvitedList_viewer on Viewer {\n  ...InvitedCircleDetails_viewer\n  me {\n    id\n    pseudo\n    avatar\n    profileType\n  }\n}\n\nfragment InvitedCircleDetails_viewer on Viewer {\n  id\n  me {\n    id\n  }\n  ...AddUserModal_viewer\n  ...AddMemberModal_viewer\n  ...AddChildModal_viewer\n}\n\nfragment AddUserModal_viewer on Viewer {\n  id\n  ...InputUserAutocompleted_viewer\n}\n\nfragment AddMemberModal_viewer on Viewer {\n  me {\n    id\n  }\n  userExists(pseudo: \"_\", email: \"_\")\n}\n\nfragment AddChildModal_viewer on Viewer {\n  ...SubmitAddChild_viewer\n  ...InputUserAutocompleted_viewer\n  me {\n    id\n  }\n}\n\nfragment SubmitAddChild_viewer on Viewer {\n  id\n}\n\nfragment InvitedList_viewer on Viewer {\n  me {\n    id\n    pseudo\n    avatar\n    profileType\n  }\n}\n\nfragment SummoningModal_viewer on Viewer {\n  ...SummoningInvitedList_viewer\n  ...NewCircle_viewer\n  ...OwnerSelect_viewer\n  me {\n    profileType\n    id\n  }\n  summoningModalSports: sports(first: 10, language: EN) {\n    count\n    edges {\n      node {\n        id\n        name {\n          EN\n          FR\n          DE\n          id\n        }\n        logo\n        levels {\n          id\n          EN {\n            name\n            skillLevel\n            description\n          }\n          FR {\n            name\n            skillLevel\n            description\n          }\n          DE {\n            name\n            skillLevel\n            description\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment CalendarModal_viewer on Viewer {\n  ...Sidebar_viewer\n  ...CalendarSidebar_viewer\n  ...BigCalendar_viewer\n  id\n  me {\n    id\n  }\n}\n\nfragment FindPlace_viewer on Viewer {\n  id\n  ...CalendarModal_viewer\n}\n\nfragment Sidebar_viewer on Viewer {\n  id\n  ...NewSportunityVenues_viewer\n}\n\nfragment CalendarSidebar_viewer on Viewer {\n  ...NewTimeSlot_viewer\n}\n\nfragment BigCalendar_viewer on Viewer {\n  id\n  ...NewOrEditTimeSlotModal_viewer\n  infrastructure {\n    id\n    name\n    sport {\n      id\n    }\n    logo\n    slots {\n      id\n      from\n      end\n      is_repeated\n      is_repeated_occurence_number\n      number_of_occurences\n      usersSlotIsFor {\n        id\n        pseudo\n        avatar\n      }\n      circlesSlotIsFor(last: 20) {\n        edges {\n          node {\n            id\n            name\n            memberCount\n          }\n        }\n      }\n      price {\n        currency\n        cents\n      }\n      status\n      sportunity {\n        id\n        title\n        organizers {\n          isAdmin\n          organizer {\n            pseudo\n            id\n          }\n          id\n        }\n        cancel_date\n      }\n    }\n  }\n}\n\nfragment NewOrEditTimeSlotModal_viewer on Viewer {\n  me {\n    id\n  }\n  ...Submit_viewer\n  timeSlotUserExists: userExists(pseudo: \"_\", email: \"_\")\n}\n\nfragment Submit_viewer on Viewer {\n  me {\n    id\n    isProfileComplete\n    bankAccount {\n      id\n      addressLine1\n      addressLine2\n      city\n      postalCode\n      country\n      ownerName\n      IBAN\n      BIC\n    }\n  }\n}\n\nfragment NewTimeSlot_viewer on Viewer {\n  ...NewOrEditTimeSlotModal_viewer\n}\n\nfragment NewSportunityVenues_viewer on Viewer {\n  me {\n    id\n    venues(last: 100) {\n      edges {\n        node {\n          id\n          name\n          address {\n            address\n            city\n            country\n          }\n          infrastructures {\n            id\n            name\n            sport {\n              id\n            }\n            slots {\n              id\n              from\n              end\n              price {\n                currency\n                cents\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_EventEdit_Query",
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
            "name": "NewSportunity_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "querDetails",
                "variableName": "queryDetails",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "querySuperMe",
                "variableName": "querySuperMe",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "sportunityId",
                "variableName": "sportunityId",
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
    "name": "router_EventEdit_Query",
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
            "kind": "ScalarField",
            "alias": null,
            "name": "userExists",
            "args": v1,
            "storageKey": "userExists(email:\"_\",pseudo:\"_\")"
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "languages",
            "storageKey": null,
            "args": null,
            "concreteType": "Language",
            "plural": true,
            "selections": [
              v2,
              v3,
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
                "name": "sportunityTemplates",
                "storageKey": null,
                "args": null,
                "concreteType": "SportunityTemplate",
                "plural": true,
                "selections": [
                  v6,
                  v2,
                  v7,
                  v8,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "privacy_switch_preference",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportunityTemplatePrivacySwitchPreferenceOutput",
                    "plural": false,
                    "selections": v9
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "invited",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportunityTemplateInvited",
                    "plural": true,
                    "selections": v13
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "invited_circles",
                    "storageKey": "invited_circles(last:10)",
                    "args": v14,
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
                              v2,
                              v3,
                              v16,
                              v19,
                              v20,
                              v21,
                              v22
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "price_for_circle",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportunityTemplatePriceForCircle",
                    "plural": true,
                    "selections": [
                      v23,
                      v24,
                      v25,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "excludedParticipantByDefault",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SportunityTemplateExcludedParticipantByDefault",
                        "plural": false,
                        "selections": v26
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "notification_preference",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportunityTemplateNotificationPreferenceOutput",
                    "plural": false,
                    "selections": v27
                  },
                  v30,
                  v31,
                  v32,
                  v33,
                  v34,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sport",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportunitySport",
                    "plural": false,
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
                          v2,
                          v38,
                          v39,
                          v21,
                          v42,
                          v43,
                          v45,
                          v47,
                          v49
                        ]
                      },
                      v43,
                      v45,
                      v47
                    ]
                  },
                  v50,
                  v51,
                  v55,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "organizers",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Organizer",
                    "plural": true,
                    "selections": [
                      v56,
                      v57,
                      v58,
                      v24,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "secondaryOrganizerType",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "AssistantType",
                        "plural": false,
                        "selections": [
                          v2,
                          v40
                        ]
                      },
                      v59,
                      v61,
                      v2
                    ]
                  },
                  v65,
                  v66,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "game_information",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportunityTemplateGameInformation",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "opponent",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SportunityTemplateOpponentOutput",
                        "plural": false,
                        "selections": v68
                      }
                    ]
                  }
                ]
              },
              v2,
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
                "selections": [
                  v2,
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
                  v54,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "postalCode",
                    "args": null,
                    "storageKey": null
                  },
                  v53,
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
              v69,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isSubAccount",
                "args": null,
                "storageKey": null
              },
              v10,
              v11,
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
                "name": "nationality",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "venues",
                "storageKey": "venues(last:100)",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "last",
                    "value": 100,
                    "type": "Int"
                  }
                ],
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
                          v2,
                          v3,
                          v71,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "infrastructures",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Infrastructure",
                            "plural": true,
                            "selections": [
                              v2,
                              v3,
                              v72,
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "slots",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "Slot",
                                "plural": true,
                                "selections": [
                                  v2,
                                  v28,
                                  v73,
                                  v6
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              v71,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "fees",
                "args": null,
                "storageKey": null
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
                  v2,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cardMask",
                    "args": null,
                    "storageKey": null
                  },
                  v4
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "circles",
                "storageKey": "circles(last:20)",
                "args": v62,
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
                          v2,
                          v3,
                          v22,
                          v21,
                          v63,
                          v19,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "circlePreferences",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "CirclePreferences",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "isChildrenCircle",
                                "args": null,
                                "storageKey": null
                              }
                            ]
                          },
                          v74,
                          v75
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "circlesUserIsIn",
                "storageKey": "circlesUserIsIn(last:20)",
                "args": v62,
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
                          v2,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "isCircleUsableByMembers",
                            "args": null,
                            "storageKey": null
                          },
                          v3,
                          v21,
                          v19,
                          v20,
                          v74,
                          v22,
                          v75
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "circlesFromClub",
                "storageKey": "circlesFromClub(last:20)",
                "args": v62,
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
                          v2,
                          v3,
                          v21,
                          v19,
                          v20,
                          v22,
                          v74,
                          v75
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "shouldDeclareVAT",
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
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "headquarterAddress",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AddressModel",
                    "plural": false,
                    "selections": v70
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "VATNumber",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "areStatisticsActivated",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": "timeSlotUserExists",
            "name": "userExists",
            "args": v1,
            "storageKey": "userExists(email:\"_\",pseudo:\"_\")"
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "infrastructure",
            "storageKey": null,
            "args": null,
            "concreteType": "Infrastructure",
            "plural": false,
            "selections": [
              v2,
              v3,
              v72,
              v39,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "slots",
                "storageKey": null,
                "args": null,
                "concreteType": "Slot",
                "plural": true,
                "selections": [
                  v34,
                  v2,
                  v73,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "is_repeated",
                    "args": null,
                    "storageKey": null
                  },
                  v33,
                  v28,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "usersSlotIsFor",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": true,
                    "selections": v12
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "circlesSlotIsFor",
                    "storageKey": "circlesSlotIsFor(last:20)",
                    "args": v62,
                    "concreteType": "CircleConnection",
                    "plural": false,
                    "selections": v67
                  },
                  v6,
                  v18,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sportunity",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Sportunity",
                    "plural": false,
                    "selections": [
                      v2,
                      v32,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "organizers",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Organizer",
                        "plural": true,
                        "selections": [
                          v57,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "organizer",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": false,
                            "selections": [
                              v10,
                              v2
                            ]
                          },
                          v2
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "cancel_date",
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
            "alias": "newCircleSports",
            "name": "sports",
            "storageKey": "sports(first:10,language:\"EN\")",
            "args": v76,
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
                      v2,
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
                          v35,
                          v37
                        ]
                      },
                      v39,
                      v18,
                      v47
                    ]
                  }
                ]
              }
            ]
          },
          v2,
          {
            "kind": "LinkedField",
            "alias": "summoningModalSports",
            "name": "sports",
            "storageKey": "sports(first:10,language:\"EN\")",
            "args": v76,
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
                      v2,
                      v44,
                      v39,
                      v47
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": "invitedUserExists",
            "name": "userExists",
            "args": v1,
            "storageKey": "userExists(email:\"_\",pseudo:\"_\")"
          },
          {
            "kind": "LinkedField",
            "alias": "selectSports",
            "name": "sports",
            "storageKey": "sports(first:10,language:\"EN\")",
            "args": v76,
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
                      v2,
                      v44,
                      v39,
                      v47,
                      v43,
                      v45,
                      v21,
                      v42
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": "personListUserExists",
            "name": "userExists",
            "args": v1,
            "storageKey": "userExists(email:\"_\",pseudo:\"_\")"
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "sportunity",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "id",
                "variableName": "sportunityId",
                "type": "ID"
              }
            ],
            "concreteType": "Sportunity",
            "plural": false,
            "selections": [
              v77,
              v2,
              v7,
              v8,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "privacy_switch_preference",
                "storageKey": null,
                "args": null,
                "concreteType": "PrivacySwitchPreferenceOutput",
                "plural": false,
                "selections": v9
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "participants",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": [
                  v2,
                  v11,
                  v10
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "waiting",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v12
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "invited",
                "storageKey": null,
                "args": null,
                "concreteType": "Invited",
                "plural": true,
                "selections": v13
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "survey",
                "storageKey": null,
                "args": null,
                "concreteType": "Survey",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "isSurveyTransformed",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "surveyDates",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SurveyDatesOutput",
                    "plural": true,
                    "selections": [
                      v78,
                      v77
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "invited_circles",
                "storageKey": "invited_circles(last:10)",
                "args": v14,
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
                          v2,
                          v3,
                          v19,
                          v16,
                          v20,
                          v21,
                          v22
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "price_for_circle",
                "storageKey": null,
                "args": null,
                "concreteType": "PriceForCircle",
                "plural": true,
                "selections": [
                  v23,
                  v24,
                  v25,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "excludedParticipantByDefault",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "excludedParticipantByDefault",
                    "plural": false,
                    "selections": v26
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "notification_preference",
                "storageKey": null,
                "args": null,
                "concreteType": "SportunityNotificationPreferenceOutput",
                "plural": false,
                "selections": v27
              },
              v30,
              v31,
              v78,
              v32,
              v6,
              v33,
              v34,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "sport",
                "storageKey": null,
                "args": null,
                "concreteType": "SportunitySport",
                "plural": false,
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
                      v2,
                      v38,
                      v39,
                      v43,
                      v45,
                      v47,
                      v21,
                      v42,
                      v49
                    ]
                  },
                  v43,
                  v45,
                  v47
                ]
              },
              v50,
              v51,
              v55,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "organizers",
                "storageKey": null,
                "args": null,
                "concreteType": "Organizer",
                "plural": true,
                "selections": [
                  v56,
                  v57,
                  v58,
                  v24,
                  v64,
                  v59,
                  v61,
                  v2
                ]
              },
              v65,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "venue",
                "storageKey": null,
                "args": null,
                "concreteType": "Venue",
                "plural": false,
                "selections": [
                  v2,
                  v3,
                  v71
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "infrastructure",
                "storageKey": null,
                "args": null,
                "concreteType": "Infrastructure",
                "plural": false,
                "selections": [
                  v2,
                  v3
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "slot",
                "storageKey": null,
                "args": null,
                "concreteType": "Slot",
                "plural": false,
                "selections": [
                  v2,
                  v28,
                  v73,
                  v24
                ]
              },
              v66,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "game_information",
                "storageKey": null,
                "args": null,
                "concreteType": "GameInformation",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "opponent",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportunityOpponentOutput",
                    "plural": false,
                    "selections": v68
                  }
                ]
              },
              v18
            ]
          },
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "querySuperMe",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "superMe",
                "storageKey": null,
                "args": null,
                "concreteType": "SuperUser",
                "plural": false,
                "selections": [
                  v2,
                  v69
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
(node/*: any*/).hash = '276a9ac78ce01c7760d751f0a615d1e6';
module.exports = node;
