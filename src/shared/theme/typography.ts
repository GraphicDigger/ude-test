import { ref } from './ref';

export const typography = {
  body: {
    fontFamily: ref.fontFamilyBase,
    fontSize: ref.fontSize16,
    fontWeight: ref.fontWeightRegular,
    lineHeight: ref.lineHeight24,
  },

  heading: {
    fontFamily: ref.fontFamilyBase,
    fontSize: ref.fontSize24,
    fontWeight: ref.fontWeightBold,
    lineHeight: ref.lineHeight24,
  },

  caption: {
    fontSize: ref.fontSize14,
    fontWeight: ref.fontWeightRegular,
    lineHeight: ref.lineHeight20,
    marginBottom: '8px',
  },
};
