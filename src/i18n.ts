import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      Authentication: 'Authentication',
      DateAdded: 'Date added',
      Login: 'Login',
      LogIn: 'Log In',
      Register: 'Register',
      Found: 'We found',
      FoundCourses_one: 'We found <strong>{{count}}</strong> course available for you',
      FoundCourses_other: 'We found <strong>{{count}}</strong> courses available for you',
      SortBy: 'Sort by',
      'Welcome to React': 'Welcome to React and react-i18next',
      Home: 'Home',
      Courses: 'Courses',
      NoCoursesYet: 'You have no courses yet. Find one on ',
      NoCourses: 'No courses found',
      Tutors: 'Tutors',
      Tutor: 'Tutor',
      'Contact Us': 'Contact Us',
      'Back to website': 'Back to website',
      Lesson_one: 'Lesson',
      Lesson_other: 'Lessons',
      Topic_one: 'Topic',
      Topic_other: 'Topics',
      Student_one: 'Student',
      Student_other: 'Students',
      Categories: 'Categories',
      'All Categories': 'All categories',
      'All Tutors': 'All tutors',
      'Search for': 'Search for',
      'Popular Tags': 'Popular Tags',
      Search: 'Search',
      Title: 'Title',
      Back: 'Back',
      Send: 'Send',
      StudentsEnrolled: 'Students Enrolled',
      playVideo: 'Play video',
      Image: 'Image',
      Video: 'Video',
      H5P: 'Interactive element',
      RichText: 'Text',
      OEmbed: 'Inserted Element',
      'Buy now': 'Buy now',
      RecentCourses: 'Recent courses',
      LessonSummary: 'Lesson summary',
      'Next Topic': 'Next topic',
      TopicSummary: 'Topic summary',
      Pages: 'Pages',
      FREE: 'FREE',
      Password: 'Password',
      Confirm: 'Confirm',
      Homepage: {
        heading: 'Digital Wellbeing',
        headingText: `Modern information and communication technologies have changed the way we live and function forever. Learn how to take control of them to reach their full potential. It's up to you to have power over them, not over you.`,
        joinFree: 'Join For Free',
        headingText2: 'Improve Yours Skills With EscolaLMS Any Time, Anywhere',
      },
      OrdersPage: {
        MyOrders: 'My Orders',
        Price: {
          Subtotal: 'Subtotal',
          Tax: 'Tax',
          Total: 'Total',
        },
      },
      PaymentsPage: {
        MyPayments: 'My payments',
        TableCols: {
          OrderId: 'ORDER ID',
          PaymentId: 'PAYMENT ID',
          Created: 'CREATED',
          Price: 'PRICE',
          Items: 'Items',
        },
        PaymentStatus: {
          new: 'New',
          paid: 'Paid',
        },
      },
      CourseProgram: {
        TopicAttachment: 'Topic attachments',
      },
      Navbar: {
        MyProfile: 'My Profile',
        MyCourses: 'My Courses',
        MyOrders: 'My Orders',
        MyPayments: 'My Payments',
        Logout: 'Logout',
      },
      MyProfilePage: {
        Avatar: 'Select file to replace Avatar',
        FirstName: 'First Name',
        LastName: 'Last Name',
        Update: 'Update',
      },
      ContactPage: {
        Ready: 'Ready to Get Started?',
        EmailInfo: 'Your email address will not be published. Required fields are marked *',
        Name: 'Your Name',
        Email: 'Your email address',
        Phone: 'Your phone number',
        Subject: 'Your Subject',
        Message: 'Write your message...',
        Send: 'Send Message',
        OurAdress: 'Our Address',
        Contact: 'Contact',
        Hours: 'Hours of Operation',
        InTouch: 'Get in Touch',
        Details: 'Contact Details',
        Mobile: 'Mobile',
      },
      LoginPage: {
        RememberMe: 'Remember me',
        Lost: 'Lost your password?',
        Reset: 'Reset your password',
        TempLogin: 'For this demo you can use the following credentials',
        Username: 'Username',
        TempEmail1: 'This demo is using fake email service',
        TempEmail2: 'Use the following credentials to check what emails are being sent.',
        ForgotSuccess: 'We send a email for password reset',
      },
      RegisterPage: {
        FullName: 'First Name',
        LastName: 'Last Name',
        PassInfo:
          ' The password should be at least eight characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & )',
      },
      ResetPage: {
        Set: 'Set new password',
        NewPass: 'New password',
        Reset: 'Reset',
        Changed: 'Password has been changed',
      },
      Cart: {
        Cart: 'Cart',
        PayWithStripe: 'Pay with stripe Checkout',
        FreeCheckout: 'Free Checkout',
        CartIsEmpty: 'Cart is empty',
        CartSummary: 'Cart Totals',
        Columns: {
          Product: 'Product',
          Name: 'Name',
          Price: 'Price',
          Remove: 'Remove',
        },
      },
      MyCoursesPage: {
        Finish: 'Finish the course you started',
        Available: 'Available courses',
        Finished: 'Completed courses',
      },
      EmailVerifiedPage: {
        Verified: 'Your email is now verified',
        EmailText: 'Your email is now verified. Go to',
        LoginPage: 'login page',
      },
      StaticPages: {
        Contact: 'Contact',
      },
    },
  },
  pl: {
    translation: {
      Authentication: 'Uwierzytelnianie',
      DateAdded: 'Data dodania',
      Login: 'Logowanie',
      LogIn: 'Zaloguj się',
      Register: 'Rejestracja',
      Student_one: 'Student',
      Student_few: 'Studentów',
      Student_many: 'Studentów',
      Topic_one: 'Temat',
      Topic_few: 'Tematy',
      Topic_many: 'Tematów',
      Lesson_one: 'Lekcja',
      Lesson_few: 'Lekcje',
      Lesson_many: 'Lekcji',
      FREE: 'DARMOWY',
      Found: 'Znaleźliśmy',
      FoundCourses_one: 'Znaleźliśmy <strong>{{count}}</strong> kurs dostępny dla Ciebie',
      FoundCourses_few: 'Znaleźliśmy <strong>{{count}}</strong> kursy dostępne dla Ciebie',
      FoundCourses_many: 'Znaleźliśmy <strong>{{count}}</strong> kursów dostępnych dla Ciebie',
      NoCoursesYet: 'Nie masz kursów. Znajdz je na ',
      NoCourses: 'Nie znaleziono kursów',
      Home: 'Strona główna',
      Courses: 'Kursy',
      Tutors: 'Instruktorzy',
      Tutor: 'Instruktor',
      'Contact Us': 'Kontakt',
      'Welcome to React': 'Bienvenue à React et react-i18next',
      SortBy: 'Sortuj według',
      Title: 'Tytuł',
      'Price: low to high': 'Cena: od najwyższej',
      'Price: high to low': 'Cena: od najniższej',
      'All Categories': 'Wszystkie kategorie',
      'All Tutors': 'Wszyscy Instruktorzy',
      'Search for': 'Szukaj',
      Search: 'Szukaj',
      Categories: 'Kategorie',
      'Popular Tags': 'Popularne tagi',
      Preview: 'Podgląd',
      Category: 'Kategoria',
      StudentsEnrolled: 'Ilość słuchaczy',
      'Last Updated': 'Ostatnia aktualizacja',
      Summary: 'Konspekt Kursu',
      'Course Program': 'Program Kursu',
      Description: 'Opis',
      'Meet Your Instructors': 'Autor Kursu',
      RichText: 'Tekst',
      Video: 'Wideo',
      'Attend to Course': 'Uruchom kurs',
      'Course Preview': 'Zajawka Kursu',
      Duration: 'Czas Trwania',
      Language: 'Język',
      Level: 'Poziom',
      Dostęp: 'Access',
      Lifetime: 'Dozywotni',
      'Add to Cart': 'Dodaj do koszyka',
      'Back to website': 'Wróć do strony głównej',
      Back: 'Wróć',
      Send: 'Wyślij',
      'Next Topic': 'Następna lekcja',
      'Buy now': 'Kup teraz',
      'Buy Course': 'Kup kurs',
      'Preview course for free': 'Podgląd kursu za darmo',
      'change font size': 'zmień wielkość tekstu',
      'prev topic': 'poprzedni moduł',
      'next topic': 'następny moduł',
      next: 'Następny',
      prev: 'Poprzedni',
      playVideo: 'Odtwórz wideo',
      Image: 'Obraz',
      H5P: 'Element interaktywny',
      OEmbed: 'Element wstawiony',
      Pages: 'Strony',
      RecentCourses: 'Ostatnie kursy',
      LessonSummary: 'Podsumowanie lekcji',
      TopicSummary: 'Podsumowanie tematu',
      Password: 'Hasło',
      Confirm: 'Potwierdź',
      Homepage: {
        heading: 'Cyfrowy Dobrostan',
        headingText: `Nowoczesne technologie informacyjno-komunikacyjne na zawsze
        zmieniły sposób, w jaki żyjemy i funkcjonujemy. Naucz się, jak
        przejąć nad nimi kontrolę, aby w pełni wykorzystać ich
        potencjał. To Ty masz mieć nad nimi władzę, a nie one nad Tobą.`,
        joinFree: 'Dołącz bezpłatnie',
        headingText2: 'Podnieś swoje umiejętności dzięki EscolaLMS w dowolnym czasie i miejscu',
      },
      OrdersPage: {
        MyOrders: 'Moje zamówienia',
        Price: {
          Subtotal: 'Suma',
          Tax: 'Podatek',
          Total: 'Koszt całkowity',
        },
      },
      PaymentsPage: {
        MyPayments: 'Moje płatności',
        TableCols: {
          OrderId: 'ID ZAMÓWIENIA',
          PaymentId: 'ID Płatności',
          Created: 'Utworzono',
          Price: 'Cena',
          Items: 'Kursy',
        },
        PaymentStatus: {
          new: 'Nowe',
          paid: 'Opłacone',
        },
      },
      CourseProgram: {
        TopicAttachment: 'Załączniki lekcji',
      },
      Navbar: {
        MyProfile: 'Mój Profil',
        MyCourses: 'Moje Kursy',
        MyOrders: 'Moje zamówienia',
        MyPayments: 'Płatności',
        Logout: 'Wyloguj',
      },
      MyProfilePage: {
        Avatar: 'Wybierz plik do Avatara',
        FirstName: 'Imię',
        LastName: 'Nazwisko',
        Update: 'Zaktualizuj',
      },
      ContactPage: {
        Ready: 'Gotowy żeby zacząć?',
        EmailInfo: 'Twoj adres e-mail nie bedzie opublikowany. Wymagane pola są zaznaczone *',
        Name: 'Twoje imię',
        Email: 'Twój adres email',
        Phone: 'Twój numer telefonu',
        Subject: 'Twój temat',
        Message: 'Napisz wiadomość...',
        Send: 'Wyślij wiadomość',
        OurAdress: 'Nasz adress',
        Contact: 'Kontakt',
        Hours: 'Godziny',
        InTouch: 'Bądź w kontakcie',
        Details: 'Szczegóły kontaktu',
        Mobile: 'Telefon',
      },
      LoginPage: {
        RememberMe: 'Zapamietaj mnie',
        Lost: 'Zapomniałeś hasła?',
        Reset: 'Zresetuj swoje hasło',
        TempLogin: 'W tym demo możesz użyć następujących danych uwierzytelniających',
        Username: 'Nazwa użytkownika',
        TempEmail1: 'To demo używa fałszywej usługi e-mail.',
        TempEmail2:
          'Użyj poniższych danych uwierzytelniających, aby sprawdzić, jakie e-maile są wysyłane',
        ForgotSuccess: 'Wysłaliśmy wiadomość e-mail z prośbą o zresetowanie hasła',
      },
      RegisterPage: {
        FullName: 'Imię',
        LastName: 'Nazwisko',
        PassInfo:
          'Hasło powinno składać się z co najmniej ośmiu znaków. Aby je wzmocnić, użyj wielkich i małych liter, cyfr i symboli, takich jak ! " ? $ % ^ & )',
      },
      ResetPage: {
        Set: 'Ustaw nowe hasło',
        NewPass: 'Nowe hasło',
        Reset: 'Resetuj',
        Changed: 'Hasło zostało zmienione',
      },
      Cart: {
        Cart: 'Koszyk',
        PayWithStripe: 'Płać za pomocą stripe Checkout',
        FreeCheckout: 'Zakończ bezpłatnie',
        CartIsEmpty: 'Koszyk jest pusty',
        CartSummary: 'Suma koszyka',
        Columns: {
          Product: 'Produkt',
          Name: 'Nazwa',
          Price: 'Cena',
          Remove: 'Usuń',
        },
      },
      MyCoursesPage: {
        Finish: 'Dokończ rozpoczęty kurs',
        Available: 'Dostępne kursy',
        Finished: 'Ukończone kursy',
      },
      EmailVerifiedPage: {
        Verified: 'Twój email jest teraz zweryfikowany',
        EmailText: 'Twój email został zweryfikowany. Przejdź do',
        LoginPage: 'strony logowania',
      },
      StaticPages: {
        Contact: 'Kontakt',
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    supportedLngs: ['pl', 'en'],
    fallbackLng: 'pl',
    // lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
    },
  });

export default i18n;
