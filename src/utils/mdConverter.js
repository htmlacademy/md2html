import beautify from "js-beautify";
import showdown from "showdown";
import Typograf from "typograf";

const tp = new Typograf({ locale: ["ru", "en-US"] });
tp.disableRule("common/punctuation/hellip");

const classMap = {
  table: "table table-striped table-bordered"
};

const bindings = Object.keys(classMap).map(key => ({
  regex: new RegExp(`<${key}(.*)>`, "g"),
  replace: `<${key} class="${classMap[key]}" $1>`,
  type: "output"
}));

const hrefs = () => ({
  regex: /<a href="#(.+)">/g,
  replace: (wn, href) => {
    return `<a href="#${href}" id="${href}">`;
  },
  type: "output"
});

const tabs = () => ({
  regex: /<p>(###[\w\-]+)<\/p>/g,
  replace: (wn, tab) => tab,
  type: "output"
});

const converter = new showdown.Converter({
  customizedHeaderId: true,
  disableForced4SpacesIndentedSublists: true,
  extensions: [...bindings, hrefs, tabs],
  ghCompatibleHeaderId: true,
  headerLevelStart: 3,
  requireSpaceBeforeHeadingText: true,
  tables: true
});

const mdConverter = markdown => {
  const html = converter.makeHtml(markdown);
  const typographyHtml = tp.execute(html);
  return beautify.html(typographyHtml, { indent_size: 2 });
};

export default mdConverter;
