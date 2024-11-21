import { definePlugin } from 'sanity';
import { DocumentIcon, ColorWheelIcon } from '@sanity/icons';

const categories = [
  {
    icon: DocumentIcon,
    group: 1,
    title: 'Pages',
    value: 'pages',
    types: ['page', 'home', 'error-404'],
  },
  {
    icon: ColorWheelIcon,
    group: 1,
    title: 'Modules',
    value: 'modules',
    types: ['design-system'],
  },
];

export const singletonPlugin = definePlugin((types) => {
  return {
    name: 'singletonPlugin',
    document: {
      newDocumentOptions: (prev, { creationContext }) => {
        if (creationContext.type === 'global') {
          return prev.filter((templateItem) => !types.includes(templateItem.templateId));
        }
        return prev;
      },
      actions: (prev, { schemaType }) => {
        if (types.includes(schemaType)) {
          return prev.filter(({ action }) => action !== 'duplicate');
        }
        return prev;
      },
    },
  };
});

export const pageStructure = (S, singletons) => {
  const singletonNames = singletons.map((singleton) => singleton.name);
  const excludedDocumentTypes = ['media.tag'];

  // create list items for categories
  const categoryItems = categories.map((category) =>
    S.listItem()
      .title(category.title)
      .icon(category.icon)
      .child(
        S.list()
          .title(category.title)
          .items(
            category.types.map((type) => {
              if (singletonNames.includes(type)) {
                // singleton: open directly in the editor
                return S.documentTypeListItem(type).child(
                  S.editor().id(type).schemaType(type).documentId(type),
                );
              } else {
                // regular document: show list of documents
                return S.documentTypeListItem(type);
              }
            }),
          ),
      ),
  );

  // group categories by their group property
  const groupedCategoryItems = [];
  const groups = [...new Set(categories.map((category) => category.group))];

  groups.forEach((group, index) => {
    const itemsInGroup = categoryItems.filter((_, i) => categories[i].group === group);
    groupedCategoryItems.push(...itemsInGroup);
    if (index < groups.length - 1) {
      groupedCategoryItems.push(S.divider());
    }
  });

  // handle singletons not in categories
  const singletonItems = singletonNames
    .filter((singleton) => !categories.some((category) => category.types.includes(singleton)))
    .map((singleton) =>
      S.documentTypeListItem(singleton).child(
        S.editor().id(singleton).schemaType(singleton).documentId(singleton),
      ),
    );

  // filter out categorized, singleton, and excluded documents from default list items
  const categorizedTypes = categories.flatMap((category) => category.types);
  const defaultListItems = S.documentTypeListItems().filter(
    (listItem) =>
      !categorizedTypes.includes(listItem.getId()) &&
      !singletonNames.includes(listItem.getId()) &&
      !excludedDocumentTypes.includes(listItem.getId()),
  );

  return S.list()
    .title('Content')
    .items([
      ...groupedCategoryItems,
      S.divider(),
      ...singletonItems,
      S.divider(),
      ...defaultListItems,
    ]);
};
