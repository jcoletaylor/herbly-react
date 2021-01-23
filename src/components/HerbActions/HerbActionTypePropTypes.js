import PropTypes from 'prop-types'

const HerbActionTypePropTypes = {
    herbActionType: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        herb_actions: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                herb: PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    name: PropTypes.string.isRequired,
                    common_english: PropTypes.string,
                    hanzi: PropTypes.string,
                    pinyin: PropTypes.string,
                }),
            }),
        ),
    }),
}

export default HerbActionTypePropTypes
