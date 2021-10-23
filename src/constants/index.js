export const Tabs = {
  code: "Код",
  frame: "Предпросмотр"
};
export const CONVERT_HLJS = "CONVERT_HLJS";
export const HEADER_LEVEL = "HEADER_LEVEL";
export const ADD_HEADER_ID = "ADD_HEADER_ID";
export const ADD_ID_TO_LINK = "ADD_ID_TO_LINK";

export const defaultText = `# Заголовок

- Список
  1. Вложенный список

      \`\`\`html
      <div>Вложенная вёрстка</div>
      \`\`\`

      \`\`\`js
      // Вложенный JS
      const sum = (a, b) => {
        return a + b;
      }
      \`\`\`
  2. Второй элемент

### big-trip

Выше - разделитель для заданий. Итоговый код прогоняется через типограф, поэтому пробелы и тире в тексте правильные. Также готовый HTML код прогоняется через бьютифаер, чтобы не было каши.

| Таблица       | это           | круто |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

Если надо использовать классы — можно добавлять HTML теги 
\`\`\`html
 <div class="alert alert--full-width alert--red">Паника</div>
 \`\`\`
 конвертируется в
 
 <div class="alert alert--full-width alert--red">Паника</div>
  
`;
