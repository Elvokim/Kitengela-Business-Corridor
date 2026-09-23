# Webinerds PHP Website

PHP version of the Webinerds website.

## XAMPP
1. Copy this folder to `C:/xampp/htdocs/webinerds/`.
2. Start Apache in XAMPP.
3. Open `http://localhost/webinerds/`.

## Structure
- `index.php` — homepage
- `pages/*.php` — inner pages
- `includes/header.php` — shared PHP header/navigation
- `includes/footer.php` — shared footer
- `includes/config.php` — shared configuration
- `css/style.css` — styling
- `js/main.js` — interactions
- `assets/images/` — logo/assets

The contact form includes validation and a demo success state. Connect it to PHPMailer, a database, or another mail service before production use.
