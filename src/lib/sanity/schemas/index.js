// singletons
import settings from './singleton/settings';
import home from './singleton/home';
import designSystem from './singleton/design-system';
import error404 from './singleton/404';

// documents
// here

// common
import seo from './common/seo';
import a11yImage from './common/a11y-image';

export const singletons = [settings, home, designSystem, error404];

const uniqueSchemaTypes = new Set([...singletons, seo, a11yImage]);

export const schemaTypes = Array.from(uniqueSchemaTypes);
