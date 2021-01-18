import { gql } from '@apollo/client'

export const LIST_HERBS = gql`
    query ListAllHerbs($limit: Int!, $offset: Int!) {
        herbs(limit: $limit, offset: $offset, order_by: { name: asc }) {
            id
            name
            pinyin
            latin
            pharm_latin
            hanzi
            herb_category {
                id
                name
            }
            herb_properties {
                herb_property_type {
                    id
                    name
                }
                property
            }
        }
        herbs_aggregate {
            aggregate {
                count
            }
        }
    }
`
