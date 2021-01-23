import { gql } from '@apollo/client'

export const SIMPLE_HERB_DETAIL_FRAGMENT = gql`
    fragment SimpleHerbDetail on herbs {
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
`

export const COMPLETE_HERB_DETAIL_FRAGMENT = gql`
    fragment CompleteHerbDetail on herbs {
        id
        name
        pinyin
        common_english
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
            precedence_type {
                id
                name
            }
            property
        }
        herb_dosages {
            id
            dosage
            herb_dosage_type {
                id
                name
            }
        }
        herb_actions {
            herb_action_type {
                id
                name
            }
            herb_action_annotations {
                id
                annotation
            }
            herb_action_indications {
                id
                indication
            }
        }
        herb_warnings {
            id
            warning
            herb_warning_type {
                id
                name
            }
        }
        herb_combination_herbs {
            herb_combination {
                id
                description
                herb_combination_herbs {
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
                herb_combination_use_cases {
                    id
                    use_case
                }
            }
        }
        herb_notes {
            id
            note
        }
        formula_herbs {
            id
            formula {
                name
                pinyin
                hanzi
                english
            }
        }
    }
`

export const LIST_HERBS = gql`
    query ListAllHerbs($limit: Int!, $offset: Int!) {
        herbs(limit: $limit, offset: $offset, order_by: { name: asc }) {
            ...SimpleHerbDetail
        }
        herbs_aggregate {
            aggregate {
                count
            }
        }
    }
    ${SIMPLE_HERB_DETAIL_FRAGMENT}
`

export const SINGLE_HERB_DETAIL = gql`
    query SingleHerbDetail($name: String) {
        herbs(where: { name: { _eq: $name } }) {
            ...CompleteHerbDetail
        }
    }
    ${COMPLETE_HERB_DETAIL_FRAGMENT}
`
