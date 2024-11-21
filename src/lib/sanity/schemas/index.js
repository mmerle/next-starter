// singletons
import settings from './singleton/settings';
import home from './singleton/home';
import designSystem from './singleton/design-system';
import error404 from './singleton/404';

// documents
import page from './documents/page';
import navigation from './documents/navigation';

// objects
import link from './objects/link';
import callToAction from './objects/call-to-action';
import infoSection from './objects/info-section';
import button from './objects/button';

// common
import seo from './common/seo';
import a11yImage from './common/a11y-image';

export const singletons = [settings, home, designSystem, error404];

const uniqueSchemaTypes = new Set([
  ...singletons,
  seo,
  a11yImage,
  link,
  button,
  callToAction,
  infoSection,
  page,
  navigation,
]);

export const schemaTypes = Array.from(uniqueSchemaTypes);
