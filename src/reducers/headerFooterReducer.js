import {HEADER_HEIGHT, FOOTER_HEIGHT} from "../actions/types";

export const headerReducer = (state = 0, action) => {
  switch (action.type) {
      case HEADER_HEIGHT:
          return action.payload
      default:
          return state
  }
};

export const footerReducer = (state = 0, action) => {
  switch (action.type) {
      case FOOTER_HEIGHT:
          return action.payload
      default:
          return state
  }
};