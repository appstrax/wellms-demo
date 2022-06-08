import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources as ComponentTranslations } from "@escolalms/components/lib/styleguide/i18n";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      ...ComponentTranslations.en.translation,
      "Access from": "Access from",
      "Access to": "Access to",
      Access: "Access",

      "Add to Cart": "Add to Cart",
      "All Categories": "All categories",
      "All Tutors": "All tutors",
      "Attend to Course": "Attend to Course",
      Authentication: "Authentication",
      Back: "Back",
      "Back to website": "Back to website",
      "Buy Course": "Buy Course",
      "Buy now": "Buy now",
      Categories: "Categories",
      Category: "Category",
      "change font size": "change font size",
      Confirm: "Confirm",
      "Contact Us": "Contact Us",
      "Course Preview": "Course Preview",
      "Course Program": "Course Program",
      "Checkout Course": "Checkout Course",
      Courses: "Courses",
      DateAdded: "Date added",
      Description: "Description",
      Duration: "Duration",
      Found: "We found",
      FoundCourses_one:
        "We found <strong>{{count}}</strong> course available for you",
      FoundCourses_other:
        "We found <strong>{{count}}</strong> courses available for you",
      FREE: "FREE",
      group_access: "Group access",
      H5P: "Interactive element",
      Home: "Home",
      hours_to_complete: "Hours to complete",
      Image: "Image",
      Language: "Language",
      "Last Updated": "Last Updated",
      Lesson_one: "Lesson",
      Lesson_other: "Lessons",
      LessonSummary: "Lesson summary",
      Level: "Level",
      Lifetime: "Lifetime",
      LogIn: "Log In",
      Login: "Login",
      "Login to buy": "Login to buy",
      "Meet your instructor": "Meet your instructor",
      "next topic": "next topic",
      "Next Topic": "Next topic",
      next: "Next",
      NoCourses: "No courses found",
      NoCoursesYet: "You have no courses yet. Find one on ",
      OEmbed: "Inserted Element",
      Pages: "Pages",
      Password: "Password",
      playVideo: "Play video",
      "Popular Tags": "Popular Tags",
      "prev topic": "prev topic",
      prev: "Prev",
      "Preview course for free": "Preview course for free",
      Preview: "Preview",
      "Price: high to low": "Price: high to low",
      "Price: low to high": "Price: low to high",
      RecentCourses: "Recent courses",
      Register: "Register",
      RichText: "Text",
      "Search for": "Search for",
      Search: "Search",
      Send: "Send",
      SortBy: "Sort by",
      Student_one: "Student",
      Student_other: "Students",
      StudentsEnrolled: "Students Enrolled",
      Summary: "Summary",
      Tags: "Tags",
      Title: "Title",
      Topic_one: "Topic",
      Topic_other: "Topics",
      TopicSummary: "Topic summary",
      Tutor: "Tutor",
      Tutors: "Tutors",
      Video: "Video",
      "Video Coursers": "Video Coursers",
      "No Videos": "No Videos",
      Payment: "Payment",
      "Card number": "Card number",
      "Name on card": "Name on card",
      "Expiration date": "Expiration date",
      "with Stripe": "with Stripe",
      "stripe testing card numbers": "stripe testing card numbers",
      Eg: "eg",
      Use: "Use",
      Close: "Close",
      Pay: "Pay",
      Download: "Download",
      CoursePreviewNavbar:
        "This is course preview. Back to app, or purchase this course.",
      CoursePage: {
        Tabs: {
          Summary: "Summary",
          Program: "Program",
          Instructor: "Instructor",
          Description: "Description",
        },
        Preview: {
          SeeOther: "See other",
        },
      },
      Cart: {
        Cart: "Cart",
        PayWithStripe: "Pay with stripe Checkout",
        FreeCheckout: "Free Checkout",
        CartIsEmpty: "Cart is empty",
        CartSummary: "Cart Totals",
        Columns: {
          Product: "Product",
          Name: "Name",
          Price: "Price",
          Remove: "Remove",
        },
      },
      ContactPage: {
        Ready: "Ready to Get Started?",
        EmailInfo:
          "Your email address will not be published. Required fields are marked *",
        Name: "Your Name",
        Email: "Your email address",
        Phone: "Your phone number",
        Subject: "Your Subject",
        Message: "Write your message...",
        Send: "Send Message",
        OurAdress: "Our Address",
        Contact: "Contact",
        Hours: "Hours of Operation",
        InTouch: "Get in Touch",
        Details: "Contact Details",
        Mobile: "Mobile",
      },
      CourseProgram: {
        TopicAttachment: "Topic attachments",
      },
      EmailVerifiedPage: {
        Verified: "Your email is now verified",
        EmailText: "Go to",
        LoginPage: "login page",
        Verify: "We are verifying",
      },
      TutorPage: {
        Courses: "Tutor Courses",
      },
      Homepage: {
        heading: "Digital Wellbeing",
        headingText: `Modern information and communication technologies have changed the way we live and function forever. Learn how to take control of them to reach their full potential. It's up to you to have power over them, not over you.`,
        joinFree: "Join For Free",
        headingText2: "Improve Yours Skills With EscolaLMS Any Time, Anywhere",
      },
      LoginPage: {
        RememberMe: "Remember me",
        Lost: "Lost your password?",
        Reset: "Reset your password",
        TempLogin: "For this demo you can use the following credentials",
        Username: "Username",
        TempEmail1: "This demo is using fake email service",
        TempEmail2:
          "Use the following credentials to check what emails are being sent.",
        ForgotSuccess: "We send a email for password reset",
      },
      MyCoursesPage: {
        Finish: "Finish the course you started",
        Available: "Available courses",
        Finished: "Completed courses",
        NoData: "No courses",
      },
      MyProfilePage: {
        Avatar: "Select file to replace Avatar",
        FirstName: "First Name",
        LastName: "Last Name",
        Update: "Update",
        Bio: "Bio",
        EmptyCertificates: "Certificates list is empty!",
        EmptyMattermostChannels: "Mattermost channels list is empty!",
        EditData: "Edit data",
      },

      Navbar: {
        MyProfile: "My Profile",
        MyCourses: "My Courses",
        MyCertificates: "My Certificates",
        MyMattermostChannels: "My Mattermost Channels",
        MyOrders: "My Orders",
        MyPayments: "My Payments",
        Logout: "Logout",
      },
      OrdersPage: {
        MyOrders: "My Orders",
        ListEmpty: "Order list is empty!",
        Price: {
          Subtotal: "Subtotal",
          Tax: "Tax",
          Total: "Total",
        },
      },
      PaymentsPage: {
        MyPayments: "My payments",
        ListEmpty: "Payment list is empty!",
        TableCols: {
          OrderId: "ORDER ID",
          PaymentId: "PAYMENT ID",
          Created: "CREATED",
          Price: "PRICE",
          Items: "Items",
          Status: "Status",
        },
        PaymentStatus: {
          new: "New",
          paid: "Paid",
        },
      },
      MattermostChannel: {
        TeamName: "Team name",
        Channels: "Channels",
        LastPost: "Last post",
        TableCols: {
          DisplayName: "NAME",
          Url: "LINK",
        },
      },
      RegisterPage: {
        registrationSuccess:
          "Account registered successfully. Please check your",
        registrationForLink: "for validation link.",
        registrationSuccesAdminEnabled:
          "Account registered successfully. Account must be enabled by admin.",
        FullName: "First Name",
        LastName: "Last Name",
        PassInfo:
          'The password should be at least eight characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & )',
      },
      ResetPage: {
        Set: "Set new password",
        NewPass: "New password",
        Reset: "Reset",
        Changed: "Password has been changed",
      },
      StaticPages: {
        Contact: "Contact",
      },
      Custom404Page: {
        NotFound: "Error 404 : Page Not Found",
        Info: "The page you are looking for might have been removed had its name changed or is temporarily unavailable.",
      },
      Notifications: {
        EscolaLmsTopicFinishedTemplateEvent: "Topic finished",
        NoNotifications: "You have no notification",
        OrderPaid: "Order paid",
        UserLogged: "User logged in",
        list: "List",
        TopicFinished: "Topic finished",
        CourseAssigned: "Course assigned",
        PaymentRegistered: "Payment registered",
        PermissionRoleRemoved: "Permission role removed",
        PermissionRoleChanged: "Permission role changed",
        CartOrderPaid: "Cart order paid",
        CourseAccessFinished: "Course access finished",
        Logout: "Logout",
        UserRemovedFromGroup: "User removed from group",
        UserAddedToGroup: "User added to group",
        CoursedPublished: "Course published",
        ResetPassword: "Reset password",
        CourseAccessStarted: "Course access started",
        CartOrderSuccess: "Order success",
        AccountRegistered: "Account registered",
        ForgotPassword: "Forgot password",
        Login: "Login",
        TopicTypeChanged: "Topic type changed",
        AccountDeleted: "Account deleted",
        AccountBlocked: "Account blocked",
        CourseFinished: "Course finished",
        PaymentSuccess: "Payment success",
        PdfCreated: "PDF created",
        CourseTutorUnassigned: "Course tutor unassigned",
        CourseUnassigned: "Course uassigned",
        AccountMustBeEnableByAdmin: "Account must be enable by Admin",
        SettingPackageConfigUpdated: "Setting package config updated",
        CourseTutorAssigned: "Course tutor assigned",
        AccountConfirmed: "Account confirmed",
      },
    },
  },
  pl: {
    translation: {
      ...ComponentTranslations.pl.translation,
      UnexpectedError: "Wystąpił nieoczekiwany błąd. Spróbuj ponownie",
      StartNow: "Zacznij teraz",
      "Access from": "Dostęp od",
      "Access to": "Dostęp do",
      Access: "Dostęp",
      "Add to Cart": "Dodaj do koszyka",
      "All Categories": "Wszystkie kategorie",
      "All Tutors": "Wszyscy Instruktorzy",
      "Attend to Course": "Uruchom kurs",
      Authentication: "Uwierzytelnianie",
      Back: "Wróć",
      "Back to website": "Wróć do strony głównej",
      "Buy Course": "Kup kurs",
      "Buy now": "Kup teraz",
      Categories: "Kategorie",
      "Checkout Course": "Zamówienie kursu",
      Category: "Kategoria",
      "change font size": "zmień wielkość tekstu",
      Confirm: "Potwierdź",
      "Contact Us": "Kontakt",
      "Course Preview": "Zajawka Kursu",
      "Course Program": "Program Kursu",
      Courses: "Kursy",
      DateAdded: "Data dodania",
      Description: "Opis",
      Duration: "Czas Trwania",
      Found: "Znaleźliśmy",
      FoundCourses_few:
        "Znaleźliśmy <strong>{{count}}</strong> kursy dostępne dla Ciebie",
      FoundCourses_many:
        "Znaleźliśmy <strong>{{count}}</strong> kursów dostępnych dla Ciebie",
      FoundCourses_one:
        "Znaleźliśmy <strong>{{count}}</strong> kurs dostępny dla Ciebie",
      FREE: "DARMOWY",
      group_access: "Dostęp grupowy",
      H5P: "Element interaktywny",
      Home: "Strona główna",
      hours_to_complete: "Godziny do ukończenia",
      Image: "Obraz",
      Language: "Język",
      "Last Updated": "Ostatnia aktualizacja",
      Lesson_few: "Lekcje",
      Lesson_many: "Lekcji",
      Lesson_one: "Lekcja",
      LessonSummary: "Podsumowanie lekcji",
      Level: "Poziom",
      Lifetime: "Dożywotni",
      Login: "Logowanie",
      LogIn: "Zaloguj się",
      "Login to buy": "Zaloguj się by kupić",
      "Meet your instructor": "Poznaj swojego nauczyciela",
      "Next Topic": "Następna lekcja",
      "next topic": "następny moduł",
      next: "Następny",
      NoCourses: "Nie znaleziono kursów",
      NoCoursesYet: "Nie masz kursów. Znajdź je na ",
      OEmbed: "Element wstawiony",
      Pages: "Strony",
      Password: "Hasło",
      playVideo: "Odtwórz wideo",
      "Popular Tags": "Popularne tagi",
      "prev topic": "poprzedni moduł",
      prev: "Poprzedni",
      "Preview course for free": "Podgląd kursu za darmo",
      Preview: "Podgląd",
      "Price: high to low": "Cena: od najniższej",
      "Price: low to high": "Cena: od najwyższej",
      RecentCourses: "Ostatnie kursy",
      Register: "Rejestracja",
      RichText: "Tekst",
      "Search for": "Szukaj",
      Search: "Szukaj",
      Send: "Wyślij",
      SortBy: "Sortuj według",
      Student_few: "Studentów",
      Student_many: "Studentów",
      Student_one: "Student",
      StudentsEnrolled: "Ilość słuchaczy",
      Summary: "Konspekt Kursu",
      Tags: "Tagi",
      Title: "Tytuł",
      Topic_few: "Tematy",
      Topic_many: "Tematów",
      Topic_one: "Temat",
      TopicSummary: "Podsumowanie tematu",
      Tutor: "Instruktor",
      Tutors: "Instruktorzy",
      Video: "Wideo",
      "Video Coursers": "Kursy wideo",
      "No Videos": "Brak wideo",
      Payment: "Płatność",
      "Card number": "Numer karty",
      "Name on card": "Nazwa na karcie",
      "Expiration date": "Data ważności",
      "with Stripe": "przez Stripe",
      "stripe testing card numbers": "stripe testowy numer karty",
      Eg: "np.",
      Use: "Użyj",
      Close: "Zamknij",
      Pay: "Zapłać",
      Download: "Pobierz",
      LoginAndRegister: "Logowanie i rejestracja",

      CoursePreviewNavbar:
        "To jest podgląd kursu. Wróć do aplikacji lub kup ten kurs.",
      CoursePage: {
        HeroBtnText: "Zobacz więcej",
        Level: "Poziom trudności",
        StartDate: "Termin rozpoczęcia",
        CourseCategory: "Kategoria szkolenia",
        Duration: "Czas trwania",
        CompaniesTitle: "Firmy które oferują ten kurs swoim pracownikom",
        CourseDescriptionTitle: "Opis szkolenia",
        CourseRatingsTitle: "Opinie studentów",
        RelatedCoursesTitle: "Powiązane szkolenia",
        InterestTitle: "Może Cię zainteresuje",
        GoToCheckout: "Do kasy",
        NotStarted: "Kurs się jeszcze nie rozpoczął",
        "30Days": "Gwarantowane 30 dni na zwrot",
        ContentToDownload: "Materiały szkoleniowe do pobrania",
        SmartphoneAccess: "Dostęp na smartphone i tablet",
        Certificate: "Certyfikat ukończenia",
        Finished: "Ukończono",
        Of: "z",
        IsFinished: "Kurs się zakończył",
        Lessons: "lekcji",
        FinishToGetCertificate: "Ukoncz kurs aby zdobyc certyfikat",
        MyProgress: "Moje postępy",
        ToSeeProgress: "aby widzieć postępy",
        UnavailableCourse: "Kurs niemozliwy do kupienia",
        AvarageRating: "Średnia ocena szkoleń Jana Kamińskiego",
        Satisfaction: "zadowolenia lub zwrot pieniędzy*",
        Recommends: "Poleca szkolenia Jana Kaminskiego",
      },
      Cart: {
        Cart: "Koszyk",
        PayWithStripe: "Płać za pomocą stripe Checkout",
        FreeCheckout: "Zakończ bezpłatnie",
        CartIsEmpty: "Koszyk jest pusty",
        CartSummary: "Suma koszyka",
        Columns: {
          Product: "Produkt",
          Name: "Nazwa",
          Price: "Cena",
          Remove: "Usuń",
        },
      },
      ContactPage: {
        Ready: "Gotowy żeby zacząć?",
        EmailInfo:
          "Twoj adres e-mail nie bedzie opublikowany. Wymagane pola są zaznaczone *",
        Name: "Twoje imię",
        Email: "Twój adres email",
        Phone: "Twój numer telefonu",
        Subject: "Twój temat",
        Message: "Napisz wiadomość...",
        Send: "Wyślij wiadomość",
        OurAdress: "Nasz adress",
        Contact: "Kontakt",
        Hours: "Godziny",
        InTouch: "Bądź w kontakcie",
        Details: "Szczegóły kontaktu",
        Mobile: "Telefon",
      },
      CourseProgram: {
        TopicAttachment: "Załączniki lekcji",
      },
      CoursesPage: {
        Category: "Kategoria",
        Free: "Darmowe",
        All: "Wszystkie",
        Type: "Typ szkolenia",
        Courses: "Kursy",
      },
      EmailVerifiedPage: {
        Verified: "Twój email jest teraz zweryfikowany",
        EmailText: "Przejdź do",
        LoginPage: "strony logowania",
        Verify: "Weryfikujemy",
      },
      TutorPage: {
        Courses: "Kursy instruktorów",
      },
      Homepage: {
        HeroBtnText: "Jak to działa",
        HeroText:
          "Witaj w platformie elearningowej Orange. Pomożemy Ci znaleźć najlepsze szkolenia",
        CoursesSlider1Title: "Najlepsze szkolenia dla Ciebie",
        CoursesSlider2Title: "Ostatnio dodane",
        AwardedCoursesTitle: "Nauka podstaw miękkich",
        AwardedCoursesBtnText: "Zobacz więcej szkoleń",
        CategoriesTitle: "Zobacz kategorie szkoleń",
        CategoryBtnText: "Zobacz",
      },
      LoginPage: {
        RememberMe: "Zapamietaj mnie",
        Lost: "Zapomniałeś hasła?",
        RPlaeset: "Zresetuj swoje hasło",
        TempLogin:
          "W tym demo możesz użyć następujących danych uwierzytelniających",
        Username: "Nazwa użytkownika",
        TempEmail1: "To demo używa fałszywej usługi e-mail.",
        TempEmail2:
          "Użyj poniższych danych uwierzytelniających, aby sprawdzić, jakie e-maile są wysyłane",
        ForgotSuccess:
          "Wysłaliśmy wiadomość e-mail z prośbą o zresetowanie hasła",
        ForgotSuccessStep2: "Twoje hasło zostało zmienione",
      },
      MyCoursesPage: {
        Finish: "Dokończ rozpoczęty kurs",
        Available: "Dostępne kursy",
        Finished: "Ukończone kursy",
        NoData: "Nie masz kursów.",
      },
      MyProfilePage: {
        InvoiceTitle: "Faktura za zamówienie nr",
        Invoice: "Rachunek",
        OrdersEmpty: "Nie złożyłeś jeszcze żadnych zamówień",
        MyCourses: "Moje szkolenia",
        OrdersHistory: "Historia zakupów",
        Notifications: "Powiadomienia",
        Logout: "Wyloguj",
        FinishedCourses: "ukończonych kursów",
        TotalCertificates: "zdobytych certyfikatów",
        MyProgress: "Moje postępy",
        YourAccount: "Twoje konto",
        EmptyCoursesText:
          " Nie masz jeszcze żadnych kursów, ale dzięki naszej ofercie już dziś możesz zacząć naukę!",
        EmptyCoursesBtnText: " Wybierz kurs dla siebie",
        EmptyCoursesTitle: "Rozpocznij swój rozwój",
        EmptyCertificates:
          "Tu zobaczysz swoje certyfikaty po ukończonych kursach",
        RateCourse: "Oceń kurs",
        ShowMore: "Pokaż więcej",
        MyCertificates: "Moje certyfikaty",
        ALlCourses: "Wszystkie kursy",
        InProgress: "W trakcie",
        Planned: "Zaplanowane",
        Finished: "Ukończone",
        EditData: "Edytuj dane",
      },
      Navbar: {
        MyProfile: "Mój Profil",
        MyCourses: "Moje Kursy",
        MyCertificates: "Moje Certyfikaty",
        MyMattermostChannels: "Moje Kanały Mattermost",
        MyOrders: "Moje zamówienia",
        MyPayments: "Płatności",
        Logout: "Wyloguj",
      },
      OrdersPage: {
        MyOrders: "Moje zamówienia",
        ListEmpty: "Lista zamówień jest pusta!",
        Price: {
          Subtotal: "Suma",
          Tax: "Podatek",
          Total: "Koszt całkowity",
        },
      },
      PaymentsPage: {
        MyPayments: "Moje płatności",
        ListEmpty: "Lista płatności jest pusta!",
        TableCols: {
          OrderId: "ID ZAMÓWIENIA",
          PaymentId: "ID Płatności",
          Created: "Utworzono",
          Price: "Cena",
          Items: "Kursy",
          Status: "Status",
        },
        PaymentStatus: {
          new: "Nowe",
          paid: "Opłacone",
        },
      },
      MattermostChannel: {
        TeamName: "Nazwa zespołu",
        Channels: "Kanały",
        LastPost: "Ostatni post",
        TableCols: {
          DisplayName: "NAZWA",
          Url: "LINK",
        },
      },
      RegisterPage: {
        registrationSuccess:
          "Konto zarejestrowane pomyślnie. Wysłaliśmy link walidacyjny na",
        registrationForLink: "do dokończenia rejestracji.",
        registrationSuccesAdminEnabled:
          "Konto zarejestrowane pomyślnie. Konto musi być włączone przez administratora.",
        FullName: "Imię",
        LastName: "Nazwisko",
        PassInfo:
          'Hasło powinno składać się z co najmniej ośmiu znaków. Aby je wzmocnić, użyj wielkich i małych liter, cyfr i symboli, takich jak ! " ? $ % ^ & )',
      },
      ResetPage: {
        Set: "Ustaw nowe hasło",
        NewPass: "Nowe hasło",
        Reset: "Resetuj",
        Changed: "Hasło zostało zmienione",
      },
      StaticPages: {
        Contact: "Kontakt",
      },
      Custom404Page: {
        NotFound: "Error 404 : Nie znaleziono strony",
        Info: "Strona której szukasz może być usunięta albo zmienione jej nazwę albo jest czasowo niedostępna",
      },
      Notifications: {
        EscolaLmsTopicFinishedTemplateEvent: "Temat zakończony",
        NoNotifications: "Nie masz notyfikacji",
        OrderPaid: "Zamówienie opłacone",
        UserLogged: "Użytkownik zalogowany",
        list: "Lista",
        TopicFinished: "Temat zakończony",
        CourseAssigned: "Kurs przypisany",
        PaymentRegistered: "Płatność zarejestrowana",
        PermissionRoleRemoved: "Uprawnienia usunięte",
        PermissionRoleChanged: "Uprawnienia zmienione",
        CartOrderPaid: "Zamówienie w koszyku opłacone",
        CourseAccessFinished: "Dostęp do kursu zakończony",
        Logout: "Wylogowanie",
        UserRemovedFromGroup: "Użytkownik usunięty z grupy",
        UserAddedToGroup: "Użytkownik dodany do grupy",
        CoursedPublished: "Kurs opublikowany",
        ResetPassword: "Reset hasła",
        CourseAccessStarted: "Kurs aktywowany",
        CartOrderSuccess: "Zamówienie zakończone",
        AccountRegistered: "Konto zarejestrowano",
        ForgotPassword: "Zapomniałeś hasła",
        Login: "Logowanie",
        TopicTypeChanged: "Typ tematu zmieniony",
        AccountDeleted: "Konto usunięte",
        AccountBlocked: "Konto zablokowane",
        CourseFinished: "Kurs ukończony",
        PaymentSuccess: "Płatność zakończona",
        PdfCreated: "PDF stworzony",
        CourseTutorUnassigned: "Instruktor nieprzypisany",
        CourseUnassigned: "Kurs nieprzypisany",
        AccountMustBeEnableByAdmin:
          "Konto oczekuje na zatwierdzenie przez administratora",
        SettingPackageConfigUpdated: "Zaktualizowano konfigurację pakietu",
        CourseTutorAssigned: "Instruktor przypisany",
        AccountConfirmed: "Konto potwierdzone",
        ProductAddedToCart: "Produkt dodany do koszyka",
        ProductRemovedFromCart: "Produkt usunięty z koszyka",
      },
      Header: {
        Register: "Zarejestruj",
        Login: "Zaloguj",
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    supportedLngs: ["pl", "en"],
    fallbackLng: "pl",
    // lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
    },
  });

export default i18n;
