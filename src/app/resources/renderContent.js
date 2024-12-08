import { person, newsletter, social, home, about, blog, finance, gallery, cafe, work } from './content';
import { createI18nContent } from './content-i18n';
import { i18n } from './config';

const renderContent = (t) => {
    if ( i18n ) {
        return createI18nContent(t);
    } else {
        return {
            person,
            social,
            newsletter,
            home,
            about,
            blog,
            finance,
            gallery,
            cafe,
            work
        }
    }
};

export { renderContent };