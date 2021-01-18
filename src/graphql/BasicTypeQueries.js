import { gql } from '@apollo/client'

export const ALL_BASIC_TYPES = gql`
    query GetAllBasicTypes {
        herb_dosage_types {
            id
            name
        }
        herb_property_types {
            id
            name
        }
        herb_warning_types {
            id
            name
        }
    }
`
