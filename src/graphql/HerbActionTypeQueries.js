import { gql } from '@apollo/client'

export const SIMPLE_HERB_ACTION_TYPE_FRAGMENT = gql`
    fragment SimpleHerbActionType on herb_action_types {
        id
        name
        herb_actions {
            id
            herb {
                id
                name
                pinyin
                hanzi
                common_english
                herb_category {
                    name
                }
            }
        }
    }
`

export const LIST_HERB_ACTION_TYPES = gql`
    query ListHerbActionTypes($limit: Int!, $offset: Int!) {
        herb_action_types(limit: $limit, offset: $offset, order_by: { name: asc }) {
            ...SimpleHerbActionType
        }
        herb_action_types_aggregate {
            aggregate {
                count
            }
        }
    }
    ${SIMPLE_HERB_ACTION_TYPE_FRAGMENT}
`
