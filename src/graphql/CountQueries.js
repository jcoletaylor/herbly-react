import { gql } from '@apollo/client'

export const HERB_COUNT = gql`
    query GetHerbCount {
        herbs_aggregate {
            aggregate {
                count
            }
        }
    }
`

export const FORMULA_COUNT = gql`
    query GetFormulaCount {
        formulas_aggregate {
            aggregate {
                count
            }
        }
    }
`
export const OVERVIEW_COUNTS = gql`
    query GetOverviewCounts {
        herbs_aggregate {
            aggregate {
                count
            }
        }
        herb_categories_aggregate {
            aggregate {
                count
            }
        }
        herb_properties_aggregate {
            aggregate {
                count
            }
        }
        herb_action_types_aggregate {
            aggregate {
                count
            }
        }
        herb_warnings_aggregate {
            aggregate {
                count
            }
        }
        formulas_aggregate {
            aggregate {
                count
            }
        }
        formula_named_actions_aggregate {
            aggregate {
                count
            }
        }
        syndromes_aggregate {
            aggregate {
                count
            }
        }
        symptoms_aggregate {
            aggregate {
                count
            }
        }
        conditions_aggregate {
            aggregate {
                count
            }
        }
    }
`
