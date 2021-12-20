import axios from 'axios'

const METHOD = 'http://json.ffwagency.md'

const getTabs = () => axios.get(`${METHOD}/tabs`)

const getMyFonts = () => axios.get(`${METHOD}/fonts_a`)

const getBuyFonts = () => axios.get(`${METHOD}/fonts_b`)

export default { getTabs, getMyFonts, getBuyFonts }
