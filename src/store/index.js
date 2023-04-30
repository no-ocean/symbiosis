import mobileMenuBtnStore from './mobileMenuBtn';
import { injectStores } from '@mobx-devtools/tools';

injectStores({
  mobileMenuBtnStore,
});

export { mobileMenuBtnStore };
