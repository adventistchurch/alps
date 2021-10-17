// Media Block's presets

const defaultBlock = {
}

const column = {
  content: "u-color--white",
  group: "u-flex--justify-center u-overlay--dark",
  title: "u-font--primary--xl u-space--zero u-flex--justify-center u-theme--color--dark",
}

const feature = {
  type: 'inline',
  block: "l-grid l-grid--7-col",
  content: "u-spacing u-padding--bottom u-padding--top l-grid-item u-theme--border-color--darker--left u-theme--background-color--darker u-theme--color--lighter",
  image: "u-padding--zero--sides l-grid-item",
  title: "u-color--white u-font-weight--bold u-space--zero u-theme--color--lighter",
  titleLink: "u-theme--link-hover--dark",
}

const featureHalf = {
  ...feature,
  block: feature.block + " l-grid-wrap l-grid-wrap--6-of-7",
  content: feature.content + " l-grid-item--m--3-col",
  image: feature.image + " l-grid-item--m--3-col",
}

const featureWide = {
  ...featureHalf,
  content: featureHalf.content + " l-grid-item--l--2-col",
  image: featureHalf.image + " l-grid-item--l--4-col"
}

const featuredNews = {
  stackedUntilSmall: true,
  seven: true,
  block: "l-large-break l-grid-wrap l-grid l-grid--7-col u-spacing--until-small c-block__featuredNews",
  image: "u-padding--zero--sides l-grid-item l-grid-item--s--2-col l-grid-item--l--1-col",
  content: "u-spacing u-padding--left u-flex--justify-start l-grid-item l-grid-item--s--4-col l-grid-item--l--3-col",
  meta: "u-theme--color--base",
}

const archiveHome = {
  // reversed: true, // TODO: Template says .c-block--reversed
  block: "l-grid l-grid--7-col l-grid-wrap l-grid-wrap--6-of-7",
  image: "u-padding--zero--sides l-grid-item--2-col l-grid-item--m--1-col l-grid-item--l--1-col",
  content: "u-spacing u-border--left u-flex--justify-start l-grid-item--4-col l-grid-item--m--3-col l-grid-item--l--3-col",
  meta: "u-theme--color--base"
}

const archivePage = {
  block: "l-grid l-grid--7-col l-standard-break l-grid-wrap l-grid-wrap--5-of-7",
  image: "u-padding--zero--sides l-grid-item--2-col l-grid-item--m--1-col l-grid-item--l--1-col",
  content: "u-spacing u-flex--justify-start l-grid-item--4-col l-grid-item--m--3-col l-grid-item--xl--2-col",
  title: "u-font--primary--m u-space--zero u-theme--color--darker",
  meta: "u-theme--color--base"
}

const full = {
  content: "u-color--white u-spacing l-grid--7-col l-grid-wrap l-grid-wrap--7-of-7",
  group: "u-text-align--center u-flex--align-center u-flex--justify-center u-overlay--dark",
  title: "u-font--primary--xl u-space--zero u-flex--justify-center l-grid-item--5-col l-grid-item--m--2-col u-theme--color--dark"
}

const inline = {
  reversed: true,
  image: "u-padding--zero--sides",
  content: "u-spacing u-background-color--gray--light u-color--gray u-padding--bottom u-padding--top",
  contentReversed: "u-border-left--black--at-large u-theme--border-color--darker--left",
  title: "u-theme--color--darker",
  meta: "u-theme--color--dark",
}

const inset = {
  content: "u-spacing l-grid--7-col u-theme--background-color--darker",
  title: "u-link-hover--white l-grid-item l-grid-item--m--4-col u-theme--color--dark",
  meta: "l-grid-item l-grid-item--m--2-col",
}

const mediaContent = {
  type: 'inline',
  reversed: true,
  seven: true,
  block: "l-grid l-grid--7-col l-grid-wrap l-grid-wrap--6-of-7",
  image: "u-padding--zero--sides l-grid-item l-grid-item--s--3-col",
  content: "u-spacing u-background-color--gray--light can-be--dark-dark u-color--gray u-border-left--black--at-large u-padding--bottom u-padding--top u-flex--justify-between l-grid-item l-grid-item--s--3-col u-theme--border-color--darker--left",
  meta: "u-theme--color--base"
}

const mediaRow = {
  type: 'stacked',
  seven: true,
  block: "l-grid l-grid--7-col l-grid-wrap l-grid-item--3-col l-grid-item--m--2-col l-grid-item--xl--1-col",
  image: "u-padding--zero--sides u-space--right l-grid-item--3-col l-grid-item--m--2-col l-grid-item--xl--1-col",
  content: "u-spacing u-border--left l-grid-item--3-col l-grid-item--m--2-col l-grid-item--xl--1-col",
  title: "u-font--primary--s u-theme--color--dark",
  meta: "u-font--secondary--xs u-theme--color--base"
}

const longform = {
  type: 'inline',
  block: "can-be--dark-dark u-padding--bottom u-padding--top l-grid--7-col l-grid-wrap l-grid-wrap--6-of-7 u-theme--background-color--darker",
  content: "u-spacing u-border--left u-shift--left--1-col--at-large l-grid-item l-grid-item--m--6-col l-grid-item--l--4-col l-grid-item--xl--3-col u-theme--border-color--light--left u-theme--color--lighter",
  title: "u-color--white u-font--primary u-space--zero u-theme--color--dark",
  titleLink: "u-theme--link-hover--light",
}

const row = {
  content: "u-spacing u-color--gray",
  title: "u-font--primary u-space--zero u-theme--color--darker",
  meta: "u-theme--color--dark"
}

const stacked = {
  content: "u-spacing u-border--left",
  title: "u-font--primary--m u-space--zero u-theme--color--darker",
  meta: "u-font--secondary--xs u-theme--color--dark"
}

const video = {
  type: 'stacked',
  icon: 'video',
  block: "u-space--double--bottom u-space--right",
  content: "u-color--gray u-border--left u-spacing u-theme--border-color--darker--left",
  title: "u-font--primary--m u-space--zero u-theme--color--darker"
}

const relatedPost = {
  type: 'inline',
  // reversed: true, // TODO: Template says .c-block--reversed
  block: "l-grid--7-col",
  image: "u-padding--right l-grid-item l-grid-item--2-col l-grid-item--m--1-col l-grid-item--l--1-col",
  content: "u-color--gray u-border--left u-spacing--half l-grid-item l-grid-item--4-col l-grid-item--m--3-col l-grid-item--l--1-col u-theme--border-color--darker--left",
  title: "u-font--primary--s u-space--zero u-theme--color--dark",
  meta: "u-font--secondary--xs u-theme--color--base"
}

export default {
  default: defaultBlock,
  column,
  feature,
  featureHalf,
  featureWide,
  featuredNews,
  archiveHome,
  archivePage,
  full,
  inline,
  inset,
  mediaContent,
  mediaRow,
  longform,
  row,
  stacked,
  relatedPost,
  video,
}
