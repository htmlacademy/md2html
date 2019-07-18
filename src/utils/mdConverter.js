import beautify from "js-beautify";
import showdown from "showdown";
import Typograf from "typograf";
import showdownHighlight from "showdown-highlight";
import {transliterate as tr} from "transliteration/dist/node/src/node";

const tp = new Typograf({ locale: ["ru", "en-US"] });
tp.disableRule("common/punctuation/hellip");

const classMap = {
  table: "table table--striped table--bordered"
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

const translitId = () => ({
  regex: /id="(.+)"/g,
  replace: (wn, href) => {
    return `id="${tr(href)}">`;
  },
  type: "output"
});

const tabs = () => ({
  regex: /<p>(###[\w-]+)<\/p>/g,
  replace: (wn, tab) => tab,
  type: "output"
});

const mdConverter = (markdown, settings) => {
  const extensions = [...bindings, tabs, translitId];

  if (settings.addIdToLink) {
    extensions.push(hrefs);
  }

  if (settings.convertHljs) {
    extensions.push(showdownHighlight);
  }

  const converter = new showdown.Converter({
    omitExtraWLInCodeBlocks: true,
    parseImgDimensions: true,
    strikethrough: true,
    tasklists: true,
    emoji: true,
    simpleLineBreaks: true,
    customizedHeaderId: true,
    disableForced4SpacesIndentedSublists: true,
    ghCompatibleHeaderId: settings.addHeaderId,
    noHeaderId: !settings.addHeaderId,
    headerLevelStart: settings.levelHeader,
    requireSpaceBeforeHeadingText: true,
    tables: true,
    extensions
  });

  const html = converter.makeHtml(markdown);
  const typographyHtml = tp.execute(html);
  return beautify.html(typographyHtml, { indent_size: 2 });
};

export default mdConverter;
